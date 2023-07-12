

const task1 = (cb) => setTimeout(() => {
  const message = "Task 1 has executed successfully!";
  cb(message);
}, 3000)

const task2 = (cb) => setTimeout(() => {
  const message = "Task 2 has executed successfully!";
  cb(message);
}, 0)

const task3 = (cb) => setTimeout(() => {
  const message = "Task 3 has executed successfully!";
  cb(message);
}, 1000)

const task4 = (cb) => setTimeout(() => {
  const message = "Task 4 has executed successfully!";
  cb(message);
}, 2000)

const task5 = (cb) => setTimeout(() => {
  const message = "Task 5 has executed successfully!";
  cb(message);
}, 4000)

const asyncTasks = [task1, task2, task3, task4, task5];


const executeInSequenceWithCBs = (tasks, callback) => {
    let messages = [];
    for (const task of tasks) {
      task((message) => {
        messages.push(message);
        if (messages.length === tasks.length) {
          callback(messages);
        }
      });
    }
  };

  const messages = executeInSequenceWithCBs(asyncTasks, (messages) => {
    console.log(messages); 
  });
  