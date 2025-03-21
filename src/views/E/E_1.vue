<!-- 人脸考勤页面 -->
<script setup lang="ts">
import { ref } from "vue";
import ListDialogForm from "./components/run.vue";
const handleLocationAttendance = () => {
  // 处理位置考勤的逻辑
  console.log("位置考勤");
};

const handleFaceAttendance = () => {
  // 处理人脸考勤的逻辑
  console.log("人脸考勤");
};

// 请假表单相关逻辑
const showLeaveForm = ref(false);
const leaveForm = ref({
  startDate: "",
  endDate: "",
  reason: ""
});

const handleApplyForLeave = () => {
  // 显示请假表单
  showLeaveForm.value = true;
};

const submitLeaveForm = () => {
  // 处理请假表单提交的逻辑
  console.log("请假表单提交:", leaveForm.value);
  // 可以在这里添加表单提交后的处理逻辑，例如发送请求到后端
};
</script>

<template>
  <div class="attendance-page">
    <h1>物业员工考勤系统</h1>
    <div class="map-circle">
      <!-- 大圆框，里面显示地图图片 -->
      <div class="map-image" />
    </div>
    <div class="button-group">
      <button @click="handleLocationAttendance">位置考勤</button>
      <button @click="handleFaceAttendance">人脸考勤</button>
      <button @click="handleApplyForLeave">请假</button>
    </div>

    <!-- 使用组件显示请假表单 -->
    <ListDialogForm
      :visible="showLeaveForm"
      :data="leaveForm"
      @update:visible="showLeaveForm = $event"
    />
  </div>
</template>

<style scoped>
.attendance-page {
  text-align: center;
  padding: 100px; /* 增加页面内边距 */
}

.map-circle {
  display: flex;
  justify-content: center;
  margin-bottom: 40px; /* 增加地图框底部间距 */
}

.map-image {
  width: 300px; /* 增加圆形框宽度 */
  height: 300px; /* 增加圆形框高度 */
  border-radius: 50%;
  background-image: url("./pic.png");
  background-size: cover;
  background-position: center;
  border: 2px solid #ccc;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 40px; /* 增加按钮间距 */
  margin-bottom: 40px; /* 增加按钮组底部间距 */
}

button {
  padding: 20px 40px; /* 增加按钮内边距 */
  font-size: 20px; /* 增加按钮字体大小 */
  cursor: pointer;
}

.leave-form {
  margin-top: 40px; /* 增加请假表单顶部间距 */
  padding: 40px; /* 增加请假表单内边距 */
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 600px; /* 增加请假表单最大宽度 */
  margin: 0 auto;
}

.form-group {
  margin-bottom: 30px; /* 增加表单项间距 */
}

label {
  display: block;
  margin-bottom: 10px; /* 增加标签底部间距 */
}

input[type="date"],
textarea {
  width: 100%;
  padding: 16px; /* 增加输入框内边距 */
  font-size: 16px; /* 增加输入框字体大小 */
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  resize: vertical;
  height: 150px; /* 增加文本区域高度 */
}
</style>
