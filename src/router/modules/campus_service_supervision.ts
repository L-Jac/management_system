export default {
  path: "/campus_service_supervision",
  redirect: "/campus_service_supervision/statistical_analysis_report",
  meta: {
    icon: "ri:customer-service-fill",
    title: "校园服务监督",
    rank: 3
  },
  children: [
    {
      path: "/campus_service_supervision/statistical_analysis_report",
      name: "服务监督数据",
      component: () =>
        import(
          "@/views/campus_service_supervision/statistical_analysis_report.vue"
        ),
      meta: {
        title: "服务监督数据"
      }
    },
    {
      path: "/campus_service_supervision/complaint_submission_and_response",
      name: "投诉提交回复",
      component: () =>
        import(
          "@/views/campus_service_supervision/complaint_submission_and_response.vue"
        ),
      meta: {
        title: "投诉提交回复"
      }
    },
    {
      path: "/campus_service_supervision/frequently_asked_questions",
      name: "常见问题解答",
      component: () =>
        import(
          "@/views/campus_service_supervision/frequently_asked_questions.vue"
        ),
      meta: {
        title: "常见问题解答"
      }
    }
  ]
};
