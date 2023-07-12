
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
