const tasks = [
  { id: 101, taskName: "Database Backup", priority: "high", isValid: true },
  { id: 102, taskName: "Send Welcome Email", priority: "low", isValid: true },
  { id: 103, taskName: "Process Payment", priority: "high", isValid: false }, // Corrupted
  { id: 104, taskName: "Sync User Profile", priority: "low", isValid: true },
  { id: 105, taskName: "Generate Monthly Report", priority: "high", isValid: true },
  { id: 106, taskName: "Update Legacy Logs", priority: "low", isValid: false }, // Invalid
  { id: 107, taskName: "Emergency Patch", priority: "high", isValid: true }
];

const cleanTasks = tasks.filter((task) => task.isValid);

