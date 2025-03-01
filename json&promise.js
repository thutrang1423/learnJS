/**
Json (javascript object notation) là một định dạng dữ liệu dựa trên văn bản 
json: number, array, object, null, boolean
Stringify / parse 
data->json / json->data
 */

var jsonLanguage = '["Java","JS"]'
var jsonIntro = '{"name":"thu trang","age":20}'
console.log(JSON.parse(jsonLanguage));
console.log(JSON.parse(jsonIntro));

console.log(JSON.stringify(["Java", "JS"]));
console.log(JSON.stringify({ name: "thu trang", age: 20 }));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Promise

/*
sync : đồng bộ
async : bất đồng bộ vd: setTimeout, setInterval, fetch, XMLHttpRequest, file reading, request animation frame

promise: 
1. khai bao promise 
2. executor 
3. gọi tới 1 trong 2 resolve hay reject (nếu quên promise sẽ bị treo gay ra rò rỉ bộ nhớ)

promise được sinh ra để xử lý nguyên tắc bất đồng bộ, khi chưa có promise thì sẽ dùng callback và rất dễ bị callback hell
code sẽ bị xâu vào rất khó nhìn rối rắm, promise được sinh ra trong phiên bản es6 để khắc phục giúp code không bị xâu vào 
dễ đọc
để tạo ra promise cần dùng từ khoá new promise và trong contructor của nó sẽ truyền vào 1 executor function 
và trong executor function sẽ nhận được 2 tham số resolve và reject dạng hàm, resolve được gọi khi xử lý thành công, 
và reject được gọi khi xử lý thất bại. và khi xử dụng promise được tạo ra chúng ta sẽ sử dụng 2 phương thức .then hoặc .catch 
và cả 2 đều nhận được callback function và nó sẽ được thực thi khi mà .then được promise resolve và reject được promise reject 
*/

console.log("promise");

var promise = new Promise(
    // Executor: có nghĩa rằng function này sẽ được thực thi ngay khi gọi tới "new Promise" trước cả khi nhận giá trị vào "var promise"
    function (resolve, reject) {
        //logic: trạng thái thực thi logic ở đây pendding

        //thành công fulfilled: 
        resolve([{ "course": "JS", "price": 100 }, { "course": "Java", "price": 200 }]);

        //thất bại rejected: 
        reject("đã bị lỗi")
    }
);

promise
    .then(function (course) {
        //logic ở đây sẽ được thực thi resolve trong promise được gọi
        console.log(course);
    })
    .catch(function (error) {
        //logic ở đây sẽ được thực thi reject trong promise được gọi
        console.log(error);
    })
// .finally(function () {
//     //logic ở đây sẽ được thực thi khi 1 trong 2 reject hay resolve trong promise được gọi
//     console.log("done");
// });




var promiseChain = new Promise(
    function (resolve) {
        resolve();
    }
);

promiseChain
    .then(function () {
        return 1;
    })
    .then(function (data) {
        console.log(data)
        return 2;
    })
    .then(function (data) {
        console.log(data);
        return 3
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log(error);
    })
// .finally(function () {
//     console.log("done");
// });

var promiseChain2 = new Promise(
    function (resolve) {
        resolve("hi");
    }
);

promiseChain2
    //nhưng nếu .then phía trước không phải là promise thì .then phía sau có thể được chạy luôn mà không phải đợi .then phía trước
    .then(function (data) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(data)
            }, 20000)
        });
    }) //nếu .then phía trước có promise thì .then phía sau sẽ phải chờ .then phía trước thực thi xong trả kết quả mới chạy tiếp
    .then(function (data) { //.then ở đây chính là .then cho promise trong .then phía trước
        console.log(data);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log("done");
    });



function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms)
    })
}

sleep(1000)
    .then(function () {
        console.log(1);
        return sleep(1000);
    })
    .then(function () {
        console.log(2);
        return new Promise(function (resolve, reject) {
            reject('có lỗi') //nhưng nếu giữa đường gặp reject sẽ không thực thi các .then còn lại
        });
    })
    .then(function () {
        console.log(3);
        return sleep(1000);
    })
    .then(function () {
        console.log(4);
    })
    .catch(function (err) {
        console.log(err);
    })

//promise.resolve 
var promiseResolve = Promise.resolve('Success') //luôn luôn thành công chỉ vào .then
//promise.reject
// var promiseReject = Promise.reject('Error') //luôn luôn thất bại chỉ vào .catch

//promise.all: giúp chạy xong xong các promise khi logic chúng nó đều bất đồng bộ nhưng không phụ thuộc nhau nhưng muốn dùng dữ liệu của chúng nó để kết hợp vói nhau
var promise1 = new Promise(
    function (resolve) {
        setTimeout(function () {
            resolve([1, 2]);
        }, 2000)
    }
)

var promise2 = new Promise(
    function (resolve) {
        setTimeout(function () {
            resolve([3, 4]);
        }, 5000)
    }
)

Promise.all([promise1, promise2])
    .then(function (result) {
        // console.log(result);
        var result1 = result[0];
        var result2 = result[1];
        console.log(result1.concat(result2));
    })
//hay
// .then(function ([result1, result2]) {
//     console.log(result1.concat(result2));
// })