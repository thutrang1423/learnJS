/*
1. Value types(Primitive data types) kiểu dữ liệu nguyên thuỷ đặc điểm là tại cùng 1 thời điểm chỉ có thể lưu 1 giá trị
String
Number
Boolean
BigInt
Symbol
Underfined
null

2. Reference types (non-primitive data types) nhóm đối tượng
object
array (object đặc biệt)
function (object đặc biệt)

Data types with functions
Value types
Reference types
*/

// Value types
var a = 1
var b = a

a = 2
console.log(b);


function sum(a, b) { //trong phạm vi hàm tạo ra 2 ô nhớ mới và đưa giá trị tham số vào 
    a = 0
    b = 0
    console.log(a, b);
}

const d = 1
const e = 2
sum(d, e)
//ô nhớ d,e hoàn toàn không cùng ô nhớ a,b trong hàm
console.log(d, e);


////////////////////////////////////////////////////////////////////////////////////////////////////


//Reference types (kiểu tham chiếu)
const a = { //tạo ra object và lưu địa chỉ ô nhớ vào biến a 
    name: 'Mercedes'
}

const b = a //gán địa chỉ ô nhớ của biến a đó cho biến b => a, b cùng dùng chung 1 địa chỉ vùng nhớ

a.name = "BMW"  //sữa giá trị biến a thì cũng thay đổi cả b

console.log(b.name);

//chỉ khi tạo ra 1 object mới hay 1 array mới mới có 1 vùng nhớ mới được tạo ra
let c = {
    name: 'Mercedes' //lưu 1 ô nhớ 
}
c = { //tạo ra 1 ô nhớ mới
    name: 'BMW',
    model: "i8"
}

const student = { //tạo ô nhớ 002 và có tham chiếu ô nhớ 001
    name: 'thu trang',
    profile: { //tạo ô nhớ 001
        firstName: 'thu',
        lastName: 'trang',
        introduction: 'Girl'
    }
}



function func(obj) {
    obj.name = "Mercedes" //từ địa chỉ trong a trỏ đến sửa giá trị trong object
    console.log(obj);
}

const a = {
    name: 'BMW'
} //lưu địa chỉ của object vào ô nhớ a

func(a) //truyền ô nhớ a chứa địa chỉ object

//vì giá trị object chỉ có 1 ô nhớ 
console.log(a);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//sửa lỗi code
function createCar(obj) {
    obj.name = "Mercedes"
    return obj
}

const car = {
    name: 'BMW'
}
const newCar = createCar(car)
console.log(car);
console.log(newCar);



//cách 1
function createCar1(obj) {
    //JSON.stringify(obj): Chuyển đổi obj thành một chuỗi JSON
    //JSON.parse(): chuyển chuối json thành javascript thành chuỗi oject mới
    //nó đã tạo thành object mới ra 1 phạm vi mới 
    obj = JSON.parse(JSON.stringify(obj))
    obj.name = "Mercedes1" //nó đã sữa object mới ở vùng nhớ mới 
    return obj
}

const car1 = {
    name: 'BMW1'
}
const newCar1 = createCar1(car1)
console.log(car1);
console.log(newCar1);
/*khuyết điểm:
nếu object mới mà có dung lượng quá lớn sẽ ảnh hưởng tới performance vì nó phải mã hoá và giải mã 
nếu object car1 rất là sau, nhiều lớp thì nó giúp triệt để tạo ra nhiều cùng nhớ mới cho cả object cha và con, và có thể chỉnh sữa thoải mái không ảnh hưỡng tới những object khác 
*/


//cách 2
function createCar2(obj) {
    obj = { ...obj }//tạo object mới và rải object củ trong object mới
    obj.name = "Mercedes2"
    return obj
}

const car2 = {
    name: 'BMW2'
}
const newCar2 = createCar2(car2)
console.log(car2);
console.log(newCar2);
//chỉ dùng cho object car2 chỉ có 1 cấp mới dùng cách này
//nếu nhiều cấp chứa object con thì object con vẫn trỏ địa chỉ cũ


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Pass by value (truyền theo giá trị)
1. sao chép giá trị của biến: let y=x 
2. truyền bản sao vào bên trong hàm
Đặc điểm: gán lại tham số trong hàm, không làm thay đổi biến bên ngoài hàm*/
function changeValue(y) {
    y = 20;
}
let x = 10;
changeValue(x)
console.log(x);


// JS không có Pass by reference
/*Pass by reference (truyền theo tham chiếu)
truyền trực tiếp tham chiếu của biến vào bên trong hàm
Đặc điểm: gán lại tham số trong hàm, ngay lập tức biến ngoài hàm cũng bị thay đổi*/
function changeValue2(y) {
    //1
    y = { name: 'Bob' } //gán tạo object mới
    //2
    //y.name = 'Bob'; //gán giá trị mới cho thuộc tính object cũ
}
let x2 = { name: 'John' };
changeValue2(x2);

/*
//1
stack              head
|x2  #001|        |001 "john"|
|y   #001|        |001 "john"|
|y   #002|        |002 "Bob" |

//2
stack              head
|x2  #001|        |001 "john"|
|y   #001|        |001 "john"|
|y   #001|        |001 "Bob"|
*/