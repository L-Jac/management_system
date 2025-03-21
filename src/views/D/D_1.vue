<!-- 在线投诉 -->
<script setup lang="ts">
import { ref } from "vue";
import { tableData } from "./data";
// https://plus-pro-components.com/components/dialog-form.html
import "plus-pro-components/es/components/dialog-form/style/css";
import {
  type PlusColumn,
  type FieldValues,
  PlusDialogForm
} from "plus-pro-components";

defineOptions({
  name: "校园服务投诉"
});

const columns: PlusColumn[] = [
  {
    label: "投诉类型",
    width: 120,
    prop: "status",
    valueType: "select",
    options: [
      {
        label: "生活服务",
        value: "0",
        color: "red"
      },
      {
        label: "行政服务",
        value: "1",
        color: "blue"
      },
      {
        label: "后勤服务",
        value: "2",
        color: "yellow"
      },
      {
        label: "教学服务",
        value: "3",
        color: "red"
      }
    ]
  },
  {
    label: "是否匿名",
    width: 100,
    prop: "switch",
    valueType: "switch"
  },

  {
    label: "时间",
    prop: "time",
    valueType: "date-picker"
  },
  {
    label: "区域",
    prop: "city",
    valueType: "cascader",
    options: [
      {
        value: "0",
        label: "食堂",
        children: [
          {
            value: "0-0",
            label: "西苑",
            children: [
              {
                value: "0-0-0",
                label: "一楼"
              },
              {
                value: "0-0-1",
                label: "二楼"
              },
              {
                value: "0-0-2",
                label: "三楼"
              }
            ]
          }
        ]
      },
      {
        value: "1",
        label: "宿舍",
        children: [
          {
            value: "1-0",
            label: "紫荆",
            children: [
              {
                value: "1-0-0",
                label: "紫荆1#"
              },
              {
                value: "1-0-1",
                label: "紫荆2#"
              },
              {
                value: "1-0-2",
                label: "紫荆3#"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    label: "说明",
    prop: "desc",
    valueType: "textarea",
    fieldProps: {
      maxlength: 300,
      showWordLimit: true,
      autosize: { minRows: 2, maxRows: 4 }
    }
  },
  {
    label: "姓名",
    width: 120,
    prop: "name",
    valueType: "copy",
    tooltip: "若要匿名可不填"
  },
  {
    label: "学号",
    width: 120,
    prop: "name",
    valueType: "copy"
  },
  {
    label: "联系方式",
    width: 120,
    prop: "name",
    valueType: "copy"
  }
];

const visible = ref(false);
const values = ref<FieldValues>({});

const handleOpen = () => {
  visible.value = true;
};

const column2: TableColumnList = [
  {
    label: "日期",
    prop: "date"
  },
  {
    label: "状态",
    prop: "status"
  },
  {
    label: "投诉描述",
    prop: "description"
  }
];
</script>

<template>
  <div class="page-container">
    <el-card shadow="never" class="main-card">
      <template #header>
        <div class="card-header">
          <h1 class="page-title">校园服务投诉</h1>
          <el-button
            type="primary"
            size="large"
            icon="Plus"
            @click="handleOpen"
          >
            新增服务投诉
          </el-button>
        </div>
      </template>

      <!-- 弹窗表单 -->
      <PlusDialogForm
        v-model:visible="visible"
        v-model="values"
        :form="{ columns }"
        lable="新增服务投诉"
      />
      <!-- 历史投诉记录 -->
      <div class="table-section">
        <h2 class="table-title">历史投诉记录</h2>
        <pure-table
          :data="tableData"
          :columns="column2"
          border
          stripe
          class="custom-table"
        >
          <template #empty>
            <el-empty description="暂无投诉记录" />
          </template>
        </pure-table>
        <el-pagination
          class="pagination"
          :page-size="10"
          :pager-count="5"
          layout="total, prev, pager, next"
          :total="tableData.length"
        />
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.page-container {
  padding: 20px;
  background-color: #f5f7fa;
}

.main-card {
  border-radius: 12px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}

.page-title {
  color: #303133;
  font-size: 24px;
  margin: 0;
}

.table-section {
  margin-top: 24px;
}

.table-title {
  color: #606266;
  font-size: 18px;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #ebeef5;
}

.custom-table {
  margin-top: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.pagination {
  margin-top: 20px;
  justify-content: flex-end;
}

:deep(.el-table__header th) {
  background-color: #f8f9fa;
  font-weight: 600;
}
</style>
