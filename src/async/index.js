
const functionAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Async!!', 2000))
            : reject(new Error('Error!'));
    });
}

const anotherFn = async () => {
    const something = await functionAsync();
    // waited for promise
    console.log("waited for the promise 01");
    console.log(something);
    // waited for promise
    console.log("waited for the promise 02");
}

console.log('Before call async fn');
anotherFn();
console.log('After call async fn, not blocked');
