const mapAsync = (arr, callback) => {
  return new Promise((resolve, reject) => {
    if (Array.isArray(arr)) {
      resolve(arr.map(async item => await callback(item)));
    } else {
      reject("error in parameters");
    }
  });
};

mapAsync([1, 2, 3, 4, 5], item => item + 4)
  .then(res => console.log(res))
  .catch(err => console.log(err));
