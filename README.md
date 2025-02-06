# 华侨大学校园后勤管理系统web前端功能设计  

(huaqiao_university_campus_logistics_management_system)

## 一、任务管理模块 (task_management_module)

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

- **校园服务监督 (campus_service_supervision)**
    - **暂未解决投诉 (pending_complaints)**：生成未解决或回复的投诉统计报表，可指派相关人员进行回复。
- **设施设备管理 (facility_and_equipment_management)**
    - **维护保养计划 (maintenance_and_care_plan)**：发布制定设备的维护保养计划，明确维护保养的时间、内容、责任人，由相关负责人提交。
    - **设备安全管理 (equipment_safety_management)**：发布安全检查管理任务，员工定期对设备进行安全检查，检查设备的安全性能、防护措施等，记录检查结果，并由相关负责人监督提交。
- **日常任务创建 (daily_task_creation)**：管理者或项目负责人创建任务，定义任务的名称、描述、目标、优先级、截止日期等基本信息。
- **任务信息修改 (task_information_modification)**：任务发布后根据变动修改要求。

### （三）任务完成反馈 (task_completion_feedback)

- **任务完成提交 (task_completion_submission)**：提交完成任务所需表单。

## 二、校园服务监督 (campus_service_supervision)

### （一）统计分析报表 (statistical_analysis_report)

- **投诉统计报表 (complaint_statistics_report)**：同任务管理模块中的投诉统计报表。
- **未解决投诉统计报表 (unresolved_complaints_report)**：同任务管理模块中的未解决投诉统计报表。

### （二）投诉提交回复 (complaint_submission_and_response)

- **在线投诉表单 (online_complaint_form)**
    - 提供一个在线投诉表单，用户可以通过填写表单来提交投诉，表单中应包含投诉人信息（如姓名、联系方式、身份类型等）、投诉对象（如教师、学生、校园设施等）、投诉内容、投诉时间、附件上传（如相关照片、文件等）等字段，可自定义。
- **在线投诉处理 (online_complaint_handling)**：将投诉的处理结果反馈给投诉人，包括处理措施、处理结果、后续改进措施等，让投诉人了解其投诉的处理情况和校园的改进措施。

### （三）常见问题解答 (frequently_asked_questions)

- **常见问题解答库 (faq_library)**：相关负责人可编写建立一个常见问题解答库，收集和整理校园中常见的问题及其解决方案，供用户查询和参考，减少重复投诉和咨询。

## 三、设施设备管理 (facility_and_equipment_management)

### （一）统计分析报表 (statistical_analysis_report)

- **设备统计报表 (equipment_statistics_report)**：生成设备统计报表，展示设备的总数、各类型设备的数量、设备的使用率、设备的完好率等。
- **维护统计报表 (maintenance_statistics_report)**：生成维护保养统计报表，分析设备的维护保养情况，如维护保养次数、维护保养费用等。
- **故障统计报表 (fault_statistics_report)**：生成故障统计报表，展示设备的故障发生频率、故障类型、故障处理时间等，为设备的改进和优化提供依据。
- **费用统计报表 (cost_statistics_report)**：生成设备相关的费用统计报表，包括设备购置费用、维护保养费用、维修费用等，帮助进行成本控制和预算管理。

### （二）校内设备管理 (equipment_management)

- **设备信息改查 (equipment_information_management)**
    - 记录设备的基本信息，如设备名称、型号、规格、生产厂家等，可自定义。
    - 可通过Excel表格导入，新建表单导入，设备改查根据地点分类，校区，楼栋，设备状态等分类。
- **设备状态信息 (equipment_status_information)**：设备维护状态，安全状态，运行状态记录设备的各种情况，包括最近相关状态更新的时间、内容、使用的材料和工具、操作执行人员等。

### （三）相关任务发布 (related_task_publishing)

- **维护保养计划 (maintenance_and_care_plan)**：同任务管理模块中的维护保养计划。
- **设备安全管理 (equipment_safety_management)**：同任务管理模块中的设备安全管理。

## 四、物业人员管理 (property_staff_management)

### （一）统计分析报表 (statistical_analysis_report)

- **人员统计报表 (staff_statistics_report)**：生成人员统计报表，包括员工总数、各岗位员工人数、员工年龄分布、员工学历分布等。
- **考勤统计报表 (attendance_statistics_report)**：生成考勤统计报表，展示员工的出勤率、迟到次数、早退次数、请假天数等。

### （二）人员信息管理 (staff_information_management)

- **Excel表格录入 (excel_import)**：通过Excel批量导入人员信息。
- **新建表单录入 (new_form_entry)**：记录员工的姓名、性别、年龄、联系方式、住址、身份证号等基本信息。
- **信息修改查找 (information_modification_and_search)**：增删改查，查找包括通过岗位，姓名，工号查找。

### （三）人员考勤管理 (staff_attendance_management)

- **出勤状况显示 (attendance_status_display)**：图表显示员工的出勤情况，出勤占比，缺勤占比等信息。
- **人员考勤记录 (attendance_record)**：人员出勤状况记录，考勤报表，可通过部门筛分。

### （四）安全权限管理 (security_and_permissions_management)

- **系统权限分配 (system_permissions_allocation)**：根据员工的岗位和职责，分配相应的系统权限，确保员工只能访问和操作与其工作相关的功能模块。
- **员工密码管理 (staff_password_management)**：管理员工的系统登录密码，提供密码修改、密码重置等功能，保障系统的安全性。
