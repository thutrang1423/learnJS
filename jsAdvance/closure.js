/*
#Closure
Là 1 hàm có thể ghi nhớ nơi nó được tạo và truy cập được biến ở bên ngoài phạm vi của nó

#Ứng dụng
Viết code ngăn gọn hơn
Biểu diễn, ứng dụng tính Private trong OOP

##Tóm tắt

##Lưu ý
Biến được tham chiếu (refer) trong closure sẽ được xoá khỏi bộ nhớ khi hàm cha thực thi xong

*/


function makeCouter() {
    let couter = 0 //có tính private trong oop biến couter được tạo ra trong phạm vi hàm makeCouter cho nên phạm vi ngoài không thể tuy cập được
    function increase() { //chỉ có thể tác động lên được hàm increase
        return ++couter
    }
    return increase
}

//tạo ra 1 phạm vi hàm makeCouter  
//vì makeCouter return hàm increase => increase 1 chính là hàm increase trong makecouter
//và từ 1 phạm vi hàm local lưu vào biến global => thành phạm vi global
const increase1 = makeCouter()  // gọi hàm makeCouter 1 lần nên chỉ có duy nhất 1 phạm vị hàm 

console.log(increase1()); //truy cập ra bên ngoài khai báo couter = 1 
console.log(increase1()); //truy cập ra bên ngoài nhưng vẫn dùng chung 1 phạm vi trong hàm makeCouter cho nên đã lấy kết quả couter = 1 
console.log(increase1()); ///truy cập ra bên ngoài nhưng vẫn dùng chung 1 phạm vi trong hàm makeCouter cho nên đã lấy kết quả couter = 2

//hàm increase được tạo ra khi gọi hàm makecouter => hàm increase nhớ luôn phạm vi nó được tạo ra là trong makecouter
//sau khi gán hàm increase vào biến global => thì chui ra phạm vi window

//khi gọi hàm increase1 nó sẽ chạy gọi hàm increase bên trong
//mà hàm increase bên trong truy cập vào 1 biến bên ngoài phạm vi

const increase2 = makeCouter()

console.log(increase2());
console.log(increase2());
console.log(increase2());





//hàm chỉ trả ra được 1 hàm thôi
function createLogger(namespace) {
    function logger(message) {
        console.log(`[${namespace}] ${message}`);
    }
    return logger
}
const infoLogger = createLogger('Info')
infoLogger('bắt đầu gửi mail')
infoLogger('đang gửi mail')

const errorLogger = createLogger('error')
infoLogger('gửi mail thất bại')


//tạo hàm setting để lưu những yếu tố mà người dùng có thể lưu ở client
//nhưng với object để có thể trả về 3 đối tượng sửa, xoá, read
function createStorage(key) {
    // localStorage.getItem(key): Lấy dữ liệu từ localStorage với khóa (key) đã cho.
    //?? {}: Nếu dữ liệu trong localStorage là null hoặc undefined, thì gán store bằng một đối tượng rỗng {} để tránh lỗi.
    const store = JSON.parse(localStorage.getItem(key)) ?? {}

    const save = () => {
        //localStorage.setItem(key, ...): Lưu chuỗi JSON vào localStorage với khóa (key) đã cho.
        localStorage.setItem(key, JSON.stringify(store))
    }
    const storage = {
        get(key) {
            return store[key]
        },
        set(key, value) {
            store[key] = value
            save()
        },
        remove(key) {
            delete store[key]
            save()
        }
    }
    return storage
}

//Profile.js
const profileSetting = createStorage('profile_setting')
//createStorage chứa object storage. 
//trong storage chứa 3 function khác. 
//và cả 3 function này đều có thể truy cập vào phạm vi hàm của createStorage
//và cả 3 function đều trỏ đến store

console.log(profileSetting.get('fullname'));
console.log(profileSetting.set('fullname', 'thu trang'));
console.log(profileSetting.get('fullname'));
console.log(profileSetting.remove('fullname'));
console.log(profileSetting.get('fullname'));



function createApp() {
    const cars = []

    return {
        add(car) {
            cars.push(car)
        },
        show() {
            console.log(cars);
        },
        edit(index, car) {
            cars[index] = car
        },
        delete(index) {
            cars.splice(index, 1)
        }
    }
}
const app = createApp()

app.show()
app.add('tesla')
app.show()
app.add('Vinfast')
app.show()
app.edit(0, 'BWM')
app.show()
app.delete(1)