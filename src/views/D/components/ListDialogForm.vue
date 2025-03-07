<script setup lang="ts">
import { ref, watch } from "vue";
import { message } from "@/utils/message";
import { FormInstance } from "element-plus";

const SELECT_OPTIONS = [
  { label: "宿舍", value: 1 },
  { label: "食堂", value: 2 },
  { label: "超市", value: 3 },
  { label: "设施", value: 4 },
  { label: "操场", value: 5 }
];

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  data: {
    type: Object,
    default: () => {
      return {};
    }
  }
});

const ruleFormRef = ref<FormInstance>();

const formVisible = ref(false);
const formData = ref(props.data);
const textareaValue = ref("");

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(valid => {
    if (valid) {
      message("提交成功", { type: "success" });
      formVisible.value = false;
      resetForm(formEl);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

const closeDialog = () => {
  formVisible.value = false;
  resetForm(ruleFormRef.value);
};

const emit = defineEmits(["update:visible"]);
watch(
  () => formVisible.value,
  val => {
    emit("update:visible", val);
  }
);

watch(
  () => props.visible,
  val => {
    formVisible.value = val;
  }
);

watch(
  () => props.data,
  val => {
    formData.value = val;
  }
);

const rules = {
  name: [
    {
      required: true,
      message: "请输入任务名称",
      trigger: "blur"
    }
  ]
};
</script>

<template>
  <el-dialog
    v-model="formVisible"
    title="任务评价"
    :width="680"
    draggable
    :before-close="closeDialog"
  >
    <!-- 评价表单内容 -->
    <el-form
      ref="ruleFormRef"
      :model="formData"
      :rules="rules"
      label-width="100px"
    >
      <el-form-item label="任务名称" prop="name">
        <el-input
          v-model="formData.name"
          :style="{ width: '480px' }"
          placeholder="请输入任务名称"
          disabled
        />
      </el-form-item>
      <el-form-item label="任务完成度" prop="completion">
        <el-rate
          v-model="formData.completion"
          :max="5"
          show-text
          :texts="['很差', '较差', '一般', '较好', '很好']"
        />
      </el-form-item>
      <el-form-item label="任务质量" prop="quality">
        <el-rate
          v-model="formData.quality"
          :max="5"
          show-text
          :texts="['很低', '较低', '一般', '较高', '很高']"
        />
      </el-form-item>
      <el-form-item label="任务时效" prop="timeliness">
        <el-rate
          v-model="formData.timeliness"
          :max="5"
          show-text
          :texts="['很慢', '较慢', '一般', '较快', '很快']"
        />
      </el-form-item>
      <el-form-item label="综合评价" prop="overall">
        <el-input
          v-model="formData.overall"
          type="textarea"
          :style="{ width: '480px' }"
          placeholder="请输入综合评价"
        />
      </el-form-item>
    </el-form>

    <template #footer>
      <el-button @click="closeDialog">取消</el-button>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        确定
      </el-button>
    </template>
  </el-dialog>
</template>
