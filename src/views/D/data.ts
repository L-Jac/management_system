import dayjs from "dayjs";
import { clone } from "@pureadmin/utils";

const date = dayjs(new Date()).format("YYYY-MM-DD");

const tableData = [
  {
    date,
    status: "已处理",
    description: "食堂的饭菜质量最近下降了很多，希望可以改善。"
  },
  {
    date,
    status: "未处理",
    description: "图书馆的空调经常坏，导致夏天非常热。"
  },
  {
    date,
    status: "进行中",
    description: "学校巴士的发车时间经常不准时，影响了大家的上课。"
  },
  {
    date,
    status: "已处理",
    description: "教学楼的卫生间需要进行清洁和维护，目前很脏。"
  },
  {
    date,
    status: "未处理",
    description: "宿舍楼的网络速度慢，影响了我们的学习和生活。"
  },
  {
    date,
    status: "进行中",
    description: "校园内的垃圾没有及时清理，环境很脏乱。"
  },
  {
    date,
    status: "已处理",
    description: "教室的投影设备经常出现故障，影响了老师的教学。"
  },
  {
    date,
    status: "未处理",
    description: "体育设施老化严重，存在安全隐患。"
  }
];

const cloneData = clone(tableData, true);

const tableDataMore = cloneData.map(item =>
  Object.assign(item, {
    state: "California",
    city: "Los Angeles",
    "post-code": "CA 90036"
  })
);

const tableDataImage = cloneData.map((item, index) =>
  Object.assign(item, {
    image: `https://pure-admin.github.io/pure-admin-table/imgs/${index + 1}.jpg`
  })
);

const tableDataSortable = cloneData.map((item, index) =>
  Object.assign(item, {
    date: `${dayjs(new Date()).format("YYYY-MM")}-${index + 1}`
  })
);

const tableDataExpand = [
  {
    id: 1,
    question: "如何申请奖学金？",
    answer:
      "申请奖学金通常需要提交成绩单、推荐信和个人陈述，具体要求可以在学校官网查询。"
  },
  {
    id: 2,
    question: "如何选择适合自己的专业？",
    answer: "可以根据个人兴趣、职业规划以及专业的就业前景来综合考虑。"
  },
  {
    id: 3,
    question: "如何提高学习效率？",
    answer:
      "制定合理的学习计划、使用番茄工作法以及保持良好的作息习惯都能有效提高学习效率。"
  },
  {
    id: 4,
    question: "如何准备期末考试？",
    answer: "提前复习、整理笔记、做历年真题以及参加复习班都是有效的备考方法。"
  },
  {
    id: 5,
    question: "如何平衡学习与社团活动？",
    answer:
      "合理规划时间、优先处理重要任务以及学会拒绝不必要的活动可以帮助平衡两者。"
  },
  {
    id: 6,
    question: "如何申请出国交换项目？",
    answer:
      "需要提交成绩单、语言成绩（如托福或雅思）以及个人陈述，具体流程可以咨询国际交流处。"
  },
  {
    id: 7,
    question: "如何找到实习机会？",
    answer: "可以通过学校的就业指导中心、招聘网站以及校友推荐来寻找实习机会。"
  },
  {
    id: 8,
    question: "如何写一篇优秀的论文？",
    answer:
      "确定研究主题、查阅相关文献、制定论文结构以及多次修改都是写好论文的关键。"
  },
  {
    id: 9,
    question: "如何应对考试焦虑？",
    answer: "深呼吸、积极自我暗示以及提前模拟考试场景都可以缓解焦虑。"
  },
  {
    id: 10,
    question: "如何申请研究生？",
    answer:
      "需要准备成绩单、推荐信、个人陈述以及标准化考试成绩（如GRE或GMAT）。"
  },
  {
    id: 11,
    question: "如何提高英语口语能力？",
    answer: "多与母语者交流、观看英文电影以及参加英语角都是有效的方法。"
  },
  {
    id: 12,
    question: "如何管理个人财务？",
    answer: "制定预算、记录支出以及避免不必要的消费是管理财务的基础。"
  },
  {
    id: 13,
    question: "如何申请校内住宿？",
    answer: "可以通过学校官网提交住宿申请，通常需要提供个人信息和住宿偏好。"
  },
  {
    id: 14,
    question: "如何选择选修课？",
    answer: "可以根据个人兴趣、课程难度以及教授的评分来选择合适的选修课。"
  },
  {
    id: 15,
    question: "如何应对学术压力？",
    answer: "与导师沟通、寻求心理辅导以及保持健康的生活方式都可以帮助缓解压力。"
  },
  {
    id: 16,
    question: "如何参加科研项目？",
    answer: "可以与教授沟通、关注学校的科研项目公告以及提交个人简历和申请材料。"
  },
  {
    id: 17,
    question: "如何提高写作能力？",
    answer: "多读多写、参加写作工作坊以及请教导师都是提高写作能力的有效途径。"
  },
  {
    id: 18,
    question: "如何申请校园兼职？",
    answer: "可以通过学校的就业指导中心、校内公告板以及教授推荐来寻找兼职机会。"
  },
  {
    id: 19,
    question: "如何参加学术会议？",
    answer: "可以提交论文摘要、关注会议通知以及申请学校的资助来参加学术会议。"
  },
  {
    id: 20,
    question: "如何保持健康的生活方式？",
    answer: "均衡饮食、定期锻炼以及保持良好的作息习惯都是保持健康的关键。"
  }
];

export {
  tableData,
  tableDataMore,
  tableDataImage,
  tableDataExpand,
  tableDataSortable
};
