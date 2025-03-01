<!-- 人员信息管理 -->
<script setup lang="ts">
import { ref, computed } from "vue";
import { staff_table_1 } from "./data";

const tableRef = ref();

const multipleSelection = ref([]);
const toggleSelection = (rows?: any) => {
  const { toggleRowSelection, clearSelection } = tableRef.value.getTableRef();
  if (rows) {
    rows.forEach(row => {
      toggleRowSelection(row, undefined);
    });
  } else {
    clearSelection();
  }
};

const handleSelectionChange = val => {
  multipleSelection.value = val;
};

const searchKeyword = ref("");
const searchCategory = ref("name"); // 默认搜索类别为姓名

const filteredStaff = computed(() => {
  if (!searchKeyword.value) {
    return staff_table_1;
  }
  return staff_table_1.filter(staff =>
    String(staff[searchCategory.value])
      .toLowerCase()
      .includes(searchKeyword.value.toLowerCase())
  );
});

const columns: TableColumnList = [
  {
    type: "selection",
    align: "left"
  },
  {
    label: "考勤状态",
    prop: "attendance",
    sortable: true
  },
  {
    label: "照片",
    prop: "photo",
    sortable: true
    // renderer: (row) => <img src={row.photo} alt="人员照片" style="width: 50px; height: 50px;" />
  },
  {
    label: "姓名",
    prop: "name",
    sortable: true
  },
  {
    label: "部门",
    prop: "department",
    sortable: true
  },
  {
    label: "岗位",
    prop: "position",
    sortable: true
  },
  {
    label: "年龄",
    prop: "age",
    sortable: true
  }
];

// 新增员工的方法
const addNewStaff = () => {
  // 这里可以添加打开模态框或者其他逻辑，以便输入新员工的信息
  console.log("新增员工");
};
</script>

<template>
  <div>
    <div style="display: flex; align-items: center">
      <el-select
        v-model="searchCategory"
        placeholder="选择搜索类别"
        style="width: 150px; margin-right: 10px"
      >
        <el-option label="姓名" value="name" />
        <el-option label="部门" value="department" />
        <el-option label="岗位" value="position" />
        <el-option label="年龄" value="age" />
      </el-select>
      <el-input
        v-model="searchKeyword"
        placeholder="请输入关键词进行搜索"
        style="width: 600px; margin-bottom: 0"
      />
    </div>
    <div style="margin-top: 20px; margin-bottom: 20px">
      <el-button @click="addNewStaff">新增员工</el-button>
    </div>
    <pure-table
      :data="filteredStaff"
      :columns="columns"
      @selection-change="handleSelectionChange"
    />
  </div>
</template>
