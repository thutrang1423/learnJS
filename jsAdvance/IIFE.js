/*
IIFE - Immediately Invoked Function Expression : 
       ngay lập tức | gọi hàm      |biểu thức
        
> Self-Invoking Function
---
1.IIFE: là 1 function expression được gọi ngay lập tức. Nó là biểu thức được gọi ra từ 1 hàm 
2. sử dụng khi nào:
dùng để tạo một phạm vi mới cho biến và thuộc tính và hàm không chui ra global và không ảnh hưởng sang phạm vi global
vd: khi viết thư viện có thể tránh để cho thư viện ảnh hưởng đến code trong web của người dùng
dùng IIFE giúp tạo ra những hàm chạy ngay nhưng có phạm vi mới và các đoạn code bên trong không ảnh hưởng tới phạm vi của web của người sử dụng


*/
(function () {
       console.log('Now');
})() //() gọi hàm

       //dùng dấu ; trước IIFE
       ; (() => {
              console.log('Now 2');
       })() //() gọi hàm

       ; (function () {
              console.log('Now 3');
       }())

              + function () { //thêm toán tử phía trước +; -; *; !; / 
                     // những toán tử này sẽ ép function ngay phía sau phải return thằng function phía sau là ()
                     // toán tử sẽ cover function ngay phía sau sang boolean và chạy hàm phía sau là ()
                     console.log('Now 4');
              }()

       ; (function (message) {
              console.log('Message: ', message);
       })('Chào bạn!')

       ; (function (message) {
              console.log('Message 2: ', message);
       })('Chào bạn!')
       /*
       IIFE là 1 hàm "private" nên không thể truy xuất được khi ở bên ngoài, nhưng nếu ở bên trong thì có thể truy xuất được vd đệ quy,
       */
       ; (function myFunc() {
              console.log('Now');
       })()
// myFunc()


let i = 0
       ; (function myFunc1() {
              i++
              console.log(i);
              if (i < 10)
                     myFunc1()
       })()

//khai báo dạng object
const app1 = {
       cars: [],
       add(car) {
              this.cars.push(car)
       },
       edit(index, car) {
              this.cars[index] = car
       },
       delete(index) {
              this.cars.splice(index, 1)
       }
}
console.log('dạng object', app1.cars)
console.log('add dạng object', app1.add('BMW'))
console.log('add dạng object', app1.add('Mazda'))
console.log('dạng object', app1.cars);
console.log('edit dạng object', app1.edit(1, 'Tesla'))
console.log('dạng object', app1.cars)
console.log('delete dạng object', app1.delete(0))
console.log('dạng object', app1.cars)
//dễ mất tính toàn vẹn dữ liệu
//che dấu đi những tính mà ta không muốn public nó giúp ta bảo vệ được dữ liệu của mình hơn
app1.cars = null
console.log('dạng object', app1.cars);
console.log(' ');


console.log('IIFE');
//IIFE : bạn chỉ 
const app2 = (function () {
       //cars được khai báo trong 1 phạm vi mới, trở thành 1 private, không thể bị bên ngoài bị truy cập vào thay đổi 
       const cars = []
       return {
              get(index) {
                     return cars[index]
              },
              add(car) {
                     cars.push(car)
              },
              edit(index, car) {
                     cars[index] = car
              },
              delete(index) {
                     cars.splice(index, 1)
              }
       }
})()

console.log('add IIFE', app2.add('BMW'))
console.log('add IIFE', app2.add('Mazda'))
console.log('IIFE', app2.get(0))
console.log('IIFE', app2.get(1))
console.log('edit IIFE', app2.edit(1, 'Tesla'))
console.log('IIFE', app2.get(0))
console.log('IIFE', app2.get(1))
console.log('delete IIFE', app2.delete(0))
console.log('IIFE', app2.get(0))
console.log('IIFE', app2.get(1))