export default {
  path: "/facility_and_equipment_management",
  redirect: "/facility_and_equipment_management/statistical_analysis_report",
  meta: {
    icon: "ri:instance-fill",
    title: "设施设备管理",
    rank: 2
  },
  children: [
    {
      path: "/facility_and_equipment_management/statistical_analysis_report",
      name: "数据分析报表",
      component: () =>
        import(
          "@/views/facility_and_equipment_management/statistical_analysis_report.vue"
        ),
      meta: {
        title: "数据分析报表"
      }
    },
    {
      path: "/facility_and_equipment_management/equipment_management",
      name: "设备信息管理",
      component: () =>
        import(
          "@/views/facility_and_equipment_management/equipment_management.vue"
        ),
      meta: {
        title: "设备信息管理"
      }
    },
    {
      path: "/facility_and_equipment_management/task_publishing",
      name: "相关任务发布",
      component: () =>
        import("@/views/facility_and_equipment_management/task_publishing.vue"),
      meta: {
        title: "相关任务发布"
      }
    }
  ]
};
