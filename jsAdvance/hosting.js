
// var đây khai báo age lên đầu chứ không gán giá trị 
console.log(age);
var age = 16
console.log(age);


var age1
console.log(age1);
age1 = 16
console.log(age1);

//đây khai báo function lên đâu nên có thể sử dụng ra kết quả 
console.log(sum(1, 2));
function sum(a, b) {
    return a + b
}


//let, const được host nhưng không được tạo giá trị và được đưa vào "Temporal Dead Zone, vùng tạm thời không truy cập được, không sử dụng được" 
console.log(fullname);
let fullname = "thu trang"


let address = "tphcm"
{
    let address = "HN"
    {
        let address = "BĐ"
        {
            console.log(address);
            let address = "TB"//let cần hosting để thông báo trong phạm vi biến này đã được khai báo rồi không thông qua phạm vi bên ngoài nữa 
        }
    }
}


