export default {
  path: "/D",
  redirect: "/D/D_1",
  meta: {
    icon: "ri:list-check-3",
    title: "普通师生",
    rank: 2
  },
  children: [
    {
      path: "/D/D_1",
      name: "D_1",
      component: () => import("@/views/D/D_1.vue"),
      meta: {
        title: "在线投诉"
      }
    },
    {
      path: "/D/D_2",
      name: "D_2",
      component: () => import("@/views/D/D_2.vue"),
      meta: {
        title: "任务评价"
      }
    },
    {
      path: "/D/D_3",
      name: "D_3",
      component: () => import("@/views/D/D_3.vue"),
      meta: {
        title: "满意度调查"
      }
    },
    {
      path: "/D/D_4",
      name: "D_4",
      component: () => import("@/views/D/D_4.vue"),
      meta: {
        title: "常见问题解答"
      }
    }
  ]
};
