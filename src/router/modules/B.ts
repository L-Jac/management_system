export default {
  path: "/B",
  redirect: "/B/B_1",
  meta: {
    // icon: "ri:instance-fill",
    // title: "设施设备管理",
    rank: 12
  },
  children: [
    {
      path: "/B/B_1",
      name: "主要房屋基础数据",
      component: () => import("@/views/B/B_1.vue"),
      meta: {
        title: "主要房屋基础数据"
      }
    },
    {
      path: "/B/B_2",
      name: "电梯",
      component: () => import("@/views/B/B_2.vue"),
      meta: {
        title: "电梯"
      }
    },
    {
      path: "/B/B_3",
      name: "中央空调系统",
      component: () => import("@/views/B/B_3.vue"),
      meta: {
        title: "中央空调系统"
      }
    },
    {
      path: "/B/B_4",
      name: "动力给排水系统",
      component: () => import("@/views/B/B_4.vue"),
      meta: {
        title: "动力给排水系统"
      }
    },
    {
      path: "/B/B_5",
      name: "化粪池及隔油池",
      component: () => import("@/views/B/B_5.vue"),
      meta: {
        title: "化粪池及隔油池"
      }
    },
    {
      path: "/B/B_6",
      name: "消防设施设备",
      component: () => import("@/views/B/B_6.vue"),
      meta: {
        title: "消防设施设备"
      }
    },
    {
      path: "/B/B_7",
      name: "冷却塔",
      component: () => import("@/views/B/B_7.vue"),
      meta: {
        title: "冷却塔"
      }
    },
    {
      path: "/B/B_8",
      name: "通风系统",
      component: () => import("@/views/B/B_8.vue"),
      meta: {
        title: "通风系统"
      }
    },
    {
      path: "/B/B_9",
      name: "配电设备",
      component: () => import("@/views/B/B_9.vue"),
      meta: {
        title: "配电设备"
      }
    }
  ]
};
