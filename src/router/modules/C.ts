export default {
  path: "/C",
  redirect: "/C/C_1",
  meta: {
    icon: "ri:list-check-3",
    title: "校园服务监督",
    rank: 3
  },
  children: [
    {
      path: "/C/C_1",
      name: "统计分析图表",
      component: () => import("@/views/C/C_1.vue"),
      meta: {
        title: "统计分析图表"
      }
    },
    {
      path: "/C/C_2",
      name: "任务管理",
      component: () => import("@/views/C/C_2.vue"),
      meta: {
        title: "任务管理"
      }
    },
    {
      path: "/C/C_3",
      name: "考核",
      component: () => import("@/views/C/C_3.vue"),
      meta: {
        title: "考核"
      }
    },
    {
      path: "/C/C_4",
      name: "投诉反馈",
      component: () => import("@/views/C/C_4.vue"),
      meta: {
        title: "投诉反馈"
      }
    },
    {
      path: "/C/C_5",
      name: "服务设置",
      component: () => import("@/views/C/C_5.vue"),
      meta: {
        title: "服务设置"
      }
    },
    {
      path: "/C/C_6",
      name: "通用设置",
      component: () => import("@/views/C/C_6.vue"),
      meta: {
        title: "通用设置"
      }
    },
    {
      path: "/C/C_7",
      name: "系统设置",
      component: () => import("@/views/C/C_7.vue"),
      meta: {
        title: "系统设置"
      }
    },
    {
      path: "/C/C_8",
      name: "年度满意度调查",
      component: () => import("@/views/C/C_8.vue"),
      meta: {
        title: "年度满意度调查"
      }
    }
  ]
};
