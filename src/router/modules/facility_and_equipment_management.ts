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
      name: "设施设备数据",
      component: () =>
        import(
          "@/views/facility_and_equipment_management/statistical_analysis_report.vue"
        ),
      meta: {
        title: "设施设备数据"
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
    }
  ]
};
