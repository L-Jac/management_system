import dayjs from "dayjs";

const date = dayjs(new Date()).format("YYYY-MM-DD");

const staff_table_1 = [
  {
    date,
    name: "Tom",
    department: "物业部",
    position: "经理",
    age: 30,
    photo: "tom.jpg",
    attendance: "正常"
  },
  {
    date,
    name: "Jack",
    department: "工程部",
    position: "工程师",
    age: 28,
    photo: "jack.jpg",
    attendance: "正常"
  },
  {
    date,
    name: "Dick",
    department: "安保部",
    position: "保安",
    age: 25,
    photo: "dick.jpg",
    attendance: "请假"
  },
  {
    date,
    name: "Harry",
    department: "物业部",
    position: "助理",
    age: 32,
    photo: "harry.jpg",
    attendance: "正常"
  },
  {
    date,
    name: "Sam",
    department: "清洁部",
    position: "清洁工",
    age: 45,
    photo: "sam.jpg",
    attendance: "缺勤"
  },
  {
    date,
    name: "Lucy",
    department: "财务部",
    position: "会计",
    age: 35,
    photo: "lucy.jpg",
    attendance: "正常"
  },
  {
    date,
    name: "Mary",
    department: "工程部",
    position: "技术员",
    age: 31,
    photo: "mary.jpg",
    attendance: "正常"
  },
  {
    date,
    name: "Mike",
    department: "安保部",
    position: "队长",
    age: 38,
    photo: "mike.jpg",
    attendance: "正常"
  }
];

export { staff_table_1 };
