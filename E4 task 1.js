function e4Task1(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

const obj1 = {a:1, b:2};
const obj2 =  Object.create(obj1);
obj2.c = 3;
obj2.d = 4;

e4Task1(obj2);
