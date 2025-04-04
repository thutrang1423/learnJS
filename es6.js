/*
ECMAScript 6 - ECMAScript 2015 - ES6
là 1 quy chuẩn được ra đời bởi tổ chức ECMA International. Được tạo ra để tiêu chuẩn hoá js
mỗi phiên ra 1 vài keywork tính năng hay bớt đi một vài đều do ECMAScript này thay đổi 

scope:phạm vi hoạt động
assignment: hành vi gán lại giá trị cho biến
code block: khối code 
 */

// Template Literals
const courseName = 'Javascript'
const courseName2 = 'Java'
const description = `Course name:${courseName} ${courseName2}`;
console.log(description);
console.log(`Template string nội suy với: \${}`);
console.log(`\\`);

// Multi-line String
const lines = 'Line 1\nLine 2\n'
    + 'Line 3\n'
    + 'Line 4\n'
console.log(lines);

const lines2 = `Line 1
Line 2
Line 3`
console.log(lines2);

//Arrow function

const logger = (log) => {
    console.log(log);
}
logger('Message...')

const logger2 = log => console.log(log);
logger2('Message2...');

const sum = (a, b) => a + b
console.log(sum(2, 2));

const value = (a, b) => ({ a: a, b: b })
console.log(value(2, 2));

//arrow function không có context (this là context)
const course = {
    name: 'JS',
    getName: () => {
        return this;
    }
};
console.log(course.getName());
//arrow function cũng không thể dùng là object constructor

//Classes

// function Course(name, price) {
//     this.name = name;
//     this.price = price;

//     this.getName = function(){
//         return this.name;
//     }
//     const isSuccess = false;
// }

//tương tự
class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price
    }

    getName() {
        return this.name
    }

    getPrice() {
        return this.price;
    }

    start() {
        const isSuccess = false;

        if (true) {
            isSuccess = true
        }
    }
}

const JsCourse = new Course('Javascript', 100);
const JavaCourse = new Course('Java', 200);
console.log(JavaCourse);
console.log(JsCourse);

//Default parameter values : định nghĩa ra những giá trị mặc định cho những tham số

function logger3(log = 'giá trị mặc định') {
    console.log(log);
}
logger3()
logger3('Message3')

function logger4(log, isAlert = false, type = 'log') {
    if (isAlert) return alert(log);
    console[type](log);
}
logger4('message4', true, '')
logger4('message4', false, 'warn')
logger4('message4', false, 'error')

//Enhanced object literals
/*
1. Định nghĩa key: value cho object
2. Định nghĩa method cho object
3. Định nghĩa key cho object dưới dạng biến 
 */

var name = 'javascript'
var price = 100;

// var course2 = {
//     name: name,
//     price: price,
//     getName: function () {
//         return name;
//     }
// }

//tương tự
var fieldName = 'new-name';

var course2 = {
    name,
    price, //Định nghĩa key: value cho object
    [fieldName]: 'JS', //Định nghĩa key cho object dưới dạng biến 
    getName() { //Định nghĩa method cho object
        return name;
    }
}
console.log(course2);

//Desctructuring

var array = ['js', 'C', 'SQL', 'C#']

var [a, b, c] = array
console.log(a, b, c);

var [a, , c] = array;
console.log(a, c);

var [a, b, ...rest] = array; //rest parameters là (...) (những elements còn lại)
console.log(a);
console.log(rest);


var course3 = {
    name: 'JS',
    price: 100,
    image: 'image-address',
    children: {
        name: 'reactJS'
    },
}
var { name, price, price2, image, description2 = 'default description ' } = course3
console.log(name, price, price2, image, description2);

var { name, ...rest } = course3
console.log(rest);

//cách đổi tên key của object
var { name: parentName, children: { name } } = course3
console.log(parentName);
console.log(name);

var { name: parentName, children: { name: childName } } = course3
console.log(parentName);
console.log(childName);

function logger5(a, b, ...params) {
    console.log(params); //dùng rest để truyền vào tham số thì tham số sẽ trở thành mảng
}
logger5(1, 2, 3, 4, 5, 6, 7, 8, 9);


function logger6({ name, price, ...rest }) {
    console.log(name);
    console.log(price);
    console.log(rest);
}
logger6({
    name: 'javascript',
    price: 100,
    newName: 'JS',
    description: 'description content'
});

function logger7([a, b, ...rest]) {
    console.log(a);
    console.log(b);
    console.log(rest);
}
logger7([0, 2, 4, 6, 8, 1, 3, 5, 7, 9])

//Spread
var array1 = ['JS', 'java', 'PHP']
var array2 = ['C', 'C++', 'C#']
var array3 = [...array1, ...array2];
console.log(array3);

var object1 = {
    name: 'JS'
}
var object2 = {
    des: 'content',
    price: 200
}
var object3 = {
    ...object1,
    ...object2,
    price: 300
}
console.log(object3);

var array4 = ['JS', 'java', 'C', 'PHP']
function logger8(...rest) { //định nghĩa ra tham số là rest
    console.log(rest);
    console.log(...rest); //chuyển rest thành spread
    for (var i = 0; i < rest.length; i++) {
        console.log(rest[i]);
    }
}
logger8(...array4) //nếu dùng truyền đối số thì đây là spread

//Tagged template literals
function highlight([first, ...strings], ...values) {
    // console.log(rest)
    // console.log('first: ', first);
    // console.log('strings: ', strings);
    // console.log('values: ', values);
    return values.reduce(
        (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
        [first]
    ).join('');
}

var brand = 'F8'
var course4 = 'Javascript'

const html = highlight`Học lập trình ${course4} tại ${brand} online!`
console.log(html);

//Modules: Import / Export
//Optional chaining(?.)
