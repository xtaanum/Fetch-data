function add(a, b) {
  return a + b;
}

//async
const asyncadd=(a,b)=>{
return a + b;
}

function subtract(a, b) {
    return a-b;
}

//async
const asyncsubtract=(a,b)=>{
    return a - b;
}


function multiply(a, b) {
    return a*b;
}

//async
const asyncmultiply=(a,b)=>{
    return a * b;
}

console.log(asyncadd(5, 10));
console.log(asyncsubtract(10, 5));
console.log(asyncmultiply(5, 10));

//promise
const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Data loaded successfully!");
  }, 2000);
});

myPromise.then((message) => {
  console.log(message);
});

//Error handling
const failedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Something went wrong!");
  }, 2000);
});

failedPromise.catch((error) => {
  console.log(error);
});

//user loader

const loadUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve("User loaded successfully!");
      } else {
        reject("Failed to load user.");
      }
    }, 2000);
  });
};

loadUser()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

  const NewloadUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve("User loaded successfully!");
      } else {
        reject("Failed to load user.");
      }
    }, 2000);
  });
};

const getUser = async () => {
  try {
    const message = await loadUser();
    console.log(message);
  } catch (error) {
    console.log(error);
  }
};

getUser();