//HTML DOM document object model
//trinh duyệt dịch code của mình theo quy chuẩn world wide web (quy chuẩn web trên thế giới)
//Node là những điểm giao nhau có thể là element, attribute và test

//JS cung cấp bộ công cụ truy cập vào DOM
//JS có thể truy cập và thay đổi DOM

//browser: html -> DOM -> WEB API
//API (Application Programming Interface)
//Document là sau khi trình duyệt đọc hết code html có thể tạo ra document

document.write('Hello world!')//hiện ra ngay sau khi được thực thi
//nếu viết ngay sau khi dom được chạy xong thì nó sẽ ghi đè lên dom 

//1. element: ID, class, tag, CSS selector, HTML collect
var headingNode = document.getElementById('heading');
console.log("ID");
console.log(headingNode);
//nếu get element bằng ID nếu viết sai hay get id cái thư 2 hay 3 là trả null
//cách xem thuộc tính element trong node 
console.log({ element: headingNode });

var bodyNodes = document.getElementsByClassName('body');
//có thể dùng vòng lặp for như mảng nhưng không dùng được map 
console.log('class');
console.log(bodyNodes);
console.log({ element: bodyNodes });
console.log('lấy từng element trong mảng class');
console.log(bodyNodes[0]);


var bodyNodes = document.getElementsByTagName('h1');
console.log('tag');
console.log(bodyNodes);
console.log('lấy từng element trong mảng tag');
console.log(bodyNodes[0]);
var bodyNode = document.getElementsByTagName('h1')[0];
console.log(bodyNode);


var queryCsses = document.querySelectorAll('.box2 .cssQueries');
var queryCss1 = document.querySelector('.box1 .list .cssQuery1');
console.log('css');
console.log(queryCsses);
console.log(queryCss1);
console.log('lấy node trong mảng css');
console.log(queryCsses[0]);
console.log('lấy mỗi node bằng css');
var queryCssf = document.querySelector('.box2 .cssQueries:first-child');
console.log(queryCssf);
var queryCssSc = document.querySelector('.box2 .cssQueries:nth-child(2)');
console.log(queryCssSc);
var queryCsst = document.querySelector('.box2 .cssQueries:nth-child(3)');
console.log(queryCsst);
var queryCssfo = document.querySelector('.box2 .cssQueries:last-child');
console.log(queryCssfo);

// get element lồng nhau
console.log('get element lồng nhau');
var boxNode = document.querySelector('.box2')
console.log(boxNode);
console.log(boxNode.querySelector('.cssQueries:last-child'));
console.log(boxNode.querySelectorAll('li'));
console.log(boxNode.getElementsByTagName('li'));

console.log('vòng lặp for qua node');
var box2Nodes = document.querySelectorAll('.box2 .cssQueries')
for (var i = 0; i < box2Nodes.length; i++) {
    console.log(box2Nodes[i]);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//attribute
console.log('attribute');
var attributeElement = document.getElementById('attribute');
//dùng phương thức gán cho attribute hợp lệ
attributeElement.title = 'titleAttribute'
attributeElement.className = 'classAttribute'

var attributeElementA = document.querySelector('a');
attributeElementA.href = 'hrefAttribute'

//dùng thêm attribute cho phương thức không hợp lệ
attributeElement.setAttribute('class', 'attributeClass')
attributeElement.setAttribute('href', 'attributeHref')
attributeElement.setAttribute('data-1', 'attributeData-1')

//lấy attribute từ element
console.log(attributeElement.getAttribute('href'));
console.log(attributeElement.getAttribute('class'));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//text
var TextElement = document.querySelector('.classText');
//innerText là thuộc tính của element 
console.log(TextElement.innerText); //hiện ra text trên trình duyệt hiện

//textContent là thuộc tính tồn tại ở cả element node và text node
console.log(TextElement.textContent); //hiện ra text như trên dom
TextElement.innerText = 'new text' //setter thay đổi giá trị
console.log(TextElement.innerText); //getter lấy giá trị
TextElement.textContent = 'new text 2'
console.log(TextElement.textContent);

TextElement.textContent = '<i>new text 2</i>' //cho dù có viết thành thẻ html cũng không thể thành node => chỉ có thể thêm text không thể thêm element
console.log(TextElement.textContent);


TextElement.innerText = `

new text 3

`;//sẽ tự động thêm thẻ <br/> để hiển thị chuỗi nhập này ở trên trình duyệt giống như trong dom
console.log(TextElement.innerText);

TextElement.textContent = `

new text 3

`;//sẽ chỉ nhận chuỗi không tự động nhận khoảng cách 
console.log(TextElement.textContent);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//innerHTML và outerHTML
console.log("innerHTML và outerHTML");

var boxElement1 = document.querySelector('.boxInnerHTML')
boxElement1.innerHTML = '<h1 title="heading">inner HTML</h1>'
console.log(document.querySelector('.boxInnerHTML h1').innerHTML);
console.log(document.querySelector('.boxInnerHTML').innerHTML);
boxElement1.innerHTML = '<h4 title="heading">inner HTML</h4>'
console.log(document.querySelector('.boxInnerHTML').innerHTML);

var boxElement2 = document.querySelector('.boxOuterHTML')
console.log(document.querySelector('.boxOuterHTML').outerHTML);
boxElement2.outerHTML = '<h4 title="heading">outer HTML</h4>'
console.log(document.querySelector('h4').outerHTML);
console.log(boxElement2);//nó đã lưu vào bộ nhớ nên được lấy ra nhưng trong dom thật không còn nữa
console.log(boxElement2.innerHTML);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//DOM style là 1 thuộc tính nằm trong element node 
var boxElement = document.querySelector('.box')
console.log(boxElement.style);// có thể get lấy ra được value của css inline hay set css inline cho 1 element

boxElement.style.width = '100px';
boxElement.style.height = '200px';
boxElement.style.backgroundColor = 'red';

Object.assign(boxElement.style, {
    with: '200px',
    height: '100px',
    backgroundColor: 'green'
})
console.log(boxElement.style.backgroundColor);// có thể get lấy ra được value của css inline hay set css inline cho 1 element

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//classList property là 1 thuộc tinh của element node
console.log("classList");
var boxClassListElement = document.querySelector('.boxClassList')
console.log(boxClassListElement.classList.length);
console.log(boxClassListElement.classList[1]);
console.log(boxClassListElement.classList.value);

//add thêm class
boxClassListElement.classList.add('red', 'blue')

//contains kiểm tra class đó đã có chưa
console.log(boxClassListElement.classList.contains('blue'));

//remove xoá class
setTimeout(() => {
    boxClassListElement.classList.remove('red');
}, 3000)
console.log(boxClassListElement.classList.contains('red'));

//toggle kiểm tra class đó nếu khồng có thì thêm vào nếu có thì gỡ ra 
setInterval(() => {
    boxClassListElement.classList.toggle('green');
}, 5000)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**Dom events
 * 1. Attribute events : định nghĩa attribute
 * 2. Assign event using the element node : sử dụng element node để gán sự kiện
*/

//2. Assign event using the element node
var h1Element = document.querySelector('.eventClick201'); //chỉ lắng nghe được thẻ đầu tiên ở trong dom
h1Element.onclick = function () {
    console.log(this.innerText)
}

var h2Elements = document.querySelectorAll('.eventClick202');
for (var i = 0; i < h2Elements.length; i++) {
    h2Elements[i].onclick = function (e) {
        console.log(e.target);
    }
}

/**
 * 3. Input /select
 * 4. key up / down
 */

//3. Input /select

// var inputElement = document.querySelector('input[type="text"]');
// inputElement.onchange = function (e) {
//     console.log(e.target.value);
// } //nhận những thay đổi giá trị thẻ input sau khi nhập xong và nhấn ra ngoài

var inputValue;
var inputElement2 = document.querySelector('input[type="text"]');
inputElement2.oninput = function (e) {
    inputValue = e.target.value;
    console.log(inputValue); //đã trở thành biến global vì được khai báo bên ngoài
} //nhận giá trị thẻ input ngay khi gõ vào 

var checkboxElement = document.querySelector('input[type="checkbox"]');
checkboxElement.onchange = function (e) {
    console.log(e.target.checked);
} //nhận những thay đổi giá trị thẻ input sau khi nhập xong và nhấn ra ngoài

var selectorElement = document.querySelector('select');
selectorElement.onchange = function (e) {
    console.log(e.target.value);
}

// 4. key up / down
// var inputElementKey = document.querySelector('input[type="text"][class="key"]');
var inputElementKey = document.querySelector('input[type="text"].key');

// inputElementKey.onkeydown = function (e) {
//     console.log(e.target.value);
// }

inputElementKey.onkeyup = function (e) {
    // console.log(e.target.value);
    console.log(e.which);
    switch (e.which) {
        case 27:
            console.log('Exit');
            break;
    }
}

document.onkeyup = function (e) {
    switch (e.which) {
        case 27:
            console.log('Exit');
            break;
    }
}

/**
 * 5. preventDefault //huỷ đi hành vi mặc định của element 
 * 6. stopPropagation //ngăn chặn hành vi nổi bọt hay hành vi lan truyền 
 */
// 5. preventDefault //huỷ đi hành vi mặc định của element
var aElements = document.querySelectorAll('a.domEvents')
for (var i = 0; i < aElements.length; i++) {
    aElements[i].onclick = function (e) {
        if (!e.target.href.startsWith('https://f8.edu.vn')) {
            e.preventDefault();
        }
    }
}

var ulElement = document.querySelector('ul');
ulElement.onmousedown = function (e) {
    e.preventDefault()
}
ulElement.onclick = function (e) {
    console.log(e.target);
}

//6. stopPropagation //ngăn chặn hành vi nổi bọt hay hành vi lan truyền 
document.querySelector('.divStopPropagation').onclick = function () {
    console.log('DIV');
}

document.querySelector('.buttonStopPropagation').onclick = function (e) {
    e.stopPropagation();
    console.log('Click me!');
}

//Event listener
/**Dùng khi
 * 1. xử lý nhiều việc khi 1 event xảy ra
 * 2. lắng nghe / huỷ bỏ lắng nghe
 */

var btn = document.getElementById('btn')
// btn.onclick = function () {
//     console.log('viec 1');
//     console.log('viec 2');
//     alert('viec 3');
// }
// setTimeout(function () {
//     btn.onclick = function () { }
// }, 5000)

function viec2() {
    console.log('viec 2');
}
function viec3() {
    console.log('viec 3');
}
function viec1() {
    console.log('viec 1');
}
function handleClick() {
    viec1();
    viec2();
    viec3();
}
btn.addEventListener('click', handleClick)
setTimeout(function () {
    btn.removeEventListener('click', handleClick);
    btn.addEventListener('click', function () {
        viec3();
    });
}, 5000);

setTimeout(function () {
    btn.removeEventListener('click', handleClick);
    btn.addEventListener('click', viec2)
}, 10000);

