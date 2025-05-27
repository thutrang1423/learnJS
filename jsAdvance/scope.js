/*
Scope - Phạm vi
-Các loại phạm vi:
    +Global - toàn cầu
    +Code block - Khối mã: let, const vd {}
    +Local scope - Hàm: var, function vd phạm vi hàm
-Khi gọi mỗi hàm luôn có 1 phạm vi mới được tạo
-Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài nó
-Cách thức 1 biến được truy cập
-Khi nào 1 biến bị xoá khỏi bộ nhớ
    +Biến toàn cầu: chỉ khi người dùng thoát khỏi chương trình, refrest
    hạn chế: dễ tốn bộ nhớ nếu biến đó không sử dụng nhiều
    +Biến trong code block & trong hàm: sau khi thoát khỏi phạm vi, các biến trong phạm vi sẽ tự động được xoá
    ưu điểm: giảm lãng phí bộ nhớ 
    +Biến trong hàm được tham chiếu bởi 1 hàm
 */

//1 phạm vi global
function logger() {

}
logger() //2 phạm vi hàm riêng biệt
logger() //3 phạm vi hàm riêng biệt
logger() //4 phạm vi hàm riêng biệt


//const dùng để khai báo hằng số 
//chỉ báo lỗi nếu nằm trong cùng phạm vi
//khác phạm vi lấy cái có phạm vi gần nhất
//không hosting giống var
//nếu cùng phạm vi nhưng khai báo dưới thì nó sẽ xét cùng phạm vi rồi báo lỗi
const age = 18
{
    const age = 16
    {
        const age = 12
        {
            console.log(age);
            // const age = 10;
        }
    }
}

//let cũng có phạm vi giống const



function makeCouter() {
    let couter = 0
    function increase() {
        return ++couter
    }
    return increase
}
//khi gọi hàm makeCouter nó return hàm con bên trong increase()
//vì vậy hàm con increase() được lưu trong biến increase1
//mà increase1 là biến global cho nên nó sẽ luôn cập nhập/ghi lại biến increase1
//nó sẽ luôn giữ lại hàm increase được tạo trong phạm vi makecouter
//increase1 tương ứng với hàm increase 
//mà increase không trực tiếp tạo ra biến couter mà dùng biến couter của phạm vi ngoài là makecouter
//biến couter trong hàm increase đang refer biến couter makecouter bên ngoài
//cho nên makecouter chạy xong nhưng vẫn bị tham chiếu bởi hàm increase đã được lưu bên ngoài
const increase1 = makeCouter()

console.log(increase1());
console.log(increase1());
console.log(increase1());
