interface HelloWorldResponse {
    message: string;
  }
  
  interface BooleanResponse {
    value: boolean;
  }
  
  interface ReturnObjResponse {
    x: string;
    y: number;
  }
  
  const sayHelloWorld = new Promise<HelloWorldResponse>((resolve, reject) => {
    resolve({ message: "Hello world!" });
  });
  
  const checkBoolean = (boolean: boolean) => new Promise<BooleanResponse>((resolve, reject) => {
    if (boolean) {
      resolve({ value: boolean });
    } else {
      reject(`Input is false :(`);
    }
  });
  
  const returnObj = new Promise<ReturnObjResponse>((resolve, reject) => {
    resolve({
      x: "meow",
      y: 45,
    });
  });
  
  const promisesArray = [sayHelloWorld, checkBoolean(true), returnObj];
  
  const convertToObj = (array: Promise<any>[]) => {
    return Promise.all(array.map((promise, index) => promise.then((value) => ({ [`result${index}`]: value })).catch((error) => ({ [`error${index}`]: error }))))
      .then((values) => values.reduce((acc, value) => ({ ...acc, ...value }), {}));
  };
  
  convertToObj(promisesArray)
    .then((obj) => console.log(obj))
    .catch((error) => console.error(error));
  