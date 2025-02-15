export default {
  path: "/property_staff_management",
  redirect: "/property_staff_management/statistical_analysis_report",
  meta: {
    icon: "ep:user-filled",
    title: "物业员工管理",
    rank: 1
  },
  children: [
    {
      path: "/property_staff_management/statistical_analysis_report",
      name: "物业员工数据",
      component: () =>
        import(
          "@/views/property_staff_management/statistical_analysis_report.vue"
        ),
      meta: {
        title: "物业员工数据"
      }
    },
    {
      path: "/property_staff_management/staff_information_management",
      name: "人员信息管理",
      component: () =>
        import(
          "@/views/property_staff_management/staff_information_management.vue"
        ),
      meta: {
        title: "人员信息管理"
      }
    },
    {
      path: "/property_staff_management/staff_attendance_management",
      name: "人员考勤管理",
      component: () =>
        import(
          "@/views/property_staff_management/staff_attendance_management.vue"
        ),
      meta: {
        title: "人员考勤管理"
      }
    },
    {
      path: "/property_staff_management/security_and_permissions_management",
      name: "安全权限管理",
      component: () =>
        import(
          "@/views/property_staff_management/security_and_permissions_management.vue"
        ),
      meta: {
        title: "安全权限管理"
      }
    }
  ]
};
