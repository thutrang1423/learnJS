//gọi hàm với call method
function a() {
    console.log('A');
}
a()
a.call()//giống a()


//Mượn hàm (function borrowing)
console.log('  ');
console.log('Mượn hàm');

const teacher = {
    firstName: 'Minh',
    lastName: 'Thu',
}

const me = {
    firstName: "thu",
    lastName: "trang",
    showFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

me.showFullName.call() //call(): hoạt động bắt đầu gọi bind() tiếp theo gọi call()
me.showFullName.call(teacher)

//arguments
console.log('   ');
console.log('arguments');

function logger() {
    console.log(...arguments); //Toán tử spread (...) giúp lấy tất cả đối số và hiển thị chúng
    const arr1 = Array.from(arguments) //trả về mảng
    console.log(arr1);

    Array.prototype.forEach.call(arguments, item => { //gọi method call trong forEach mà trong forEach có this đang chỉ đến mảng. Thì việc dùng call có bind this dến argument, forEach lặp qua argument
        console.log(item);
    })

    const cars = ['BMW', 'Honda']

    cars.forEach(car => { //forEach dùng this để lấy mảng car
        console.log(car);
    })

    const arr = Array.prototype.slice.call(arguments);
    arr.forEach(item => console.log(item))

}
logger(1, 2, 3, 4, 5)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('  ');
console.log('bind + call');

"use strict"
this.firstName = "Son"
this.lastName = "Dang"
function showFullName2() {
    console.log(`${this.firstName} ${this.lastName}`);
}

showFullName2.call()
//nếu không có strict câu lệnh này sẽ chạy đúng trả về son dang this là window
//nhưng vì có strict nên this trong 1 hàm là undefined khi ở strict mode


showFullName2.call(this) //đầu tiến là bind(this) sẽ là bind hay ràng buộc đối tượng window (và strict ghi nhận), sau đó mới call code vẫn sẽ chạy đúng 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('  ');
console.log('tính kế thừa trong lập trình OOP');
//tính kế thừa trong lập trình OOP

function animal(name, weight) {
    this.name = name
    this.weight = weight
}

function chicken(name, weight, legs) {
    animal.call(this, name, weight) //call gọi animal nhưng bind this là object sun 
    this.legs = legs
}

const sun = new chicken('sun', 2, 2)
console.log(sun);
