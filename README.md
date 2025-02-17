# 华侨大学后勤管理系统Web前端功能设计

(huaqiao_university_logistics_management_system)

## 一、物业人员管理 (property_staff_management)

### （一）统计分析报表 (statistical_analysis_report)

- **人员考勤图表 (staff_attendance_chart)**
  - 生成人员统计图表，包括今日员工出勤率，近n日员工出勤率，部门员工出勤率等。

### （二）人员信息管理 (staff_information_management)

- **人员信息报表 (staff_information_report)**

  - 人员基本信息，包括姓名，部门，岗位，年龄，照片，考勤状态等基本信息。

- **信息修改查找 (information_modification_and_search)**
  - 添加员工的姓名，部门，岗位，年龄，照片等基本信息，可从Excel表格导入，查找包括通过姓名，部门，岗位，年龄查找，删改员工信息。

### （三）人员考勤管理 (staff_attendance_management)

- **人员考勤报表 (staff_attendance_report)**

  - 人员出勤状况信息，包括姓名，今日出勤状况，出勤率，请假次数，缺勤次数，异常次数。

- **信息增删改查 (information_crud)**

  - 可从Excel表格导入考勤信息，增添单条新信息，修改单条信息。

- **考勤规则定义 (attendance_rule_definition)**
  - 自定义各部门日常考勤规则，设置临时考勤规则用于节假日。

### （四）安全权限管理 (security_and_permissions_management)

- **系统权限分配 (system_permissions_allocation)**

  - 根据员工的岗位和职责，分配相应的系统权限，确保员工只能访问和操作与其工作相关的功能模块。

- **员工密码管理 (staff_password_management)**
  - 管理员工的系统登录密码，提供密码修改、密码重置等功能，保障系统的安全性。

---

## 二、设施设备管理 (facility_and_equipment_management)

### （一）统计分析报表 (statistical_analysis_report)

- **设备统计报表 (equipment_statistics_report)**
  - 生成设备统计报表，展示设备的总数、各类型设备的数量、设备的使用率、设备的完好率等。

### （二）校内设备管理 (equipment_management)

- **设备信息报表 (equipment_information_report)**
  - 记录设备的基本信息，包括设备的采购时间、资产编号代码、放置地点，当前状态等信息。
- **设备信息改查 (equipment_information_management)**
  - 可通过Excel表格导入，新建表单导入，设备改查根据地点分类，校区，楼栋，设备状态等分类。

---

## 三、校园服务监督 (campus_service_supervision)

### （一）统计分析报表 (statistical_analysis_report)

- **投诉统计报表 (complaint_statistics_report)**

  - **管理者 (manager)**：生成投诉统计报表，分析投诉的数量、类型、分布、处理时效等。
  - **使用者 (user)**：了解自己过往及当前提交的投诉的处理进度和结果。

- **未解决投诉统计报表 (unresolved_complaints_report)**
  - **管理者 (manager)**：生成未解决或回复的投诉统计报表，可指派相关人员进行回复。

### （二）投诉提交回复 (complaint_submission_and_response)

- **在线投诉表单 (online_complaint_form)**

  - 提供一个在线投诉表单，用户可以通过填写表单来提交投诉，表单中应包含投诉人信息（如姓名、联系方式、身份类型等）、投诉对象（如教师、学生、校园设施等）、投诉内容、投诉时间、附件上传（如相关照片、文件等）等字段，可自定义。

- **在线投诉处理 (online_complaint_handling)**
  - 将投诉的处理结果反馈给投诉人，包括处理措施、处理结果、后续改进措施等，让投诉人了解其投诉的处理情况和校园的改进措施。

### （三）常见问题解答 (frequently_asked_questions)

- **常见问题解答库 (faq_library)**
  - 相关负责人可编写建立一个常见问题解答库，收集和整理校园中常见的问题及其解决方案，供用户查询和参考，减少重复投诉和咨询。

---

## 四、任务管理模块 (task_management_module)

### （一）统计分析报表 (statistical_analysis_report)

- **任务管理报表 (task_management_report)**

  - **管理者 (manager)**：生成各个板块任务统计报表，展示任务进度。
  - **使用者 (user)**：查看已完成任务和待完成任务。

- **投诉统计报表 (complaint_statistics_report)**

  - **管理者 (manager)**：生成投诉统计报表，分析投诉的数量、类型、分布、处理时效等。
  - **使用者 (user)**：了解自己过往及当前提交的投诉的处理进度和结果。

- **未解决投诉统计报表 (unresolved_complaints_report)**
  - **管理者 (manager)**：生成未解决或回复的投诉统计报表，可指派相关人员进行回复。

### （二）任务发布管理 (task_publishing_management)

- **日常任务发布 (daily_task_creation)**

  - 管理者或项目负责人创建任务，定义任务的名称、描述、目标、截止时间（完成时效）等基本信息。
  - 任务分类：环境卫生、设施设备、安全管理、重点事项督办、楼宇场馆管理、零星维修等。

- **任务信息修改 (task_information_modification)**
  - 任务发布后根据变动修改要求。

### （三）任务完成反馈 (task_completion_feedback)

- **任务完成提交 (task_completion_submission)**
  - 提交完成任务所需表单。

---
