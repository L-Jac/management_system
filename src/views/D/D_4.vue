<script setup lang="ts">
import { ref, computed } from "vue";
import { tableDataExpand } from "./data";

const parentBorder = ref(false);
const childBorder = ref(false);
const searchValue = ref("");
const currentPage = ref(1); // 当前页码
const pageSize = 10; // 每页显示的数据量

const columns: TableColumnList = [
  {
    type: "expand",
    slot: "expand"
  },
  {
    label: "常见问题",
    prop: "question"
  }
];

const childColumns: TableColumnList = [
  {
    label: "Name",
    prop: "name"
  }
];

// 计算当前页显示的数据
const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return tableDataExpand.slice(start, end);
});
</script>

<template>
  <div class="page-container">
    <el-card shadow="never" class="main-card">
      <template #header>
        <div class="card-header">
          <h1 class="page-title">常见问题解答</h1>
        </div>
        <el-input
          v-model="searchValue"
          style="width: 300px"
          placeholder="请输入问题名称"
          clearable
        >
          <template #suffix>
            <el-icon class="el-input__icon">
              <IconifyIconOffline
                v-show="searchValue.length === 0"
                icon="ri:search-line"
              />
            </el-icon>
          </template>
        </el-input>
      </template>
      <div class="table-section">
        <h2 class="table-title">历史投诉记录</h2>
        <pure-table
          :data="paginatedData"
          :columns="columns"
          :border="parentBorder"
        >
          <template #expand="{ row }">
            <div class="m-4">
              <p class="mb-2">回答: {{ row.answer }}</p>
            </div>
          </template>
        </pure-table>
        <el-pagination
          v-model:current-page="currentPage"
          class="pagination"
          :page-size="pageSize"
          :pager-count="5"
          layout="total, prev, pager, next"
          :total="tableDataExpand.length"
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
