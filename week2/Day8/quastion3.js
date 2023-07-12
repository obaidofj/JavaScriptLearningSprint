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
