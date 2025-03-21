<template>
  <div>
    <h1>个人考勤状况</h1>
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import zhCnLocale from "@fullcalendar/core/locales/zh-cn";

const attendanceStatus = ref<Record<string, string>>({
  "2025-02-10": "出勤",
  "2025-02-11": "迟到",
  "2025-02-12": "出勤",
  "2025-02-13": "请假",
  "2025-02-14": "出勤",
  "2025-02-15": "出勤",
  "2025-02-16": "早退",
  "2025-02-17": "缺勤",
  "2025-02-18": "出勤",
  "2025-02-19": "出勤",
  "2025-02-20": "出勤",
  "2025-02-21": "异常",
  "2025-02-22": "出勤",
  "2025-02-23": "出勤",
  "2025-02-24": "请假",
  "2025-02-25": "出勤",
  "2025-02-26": "出勤",
  "2025-02-27": "出勤",
  "2025-02-28": "出勤",
  "2025-03-01": "出勤",
  "2025-03-02": "出勤",
  "2025-03-03": "迟到",
  "2025-03-04": "出勤",
  "2025-03-05": "请假",
  "2025-03-06": "早退",
  "2025-03-07": "出勤",
  "2025-03-08": "缺勤",
  "2025-03-09": "出勤",
  "2025-03-10": "异常",
  "2025-03-11": "出勤",
  "2025-03-12": "出勤",
  "2025-03-13": "出勤",
  "2025-03-14": "出勤",
  "2025-03-15": "迟到",
  "2025-03-16": "出勤",
  "2025-03-17": "请假",
  "2025-03-18": "早退",
  "2025-03-19": "出勤",
  "2025-03-20": "缺勤",
  "2025-03-21": "出勤"
});

const calendarOptions = ref({
  plugins: [dayGridPlugin],
  initialView: "dayGridMonth",
  events: Object.keys(attendanceStatus.value).map(date => ({
    title: attendanceStatus.value[date],
    date: date,
    color: getEventColor(attendanceStatus.value[date])
  })),
  locales: [zhCnLocale], // 添加这一行来启用中文本地化
  locale: "zh-cn" // 添加这一行来设置默认语言为中文
});

function getEventColor(status: string): string {
  switch (status) {
    case "出勤":
      return "#42b983";
    case "请假":
      return "#ff9900";
    case "缺勤":
      return "#ff0000";
    case "迟到":
      return "#ff6347";
    case "早退":
      return "#00ced1";
    case "异常":
      return "#ff4500";
    default:
      return "#000000";
  }
}
</script>
