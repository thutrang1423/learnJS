/**
 * Hàm: 1 khối mã và làm 1 việc cụ thể
 * 1.Built-in
 * 2.Tự định nghĩa
 * tính chất:
 * không thực thi khi định nghĩa
 * sẽ thực thi khi được gọi
 * có thể nhận tham số
 * có thể trả về 1 giá trị
 */

//a-z A-Z 0-9 _ $ không để số ở đầu

var text = 'Hi';

function chao(message) {
    alert(message);
    a = 1 + 1;
    return (a)
}

// chao();
console.log(chao(text));

/** 
 * tham so: 
 * dinh nghia:lad 1 giá trị truyền vào khi gọi 1 function
 * không giới hạn kiểu dữ liệu
 * tinh private(phạm vi hoạt động của tham số hay biến khai báo trong function thì chỉ hoạt động trong function đó)
 * 
 * Argument:
 * là đối tượng có sẵn trong function
 * giúp lấy tất cả tham số chuyền vào function mà không cần phải định nghĩa tất cả tham số */

//console.log

function consoleLog() {
    for (let param of arguments) {
        console.log(param);
    }
}

consoleLog('a', 'b', 'c')

// function trùng tên thì function sau ghi đè function trước

/**
 * các loại function
 * 1. Declaration function
 * 2. Expression function
 * 3. Arrow function
 */

//Declaration function (phải có tên function để xác định)
//có thể gọi trước khi được định nghĩa
function name() {

}


//Expression function (có hoặc không tên function và tên function chỉ để biết hoạt động của function)

var name = function () {

}

setTimeout(function () {

});

var myObject = {
    myFunction: function () {

    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// làm việc với chuỗi
var myString = 'Hoc lap trinh js   js '
// length
console.log(myString.length);

// find index
console.log(myString.indexOf('js'));
console.log(myString.indexOf('js', 16));
console.log(myString.lastIndexOf('js'));
console.log(myString.search('js'));

// cut string
console.log(myString.slice(14, 17));
console.log(myString.slice(0));
console.log(myString.slice(-3, -1));

// replace
console.log(myString.replace('js', 'Javascript'));
console.log(myString.replace(/js/g, 'Javascript'));

// convert to upper case
console.log(myString.toUpperCase());

// convert to lower case
console.log(myString.toLowerCase());

// trim (xoá bỏ khoảng cách thừa ở 2 đầu)
var myString1 = '     Hoc lap trinh js    '
console.log(myString1.trim());

// split (chuyển string sang array)
var languages = 'js, C, python'
console.log(languages.split(', '));

var language = 'javascript'
console.log(language.split(''));

// get a character by index
console.log(myString.charAt(2));
console.log(myString.charAt(30));
console.log(typeof myString.charAt(20));
console.log(myString[2]);
console.log(myString[30]);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//làm việc number
//NaN là 1 số không hợp lệ
//cách kiểm tra có phải là NaN không
var result = 20 / 'abc'
console.log(isNaN(result));

//đổi số thành string
var pi = 3.14;
console.log(pi.toString());

//đổi string thành number
let str = "123";
let num = Number(str);
console.log(num); // Output: 123

let str1 = "123";
let num1 = parseInt(str, 10); // 10 là cơ số (radix) của hệ thập phân
console.log(num); // Output: 123

let str2 = "123.45";
let num2 = parseFloat(str);
console.log(num); // Output: 123.45

//làm tròn số (làm tròn và đổi thành string)
console.log(pi.toFixed(''));
console.log(pi.toFixed('1'));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//làm việc với array
//kiểm tra có phải array không ngoài cách dùng typeof
console.log(Array.isArray(new Array(1, 2, 3)));

//đổi array sang string 
var languages = [
    'js',
    'c',
    'java'
];
//(không thể xoá dấu phẩy ngăn cách element)
console.log(languages.toString());
//có thể thay đổi ngăn cách string
console.log(languages.join('-'));

//Pop (xoá phần tử cuối mảng và trả phần tử đã xoá)
console.log(languages.pop());

//Push (thêm 1 hoặc nhiều phần tử vào cuối mảng và trả về chiều dài mới của mảng)
console.log(languages.push('C#', 'PLSQL'));
console.log(languages);

//Shift (xoá phần tử đầu mảng và trả phần tử đã xoá)
console.log(languages.shift());

//Unshift (thêm 1 hoặc nhiều phần tử vào đầu mảng và trả về chiều dài mới của mảng)
console.log(languages.unshift('C++'));
console.log(languages);

//Splicing (xoá, cắt, chèn phần tử mới vào mảng)
//splice(vị trí index đặt con trỏ, số phần tử muốn xoá, phần tử được chèn thêm)
console.log(languages.splice(1, 2)); //trỏ tới index = 1, và xoá 2 phần tử là phần tử có index = 1 và 2 trả phần tử đã xoá
console.log(languages.splice(1, 0, 'PHP')); //trỏ tới index = 1, và xoá 0 phần tử và chèn thêm phần tử mới vào vị trí index = 1 và trả về 0 phần tử đã xoá
console.log(languages);
console.log(languages.splice(1, 1, 'TSQL')); //trỏ tới index = 1, và xoá 1 phần tử có index = 1 và chèn thêm phần tử mới vào vị trí index = 1 và trả về phần tử đã xoá
console.log(languages);

//concat (nối mảng) 
var so1 = [1, 2, 3]
var so2 = [4, 5, 6]
console.log(so1.concat(so2));

//slicing(cắt 1 hoặc nhiều element của mảng và trả về phần đã cắt và trả về phần tử đã cắt nhưng không thật sự cắt element trong mảng thật)
//slice(vị trí index bắt đầu cắt, vị trí index ngừng lại việc cắt) 
console.log(languages.slice(1, 3)); //cắt element từ vị trí số 1 đến số 3 thì ngừng cắt element 1 và 2
console.log(languages.slice(1)); //cắt element từ vị trí số 1 đến hết mảng là chỉ còn element 0
console.log(languages.slice(0)); //copy mảng
console.log(languages.slice(-2, -1)); //có thể lấy ngược mảng
console.log(languages);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//làm việc với object (dùng để lưu thông tin của 1 dối tượng cụ thể)
var gmailKey = 'gmail';

var myInfo = {
    //thuộc tính -> property
    name: 'Thu Trang',
    age: 18,
    address: 'HCM, VN',
    [gmailKey]: '123@gmail.com',
    //fuction gọi là phương thức -> method
    getName: function () {
        return this.name
    }
}

myInfo.email = 'thutrang@gmail.com';
//nếu muốn thêm ký tự đặc biệt vào key vd -
myInfo['my-email'] = 'thutrang1@gmail.com';
var myKeyAddress = 'address';

console.log(myInfo);
console.log(myInfo.age);
console.log(myInfo['age']);
console.log(myInfo[myKeyAddress]);
console.log(myInfo.gmail);

delete myInfo['my-email']
delete myInfo.age
console.log(myInfo);
console.log(myInfo.getName());

//object constructor
//viết hoa chữ cái đầu của tên object constructor để phân biệt với function thường
function User(firstName, lastName, avatar) {
    //this nằm ngoài mô tả những thuộc tính, phương thức sẽ có cho đối tượng khi khởi tạo object constructor 
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar
    this.getName = function () {
        //this ở trong phương thức thì được gọi từ đối tượng đã được tạo ra và gọi đối tượng nào thì nó sẽ lấy giá trị đối tượng đó
        return `${this.firstName} ${this.lastName}`
    }
}
//cách 2
var User = function (firstName, lastName, avatar) {
    //this nằm ngoài mô tả những thuộc tính, phương thức sẽ có cho đối tượng khi khởi tạo object constructor 
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar
    this.getName = function () {
        //this ở trong phương thức thì được gọi từ đối tượng đã được tạo ra và gọi đối tượng nào thì nó sẽ lấy giá trị đối tượng đó
        return `${this.firstName} ${this.lastName}`
    }
}

var author = new User('Son', 'Dang', 'Avatar1')
var customer = new User('Thu', 'Trang', 'Avatar2')

author.title = 'Chia sẻ'
customer.ask = 'question 1'

console.log(author);
console.log(customer);
console.log(customer.constructor === User); //kiểm tra có đúng cùng bảng thiết kế constructor không
console.log(customer.getName());

/*Object prototype 
Nguyên mẫu để tạo lên 1 đối tượng: nguyên liệu để tạo 1 đối tượng
dùng để add thêm thuộc tính và phương thức cho object constructor ở bên ngoài sau khi object constructor đã làm xong
*/
User.prototype.className = 'F8'; //thuộc tính và phương thức này sẽ nằm trong hàm __proto__
User.prototype.getClassName = function () {
    return this.className
}
console.log(customer.className);
console.log(author.getClassName());

//object Date
var date1 = Date() //lấy kiểu string
console.log(typeof date1);
console.log(date1);

var date = new Date(); //lấy kiểu object
console.log(typeof date);
console.log(date);
console.log(date.toString());
//lấy kiểu string mới có thể trích xuất được năm, tháng, ...
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var hour = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
console.log(month);
console.log(`${day}/${month}/${year}`);
//Math object
console.log(Math.PI);
console.log(Math.round(1.6));//làm tròn thành số nguyên
console.log(Math.abs(-2));//số tuyệt đối
console.log(Math.ceil(1.2));//làm tròn trên
console.log(Math.floor(1.9));//làm tròn dưới
console.log(Math.random()); //random ra số thập phân ngẫu nhiên
console.log(Math.floor(Math.random() * 10)); //random 1-10
var random = (Math.floor(Math.random() * 5));
var bonus = ['10', '20', '30', '40', '50']
console.log(bonus[random]);

var random1 = (Math.floor(Math.random() * 100));
if (random1 < 5) {
    console.log('chúc mừng bạn');
}
console.log(Math.min(1, 9, 5, 7, 2, 4, 0));
console.log(Math.max(1, 9, 5, 7, 2, 4, 0));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//giá trị truyền vào switch và case phải cùng kiểu dữ liệu cùng string hay number

var date = 3;

switch (date) {
    case 2:
        console.log('thứ 2');
        break;

    case 3:
        console.log('thứ 3');
        break;

    case 4:
        console.log('thứ 4');
        break;

    case 5:
        console.log('thứ 5');
        break;

    case 6:
        console.log('thứ 6');
        break;

    case 7:
        console.log('thứ 7');
        break;

    default:
        console.log('chủ nhật');
}

switch (date) {
    case 2:

    case 3:

    case 4:
        console.log('thứ 2,3,4');
        break;

    case 5:

    case 6:

    case 7:
        console.log('thứ 5,6.7');
        break;

    default:
        console.log('chủ nhật');
}

var course = {
    name: 'javascript',
    coin: 250
}
var result = course.coin > 0 ? `${course.coin} Coins` : 'free'
console.log(result);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//vòng lặp for in có thể dùng cho object
for (var key in myInfo) {
    console.log(key + ' ' + myInfo[key]);
}

for (var language in languages) {
    console.log(language + ' ' + languages[language]);
}

var language = 'java';
for (var key in language) {
    console.log(language[key]);
}

//vòng lặp for of không dùng cho object
for (var value of languages) {
    console.log(value);
}
for (var value of language) {
    console.log(value);
}

//đưa tất cả key của object vào thành 1 mảng
console.log(Object.keys(myInfo));
for (var key of Object.keys(myInfo)) {
    console.log(myInfo[key]);
}

//đưa tất cả value của object vào thành 1 mảng
console.log(Object.values(myInfo));
for (var value of Object.values(myInfo)) {
    console.log(value);
}

var i = 1;
while (i < 10) {
    console.log(i);
    i++;
}

var i = 0;
var isSuccess = false;

do {
    i++;
    console.log('Nạp thẻ lần ' + i);
    //nếu đúng 1 lần
    //nếu sai thì chỉ được nhập lại 3 lần
    if (true) {
        isSuccess = true
    }
} while (!isSuccess && i <= 3)

for (var i = 1; i < 10; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}

for (var i = 1; i < 10; i++) {
    if (i == 6) {
        break;
    }
    console.log(i);
}

//đệ quy
var array = [1, 2, 3, 2, 3, 1, 2, 3, 1]
console.log(new Set(array));
console.log([...(new Set(array))]); //cách chuyển Set thành mảng

var array1 = []
for (var i = 0; i < array.length; i++) {
    var unique = true;
    for (var j = 0; j < array1.length; j++) {
        if (array[i] == array1[j]) {
            unique = false;
            break
        }
    }
    if (unique == true) {
        array1.push(array[i])
    }
}
console.log(array1);

///đệ quy sẽ tìm đủ số từ 3->1
//sau đó mới nhân ngược từ 1->3
function giaiThua(num) {
    if (num > 0) { //điều kiện chạy
        return num * giaiThua(num - 1);
    }
    return 1;
}
console.log(giaiThua(3));

function loop(start, end, cb) {
    if (start < end) {
        cb(start);
        return loop(start + 1, end, cb)
    }
}
loop(0, array.length, function (index) {
    console.log(array[index]);
})


var array1 = []
function checkUnique(index, j) {
    if (j < array1.length) {
        if (array[index] == array1[j]) {
            return false;
        }
        return checkUnique(index, j + 1)
    }
    return true
}
function addArray1(index) {
    if (index < array.length) {
        if (checkUnique(index, 0)) {
            array1.push(array1[index])
        }
        return addArray1(index + 1)
    }
}
addArray1(0)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

