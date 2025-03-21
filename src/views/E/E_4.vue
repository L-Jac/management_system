<!-- 任务评价情况 -->
<script setup lang="ts">
import { onMounted, ref } from "vue";
import * as echarts from "echarts";

// 假设这些数据是从服务器获取的
const taskEvaluationData = ref([
  { value: 4, name: "一般" },
  { value: 7, name: "好" },
  { value: 2, name: "差" },
  { value: 1, name: "极差" }
]);

const customerComments = ref([
  "校园物业的工作人员非常负责，无论是清洁还是维修，都非常及时到位。",
  "他们的工作态度让我印象深刻，即使遇到问题也能积极解决。",
  "学校的物业员工们不仅保持了校园环境的整洁，还在细节上做得很好。",
  "物业员工的服务很贴心，经常帮助我们解决一些小问题，真的很感激。",
  "整体来说，校园物业的工作效率很高，响应也很迅速。",
  "校园物业的员工们对待工作一丝不苟，让人感到很安心。",
  "他们对待每一位师生都很友好，服务态度非常好。",
  "希望学校能够继续保持这样的物业管理水平，为师生提供更好的服务。"
]);

let chart: echarts.ECharts;

onMounted(() => {
  chart = echarts.init(
    document.getElementById("evaluationPieChart") as HTMLDivElement
  );
  chart.setOption({
    title: {
      text: "任务完成评价",
      left: "center",
      textStyle: {
        color: "#333",
        fontSize: 24,
        fontWeight: "bold"
      }
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
      bottom: "10%",
      left: "center",
      textStyle: {
        color: "#666"
      }
    },
    series: [
      {
        name: "评价",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center"
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "40",
            fontWeight: "bold",
            formatter: "{b}: {c}"
          }
        },
        labelLine: {
          show: false
        },
        data: taskEvaluationData.value,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2
        }
      }
    ]
  });
});
</script>

<template>
  <div
    class="container"
    style="display: flex; align-items: center; justify-content: center"
  >
    <!-- 左半部分：饼状图 -->
    <div
      id="evaluationPieChart"
      class="chart"
      style="width: 45%; height: 600px"
    />
    <!-- 右半部分：客户评价 -->
    <div class="comments" style="width: 50%; padding: 20px">
      <h2 class="comments-title">近期评价</h2>
      <ul>
        <li
          v-for="(comment, index) in customerComments"
          :key="index"
          class="comment-item"
        >
          {{ comment }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* 添加一些样式以便更好地展示 */
.container {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.chart {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.comments-title {
  color: #333;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

.comment-item {
  margin-bottom: 10px;
  padding: 15px;
  background-color: #e9ecef;
  border: 1px solid #ddd;
  border-radius: 5px;
  color: #333;
  font-size: 16px;
}
</style>
