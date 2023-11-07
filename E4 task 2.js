function e4Task2(str, obj) {
    return str in obj;
}

const obj1 = {a:1, b:2};
const obj2 =  Object.create(obj1);
obj2.c = 3;
obj2.d = 4;

console.log(e4Task2('a', obj2));
console.log(e4Task2('b', obj2));
console.log(e4Task2('c', obj2));
console.log(e4Task2('d', obj2));
console.log(e4Task2('e', obj2));
