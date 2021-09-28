const getHelloWorldPromise = () => {
    return new Promise((resolve, reject) => {
            resolve("Hello world");
    });
};

let x = 8
console.log(typeof x);

let y = "Hello"
console.log(typeof y);