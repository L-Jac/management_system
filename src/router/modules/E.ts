export default {
  path: "/E",
  redirect: "/E/E_1",
  meta: {
    icon: "ri:list-check-3",
    title: "物业员工",
    rank: 1
  },
  children: [
    {
      path: "/E/E_1",
      name: "E_1",
      component: () => import("@/views/E/E_1.vue"),
      meta: {
        title: "在线考勤操作"
      }
    },
    {
      path: "/E/E_2",
      name: "E_2",
      component: () => import("@/views/E/E_2.vue"),
      meta: {
        title: "个人考勤状况"
      }
    },
    {
      path: "/E/E_3",
      name: "E_3",
      component: () => import("@/views/E/E_3.vue"),
      meta: {
        title: "接收任务和完成情况"
      }
    },
    {
      path: "/E/E_4",
      name: "E_4",
      component: () => import("@/views/E/E_4.vue"),
      meta: {
        title: "评价情况"
      }
    }
  ]
};
