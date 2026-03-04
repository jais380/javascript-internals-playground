// List of tasks
const tasks = [
  { id: 101, taskName: "Database Backup", priority: "high", isValid: true },
  { id: 102, taskName: "Send Welcome Email", priority: "low", isValid: true },
  { id: 103, taskName: "Process Payment", priority: "high", isValid: false }, // Corrupted
  { id: 104, taskName: "Sync User Profile", priority: "low", isValid: true },
  { id: 105, taskName: "Generate Monthly Report", priority: "high", isValid: true },
  { id: 106, taskName: "Update Legacy Logs", priority: "low", isValid: false }, // Invalid
  { id: 107, taskName: "Emergency Patch", priority: "high", isValid: true }
];

// List of valid tasks
const cleanTasks = tasks.filter((task) => task.isValid);

// Task runner
function taskRunner(cleanTasks) {

  // Loop through the index of the items in the list
  for(let i= 0; i < cleanTasks.length; i++) {

    // To log messages asynchronously
    setTimeout(() => {

      // Assigns message that meets the specific condition
      let message = cleanTasks[i].priority === "high"
                            ? `[URGENT] Running ${cleanTasks[i].taskName}...`
                            : `[Routine] Running ${cleanTasks[i].taskName}...`;

      // Print message with time lag
      console.log(message);

    }, 2000 * i);
  }
}

// Calling the runner
taskRunner(cleanTasks);

// Space top
console.log("");

// Print first message before the taskRunner, runs
console.log(`>>>>>>>> Total tasks queued for execution: ${cleanTasks.length} <<<<<<<<`);

// space bottom
console.log("");