//this trong js đề cập đên đối tượng mà nó thuộc về, và nó thường nằm trong phương thức


//trong phương thức, this tham chiếu tới đối tượng truy cập phương thức (đối tượng trước dấu .)
const iPhone7 = {
    //thuộc tính - property (thông tin đối tượng)
    name: 'iPhone7',
    color: 'Pink',
    weight: 300,

    //Phương thức - method (chức năng hoạt động thường có động từ viết dạng function)
    takePhoto() {
        console.log('Take a photo');
    },
    objChild: {
        name: "child object",
        methodChild() {
            console.log('iPhone7', this); // this sẽ gọi đến đối tượng mà nó thuộc về là methodChild
        }
    }
}

console.log(iPhone7.takePhoto());
iPhone7.objChild.methodChild()


//object được tạo ra từ hàm tạo
function car(name, color, weight) {
    this.name = name  //this trong hàm tạo đại diện cho đối tượng sẽ được tạo
    this.color = color
    this.weight = weight
    this.run = function () {
        console.log('Running...', this);//this nằm trong phương thức run và nó sẽ trỏ đến đối tượng nó thuộc về là mercedesS450
    }
}
car.prototype.light = function () {
    console.log('light', this);
}

car.prototype.stop = function () {
    console.log('bên ngoài stop', this);

    //context ngữ cảnh hàm
    function test() {
        console.log('test', this); //this trong 1 hàm là đối tượng window
    }
    test()

    //around function không có context
    const test1 = () => {
        console.log(this); //this này sẽ truy cập ra ngoài tìm object gần nhất là Car
    }
    test1()
}

const mercedesS450 = new car('mercedes', 'black', 1200)
console.log(mercedesS450.run());
console.log(mercedesS450.light());




//button là element cũng là 1 object
// const button = document.querySelector('button')

// button.onclick = function () {
//     console.log(this);
//     console.dir(this);//in ra ở dạng object
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Đứng ngoài phương thức, this tham chiếu tới đối tượng global là window
console.log(this);

'use strict'

function myFunc() { //this trong 1 hàm là đối tượng window
    console.log(this); //this là window, this trong 1 hàm là undefined khi ở strict mode
}
myFunc()//sẽ chạy được nếu không có use strict
//nếu dùng use strict sẽ trả về undefine

//sẽ chạy đúng cả khi có use strict 
window.myFunc() //this ở đây sẽ trỏ đến object window



