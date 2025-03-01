export default {
  path: "/A",
  redirect: "/A/A_1",
  meta: {
    icon: "ep:user-filled",
    title: "物业员工管理",
    rank: 1
  },
  children: [
    {
      path: "/A/A_1",
      name: "物业员工数据",
      component: () => import("@/views/A/A_1.vue"),
      meta: {
        title: "物业员工数据"
      }
    },
    {
      path: "/A/A_2",
      name: "人员信息管理",
      component: () => import("@/views/A/A_2.vue"),
      meta: {
        title: "人员信息管理"
      }
    },
    {
      path: "/A/A_3",
      name: "人员考勤管理",
      component: () => import("@/views/A/A_3.vue"),
      meta: {
        title: "人员考勤管理"
      }
    },
    {
      path: "/A/A_4",
      name: "安全权限管理",
      component: () => import("@/views/A/A_4.vue"),
      meta: {
        title: "安全权限管理"
      }
    }
  ]
};
