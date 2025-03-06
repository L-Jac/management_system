<!-- 在线投诉 -->
<script setup lang="ts">
import { ref } from "vue";
import {
  ElForm,
  ElFormItem,
  ElInput,
  ElSelect,
  ElOption,
  ElButton,
  ElDatePicker,
  ElUpload,
  ElMessage
} from "element-plus";
import { UploadProps } from "element-plus";

const form = ref({
  complaintName: "",
  complaintTarget: "",
  complaintContent: "",
  complaintTime: "",
  attachment: []
});

const handleFileChange = (uploadFile: any, uploadFiles: any) => {
  form.value.attachment = uploadFiles.map(file => file.name);
};

const onSubmit = () => {
  console.log("提交的表单数据：", form.value);
  // 这里可以添加提交表单到服务器的逻辑
  ElMessage.success("投诉已提交");
};
const uploadProps: UploadProps = {};

// 如果某些属性是可选的，并且你不需要它们，可以在初始化时不添加
// 例如，如果 'disabled' 是一个可选属性，并且你不需要禁用上传功能，就不需要设置它
</script>

<template>
  <div>
    <h2>在线投诉</h2>
    <el-form :model="form" label-width="120px">
      <el-form-item label="投诉人信息">
        <el-input v-model="form.complaintName" placeholder="请输入投诉人姓名" />
      </el-form-item>
      <el-form-item label="投诉对象">
        <el-input v-model="form.complaintTarget" placeholder="请输入投诉对象" />
      </el-form-item>
      <el-form-item label="投诉内容">
        <el-input
          v-model="form.complaintContent"
          type="textarea"
          placeholder="请输入投诉内容"
        />
      </el-form-item>
      <el-form-item label="投诉时间">
        <el-date-picker
          v-model="form.complaintTime"
          type="datetime"
          placeholder="选择投诉时间"
        />
      </el-form-item>
      <el-form-item label="附件上传">
        <el-upload v-bind="uploadProps">
          <el-button type="primary">点击上传</el-button>
        </el-upload>
        <div v-if="form.attachment.length">
          已上传文件：{{ form.attachment.join(", ") }}
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
