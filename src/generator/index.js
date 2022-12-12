function* gen(){
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

//////////////////////
function* iterable(array){
    for (let value of array){
        yield value;
    }
}

const iterator = iterable(['oscar', 'lucia', 'juand', 'pablo']);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value); // undefined, because there isn't further values