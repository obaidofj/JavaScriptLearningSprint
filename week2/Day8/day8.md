
# Day 8 : JavaScript: The Hard Parts, V2 : Promises 
## - day :eight:

This day a bout promises and how can be used

## Lesson Summary

promises are a way to do asynchronas programing so they defined by promise object wich constructor take two arguments each as a function and we can take the result of promise by using 
.then and if error occure we can catch it by .catch
## Coding Examples

```javascript
// simple example for promise 
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello, world!");
  }, 1000);
});

promise.then((result) => {
  console.log(result); // Hello, world!
});

```



#### My Solution


1. ### [Practice about Async JavaScript and Promises](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day3-tasks/tasks.md)

```javascript

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

```


2. ### [Practice about Async JavaScript and Promises](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day3-tasks/tasks.md)

```javascript

const apis = [
    {
      apiName: "products", 
      apiUrl: "https://dummyjson.com/products",
    }, 
    {
      apiName: "users", 
      apiUrl: "https://dummyjson.com/users",
    }, 
    {
      apiName: "posts", 
      apiUrl: "https://dummyjson.com/posts",
    }, 
    {
      apiName: "comments", 
      apiUrl: "https://dummyjson.com/comments",
    }
  ]

const executeInParallelWithPromises = apis => {
  const promises = [];
  for (const api of apis) {
    const promise = fetch(api.apiUrl)
      .then(response => response.json())
      .then(data => ({
        apiName: api.apiName,
        apiUrl: api.apiUrl,
        apiData: data
      }));
    promises.push(promise);
  }

  return Promise.all(promises);
};

(async()=>{
const results = await executeInParallelWithPromises(apis);
console.log(results);
})()


```


3. ### [Practice about Async JavaScript and Promises](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day3-tasks/tasks.md)

```javascript
const apis = [
  {
    apiName: "products",
    apiUrl: "https://dummyjson.com/products"
  },
  {
    apiName: "users",
    apiUrl: "https://dummyjson.com/users"
  },
  {
    apiName: "posts",
    apiUrl: "https://dummyjson.com/posts"
  },
  {
    apiName: "comments",
    apiUrl: "https://dummyjson.com/comments"
  }
];

const executeInSequenceWithPromises = apis => {
  let results = [];

  for (const api of apis) {
    const promise = fetch(api.apiUrl)
      .then(response => response.json())
      .then(data => ({
        apiName: api.apiName,
        apiUrl: api.apiUrl,
        apiData: data
      }));

    promise.then(result => {
      results.push(result);
    });
  }

  return results;
};

const results = executeInSequenceWithPromises(apis);

console.log(results);

```