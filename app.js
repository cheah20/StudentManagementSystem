// demo data, all names and numbers are made up
const DB = {
  students: "lxx_sms_students",
  teachers: "lxx_sms_teachers",
  fees: "lxx_sms_fees",
  receipts: "lxx_sms_receipts",
  classes: "lxx_sms_classes",
  grades: "lxx_sms_grades",
  assignments: "lxx_sms_assignments",
  submissions: "lxx_sms_submissions",
  notices: "lxx_sms_notices",
};

const COMPANY = "LXX Sdn. Bhd.";
const PROGRAM = "Certificate in Computer & Device Repair";
const TODAY = "2023-03-15";
const INTAKES = ["2022-01", "2023-01", "2023-07"];
const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const AVATAR_COLORS = ["#4673d6", "#18c685", "#36b1c6", "#f8c332", "#e3403f", "#858796"];

const SEED = {
  students: [
    { id: "STU-001", name: "Ah Kow bin Nobody", ic: "000001-00-0001", email: "ahkow@student.lxx.example", phone: "+60 12-111 0001", program: PROGRAM, intake: "2023-01", status: "active", dob: "2000-01-15", address: "No 1, Jalan Kosong", bank: "Maybank", acc: "1584207369", feeTotal: 12000, feePaid: 7000, avatar: AVATAR_COLORS[0] },
    { id: "STU-002", name: "Mei Mei Goreng", ic: "000002-00-0002", email: "meimei@student.lxx.example", phone: "+60 11-222 0002", program: PROGRAM, intake: "2023-01", status: "active", dob: "2001-03-22", address: "No 2, Lorong Tiada", bank: "CIMB", acc: "5127651681", feeTotal: 12000, feePaid: 9000, avatar: AVATAR_COLORS[1] },
    { id: "STU-003", name: "Raju a/l Cincau", ic: "000003-00-0003", email: "raju@student.lxx.example", phone: "+60 16-333 0003", program: PROGRAM, intake: "2023-07", status: "active", dob: "1999-07-10", address: "No 3, Jalan Entah", bank: "Public Bank", acc: "3906418257", feeTotal: 12000, feePaid: 4500, avatar: AVATAR_COLORS[2] },
    { id: "STU-004", name: "Siti Binti Mana", ic: "000004-00-0004", email: "siti@student.lxx.example", phone: "+60 19-444 0004", program: PROGRAM, intake: "2023-07", status: "active", dob: "2002-05-18", address: "No 4, Taman ABC", bank: "Maybank", acc: "7260139485", feeTotal: 12000, feePaid: 12000, avatar: AVATAR_COLORS[3] },
    { id: "STU-005", name: "Ah Beng Kosong", ic: "000005-00-0005", email: "ahbeng@student.lxx.example", phone: "+60 17-555 0005", program: PROGRAM, intake: "2022-01", status: "active", dob: "1998-11-30", address: "No 5, Jalan Haha", bank: "RHB", acc: "2024012963", feeTotal: 12000, feePaid: 12000, avatar: AVATAR_COLORS[4] },
    { id: "STU-006", name: "Muthu a/l Teh Tarik", ic: "000006-00-0006", email: "muthu@student.lxx.example", phone: "+60 18-666 0006", program: PROGRAM, intake: "2022-01", status: "inactive", dob: "2000-09-05", address: "No 6, Kawasan X", bank: "CIMB", acc: "4815930276", feeTotal: 12000, feePaid: 6000, avatar: AVATAR_COLORS[5] },
  ],
  teachers: [
    { id: "TCH-001", name: "Cikgu Blur Sikit", ic: "800001-00-0001", email: "cikgu@lxx.example", phone: "+60 12-001 0001", subject: "Computer Hardware & Repair", status: "active", avatar: AVATAR_COLORS[0] },
    { id: "TCH-002", name: "Encik Pandai Betul", ic: "820002-00-0002", email: "encik@lxx.example", phone: "+60 11-002 0002", subject: "Device Diagnostics", status: "active", avatar: AVATAR_COLORS[3] },
  ],
  fees: [
    { id: "FEE-001", studentId: "STU-001", month: "2023-01", amount: 500, dueDate: "2023-01-31", status: "paid", paidDate: "2023-01-28", bankSlip: null, receiptNo: "RCP-001" },
    { id: "FEE-002", studentId: "STU-001", month: "2023-02", amount: 500, dueDate: "2023-02-28", status: "paid", paidDate: "2023-02-25", bankSlip: null, receiptNo: "RCP-002" },
    { id: "FEE-003", studentId: "STU-001", month: "2023-03", amount: 500, dueDate: "2023-03-31", status: "paid", paidDate: "2023-03-30", bankSlip: "data:text/plain;base64,c2xpcA==", receiptNo: "RCP-003" },
    { id: "FEE-004", studentId: "STU-001", month: "2023-04", amount: 500, dueDate: "2023-04-30", status: "pending", paidDate: null, bankSlip: null, receiptNo: null },
    { id: "FEE-005", studentId: "STU-002", month: "2023-01", amount: 500, dueDate: "2023-01-31", status: "paid", paidDate: "2023-01-29", bankSlip: null, receiptNo: "RCP-005" },
    { id: "FEE-006", studentId: "STU-002", month: "2023-02", amount: 500, dueDate: "2023-02-28", status: "paid", paidDate: "2023-02-27", bankSlip: null, receiptNo: "RCP-006" },
    { id: "FEE-007", studentId: "STU-003", month: "2023-07", amount: 500, dueDate: "2023-07-31", status: "paid", paidDate: "2023-07-28", bankSlip: null, receiptNo: "RCP-007" },
    { id: "FEE-008", studentId: "STU-003", month: "2023-08", amount: 500, dueDate: "2023-08-31", status: "pending", paidDate: null, bankSlip: "data:text/plain;base64,c2xpcA==", receiptNo: null },
    { id: "FEE-009", studentId: "STU-004", month: "2023-01", amount: 500, dueDate: "2023-01-31", status: "paid", paidDate: "2023-01-20", bankSlip: null, receiptNo: "RCP-009" },
    { id: "FEE-010", studentId: "STU-005", month: "2022-01", amount: 500, dueDate: "2022-01-31", status: "paid", paidDate: "2022-01-25", bankSlip: null, receiptNo: "RCP-010" },
  ],
  classes: [
    { id: "CLS-001", subject: "Computer Hardware Basics", teacher: "Cikgu Blur Sikit", day: "Monday", time: "09:00", endTime: "11:00", room: "Lab A", intake: "2023-01" },
    { id: "CLS-002", subject: "Device Repair Fundamentals", teacher: "Encik Pandai Betul", day: "Tuesday", time: "14:00", endTime: "16:00", room: "Lab B", intake: "2023-01" },
    { id: "CLS-003", subject: "Motherboard Diagnostics", teacher: "Cikgu Blur Sikit", day: "Wednesday", time: "10:00", endTime: "12:00", room: "Lab A", intake: "2023-01" },
    { id: "CLS-004", subject: "OS Installation & Troubleshooting", teacher: "Encik Pandai Betul", day: "Thursday", time: "09:00", endTime: "11:00", room: "Lab C", intake: "2023-01" },
    { id: "CLS-005", subject: "Practical Assessment", teacher: "Cikgu Blur Sikit", day: "Friday", time: "14:00", endTime: "17:00", room: "Workshop", intake: "2023-01" },
    { id: "CLS-006", subject: "Computer Hardware Basics", teacher: "Cikgu Blur Sikit", day: "Monday", time: "14:00", endTime: "16:00", room: "Lab A", intake: "2023-07" },
    { id: "CLS-007", subject: "Device Repair Fundamentals", teacher: "Encik Pandai Betul", day: "Wednesday", time: "09:00", endTime: "11:00", room: "Lab B", intake: "2023-07" },
  ],
  grades: [
    { id: "GRD-001", studentId: "STU-001", subject: "Computer Hardware Basics", type: "Assignment", score: 85, maxScore: 100, date: "2023-03-15", remarks: "Good work" },
    { id: "GRD-002", studentId: "STU-001", subject: "Device Repair Fundamentals", type: "Test", score: 78, maxScore: 100, date: "2023-04-10", remarks: "Needs improvement" },
    { id: "GRD-003", studentId: "STU-001", subject: "Motherboard Diagnostics", type: "Exam", score: 92, maxScore: 100, date: "2023-05-20", remarks: "Excellent" },
    { id: "GRD-004", studentId: "STU-001", subject: "OS Installation", type: "Assignment", score: 88, maxScore: 100, date: "2023-06-05", remarks: "" },
    { id: "GRD-005", studentId: "STU-002", subject: "Computer Hardware Basics", type: "Assignment", score: 72, maxScore: 100, date: "2023-03-15", remarks: "" },
    { id: "GRD-006", studentId: "STU-002", subject: "Device Repair Fundamentals", type: "Exam", score: 91, maxScore: 100, date: "2023-05-20", remarks: "Outstanding" },
    { id: "GRD-007", studentId: "STU-003", subject: "Computer Hardware Basics", type: "Test", score: 65, maxScore: 100, date: "2023-09-10", remarks: "" },
    { id: "GRD-008", studentId: "STU-004", subject: "Computer Hardware Basics", type: "Exam", score: 95, maxScore: 100, date: "2023-03-15", remarks: "Top of class" },
  ],
  assignments: [
    { id: "ASG-001", title: "Disassemble & Reassemble Laptop", subject: "Computer Hardware Basics", teacher: "Cikgu Blur Sikit", due: "2023-04-30", desc: "Take apart the laptop given in class, put it back together and photo each step.", intake: "2023-01", maxScore: 100 },
    { id: "ASG-002", title: "Screen Replacement Report", subject: "Device Repair Fundamentals", teacher: "Encik Pandai Betul", due: "2023-05-15", desc: "Replace a cracked screen on the training device and write a 500 word reflection.", intake: "2023-01", maxScore: 100 },
    { id: "ASG-003", title: "OS Dual Boot Setup", subject: "OS Installation & Troubleshooting", teacher: "Cikgu Blur Sikit", due: "2023-06-01", desc: "Set up Windows 11 and Ubuntu 22.04 dual boot on the lab PC.", intake: "2023-01", maxScore: 100 },
    { id: "ASG-004", title: "Data Recovery Practice", subject: "Motherboard Diagnostics", teacher: "Encik Pandai Betul", due: "2023-11-30", desc: "Recover files from the corrupted drives given in class.", intake: "2023-07", maxScore: 100 },
  ],
  submissions: [
    { id: "SUB-001", assignmentId: "ASG-001", studentId: "STU-001", submittedAt: "2023-04-28", file: "data:text/plain;base64,cmVwb3J0", notes: "Please see attached photos", grade: null },
    { id: "SUB-002", assignmentId: "ASG-002", studentId: "STU-001", submittedAt: "2023-05-14", file: "data:text/plain;base64,cmVwb3J0", notes: "", grade: 88 },
    { id: "SUB-003", assignmentId: "ASG-001", studentId: "STU-002", submittedAt: "2023-04-29", file: "data:text/plain;base64,cmVwb3J0", notes: "", grade: 75 },
  ],
  notices: [
    { id: "NOT-001", title: "Mid-term exam schedule released", body: "Mid-term exams run from 20 to 24 May 2023. Check the timetable in Class Schedule.", date: "2023-04-15", from: "Admin" },
    { id: "NOT-002", title: "Fee reminder, April 2023", body: "Please settle your April 2023 fees before 30 April to avoid late charges.", date: "2023-04-01", from: "Admin" },
    { id: "NOT-003", title: "Lab maintenance on Wed 10 May", body: "Lab A is closed for maintenance on Wednesday 10 May. Classes move to Lab C.", date: "2023-05-05", from: "Cikgu Blur Sikit" },
  ],
};

// localStorage
function dbGet(k) {
  try {
    return JSON.parse(localStorage.getItem(k));
  } catch (e) {
    return null;
  }
}
function dbSet(k, v) {
  try {
    localStorage.setItem(k, JSON.stringify(v));
  } catch (e) {}
}
// receipts for the seed fees that are already paid
SEED.receipts = SEED.fees.filter((f) => f.receiptNo).map((f) => ({ id: f.receiptNo, feeId: f.id, studentId: f.studentId, amount: f.amount, month: f.month, issuedAt: f.paidDate }));

function dbInit() {
  Object.keys(SEED).forEach((k) => {
    if (!dbGet(DB[k])) dbSet(DB[k], SEED[k]);
  });
}
function resetDB() {
  if (!confirm("Reset all data to demo defaults?")) return;
  Object.values(DB).forEach((k) => localStorage.removeItem(k));
  dbInit();
  location.reload();
}
const getStudents = () => dbGet(DB.students) || [];
const getTeachers = () => dbGet(DB.teachers) || [];
const getFees = () => dbGet(DB.fees) || [];
const getReceipts = () => dbGet(DB.receipts) || [];
const getClasses = () => dbGet(DB.classes) || [];
const getGrades = () => dbGet(DB.grades) || [];
const getAssignments = () => dbGet(DB.assignments) || [];
const getSubmissions = () => dbGet(DB.submissions) || [];
const getNotices = () => dbGet(DB.notices) || [];
const studentById = (id) => getStudents().find((s) => s.id === id) || { name: "Unknown", id: "" };

function nextId(prefix, items) {
  const nums = items.map((i) => parseInt(i.id.split("-")[1]) || 0);
  return prefix + "-" + String(Math.max(0, ...nums) + 1).padStart(3, "0");
}
const todayISO = () => new Date().toISOString().split("T")[0];

// small builders shared by many pages
const rm = (n) => "RM " + Number(n).toLocaleString();
const pct = (g) => Math.round((g.score / g.maxScore) * 100);
const letter = (p) => (p >= 90 ? "A+" : p >= 80 ? "A" : p >= 70 ? "B" : p >= 60 ? "C" : "D");
const tone = (p) => (p >= 70 ? "success" : p >= 50 ? "warning" : "danger");
const average = (grades) => (grades.length ? Math.round(grades.reduce((a, g) => a + pct(g), 0) / grades.length) : 0);
const balance = (s) => s.feeTotal - s.feePaid;
const paidPct = (s) => Math.round((s.feePaid / s.feeTotal) * 100);

function initials(name) {
  return (name || "?")
    .split(" ")
    .filter((w) => w.length > 1)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}
function avatar(p, size = "") {
  return `<span class="avatar ${size}" style="background:${p.avatar || AVATAR_COLORS[0]}">${initials(p.name)}</span>`;
}
function who(s, sub = s.id) {
  return `<div class="who">${avatar(s)}<div><b>${s.name}</b><small>${sub}</small></div></div>`;
}
function feeState(f) {
  if (f.status === "paid") return { label: "Paid", cls: "success" };
  return f.bankSlip ? { label: "Slip uploaded", cls: "warning" } : { label: "Pending", cls: "danger" };
}
function balancePill(s) {
  const bal = balance(s);
  const cls = bal <= 0 ? "success" : bal < 3000 ? "warning" : "danger";
  return `<span class="pill ${cls}">${bal <= 0 ? "Fully paid" : rm(bal) + " due"}</span>`;
}
function card(title, body, action = "", flush = false) {
  return `<div class="card"><div class="card-header"><h6>${title}</h6>${action}</div><div class="card-body ${flush ? "flush" : ""}">${body}</div></div>`;
}
function stat(cls, label, value, sub, icon) {
  return `<div class="stat ${cls}"><div><div class="stat-label">${label}</div><div class="stat-value">${value}</div>${sub ? `<div class="stat-sub">${sub}</div>` : ""}</div>${ICONS[icon] || ""}</div>`;
}
function pageHead(title, action = "") {
  return `<div class="page-head"><h1>${title}</h1>${action}</div>`;
}
function noticeList(count) {
  return getNotices()
    .slice(0, count)
    .map((n) => `<div class="list-item"><div class="grow"><b>${n.title}</b><small>${n.date} · ${n.from}</small></div></div>`)
    .join("");
}
function scheduleGrid(classes, showTeacher) {
  return `<div class="schedule">${DAYS.map((day) => {
    const slots = classes.filter((c) => c.day === day);
    return `<div class="sched-day"><div class="sched-day-head">${day}</div>${
      slots.length
        ? slots.map((c) => `<div class="sched-slot"><small>${c.time} – ${c.endTime}</small><b>${c.subject}</b><small>${c.room}${showTeacher ? " · " + c.teacher : ""}</small></div>`).join("")
        : '<div class="sched-empty">No class</div>'
    }</div>`;
  }).join("")}</div>`;
}
function gradeBars(grades) {
  return `<div class="bars">${grades
    .map((g, i) => `<div class="bar" style="height:${pct(g)}%;background:${AVATAR_COLORS[i % AVATAR_COLORS.length]}"><span>${pct(g)}%</span><em>${g.subject.split(" ")[0]}</em></div>`)
    .join("")}</div>`;
}
// cols: student, remarks, del
function gradeTable(grades, cols = {}) {
  const head = `${cols.student ? "<th>Student</th>" : ""}<th>Subject</th><th>Type</th><th class="num">Score</th><th>Grade</th><th>Date</th>${cols.remarks ? "<th>Remarks</th>" : ""}${cols.del ? "<th></th>" : ""}`;
  const rows = grades.map((g) => {
    const p = pct(g);
    return `<tr>${cols.student ? `<td><b>${studentById(g.studentId).name}</b></td>` : ""}<td>${g.subject}</td><td><span class="pill info">${g.type}</span></td>
      <td class="num">${g.score}/${g.maxScore}</td><td><span class="pill ${tone(p)}">${letter(p)} (${p}%)</span></td><td class="nowrap">${g.date}</td>
      ${cols.remarks ? `<td>${g.remarks || "—"}</td>` : ""}${cols.del ? `<td><button class="btn btn-xs btn-link-danger" onclick="deleteGrade('${g.id}')">Delete</button></td>` : ""}</tr>`;
  });
  return `<div class="tbl-wrap"><table><thead><tr>${head}</tr></thead><tbody>${rows.join("") || '<tr><td class="empty" colspan="8">No grades yet</td></tr>'}</tbody></table></div>`;
}

// state
let currentRole = "admin";
let currentUser = null;
let currentPage = "dashboard";
let viewingStudentId = null;
let scheduleIntake = "2023-01";

// login
const DEMO_LOGINS = {
  admin: { email: "admin@lxx.example", hint: "admin@lxx.example / admin123" },
  teacher: { email: "cikgu@lxx.example", hint: "cikgu@lxx.example / any password" },
  student: { email: "ahkow@student.lxx.example", hint: "ahkow@student.lxx.example / any password" },
};
function setLoginRole(role, el) {
  document.getElementById("loginRole").value = role;
  document.querySelectorAll(".role-tab").forEach((t) => t.classList.remove("active"));
  el.classList.add("active");
  document.getElementById("loginEmail").value = DEMO_LOGINS[role].email;
  document.getElementById("loginHint").textContent = "Demo: " + DEMO_LOGINS[role].hint;
}
function doLogin() {
  const role = document.getElementById("loginRole").value;
  const email = document.getElementById("loginEmail").value.trim();
  const pass = document.getElementById("loginPass").value;
  if (!email || !pass) return showToast("Please fill all fields", "error");

  if (role === "admin") {
    if (email !== DEMO_LOGINS.admin.email || pass !== "admin123") return showToast("Invalid admin login", "error");
    currentUser = { name: "Admin LXX", avatar: AVATAR_COLORS[0] };
  } else {
    currentUser = (role === "teacher" ? getTeachers() : getStudents()).find((u) => u.email === email);
    if (!currentUser) return showToast(role === "teacher" ? "Teacher account not found" : "Student account not found", "error");
  }
  currentRole = role;
  document.getElementById("loginScreen").style.display = "none";
  document.getElementById("app").style.display = "flex";
  buildSidebar();
  setSidebar(dbGet("lxx_sms_sidebar") === "small");
  nav({ admin: "dashboard", teacher: "t-dashboard", student: "s-dashboard" }[role]);
}
// small sidebar shows icons only, the choice is kept in this browser
function setSidebar(small) {
  document.getElementById("app").classList.toggle("small-side", small);
  dbSet("lxx_sms_sidebar", small ? "small" : "full");
}
function toggleSidebar() {
  setSidebar(!document.getElementById("app").classList.contains("small-side"));
}
function doLogout() {
  document.getElementById("app").style.display = "none";
  document.getElementById("loginScreen").style.display = "flex";
  currentUser = null;
  viewingStudentId = null;
}

// sidebar and pages
const MENUS = {
  admin: [
    ["Overview", [["dashboard", "Dashboard", "dash"]]],
    ["Students", [["students", "Students", "students", () => getStudents().length], ["fees", "Fee Management", "fee"], ["receipts", "Receipts", "receipt"]]],
    ["Academic", [["schedule", "Class Schedule", "schedule"], ["grades", "Grades", "grades"], ["assignments", "Assignments", "asgn"]]],
    ["Admin", [["notices", "Notice Board", "notice", () => getNotices().length], ["settings", "Settings", "settings"]]],
  ],
  teacher: [
    ["Overview", [["t-dashboard", "Dashboard", "dash"]]],
    ["Teaching", [["t-schedule", "My Schedule", "schedule"], ["t-grades", "Grade Students", "grades"], ["t-assignments", "Assignments", "asgn"]]],
    ["Students", [["t-students", "My Students", "students"]]],
    ["Board", [["t-notices", "Notice Board", "notice"]]],
  ],
  student: [
    ["Overview", [["s-dashboard", "Dashboard", "dash"]]],
    ["My Learning", [["s-schedule", "Class Schedule", "schedule"], ["s-grades", "My Grades", "grades"], ["s-assignments", "Assignments", "asgn"]]],
    ["My Fees", [["s-fees", "Fee & Receipts", "fee"]]],
    ["Profile", [["s-profile", "My Profile", "students"]]],
  ],
};
function buildSidebar() {
  document.getElementById("sidebarNav").innerHTML = MENUS[currentRole]
    .map(([sect, items]) => `<div class="nav-sect"><span>${sect}</span></div>` + items.map(([id, label, icon, count]) => `<div class="nav-item" id="nav-${id}" title="${label}" onclick="nav('${id}')">${ICONS[icon]}<span class="nav-label">${label}</span>${count ? `<span class="nav-badge ${id === "students" ? "light" : ""}">${count()}</span>` : ""}</div>`).join(""))
    .join("");
  const role = { admin: "Administrator", teacher: "Teacher", student: "Student" }[currentRole];
  document.getElementById("sidebarUserName").textContent = currentUser.name;
  document.getElementById("sidebarUserRole").textContent = role;
  document.getElementById("topUserName").textContent = currentUser.name;
  document.getElementById("topAvatar").outerHTML = avatar(currentUser).replace('class="avatar', 'id="topAvatar" class="avatar');
}

const PAGES = {
  dashboard: ["Dashboard", renderAdminDash],
  students: ["Students", renderStudents],
  "student-view": ["Student Record", renderStudentView],
  fees: ["Fee Management", renderFees],
  receipts: ["Receipts", renderReceipts],
  schedule: ["Class Schedule", renderScheduleAdmin],
  grades: ["Grades", renderGradesAdmin],
  assignments: ["Assignments", renderAssignments],
  notices: ["Notice Board", renderNotices],
  settings: ["Settings", renderSettings],
  "t-dashboard": ["Dashboard", renderTeacherDash],
  "t-schedule": ["My Schedule", renderTeacherSchedule],
  "t-grades": ["Grade Students", renderTeacherGrades],
  "t-assignments": ["Assignments", renderAssignments],
  "t-students": ["My Students", renderTeacherStudents],
  "t-notices": ["Notice Board", renderNotices],
  "s-dashboard": ["My Dashboard", renderStudentDash],
  "s-schedule": ["Class Schedule", renderStudentSchedule],
  "s-grades": ["My Grades", renderStudentGrades],
  "s-assignments": ["Assignments", renderStudentAssignments],
  "s-fees": ["Fee & Receipts", renderStudentFees],
  "s-profile": ["My Profile", renderStudentProfile],
};
function nav(id) {
  currentPage = id;
  document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach((n) => n.classList.remove("active"));
  document.getElementById("page-" + id).classList.add("active");
  document.getElementById("nav-" + (id === "student-view" ? "students" : id))?.classList.add("active");
  const [title, render] = PAGES[id];
  document.title = title + " · LXX SMS";
  render(document.getElementById("page-" + id), title);
}
const refresh = () => {
  buildSidebar();
  nav(currentPage);
};

// admin dashboard
function renderAdminDash(el, title) {
  const students = getStudents();
  const fees = getFees();
  const collected = fees.filter((f) => f.status === "paid").reduce((a, f) => a + f.amount, 0);
  const pending = fees.filter((f) => f.status === "pending").length;
  const slips = fees.filter((f) => f.bankSlip && !f.receiptNo);

  const feeRows = students
    .map((s) => {
      const p = paidPct(s);
      const bar = p >= 100 ? "success" : p >= 50 ? "warning" : "danger";
      return `<tr class="click" onclick="openStudentView('${s.id}')"><td>${who(s)}</td><td class="num">${rm(s.feeTotal)}</td><td class="num text-success">${rm(s.feePaid)}</td>
        <td class="num ${balance(s) > 0 ? "text-danger" : "text-success"}">${rm(balance(s))}</td><td style="min-width:120px"><small>${p}%</small><div class="prog"><div class="${bar}" style="width:${p}%"></div></div></td></tr>`;
    })
    .join("");
  const intakeRows = INTAKES.map((i) => {
    const n = students.filter((s) => s.intake === i).length;
    return `<div class="prog-row"><span>Intake ${i}</span><b>${n} students</b></div><div class="prog"><div style="width:${Math.round((n / students.length) * 100)}%"></div></div>`;
  }).join("");
  const slipRows = slips.length
    ? slips
        .map((f) => `<div class="list-item"><div class="grow"><b>${studentById(f.studentId).name}</b><small>${f.id} · ${f.month} · ${rm(f.amount)}</small></div>
          <span class="pill warning">Slip uploaded</span><button class="btn btn-sm btn-success" onclick="issueReceipt('${f.id}')">Issue Receipt</button><button class="btn btn-sm" onclick="viewSlip('${f.id}')">View Slip</button></div>`)
        .join("")
    : '<p class="muted">No slips waiting.</p>';

  el.innerHTML = `${pageHead(title, `<button class="btn btn-primary btn-sm" onclick="downloadReport()">Download Report</button>`)}
  <div class="stats">
    ${stat("", "Total students", students.length, students.filter((s) => s.status === "active").length + " active", "students")}
    ${stat("success", "Fees collected", rm(collected), "All time", "fee")}
    ${stat("warning", "Pending payments", pending, "Awaiting payment", "schedule")}
    ${stat("danger", "Slips to verify", slips.length, "Bank slips uploaded", "receipt")}
  </div>
  <div class="grid-2-1">
    ${card("Fee collection by student", `<div class="tbl-wrap"><table><thead><tr><th>Student</th><th class="num">Total fee</th><th class="num">Paid</th><th class="num">Balance</th><th>Progress</th></tr></thead><tbody>${feeRows}</tbody></table></div>`, "", true)}
    <div class="stack">
      ${card("Recent notices", noticeList(3), `<a onclick="nav('notices')">View all</a>`)}
      ${card("Intake split", intakeRows)}
    </div>
  </div>
  <div style="margin-top:24px">${card("Bank slips awaiting verification", slipRows, `<button class="btn btn-sm btn-primary" onclick="nav('fees')">All fees</button>`)}</div>`;
}
function downloadReport() {
  const lines = ["Student ID,Name,Intake,Total fee,Paid,Balance"];
  getStudents().forEach((s) => lines.push([s.id, `"${s.name}"`, s.intake, s.feeTotal, s.feePaid, balance(s)].join(",")));
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([lines.join("\n")], { type: "text/csv" }));
  a.download = "fee_report.csv";
  a.click();
  showToast("Report downloaded", "success");
}

// students
function renderStudents(el, title) {
  const students = getStudents();
  studentFilter = "all";
  el.innerHTML = `${pageHead(title)}
  <div class="pay-search">
    <div class="fg"><label for="stuSearch">Index no. / IC no. / Name</label><input id="stuSearch" placeholder="STU-001, IC or name" oninput="showStudents()"/></div>
    <button class="dark-btn" onclick="openAddStudent()">Add Student <i>›</i></button>
  </div>
  <div class="tabs" style="margin-bottom:-1px">
    <div class="tab active" onclick="filterStudents('all',this)">All (${students.length})</div>
    <div class="tab" onclick="filterStudents('active',this)">Active</div>
    <div class="tab" onclick="filterStudents('inactive',this)">Inactive</div>
  </div>
  <div class="gloss"><div class="gloss-title">Student List</div><table>
    <thead><tr><th>No</th><th>Index / Name</th><th>IC number</th><th>Intake</th><th>Contact</th><th>Fee status</th><th>Status</th><th>Action</th></tr></thead>
    <tbody id="stuTbody"></tbody>
    <tfoot id="stuFoot"></tfoot>
  </table></div>`;
  showStudents();
}
// tab filter and search box work together
let studentFilter = "all";
function showStudents() {
  const q = (document.getElementById("stuSearch")?.value || "").trim().toLowerCase();
  const list = getStudents()
    .filter((s) => studentFilter === "all" || s.status === studentFilter)
    .filter((s) => [s.name, s.ic, s.id].some((v) => v.toLowerCase().includes(q)));
  document.getElementById("stuTbody").innerHTML =
    list
      .map((s, i) => `<tr><td class="right">${i + 1}</td><td><div class="who">${avatar(s)}<div><span class="code">${s.id}</span><b>${s.name}</b></div></div></td><td class="nowrap">${s.ic}</td>
      <td><span class="pill primary">${s.intake}</span></td><td>${s.email}<br><small class="muted">${s.phone}</small></td><td>${balancePill(s)}</td>
      <td><span class="pill ${s.status === "active" ? "success" : "light"}">${s.status === "active" ? "Active" : "Inactive"}</span></td>
      <td class="nowrap"><button class="btn btn-xs" onclick="openStudentView('${s.id}')">View</button> <button class="btn btn-xs" onclick="openEditStudent('${s.id}')">Edit</button> <button class="round-x" title="Delete" onclick="deleteStudent('${s.id}')">×</button></td></tr>`)
      .join("") || '<tr><td class="empty" colspan="8">No students match</td></tr>';
  const owing = list.reduce((a, s) => a + Math.max(0, balance(s)), 0);
  document.getElementById("stuFoot").innerHTML = `<tr><td></td><td colspan="4" class="right">${list.length} students, balance due (RM):</td><td class="num">${owing.toFixed(2)}</td><td colspan="2"></td></tr>`;
}
function filterStudents(type, el) {
  studentFilter = type;
  el.parentElement.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
  el.classList.add("active");
  showStudents();
}
function searchStudents(q) {
  document.getElementById("stuSearch").value = q;
  showStudents();
}
function openStudentView(id) {
  viewingStudentId = id;
  nav("student-view");
}
function deleteStudent(id) {
  if (!confirm("Delete this student? Fee and grade records stay.")) return;
  dbSet(DB.students, getStudents().filter((s) => s.id !== id));
  showToast("Student deleted", "info");
  refresh();
}

// student record, laid out like an old windows form
function renderStudentView(el) {
  const s = getStudents().find((st) => st.id === viewingStudentId);
  if (!s) return nav("students");
  const fees = getFees().filter((f) => f.studentId === s.id);
  const grades = getGrades().filter((g) => g.studentId === s.id);
  const subs = getSubmissions().filter((sb) => sb.studentId === s.id);
  const avg = average(grades);
  const total = grades.reduce((a, g) => a + g.score, 0);
  const rank = !grades.length ? "—" : avg >= 80 ? "Distinction" : avg >= 65 ? "Credit" : avg >= 50 ? "Pass" : "Fail";
  const row = (label, value) => `<div class="win-row"><span>${label}</span><div class="win-field">${value || "&nbsp;"}</div></div>`;
  const logo = document.querySelector(".brand img").src;

  const feeRows =
    fees
      .map((f, i) => {
        const st = feeState(f);
        return `<tr><td>${i + 1}</td><td>${f.month}</td><td class="num">${f.amount.toFixed(2)}</td><td>${f.dueDate}</td><td>${f.paidDate || "—"}</td><td>${f.receiptNo || "—"}</td><td><span class="pill ${st.cls}">${st.label}</span></td>
      <td class="nowrap">${f.bankSlip && !f.receiptNo ? `<button class="btn btn-xs btn-success" onclick="issueReceipt('${f.id}')">Issue Receipt</button> ` : ""}${f.status !== "paid" ? `<button class="btn btn-xs" onclick="markFeePaid('${f.id}')">Mark Paid</button> ` : ""}${f.receiptNo ? `<button class="btn btn-xs" onclick="viewReceiptByFee('${f.id}')">Receipt</button>` : ""}</td></tr>`;
      })
      .join("") || '<tr><td class="empty" colspan="8">No fee records</td></tr>';
  const resultRows = grades.map((g, i) => `<tr><td>${i + 1}</td><td>${g.subject}</td><td>${g.type}</td><td class="num">${g.score}</td><td>${letter(pct(g))}</td></tr>`).join("") || '<tr><td colspan="5">No results yet</td></tr>';

  el.innerHTML = `<div class="crumb" style="margin-bottom:12px"><a onclick="nav('students')">Students</a> / ${s.name}</div>
  <div class="win">
    <div class="win-title"><img src="${logo}" alt=""/>Student Record - ${s.id}<div class="win-ctrl"><button title="Minimise">_</button><button title="Maximise">□</button><button title="Close" onclick="nav('students')">×</button></div></div>
    <div class="win-tabs">
      <div class="win-tab active" onclick="winTab(0,this)">Student Details</div>
      <div class="win-tab" onclick="winTab(1,this)">Fee Records</div>
      <div class="win-tab" onclick="winTab(2,this)">Results</div>
    </div>
    <div class="win-body">
      <div class="win-pane active">
        <div class="win-col">
          <fieldset><legend>Student</legend>
            ${row("Student ID", s.id)}${row("Full name", s.name)}${row("IC / Passport", s.ic)}${row("Date of birth", s.dob)}${row("Address", s.address)}${row("Mobile", s.phone)}${row("Email", s.email)}
          </fieldset>
          <fieldset><legend>Bank</legend>${row("Bank", s.bank)}${row("Account no", s.acc)}</fieldset>
        </div>
        <div class="win-col">
          <fieldset><legend>Course</legend>
            ${row("Programme", s.program)}${row("Intake", s.intake)}${row("Status", s.status === "active" ? "Active" : "Inactive")}${row("Submitted", subs.length + " assignments")}
          </fieldset>
          <fieldset><legend>Fees</legend>
            ${row("Total fee", rm(s.feeTotal))}${row("Paid", rm(s.feePaid))}${row("Balance", rm(balance(s)))}
            <div class="prog lg" style="margin-top:8px"><div class="${paidPct(s) >= 100 ? "success" : ""}" style="width:${paidPct(s)}%"></div></div>
          </fieldset>
        </div>
        <div class="win-col">
          ${monthCalendar(TODAY, fees.filter((f) => f.status !== "paid").map((f) => f.dueDate))}
          <fieldset><legend>Results</legend>
            <table><thead><tr><th>No</th><th>Subject</th><th class="num">Score</th></tr></thead><tbody>${grades.map((g, i) => `<tr><td>${i + 1}</td><td>${g.subject}</td><td class="num">${g.score}</td></tr>`).join("") || '<tr><td colspan="3">None yet</td></tr>'}</tbody></table>
            <div class="win-total"><span>Total score</span><div class="win-field">${total}</div><span>Average</span><div class="win-field">${avg}%</div><span>Ranking</span><div class="win-field">${rank}</div></div>
          </fieldset>
        </div>
      </div>
      <div class="win-pane plain"><table><thead><tr><th>No</th><th>Month</th><th class="num">Amount (RM)</th><th>Due date</th><th>Paid date</th><th>Receipt</th><th>Status</th><th></th></tr></thead><tbody>${feeRows}</tbody></table></div>
      <div class="win-pane plain"><table><thead><tr><th>No</th><th>Subject</th><th>Type</th><th class="num">Score</th><th>Grade</th></tr></thead><tbody>${resultRows}</tbody></table></div>
      <div class="win-btns">
        <button class="win-btn" onclick="openAddStudent()">Add New</button>
        <button class="win-btn" onclick="openEditStudent('${s.id}')">Edit</button>
        <button class="win-btn" onclick="openAddFeeModal('${s.id}')">Add Fee</button>
        <button class="win-btn default" onclick="winTab(2,document.querySelectorAll('.win-tab')[2])">Result</button>
        <button class="win-btn" onclick="nav('students')">Exit</button>
      </div>
    </div>
    <div class="win-status"><span>${grades.length} results</span><span>${fees.length} fee records</span><span>Today: ${TODAY}</span></div>
  </div>`;
}
function winTab(i, el) {
  document.querySelectorAll(".win-tab").forEach((t) => t.classList.remove("active"));
  document.querySelectorAll(".win-pane").forEach((p, n) => p.classList.toggle("active", n === i));
  el.classList.add("active");
}
// month view with today boxed and unpaid due dates in red
function monthCalendar(dateISO, dueDates) {
  const d = new Date(dateISO);
  const y = d.getFullYear();
  const m = d.getMonth();
  const start = (new Date(y, m, 1).getDay() + 6) % 7;
  const cells = [];
  for (let i = 0; i < 42; i++) {
    const day = new Date(y, m, i - start + 1);
    const iso = `${day.getFullYear()}-${String(day.getMonth() + 1).padStart(2, "0")}-${String(day.getDate()).padStart(2, "0")}`;
    const cls = [day.getMonth() !== m && "out", iso === dateISO && "today", dueDates.includes(iso) && "due"].filter(Boolean).join(" ");
    cells.push(`<span class="${cls}">${day.getDate()}</span>`);
  }
  const title = d.toLocaleString("en-GB", { month: "long", year: "numeric" });
  return `<div class="cal"><div class="cal-head"><span>◂</span>${title}<span>▸</span></div><div class="cal-grid">${["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((w) => `<b>${w}</b>`).join("")}${cells.join("")}</div></div>`;
}

// fees, in the style of an old payment screen
function renderFees(el, title) {
  el.innerHTML = `${pageHead(title)}
  <div class="pay-search">
    <div class="fg"><label for="feeSearch">Index no. / IC no.</label><input id="feeSearch" placeholder="STU-001 or IC number" oninput="filterFees(currentFeeFilter)"/></div>
    <button class="dark-btn" onclick="openAddFeeModal()">Create Payment <i>›</i></button>
  </div>
  <div class="tabs" style="margin-bottom:-1px">
    ${[["all", "All"], ["pending", "Pending"], ["slip", "Slip uploaded"], ["paid", "Paid"]].map(([k, l]) => `<div class="tab ${k === "all" ? "active" : ""}" onclick="filterFees('${k}',this)">${l}</div>`).join("")}
  </div>
  <div id="feeTable"></div>`;
  currentFeeFilter = "all";
  filterFees("all");
}
let currentFeeFilter = "all";
function filterFees(type, el) {
  currentFeeFilter = type;
  if (el) {
    el.parentElement.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
    el.classList.add("active");
  }
  const q = (document.getElementById("feeSearch")?.value || "").trim().toLowerCase();
  const list = getFees()
    .filter((f) => (type === "all" ? true : type === "slip" ? f.bankSlip && !f.receiptNo : f.status === type))
    .filter((f) => !q || f.studentId.toLowerCase().includes(q) || studentById(f.studentId).ic?.includes(q));
  document.getElementById("feeTable").innerHTML = feeGloss(list, "Outstanding Detail", true);
}
// the glossy green table used for fee lists
function feeGloss(fees, title, admin) {
  const rows = fees.map((f, i) => {
    const st = feeState(f);
    const s = studentById(f.studentId);
    const actions = admin
      ? `${f.bankSlip ? `<button class="btn btn-xs" onclick="viewSlip('${f.id}')">Slip</button> ` : ""}${f.bankSlip && !f.receiptNo ? `<button class="btn btn-xs btn-success" onclick="issueReceipt('${f.id}')">Issue Receipt</button> ` : ""}${f.status !== "paid" ? `<button class="btn btn-xs" onclick="markFeePaid('${f.id}')">Mark Paid</button> ` : ""}${f.receiptNo ? `<button class="btn btn-xs" onclick="viewReceiptByFee('${f.id}')">${f.receiptNo}</button> ` : ""}<button class="round-x" title="Delete" onclick="deleteFee('${f.id}')">×</button>`
      : `${f.status !== "paid" && !f.bankSlip ? `<button class="btn btn-xs btn-primary" onclick="openUploadSlipModal('${f.id}')">Upload Slip</button>` : ""}${f.receiptNo ? `<button class="btn btn-xs btn-success" onclick="viewReceiptByFee('${f.id}')">Receipt</button>` : ""}${f.bankSlip && f.status !== "paid" ? '<span class="muted">Waiting for check</span>' : ""}`;
    return `<tr><td class="right">${i + 1}</td><td>${f.month}<br><small class="muted">due ${f.dueDate}</small></td><td class="code">${f.id}<br><span style="color:var(--text)">${admin ? s.name : "Tuition fee"}</span></td>
      <td class="num">${f.amount.toFixed(2)}</td><td class="num">${(f.status === "paid" ? 0 : f.amount).toFixed(2)}</td><td><span class="pill ${st.cls}">${st.label}</span></td><td class="nowrap">${actions}</td></tr>`;
  });
  const owing = fees.filter((f) => f.status !== "paid").reduce((a, f) => a + f.amount, 0);
  const all = fees.reduce((a, f) => a + f.amount, 0);
  return `<div class="gloss"><div class="gloss-title">${title}</div><table>
    <thead><tr><th>No</th><th>Period / Date</th><th>Code / Name</th><th>Fee</th><th>Balance</th><th>Status</th><th>Action</th></tr></thead>
    <tbody>${rows.join("") || '<tr><td class="empty" colspan="7">No fee records</td></tr>'}</tbody>
    <tfoot><tr><td></td><td colspan="2" class="right">Sub Total (RM):</td><td class="num">${all.toFixed(2)}</td><td class="num">${owing.toFixed(2)}</td><td colspan="2"></td></tr></tfoot>
  </table></div>`;
}
// paying a fee also adds to the student's paid total
function settleFee(f) {
  f.status = "paid";
  f.paidDate = f.paidDate || todayISO();
  const students = getStudents();
  const s = students.find((st) => st.id === f.studentId);
  if (s) {
    s.feePaid = Math.min(s.feeTotal, s.feePaid + f.amount);
    dbSet(DB.students, students);
  }
}
function markFeePaid(feeId) {
  const fees = getFees();
  settleFee(fees.find((x) => x.id === feeId));
  dbSet(DB.fees, fees);
  showToast("Fee marked as paid", "success");
  refresh();
}
function issueReceipt(feeId) {
  const fees = getFees();
  const f = fees.find((x) => x.id === feeId);
  const receipts = getReceipts();
  f.receiptNo = nextId("RCP", receipts);
  settleFee(f);
  dbSet(DB.fees, fees);
  receipts.push({ id: f.receiptNo, feeId, studentId: f.studentId, amount: f.amount, month: f.month, issuedAt: todayISO() });
  dbSet(DB.receipts, receipts);
  showToast(`Receipt ${f.receiptNo} issued`, "success");
  refresh();
  viewReceiptByFee(feeId);
}
function deleteFee(feeId) {
  if (!confirm("Delete this fee record?")) return;
  dbSet(DB.fees, getFees().filter((f) => f.id !== feeId));
  showToast("Fee record deleted", "info");
  refresh();
}
function viewSlip(feeId) {
  const f = getFees().find((x) => x.id === feeId);
  if (!f?.bankSlip) return showToast("No slip available", "error");
  const body = f.bankSlip.startsWith("data:image") ? `<img src="${f.bankSlip}" style="max-width:100%"/>` : "<p>Slip file uploaded (demo placeholder).</p>";
  const w = window.open("", "_blank");
  w.document.write(`<html><body style="font-family:sans-serif;padding:20px"><h3>Bank slip, ${feeId}</h3>${body}</body></html>`);
}

// receipts
function viewReceiptByFee(feeId) {
  const f = getFees().find((x) => x.id === feeId);
  document.getElementById("receiptContent").innerHTML = receiptHTML(f, studentById(f.studentId));
  openModal("modalReceipt");
}
function receiptHTML(f, s) {
  const logo = document.querySelector(".brand img").src;
  return `<div class="receipt">
    <div class="receipt-head">
      <div class="receipt-brand"><img src="${logo}" alt=""/><div><div class="receipt-company">${COMPANY}</div><div>www.lxx.example</div></div></div>
      <div class="receipt-no">Receipt no<b>${f.receiptNo || "PENDING"}</b><span class="receipt-tag">Official Receipt</span></div>
    </div>
    <div class="receipt-info">
      <div><strong>Student name</strong>${s.name}</div><div><strong>Student ID</strong>${s.id}</div>
      <div><strong>IC / Passport</strong>${s.ic || "—"}</div><div><strong>Programme</strong>${s.program || PROGRAM}</div>
      <div><strong>Payment month</strong>${f.month}</div><div><strong>Payment date</strong>${f.paidDate || todayISO()}</div>
    </div>
    <table class="receipt-items"><thead><tr><th>Description</th><th>Qty</th><th class="num">Amount (RM)</th></tr></thead>
      <tbody><tr><td>Tuition fee, ${f.month}</td><td>1</td><td class="num">${f.amount.toFixed(2)}</td></tr></tbody>
      <tfoot><tr><td colspan="2">Total</td><td class="num">${f.amount.toFixed(2)}</td></tr></tfoot></table>
    <div class="receipt-total"><span>Amount paid</span><b>RM ${f.amount.toFixed(2)}</b></div>
    <div class="receipt-footer">Thank you for your payment. This receipt is computer generated.</div>
  </div>`;
}
const RECEIPT_CSS = `body{font-family:Arial,sans-serif;display:flex;justify-content:center;padding:30px}.receipt{color:#111;padding:28px;font-size:13px;max-width:620px;width:100%}.receipt-head{display:flex;justify-content:space-between;padding-bottom:14px;margin-bottom:16px;border-bottom:2px solid #111}.receipt-brand{display:flex;align-items:center;gap:10px}.receipt-brand img{width:46px;height:46px;border-radius:50%}.receipt-company{font-size:16px;font-weight:700}.receipt-no{text-align:right}.receipt-no b{display:block;font-size:18px}.receipt-tag{display:inline-block;margin-top:4px;padding:2px 8px;border:1.5px solid #111;font-size:11px;font-weight:700}.receipt-info{display:grid;grid-template-columns:1fr 1fr;gap:6px 20px;margin-bottom:16px}.receipt-info strong{display:inline-block;min-width:110px}table{width:100%;border-collapse:collapse}th,td{padding:8px;border-bottom:1px solid #ddd;text-align:left}.num{text-align:right}th{background:#f5f5f5}tfoot td{font-weight:700;border-top:2px solid #111}.receipt-total{display:flex;justify-content:space-between;margin-top:14px;padding:12px 16px;border:2px solid #111;font-weight:700}.receipt-total b{font-size:22px}.receipt-footer{margin-top:14px;text-align:center;font-size:11px;color:#777}`;
function printHTML(title, html, css) {
  const win = window.open("", "_blank");
  win.document.write(`<!DOCTYPE html><html><head><title>${title}</title><style>${css}</style></head><body>${html}</body></html>`);
  win.document.close();
  win.print();
}
function printReceiptFromModal() {
  printHTML("Receipt", document.getElementById("receiptContent").innerHTML, RECEIPT_CSS);
}
function printReceiptByFee(feeId) {
  const f = getFees().find((x) => x.id === feeId);
  printHTML("Receipt " + f.receiptNo, receiptHTML(f, studentById(f.studentId)), RECEIPT_CSS);
}
function renderReceipts(el, title) {
  el.innerHTML = `${pageHead(title)}
  <div class="pay-search">
    <div class="fg"><label for="rcpSearch">Receipt no. / Index no.</label><input id="rcpSearch" placeholder="RCP-001 or STU-001" oninput="searchReceipts(this.value)"/></div>
    <button class="dark-btn" onclick="nav('fees')">Issue from Fees <i>›</i></button>
  </div>
  <div id="rcpTable">${receiptGloss(getReceipts(), true)}</div>`;
}
function searchReceipts(q) {
  q = q.trim().toLowerCase();
  const list = getReceipts().filter((r) => !q || r.id.toLowerCase().includes(q) || r.studentId.toLowerCase().includes(q));
  document.getElementById("rcpTable").innerHTML = receiptGloss(list, true);
}
function receiptGloss(receipts, admin) {
  const rows = receipts.map((r, i) => `<tr><td class="right">${i + 1}</td><td>${r.issuedAt}<br><small class="muted">for ${r.month}</small></td>
    <td class="code">${r.id}<br><span style="color:var(--text)">${admin ? studentById(r.studentId).name : "Tuition fee"}</span></td><td class="num">${r.amount.toFixed(2)}</td>
    <td class="nowrap"><button class="btn btn-xs" onclick="viewReceiptByFee('${r.feeId}')">View</button> <button class="btn btn-xs" onclick="printReceiptByFee('${r.feeId}')">Print</button></td></tr>`);
  const total = receipts.reduce((a, r) => a + r.amount, 0);
  return `<div class="gloss"><div class="gloss-title">Issued Receipts</div><table>
    <thead><tr><th>No</th><th>Issued / Date</th><th>Receipt / Name</th><th>Amount</th><th>Action</th></tr></thead>
    <tbody>${rows.join("") || '<tr><td class="empty" colspan="5">No receipts yet</td></tr>'}</tbody>
    <tfoot><tr><td></td><td colspan="2" class="right">Total Received (RM):</td><td class="num">${total.toFixed(2)}</td><td></td></tr></tfoot>
  </table></div>`;
}

// schedule
function renderScheduleAdmin(el, title) {
  const tabs = ["2023-01", "2023-07"].map((i) => `<div class="tab ${i === scheduleIntake ? "active" : ""}" onclick="scheduleIntake='${i}';nav('schedule')">${i} intake</div>`).join("");
  const classes = getClasses();
  const rows = classes
    .map((c) => `<tr><td>${c.id}</td><td><b>${c.subject}</b></td><td>${c.teacher}</td><td>${c.day}</td><td class="nowrap">${c.time} – ${c.endTime}</td><td>${c.room}</td><td><span class="pill primary">${c.intake}</span></td>
    <td><button class="btn btn-xs btn-link-danger" onclick="deleteClass('${c.id}')">Delete</button></td></tr>`)
    .join("");
  el.innerHTML = `${pageHead(title, `<button class="btn btn-primary btn-sm" onclick="openModal('modalAddClass')">+ Add Class</button>`)}
  ${card("Weekly schedule", `<div class="tabs" style="margin-bottom:14px">${tabs}</div>${scheduleGrid(classes.filter((c) => c.intake === scheduleIntake), true)}`)}
  ${card("All classes", `<div class="tbl-wrap"><table><thead><tr><th>ID</th><th>Subject</th><th>Teacher</th><th>Day</th><th>Time</th><th>Room</th><th>Intake</th><th></th></tr></thead><tbody>${rows}</tbody></table></div>`, "", true)}`;
}
function deleteClass(id) {
  if (!confirm("Delete this class?")) return;
  dbSet(DB.classes, getClasses().filter((c) => c.id !== id));
  showToast("Class deleted", "info");
  refresh();
}

// grades
function renderGradesAdmin(el, title) {
  el.innerHTML = pageHead(title, `<button class="btn btn-primary btn-sm" onclick="openAddGrade()">+ Add Grade</button>`) + card("All grades", gradeTable(getGrades(), { student: true, remarks: true, del: true }), "", true);
}
function deleteGrade(id) {
  if (!confirm("Delete this grade?")) return;
  dbSet(DB.grades, getGrades().filter((g) => g.id !== id));
  showToast("Grade deleted", "info");
  refresh();
}

// assignments, same page for admin and teacher
function renderAssignments(el, title) {
  const subs = getSubmissions();
  const list = getAssignments()
    .map((a) => {
      const mine = subs.filter((s) => s.assignmentId === a.id);
      return `<div class="asgn"><div class="asgn-mark">${ICONS.asgn}</div><div class="grow"><h3>${a.title}</h3><small class="muted">${a.subject} · Due ${a.due} · Intake ${a.intake} · Max ${a.maxScore}</small><p>${a.desc}</p>
      <div class="tags"><span class="pill info">${mine.length} submissions</span><span class="pill success">${mine.filter((s) => s.grade !== null).length} graded</span></div></div>
      <div class="btn-group"><button class="btn btn-sm" onclick="viewAsgnSubmissions('${a.id}')">Submissions</button><button class="btn btn-sm btn-link-danger" onclick="deleteAsgn('${a.id}')">Delete</button></div></div>`;
    })
    .join("");
  el.innerHTML = pageHead(title, `<button class="btn btn-primary btn-sm" onclick="openModal('modalAddAsgn')">+ Add Assignment</button>`) + card("Assignments", list || '<p class="muted" style="padding:20px">No assignments yet.</p>', "", true);
}
function deleteAsgn(id) {
  if (!confirm("Delete this assignment?")) return;
  dbSet(DB.assignments, getAssignments().filter((a) => a.id !== id));
  showToast("Assignment deleted", "info");
  refresh();
}
function viewAsgnSubmissions(asgnId) {
  const subs = getSubmissions().filter((s) => s.assignmentId === asgnId);
  document.getElementById("submissionsContent").innerHTML = subs.length
    ? `<table><thead><tr><th>Student</th><th>Submitted</th><th>Notes</th><th>Grade</th><th></th></tr></thead><tbody>${subs
        .map((sb) => `<tr><td>${studentById(sb.studentId).name}</td><td>${sb.submittedAt}</td><td>${sb.notes || "—"}</td>
        <td>${sb.grade !== null ? `<span class="pill success">${sb.grade}/100</span>` : '<span class="pill warning">Not graded</span>'}</td>
        <td><div class="btn-group"><button class="btn btn-xs btn-success" onclick="gradeSubmission('${sb.id}','${asgnId}')">Grade</button>${sb.file ? `<button class="btn btn-xs" onclick="downloadSubmission('${sb.id}')">File</button>` : ""}</div></td></tr>`)
        .join("")}</tbody></table>`
    : '<p class="muted">No submissions yet.</p>';
  openModal("modalSubmissions");
}
function gradeSubmission(subId, asgnId) {
  const n = parseInt(prompt("Enter score (0-100):"));
  if (isNaN(n) || n < 0 || n > 100) return showToast("Score must be 0 to 100", "error");
  const subs = getSubmissions();
  subs.find((s) => s.id === subId).grade = n;
  dbSet(DB.submissions, subs);
  showToast("Grade saved", "success");
  viewAsgnSubmissions(asgnId);
  refresh();
}
function downloadSubmission(subId) {
  const sb = getSubmissions().find((s) => s.id === subId);
  if (!sb?.file) return showToast("No file", "error");
  const a = document.createElement("a");
  a.href = sb.file;
  a.download = `submission_${subId}`;
  a.click();
}

// notices
function renderNotices(el, title) {
  const canPost = currentRole !== "student";
  const list = getNotices()
    .map((n) => `<div class="card notice"><div class="card-body"><div class="page-head" style="margin:0"><div><h3>${n.title}</h3><small class="muted">${n.date} · Posted by ${n.from}</small></div>
      ${currentRole === "admin" ? `<button class="btn btn-xs btn-link-danger" onclick="deleteNotice('${n.id}')">Delete</button>` : ""}</div><p>${n.body}</p></div></div>`)
    .join("");
  el.innerHTML = pageHead(title, canPost ? `<button class="btn btn-primary btn-sm" onclick="openModal('modalAddNotice')">+ Post Notice</button>` : "") + list;
}
function deleteNotice(id) {
  if (!confirm("Delete this notice?")) return;
  dbSet(DB.notices, getNotices().filter((n) => n.id !== id));
  showToast("Notice deleted", "info");
  refresh();
}

// settings
function renderSettings(el, title) {
  el.innerHTML = `${pageHead(title)}<div class="grid-2">
    ${card(
      "System information",
      `<div class="form-grid one" style="padding:0">
        <div class="fg"><label>Institution name</label><input type="text" value="${COMPANY}"/></div>
        <div class="fg"><label>Website</label><input type="text" value="www.lxx.example"/></div>
        <div class="fg"><label>Admin email</label><input type="email" value="admin@lxx.example"/></div>
        <div><button class="btn btn-primary" onclick="showToast('Settings saved','success')">Save Changes</button></div>
      </div>`,
    )}
    ${card(
      "Database",
      `<p>Data is kept in this browser (localStorage).</p>
      <div class="prog-row"><span>Students</span><b>${getStudents().length}</b></div><div class="prog-row"><span>Fee records</span><b>${getFees().length}</b></div>
      <div class="prog-row"><span>Receipts</span><b>${getReceipts().length}</b></div><div class="prog-row"><span>Grades</span><b>${getGrades().length}</b></div>
      <button class="btn btn-danger btn-sm" style="margin-top:16px" onclick="resetDB()">Reset to Demo Data</button>`,
    )}
  </div>`;
}

// teacher pages
function renderTeacherDash(el, title) {
  const mine = getClasses().filter((c) => c.teacher === currentUser.name);
  const week = mine.map((c) => `<div class="list-item"><div class="day-chip">${c.day.slice(0, 3)}<span>${c.time}</span></div><div class="grow"><b>${c.subject}</b><small>${c.room} · Intake ${c.intake}</small></div></div>`).join("");
  el.innerHTML = `${pageHead(title)}
  <div class="stats three">
    ${stat("", "My classes", mine.length, "", "schedule")}
    ${stat("success", "Active students", getStudents().filter((s) => s.status === "active").length, "", "students")}
    ${stat("info", "Grades given", getGrades().length, "", "grades")}
  </div>
  <div class="grid-2">${card("My schedule this week", week || '<p class="muted">No classes.</p>')}${card("Notices", noticeList(4))}</div>`;
}
function renderTeacherSchedule(el, title) {
  const mine = getClasses().filter((c) => c.teacher === currentUser.name);
  const hours = (c) => (parseInt(c.endTime) * 60 + parseInt(c.endTime.slice(3)) - parseInt(c.time) * 60 - parseInt(c.time.slice(3))) / 60;
  const total = mine.reduce((a, c) => a + hours(c), 0);
  const rows = mine
    .slice()
    .sort((a, b) => DAYS.indexOf(a.day) - DAYS.indexOf(b.day) || a.time.localeCompare(b.time))
    .map((c, i) => `<tr><td class="right">${i + 1}</td><td>${c.day}<br><small class="muted">${c.time} – ${c.endTime}</small></td><td><span class="code">${c.id}</span><br>${c.subject}</td>
      <td>${c.room}</td><td><span class="pill primary">${c.intake}</span></td><td class="num">${hours(c).toFixed(1)}</td></tr>`);
  el.innerHTML = `${pageHead(title)}
  <div class="stats three">
    ${stat("", "My classes", mine.length, "each week", "schedule")}
    ${stat("info", "Teaching hours", total.toFixed(1), "hours a week", "grades")}
    ${stat("success", "Rooms", new Set(mine.map((c) => c.room)).size, [...new Set(mine.map((c) => c.room))].join(", "), "dash")}
  </div>
  <div class="pay-search">
    <div class="fg"><label>Week of</label><input value="${TODAY}" readonly/></div>
    <button class="dark-btn" onclick="openModal('modalAddClass')">Add Class <i>›</i></button>
  </div>
  ${card("My weekly schedule", scheduleGrid(mine, false))}
  <div class="gloss"><div class="gloss-title">My Classes</div><table>
    <thead><tr><th>No</th><th>Day / Time</th><th>Code / Subject</th><th>Room</th><th>Intake</th><th>Hours</th></tr></thead>
    <tbody>${rows.join("") || '<tr><td class="empty" colspan="6">No classes yet</td></tr>'}</tbody>
    <tfoot><tr><td></td><td colspan="4" class="right">${mine.length} classes, total hours:</td><td class="num">${total.toFixed(1)}</td></tr></tfoot>
  </table></div>`;
}
function renderTeacherGrades(el, title) {
  const grades = getGrades();
  el.innerHTML = `${pageHead(title)}
  <div class="stats three">
    ${stat("", "Results", grades.length, "all assessments", "grades")}
    ${stat(tone(average(grades)), "Average score", average(grades) + "%", "across all students", "asgn")}
    ${stat("success", "Passed", grades.filter((g) => pct(g) >= 70).length, "70% and above", "receipt")}
  </div>
  <div class="pay-search">
    <div class="fg"><label for="tgSearch">Index no. / Name / Subject</label><input id="tgSearch" placeholder="STU-001, name or subject" oninput="showTeacherGrades()"/></div>
    <button class="dark-btn" onclick="openAddGrade()">Add Grade <i>›</i></button>
  </div>
  <div id="tgTable"></div>`;
  showTeacherGrades();
}
function showTeacherGrades() {
  const q = document.getElementById("tgSearch").value.trim().toLowerCase();
  const list = getGrades().filter((g) => [g.studentId, studentById(g.studentId).name, g.subject].some((v) => v.toLowerCase().includes(q)));
  const rows = list.map((g, i) => {
    const s = studentById(g.studentId);
    const p = pct(g);
    return `<tr><td class="right">${i + 1}</td><td>${g.date}</td><td><span class="code">${s.id}</span><br>${s.name}</td><td>${g.subject}</td>
      <td><span class="pill info">${g.type}</span></td><td class="num">${g.score}/${g.maxScore}</td><td><span class="pill ${tone(p)}">${letter(p)} (${p}%)</span></td></tr>`;
  });
  document.getElementById("tgTable").innerHTML = `<div class="gloss"><div class="gloss-title">Grade Book</div><table>
    <thead><tr><th>No</th><th>Date</th><th>Index / Name</th><th>Subject</th><th>Type</th><th>Score</th><th>Grade</th></tr></thead>
    <tbody>${rows.join("") || '<tr><td class="empty" colspan="7">No grades match</td></tr>'}</tbody>
    <tfoot><tr><td></td><td colspan="4" class="right">${list.length} results, average:</td><td class="num">${average(list)}%</td><td></td></tr></tfoot>
  </table></div>`;
}
function renderTeacherStudents(el, title) {
  const active = getStudents().filter((s) => s.status === "active");
  const graded = active.map((s) => getGrades().filter((g) => g.studentId === s.id)).filter((g) => g.length).map(average);
  const classAvg = graded.length ? Math.round(graded.reduce((a, b) => a + b, 0) / graded.length) : 0;
  const owing = active.reduce((a, s) => a + Math.max(0, balance(s)), 0);
  el.innerHTML = `${pageHead(title)}
  <div class="stats three">
    ${stat("", "Active students", active.length, "in your classes", "students")}
    ${stat(tone(classAvg), "Class average", classAvg + "%", graded.length + " students graded", "grades")}
    ${stat(owing > 0 ? "danger" : "success", "Fees outstanding", rm(owing), owing > 0 ? "still to collect" : "all paid", "fee")}
  </div>
  <div class="pay-search">
    <div class="fg"><label for="tsSearch">Index no. / Name</label><input id="tsSearch" placeholder="STU-001 or name" oninput="showTeacherStudents()"/></div>
    <button class="dark-btn" onclick="nav('t-grades')">Grade Students <i>›</i></button>
  </div>
  <div id="tsTable"></div>`;
  showTeacherStudents();
}
function showTeacherStudents() {
  const q = document.getElementById("tsSearch").value.trim().toLowerCase();
  const list = getStudents().filter((s) => s.status === "active" && [s.id, s.name].some((v) => v.toLowerCase().includes(q)));
  // no grades yet shows a dash and is left out of the average
  const avgs = list.map((s) => {
    const mine = getGrades().filter((g) => g.studentId === s.id);
    return mine.length ? average(mine) : null;
  });
  const graded = avgs.filter((v) => v !== null);
  const rows = list.map((s, i) => {
    const subs = getSubmissions().filter((sb) => sb.studentId === s.id).length;
    return `<tr><td class="right">${i + 1}</td><td><div class="who">${avatar(s)}<div><span class="code">${s.id}</span><b>${s.name}</b></div></div></td><td><span class="pill primary">${s.intake}</span></td>
      <td class="num">${avgs[i] === null ? '<span class="muted">—</span>' : `<b class="text-${tone(avgs[i])}">${avgs[i]}%</b>`}</td><td class="num">${subs}</td><td>${balancePill(s)}</td></tr>`;
  });
  const classAvg = graded.length ? Math.round(graded.reduce((a, b) => a + b, 0) / graded.length) : 0;
  document.getElementById("tsTable").innerHTML = `<div class="gloss"><div class="gloss-title">My Students</div><table>
    <thead><tr><th>No</th><th>Index / Name</th><th>Intake</th><th>Avg score</th><th>Submitted</th><th>Fee status</th></tr></thead>
    <tbody>${rows.join("") || '<tr><td class="empty" colspan="6">No students match</td></tr>'}</tbody>
    <tfoot><tr><td></td><td colspan="2" class="right">${list.length} students, class average:</td><td class="num">${classAvg}%</td><td colspan="2"></td></tr></tfoot>
  </table></div>`;
}

// student pages
// the course runs 30 months from the intake month
function courseDates(s) {
  const start = new Date(s.intake + "-01");
  const end = new Date(start);
  end.setMonth(end.getMonth() + 30);
  return { start, end, endText: end.toLocaleString("en-GB", { month: "long", year: "numeric" }) };
}
function renderStudentDash(el, title) {
  const s = currentUser;
  const grades = getGrades().filter((g) => g.studentId === s.id);
  const fees = getFees().filter((f) => f.studentId === s.id);
  const { end, endText } = courseDates(s);
  const daysLeft = Math.max(0, Math.floor((end - new Date(TODAY)) / 86400000));
  const today = getClasses().filter((c) => c.intake === s.intake && c.day === "Monday");
  el.innerHTML = `${pageHead(title)}
  <div class="banner">
    ${avatar(s, "lg")}
    <div><h2>Welcome back, ${s.name}</h2><p>${s.program} · Expected to finish ${endText}</p></div>
    <div class="countdown"><div><b>${Math.floor(daysLeft / 365)}</b><span>Years</span></div><div><b>${Math.floor((daysLeft % 365) / 30)}</b><span>Months</span></div><div><b>${daysLeft % 30}</b><span>Days</span></div><div><b>${paidPct(s)}%</b><span>Fees paid</span></div></div>
  </div>
  <div class="stats">
    ${stat("", "Average score", average(grades) + "%", grades.length + " assessments", "grades")}
    ${stat("success", "Fees paid", fees.filter((f) => f.status === "paid").length, "of " + fees.length + " months", "fee")}
    ${stat("info", "Assignments", getSubmissions().filter((sb) => sb.studentId === s.id).length, "submitted", "asgn")}
    ${stat(balance(s) > 0 ? "danger" : "success", "Balance due", rm(balance(s)), balance(s) > 0 ? "Outstanding" : "All paid up", "receipt")}
  </div>
  <div class="grid-2-1">
    ${card("My grade overview", grades.length ? gradeBars(grades) + gradeTable(grades) : '<p class="muted">No grades yet.</p>')}
    <div class="stack">${card("Notices", noticeList(3))}${card("Today's classes", today.map((c) => `<div class="list-item"><div class="grow"><b>${c.subject}</b><small>${c.time} – ${c.endTime} · ${c.room}</small></div></div>`).join("") || '<p class="muted">No classes today.</p>')}</div>
  </div>`;
}
function renderStudentSchedule(el, title) {
  el.innerHTML = pageHead(title) + card(`My class schedule, intake ${currentUser.intake}`, scheduleGrid(getClasses().filter((c) => c.intake === currentUser.intake), true));
}
function renderStudentGrades(el, title) {
  const grades = getGrades().filter((g) => g.studentId === currentUser.id);
  el.innerHTML = `${pageHead(title, `<button class="btn btn-primary btn-sm" onclick="downloadTranscript()">Download Transcript</button>`)}
  <div class="stats three">
    ${stat(tone(average(grades)), "Average score", average(grades) + "%", "", "grades")}
    ${stat("info", "Assessments", grades.length, "", "asgn")}
    ${stat("success", "Passed", grades.filter((g) => pct(g) >= 70).length, "70% and above", "receipt")}
  </div>
  ${card("My results", grades.length ? gradeBars(grades) + gradeTable(grades, { remarks: true }) : '<p class="muted">No grades recorded yet.</p>')}`;
}
function renderStudentAssignments(el, title) {
  const subs = getSubmissions().filter((sb) => sb.studentId === currentUser.id);
  const list = getAssignments()
    .filter((a) => a.intake === currentUser.intake)
    .map((a) => {
      const sub = subs.find((sb) => sb.assignmentId === a.id);
      const tags = sub ? `<div class="tags"><span class="pill success">Submitted ${sub.submittedAt}</span>${sub.grade !== null ? `<span class="pill info">Grade ${sub.grade}/100</span>` : '<span class="pill warning">Waiting for grade</span>'}</div>` : "";
      const actions = sub
        ? `<button class="btn btn-sm" onclick="openSubmitModal('${a.id}')">Resubmit</button>${sub.file ? `<button class="btn btn-sm" onclick="downloadSubmission('${sub.id}')">My File</button>` : ""}`
        : `<button class="btn btn-sm btn-primary" onclick="openSubmitModal('${a.id}')">Submit</button>`;
      return `<div class="asgn"><div class="asgn-mark ${sub ? "done" : ""}">${sub ? ICONS.check : ICONS.asgn}</div><div class="grow"><h3>${a.title}</h3><small class="muted">${a.subject} · Due ${a.due} · Max ${a.maxScore}</small><p>${a.desc}</p>${tags}</div><div class="btn-group">${actions}</div></div>`;
    })
    .join("");
  el.innerHTML = pageHead(title) + card("My assignments", list || '<p class="muted" style="padding:20px">No assignments for your intake.</p>', "", true);
}
function openSubmitModal(asgnId) {
  document.getElementById("submitAsgnId").value = asgnId;
  document.getElementById("submitAsgnTitle").textContent = getAssignments().find((x) => x.id === asgnId)?.title || "";
  document.getElementById("submitNotes").value = "";
  document.getElementById("submitFile").value = "";
  openModal("modalSubmitAsgn");
}
function readFile(input, done) {
  const file = input.files[0];
  if (!file) return done(null);
  const reader = new FileReader();
  reader.onload = (e) => done(e.target.result);
  reader.readAsDataURL(file);
}
function submitAssignment() {
  const asgnId = document.getElementById("submitAsgnId").value;
  readFile(document.getElementById("submitFile"), (file) => {
    const subs = getSubmissions();
    const i = subs.findIndex((s) => s.assignmentId === asgnId && s.studentId === currentUser.id);
    const sub = { id: i >= 0 ? subs[i].id : nextId("SUB", subs), assignmentId: asgnId, studentId: currentUser.id, submittedAt: todayISO(), file, notes: document.getElementById("submitNotes").value, grade: null };
    if (i >= 0) subs[i] = sub;
    else subs.push(sub);
    dbSet(DB.submissions, subs);
    closeModal("modalSubmitAsgn");
    showToast("Assignment submitted", "success");
    refresh();
  });
}
function renderStudentFees(el, title) {
  const s = currentUser;
  el.innerHTML = `${pageHead(title)}
  <div class="stats three">
    ${stat("", "Programme fee", rm(s.feeTotal), "", "fee")}
    ${stat("success", "Paid", rm(s.feePaid), paidPct(s) + "% of total", "receipt")}
    ${stat(balance(s) > 0 ? "danger" : "success", "Balance", rm(balance(s)), balance(s) > 0 ? "Outstanding" : "Fully paid", "schedule")}
  </div>
  ${feeGloss(getFees().filter((f) => f.studentId === s.id), "Outstanding Detail", false)}
  ${receiptGloss(getReceipts().filter((r) => r.studentId === s.id), false)}`;
}
function openUploadSlipModal(feeId) {
  document.getElementById("uploadSlipFeeId").value = feeId;
  document.getElementById("uploadSlipFile").value = "";
  openModal("modalUploadSlip");
}
function uploadSlip() {
  const input = document.getElementById("uploadSlipFile");
  if (!input.files[0]) return showToast("Please choose a file", "error");
  readFile(input, (file) => {
    const fees = getFees();
    fees.find((x) => x.id === document.getElementById("uploadSlipFeeId").value).bankSlip = file;
    dbSet(DB.fees, fees);
    closeModal("modalUploadSlip");
    showToast("Slip uploaded, waiting for admin to check", "success");
    refresh();
  });
}
function renderStudentProfile(el, title) {
  const s = currentUser;
  const { start, end, endText } = courseDates(s);
  const done = Math.min(100, Math.max(0, Math.round(((new Date(TODAY) - start) / (end - start)) * 100)));
  const rows = (pairs) => pairs.map(([k, v]) => `<div class="prog-row"><span>${k}</span><b>${v}</b></div>`).join("");
  el.innerHTML = `${pageHead(title)}
  <div class="banner">${avatar(s, "lg")}<div><h2>${s.name}</h2><p>${s.program}</p></div><div class="countdown"><div><b>${s.id}</b><span>Student ID</span></div><div><b>${s.intake}</b><span>Intake</span></div></div></div>
  <div class="grid-2">
    ${card("Personal information", rows([["Full name", s.name], ["IC / Passport", s.ic], ["Date of birth", s.dob], ["Email", s.email], ["Phone", s.phone], ["Address", s.address]]))}
    <div class="stack">
      ${card("Programme progress", `<div class="prog-row"><span>Course progress</span><b>${done}%</b></div><div class="prog lg"><div style="width:${done}%"></div></div><p class="muted" style="margin-top:10px">Intake ${s.intake} · Expected to finish ${endText}</p>`)}
      ${card("Bank information", rows([["Bank", s.bank], ["Account no", s.acc]]))}
    </div>
  </div>`;
}
function downloadTranscript() {
  const s = currentUser;
  const grades = getGrades().filter((g) => g.studentId === s.id);
  const rows = grades.map((g) => `<tr><td>${g.subject}</td><td>${g.type}</td><td>${g.score}/${g.maxScore}</td><td><b>${letter(pct(g))} (${pct(g)}%)</b></td><td>${g.date}</td></tr>`).join("");
  const css = `body{font-family:Arial,sans-serif;padding:30px;color:#111}.head{display:flex;align-items:center;gap:12px;border-bottom:2px solid #111;padding-bottom:14px;margin-bottom:20px}.head img{width:48px;height:48px;border-radius:50%}table{width:100%;border-collapse:collapse;font-size:13px}th{background:#f5f5f5;text-align:left}th,td{padding:8px;border-bottom:1px solid #ddd}.total{display:flex;justify-content:space-between;margin-top:16px;padding:12px 16px;border:2px solid #111;font-weight:700}`;
  const html = `<div class="head"><img src="${document.querySelector(".brand img").src}"/><div><b>${COMPANY}</b><div>Academic transcript</div></div></div>
    <h2>${s.name}</h2><p>${s.program} · ${s.id} · Intake ${s.intake}</p>
    <table><thead><tr><th>Subject</th><th>Assessment</th><th>Score</th><th>Grade</th><th>Date</th></tr></thead><tbody>${rows}</tbody></table>
    <div class="total"><span>Average</span><span>${average(grades)}%</span></div>`;
  printHTML("Transcript " + s.name, html, css);
}

// modals and forms
function openModal(id) {
  document.getElementById(id).classList.add("open");
}
function closeModal(id) {
  document.getElementById(id).classList.remove("open");
}
const val = (id) => document.getElementById(id).value.trim();
const STUDENT_FIELDS = ["name", "ic", "dob", "email", "phone", "address", "intake", "status", "bank", "acc", "feeTotal", "feePaid"];
function openAddStudent() {
  document.getElementById("ne-edit-id").value = "";
  document.getElementById("modalStudentTitle").textContent = "Add New Student";
  STUDENT_FIELDS.forEach((f) => {
    const el = document.getElementById("ne-" + f);
    el.value = el.tagName === "SELECT" ? el.options[0].value : el.defaultValue;
  });
  openModal("modalAddStudent");
}
function openEditStudent(id) {
  const s = getStudents().find((x) => x.id === id);
  document.getElementById("ne-edit-id").value = s.id;
  document.getElementById("modalStudentTitle").textContent = "Edit Student";
  STUDENT_FIELDS.forEach((f) => (document.getElementById("ne-" + f).value = s[f] ?? ""));
  openModal("modalAddStudent");
}
function saveStudent() {
  if (!val("ne-name")) return showToast("Name is required", "error");
  const editId = val("ne-edit-id");
  const students = getStudents();
  const data = {};
  STUDENT_FIELDS.forEach((f) => (data[f] = val("ne-" + f)));
  data.feeTotal = parseFloat(data.feeTotal) || 12000;
  data.feePaid = parseFloat(data.feePaid) || 0;
  const i = students.findIndex((s) => s.id === editId);
  if (i >= 0) students[i] = { ...students[i], ...data };
  else students.push({ id: nextId("STU", students), program: PROGRAM, avatar: AVATAR_COLORS[students.length % AVATAR_COLORS.length], ...data });
  dbSet(DB.students, students);
  closeModal("modalAddStudent");
  showToast(i >= 0 ? "Student updated" : "Student added", "success");
  refresh();
}
function studentOptions(selected) {
  return getStudents()
    .map((s) => `<option value="${s.id}" ${s.id === selected ? "selected" : ""}>${s.name} (${s.id})</option>`)
    .join("");
}
function openAddFeeModal(studentId) {
  document.getElementById("fee-studentId").innerHTML = studentOptions(studentId);
  openModal("modalAddFee");
}
function openAddGrade() {
  document.getElementById("grd-studentId").innerHTML = studentOptions();
  openModal("modalAddGrade");
}
// save one new row from a modal form
function addRecord(key, prefix, fields, required, extra, modal, msg) {
  const row = {};
  fields.forEach(([name, id]) => (row[name] = val(id)));
  if (required.some((f) => !row[f])) return showToast("Please fill the required fields", "error");
  const list = dbGet(DB[key]) || [];
  const item = { id: nextId(prefix, list), ...row, ...extra(row) };
  key === "notices" ? list.unshift(item) : list.push(item);
  dbSet(DB[key], list);
  closeModal(modal);
  showToast(msg, "success");
  refresh();
}
function saveFee() {
  addRecord("fees", "FEE", [["studentId", "fee-studentId"], ["month", "fee-month"], ["amount", "fee-amount"], ["dueDate", "fee-dueDate"]], ["studentId", "month", "dueDate"],
    (r) => ({ amount: parseFloat(r.amount) || 500, status: "pending", paidDate: null, bankSlip: null, receiptNo: null }), "modalAddFee", "Fee record added");
}
function saveClass() {
  addRecord("classes", "CLS", [["subject", "cls-subject"], ["teacher", "cls-teacher"], ["day", "cls-day"], ["time", "cls-time"], ["endTime", "cls-endTime"], ["room", "cls-room"], ["intake", "cls-intake"]], ["subject", "teacher", "time"],
    () => ({}), "modalAddClass", "Class added");
}
function saveGrade() {
  addRecord("grades", "GRD", [["studentId", "grd-studentId"], ["subject", "grd-subject"], ["type", "grd-type"], ["score", "grd-score"], ["maxScore", "grd-maxScore"], ["date", "grd-date"], ["remarks", "grd-remarks"]], ["studentId", "subject", "score"],
    (r) => ({ score: parseInt(r.score), maxScore: parseInt(r.maxScore) || 100 }), "modalAddGrade", "Grade saved");
}
function saveAsgn() {
  addRecord("assignments", "ASG", [["title", "asgn-title"], ["subject", "asgn-subject"], ["due", "asgn-due"], ["desc", "asgn-desc"], ["intake", "asgn-intake"]], ["title", "subject"],
    () => ({ teacher: currentUser.name, maxScore: 100 }), "modalAddAsgn", "Assignment posted");
}
function saveNotice() {
  addRecord("notices", "NOT", [["title", "ntc-title"], ["body", "ntc-body"]], ["title", "body"], () => ({ date: TODAY, from: currentUser.name }), "modalAddNotice", "Notice posted");
}

function showToast(msg, type = "success") {
  const t = document.createElement("div");
  t.className = "toast " + type;
  t.textContent = msg;
  document.getElementById("toastWrap").appendChild(t);
  setTimeout(() => t.remove(), 3200);
}

// icons
const svg = (body) => `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6">${body}</svg>`;
const ICONS = {
  dash: svg('<rect x="1" y="1" width="6" height="6" rx="1.5"/><rect x="9" y="1" width="6" height="6" rx="1.5"/><rect x="1" y="9" width="6" height="6" rx="1.5"/><rect x="9" y="9" width="6" height="6" rx="1.5"/>'),
  students: svg('<circle cx="8" cy="5" r="3"/><path d="M2 14c0-3.3 2.7-5 6-5s6 1.7 6 5"/>'),
  fee: svg('<rect x="1" y="3" width="14" height="10" rx="1.5"/><path d="M5 8h6M5 11h3"/>'),
  receipt: svg('<path d="M3 1h7l4 4v10H3V1z"/><path d="M10 1v4h4M5 8h6M5 11h4"/>'),
  schedule: svg('<rect x="2" y="3" width="12" height="12" rx="1.5"/><path d="M5 1v4M11 1v4M2 7h12"/>'),
  grades: svg('<polyline points="1,12 5,7 8,10 11,5 15,8"/>'),
  asgn: svg('<rect x="3" y="1" width="10" height="14" rx="1.5"/><path d="M6 5h4M6 8h4M6 11h2"/>'),
  notice: svg('<path d="M8 1a5 5 0 015 5v3l1.5 2H1.5L3 9V6a5 5 0 015-5z"/><path d="M6.5 13a1.5 1.5 0 003 0"/>'),
  settings: svg('<circle cx="8" cy="8" r="2.5"/><path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.1 3.1l1.4 1.4M11.5 11.5l1.4 1.4M3.1 12.9l1.4-1.4M11.5 4.5l1.4-1.4"/>'),
  check: svg('<path d="M3 8.5l3 3 7-7"/>'),
};

dbInit();
