//khai báo strict mode
//phải đặt lên đầu và không có 1 dòng code nào trên nó
// "use strict"

//lỗi quên khai báo biến
fullname = "thu trang"
function testFunc() {
    "use strict";
    age = 18 //thành biến global
}
testFunc
console.log(age);

//object không thể xoá, chỉ có thể sữa và xoá thuộc tính
const student4 = {
    fullName: "thu trang"
}
delete student4 //báo lỗi khi xoá object
console.log(student4);
//lỗi khai báo object có những thuộc tính không thể sửa
//khi code sai thì nó không chạy nhưng không báo lỗi, strict mode sẽ báo lỗi tránh bị nhầm

const student1 = {
    fullname1: "Nguyen Van A"
}
student1.fullname1 = "Nguyen Van B"
console.log(student1); //wriable =>true có thể viết lại

const student2 = Object.freeze({ //object bị đóng băng không thể chỉnh sửa, wriable =>false
    fullname2: "Nguyen Van C"
})
student2.fullname2 = "Nguyen Van D" //báo lỗi khi sửa thuộc tính không cho sữa
console.log(student2);



const student3 = {}
Object.defineProperty(student3, "fullName", { //mặc định không thể sửa
    value: "Nguyen Van E",
})
student3.fullName = "Nguyen Van F" //báo lỗi khi sửa thuộc tính không cho sữa
console.log(student3);

const student3 = {}
Object.defineProperty(student3, "fullName", {
    value: "Nguyen Van E",
    writable: true //cho sửa
})
student3.fullName = "Nguyen Van F"
console.log(student3);


//nhầm tham số
function sum(a, a) { //2 tham số giống nhau, tham số sau ghi đè tham số trước
    return a + a
}
console.log(sum(6 + 9));


//khai báo hàm trong code block thì hàm sẽ thuộc phạm vi code block
{

    function sum(a, b) {
        return a + b
    }

}
console.log(sum(1, 2));

//không đặt tên biến tên hàm bằng 1 số từ khoá "nhạy cảm" của ngôn ngữ
const private = 123
console.log(private);

/* Công dụng
Tránh quên từ khoá khai báo biến
Tránh trùng tên biến lẫn tới lỗi logic
Sử dụng bộ nhớ hiệu quả vì tránh tạo biến global
*/