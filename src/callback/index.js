function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback){
    return callback(num1, num2);
}

console.log(calc(2, 4, sum));

setTimeout(function() {
    console.log('Hola javascript after 2 seconds');
}, 2000)

function gretting(name){
    console.log(`hola ${name}`);
}

setTimeout(gretting, 5000, 'Nelson');
