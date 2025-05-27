this.firstName = 'Hương'
this.lastName = "Giang"

const teacher = {
    firstName: 'Thu',
    lastName: "Trang",
    getFullName() {
        return `${this.firstName} ${this.lastName}` //this không phải là biến mang giá trị nó chỉ là tham chiếu tới 1 đối tượng khác thôi
    }
}

console.log(teacher.getFullName());

const getTeacherName = teacher.getFullName //getFullName không có toán tử gọi hàm, teacher.getFullName chỉ mới truy cập, và gán function này vào biến getTeacherName
console.log(getTeacherName === teacher.getFullName);//gán địa chỉ tham chiếu của hàm function teacher.getFullName vào getTeacherName, cho nên chúng giống nhau

console.log(getTeacherName()); //gọi hàm không thông qua 1 đối tượng là teacher phía trước, this sẽ trỏ ra ngoài tìm đối tượng window ở global 


console.log('   ');
console.log("bind");
//bind, call, apply là phương thức được kế thừa function prototype, dùng để ràng buộc this cho 1 function hay method khác 
this.firstName = 'Hương1'
this.lastName = "Giang1"

const employee = {
    firstName: 'Thu1',
    lastName: "Trang1",
    getFullName(data1, data2) {
        console.log(data1, data2);
        return `${this.firstName} ${this.lastName}`
    },
    getFullName2() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const student = {
    firstName: "tien",
    lastName: "dat"
}
console.log('employee', employee.getFullName());

const getEmployeeName = employee.getFullName.bind(employee) //ràng buộc phương thức getFullName này với this là employee
console.log(getEmployeeName === employee.getFullName); //phương thức bind trả về hàm mới
console.log('employee', getEmployeeName());//cho nên khi gọi hàm getEmployeeName vì đã có ràng buộc cho nên đối tượng được chuyền vào là đối tượng trong bind là employee

const getEmployeeName2 = employee.getFullName.bind(student) //tạo ra bind và truyền this mới vào, nó return method mới là hàm getfullName mới và lưu vô getEmployeeName2
console.log(getEmployeeName2 === employee.getFullName);
console.log('student', getEmployeeName2());

console.log("   ");
console.log('staff');
//có thể nhận các đối số như hàm ban đầu
const getStaffName = employee.getFullName.bind(student, 'test3', 'test4') //ưu tiên tham số ở bind cho nên chỉ truyền tham số cứng
console.log('staff', getStaffName('test1', 'test2'));


console.log('   ');
console.log('button');

const button = document.querySelector('button')

button.onclick = function () {
    employee.getFullName2();
    // employee.getFullName2.bind(employee);
}
//khi gán method này cho 1 method khác hay 1 biến khác
//phải chú ý xét method và biến được gán: 
/*
this trong hàm teacher.getFullName sẽ được lưu vô handleDom onclick, sau đó this trong handleDom sẽ gọi đên object gấn nhất là button
và button không có sẽ in ra undefined
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const $ = document.querySelector.bind(document)   //querySelector có sănn this
const $$ = document.querySelectorAll.bind(document)

console.log($('#heading'));



const app = (() => {
    const cars = ['BMW']

    const root = $('#root')
    const input = $('#input')
    const submit = $('#submit')

    return {
        add(car) {
            cars.push(car)
        },
        delete(index) {
            cars.splice(index, 1)
        },
        render() {
            const html = cars.map((car, index) => `
                    <li>
                        ${car}
                        <span class='delete' data-index="${index}">&times</span>
                        </li>
                `) //data- là cách tạo ra dataset công với tên là index
                .join('')
            root.innerHTML = html
        },
        handleDelete(e) {
            //e.target là phần tử mà bạn đã nhấp vào hoặc tương tác.
            const deleteBtn = e.target.closest('.delete')
            if (deleteBtn) {
                const index = deleteBtn.dataset.index //thuộc tính data-* (ví dụ: data-index) được sử dụng để lưu trữ dữ liệu tùy chỉnh trong các phần tử HTML. Bạn có thể truy xuất giá trị của nó bằng cách sử dụng dataset.
                this.delete(index)
                this.render()
            }
        },
        init() {
            //handle Dom events
            submit.onclick = () => {
                const car = input.value
                this.add(car)
                this.render()

                input.value = null
                input.focus()
            }

            root.onclick = this.handleDelete.bind(this)

            this.render()
        }
    }
})();

app.init()

