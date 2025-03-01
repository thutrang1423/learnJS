//làm việc với mảng 2
var courses = [
    {
        id: 1,
        name: 'java',
        coin: 100
    },
    {
        id: 2,
        name: 'C++',
        coin: 0
    },
    {
        id: 3,
        name: 'PHP',
        coin: 300
    },
    {
        id: 4,
        name: 'C#',
        coin: 400
    },
    {
        id: 5,
        name: 'react',
        coin: 500
    },
    {
        id: 6,
        name: 'PHP',
        coin: 300
    },
]
//duyệt mảng
courses.forEach(function (course, index) {
    console.log(index, course);
});

//kiểm tra tất cả khoá học có phải miễn phí hay không
var isFree = courses.every(function (course, index) {
    return course.coin === 0;
});
console.log(isFree);

//kiểm tra chỉ cần 1 khoá học miễn phí là được
var coFree = courses.some(function (course, index) {
    return course.coin === 0;
});
console.log(coFree);

//tìm khoá học PHP và chỉ trả về 1 đối tượng xuất hiện đầu tiên
var coursePHP = courses.find(function (course) {
    return course.name === 'PHP';
});
console.log(coursePHP);

//tìm tất cả khoá học PHP
var courseAllPHP = courses.filter(function (course) {
    return course.name === 'PHP';
});
console.log(courseAllPHP);

//muốn chỉnh sửa element của array
function courseHandler(course, index, originArray) {
    // console.log(course);
    // return course;
    // return course.name;
    return {
        id: course.id,
        name: 'Khoa hoc: ' + course.name,
        coin: course.coin,
        coinText: 'Giá: ' + course.coin,
        index: index,
        oldArray: originArray,
        oldElement: course
    }
}
var newCourses = courses.map(courseHandler);
console.log(newCourses);

//muốn nhận về 1 giá trị duy nhất sau khi tính toán trên array
//vd tính tổng coin

//biến lưu trữ 
var totalCoin = 0;
//lặp qua các phần tử
for (let course of courses) {
    //thực hiện việc lưu trữ
    totalCoin += course.coin;
}
console.log(totalCoin);

//reduce(function, giá trị khởi tạo biến lưu trữ(accumulator/ initial value))
//tham số trong function(accumulator(biến khởi tạo), currentValue(giá trị hiện tại), currentIndex(index hiện tại), originArray(mảng gốc))
function coinHandler(accumulator, currentValue, currentIndex, originArray) {
    // i++
    // console.table({
    //     'lượt chạy: ': i,
    // 'biến tích trữ: ': accumulator //sẽ được gán vào lần chạy đầu tiên 
    // });
    // console.log(currentValue);
    // return 100; //thực hiện lưu trữ hay là trả về cho hàm cb những lần chạy sau
    return accumulator + currentValue.coin;
}
var totalCoin = courses.reduce(coinHandler, 0)//0 là giá trị khởi tạo biến lưu trữ(accumulator/ initial value)
console.log(totalCoin);

function coinHandler1(accumulator, currentValue, currentIndex, originArray) {
    var total = accumulator + currentValue.coin
    console.table({
        'lượt chạy: ': currentIndex,
        'biến tích trữ: ': accumulator, //sẽ được gán vào lần chạy đầu tiên 
        'Giá khoá học: ': currentValue.coin,
        'tích trữ được: ': total
    });
    return total;
}
var totalCoin = courses.reduce(coinHandler1, 0)//0 là giá trị khởi tạo biến lưu trữ(accumulator/ initial value)
console.log(totalCoin);

var totalCoin = courses.reduce(function coinHandler2(total, course, currentIndex, originArray) {
    return total = total + course.coin;
}, 0)
console.log(totalCoin);

var i = 0
var totalCoin = courses.reduce(function coinHandler2(total, course, index, originArray) {
    i++;
    console.log(i, total, course);
    return total + course.coin; //tự động truyền element thứ 2 index =1 làm currentValue  
    // })//nếu không có gia trị khởi tạo thì sẽ tự động lấy element đầu tiên index =0 làm accumulator và kiểu dữ liệu mặt định là kiểu dữ liệu của element đó trong mảng
    //vì vậy khi cùng kiểu dữ liệu mình mong muốn thì không cần phải đặt biến khởi tạo
}, 0) //tạo biến khởi tạo có kiểu dữ liệu mà mình mong muốn
console.log(totalCoin);

//làm phẳng mảng depth array
myArray = [1, 2, 3, [4, 5, 3], 5, 6, 2, [0, 9, [7, 2, [1, 2, 3, 5], 4, 8], 4]]
var newArray = myArray.reduce(function (flatOutput, depthArray) {
    return flatOutput.concat(depthArray) //concat giúp nối mảng
}, [])
console.log(newArray);

var topics = [
    {
        topic: "Front-end",
        courses: [
            {
                id: 1,
                title: "HTML, CSS"
            },
            {
                id: 2,
                title: "JS"
            },
            {
                id: 3,
                title: "react"
            },
        ]
    },
    {
        topic: "Back-end",
        courses: [
            {
                id: 1,
                title: 'PHP'
            },
            {
                id: 2,
                title: 'NodeJS'
            }
        ]
    }
]

var newCourses = topics.reduce(function (courses, topic) {
    return courses.concat(topic.courses)
}, [])
console.log(newCourses);



Array.prototype.reduce2 = function (callback, initialValue) {
    let i = 0;
    if (arguments.length < 2) {
        i = 1;
        initialValue = this[0];
    }
    for (; i < this.length; i++) {
        initialValue = callback(initialValue, this[i], i, this)
    }
    return initialValue
}

var numbers = [1, 2, 3]
var result = numbers.reduce2((total, number) => {
    return total + number
}, 0)
console.log(result);

/*
Vòng lặp đầu tiên (i = 0)
total = 0, number = 1
initialValue = callback(0, 1, 0, numbers)
initialValue = 0 + 1 = 1
✅ Vòng lặp thứ hai (i = 1)
total = 1, number = 2
initialValue = callback(1, 2, 1, numbers)
initialValue = 1 + 2 = 3
✅ Vòng lặp thứ ba (i = 2)
total = 3, number = 3
initialValue = callback(3, 3, 2, numbers)
initialValue = 3 + 3 = 6
Bước 3: Trả về kết quả
return 6
 */

//phương thức include trong array và string
//tênString.include('chuỗi cần tìm', vị trí bắt đầu tìm) 
var title = 'Responsive web design'
console.log(title.includes('web'));
console.log(title.includes('web design'));
console.log(title.includes('Responsive', 1));
console.log(title.includes('abc'));
//và tương tự như vậy khi kiểm tra element trong mảng
//có thể tìm ngược bằng cách đưa số âm vd length = 5 và chuyền index = -2 => vị trí bắt đầu tìm là 5-2=3

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
