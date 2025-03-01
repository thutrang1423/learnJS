// built in những hàm được xây dựng xẵn chỉ cần lấy ra dùng
// alert
// console
// confirm
// prompt
// set Timeout
// set Interval

console.log()
console.error()
console.warn()

confirm("xác nhận bạn đủ tuổi")

prompt("nhập tên của bạn")

setTimeout(function () {
    console.log("timeOut" + 1);
}, 1000)

setInterval(function () {
    console.log('interval' + 2)
}, 2000);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//boolean
//dk false: 0, false, undefined, NaN, null, ""

//toán tử logical &&, ||, !

/**
 dữ liệu nguyên thuỷ - primitive data
 number, string, boolean, undefined, null, symbol(unique)
 dữ liệu phức tạp - complex data
 function, object
 */

console.log("Thu \"trang");

text = "day là dau \\"
console.log(text);
console.log(text.length);



var myFunction = function () {
    alert('Hi')
}
myFunction();

var myObject = {
    name: 'trang',
    age: 20,
    address: 'tp hcm',
    myFunction() {
    }
}
console.log('myObject', myObject);


var myArray = [
    'js',
    'PHP',
    'java'
]
console.log(myArray);

console.log(typeof myObject);
