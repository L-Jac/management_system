export default {
  path: "/task_management_module",
  redirect: "/task_management_module/statistical_analysis_report",
  meta: {
    icon: "ri:list-check-3",
    title: "任务管理模块",
    rank: 4
  },
  children: [
    {
      path: "/task_management_module/statistical_analysis_report",
      name: "任务管理数据",
      component: () =>
        import(
          "@/views/task_management_module/statistical_analysis_report.vue"
        ),
      meta: {
        title: "任务管理数据"
      }
    },
    {
      path: "/task_management_module/task_publishing_management",
      name: "任务发布管理",
      component: () =>
        import("@/views/task_management_module/task_publishing_management.vue"),
      meta: {
        title: "任务发布管理"
      }
    },
    {
      path: "/task_management_module/task_completion_feedback",
      name: "任务完成反馈",
      component: () =>
        import("@/views/task_management_module/task_completion_feedback.vue"),
      meta: {
        title: "任务完成反馈"
      }
    }
  ]
};
