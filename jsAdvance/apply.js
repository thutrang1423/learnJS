//Phương thức này cho phép gọi 1 hàm với 1 this (bind) và truyền đối số cho hàm gốc dưới dạng mảng
//apply tương tự phương thức call
const teacher = {
    firstName: "Minh",
    lastName: "Thu",
}

function greet(greeting, message) {
    return `${greeting} ${this.firstName} ${this.lastName}. ${message}`
}

let result = greet.apply(teacher, ['Em chào cô', 'Cô dạy môn gì thế ạ? (Đã xem cô live stream 1 tiếng)']) //các tham số được truyền nằm trong mảng 

console.log(result);

//So sánh với call() method
result = greet.call(teacher, 'Em chào cô', 'Cố dạy môn gì thế ạ? (Đã xem cô live stream 1 tiếng)')

//mượn hàm
console.log('   ');
const teacher1 = {
    firstName: "Minh",
    lastName: "Thu",
    isOnline: false,
    goOnline() {
        this.isOnline = true
        console.log(`${this.firstName} ${this.lastName} is online`);
    },
    goOffline() {
        this.isOffline = false
        console.log(`${this.firstName} ${this.lastName} is offline`);
    }
}

const me = {
    firstName: "thu",
    lastName: "trang",
    isOnline: false
}

console.log("teacher:", teacher1.isOnline);
teacher1.goOnline()
console.log('Teacher:', teacher1.isOnline);

console.log('   ');

console.log('Student: ', me.isOnline);
teacher1.goOnline.apply(me)
console.log('Student:', me.isOnline);


//kế thừa

function animal(name, weight) {
    this.name = name
    this.weight = weight
}

function chicken(legs) {
    animal.apply(this, arguments) //apply gọi animal nhưng bind this là object sun, và khác call là không cần chuyền chính xác tham số
    this.legs = legs
}

const sun = new chicken('sun', 300, 2)
console.log(sun);


/*khác
bind: tạo ra hàm mới và tham chiếu tới thisArument, nhưng không gọi hàm, phải tự chủ động gọi
call: không tạo hàm mới, có nhận thisArgument và chạy ngay, có nhận tham số
apply: không mấy khác call, nhứng nhận tham số từ hàm gốc bằng 1 mảng truyền vào 
*/ 