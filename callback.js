
/*
callback:
1. là 1 hàm
2. được truyền qua đối số
3. được gọi lại (trong hàm nhận đối số)
 */

var course1 = [
    'JS',
    'PHP',
    'Ruby',
    'PHP'
]
Array.prototype.map2 = function (cb) {
    var output = [], arrayLenghth = this.length;
    for (let i = 0; i < arrayLenghth; i++) {
        var result = cb(this[i], i);
        output.push(result)
    }
    return output
}

var newCourses1 = course1.map2(function (course, index) {
    return "khoa hoc: " + course;
});
console.log(newCourses1);



Array.prototype.find2 = function (cb) {
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            if (cb(this[i], i)) {
                cb(this[i], i)
                return (this[i])
            }
        }
    }
}

var newCourses = course1.find2(function (course, index) {
    return course == 'PHP';
});
console.log(newCourses);



Array.prototype.filter2 = function (cb) {
    var output = [];
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            if (cb(this[i], i)) {
                // var result = cb(this[i], i)
                output.push(this[i])
            }
        }
    }
    return output;
}

var newCourses = course1.filter2(function (course) {
    return course == 'PHP';
});
console.log(newCourses);



Array.prototype.some2 = function (cb) {
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            if (cb(this[i], i)) {
                return true;
            }
        }
    }
    return false
}

var newCourses = course1.some2(function (course) {
    return course == 'JS';
});
console.log(newCourses);



Array.prototype.every2 = function (cb) {
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            if (!cb(this[i], i)) {
                return false;
            }
        }
    }
    return true
}

var newCourses = course1.every2(function (course) {
    return course == 'JS';
});
console.log(newCourses);



//dùng prototype thêm phương thức cho Array nó sẽ thêm phương thức ngay phía dưới element trong mảng
//định nghĩa phương thức cho array constructor 
//thì đối tượng được khởi tạo từ array constructor cũng được thừa hưởng phương thức này
//và phương thức đo mang key forEach2

//for in có thể lặp qua các element trong array và cả element trong __proto__
Array.prototype.forEach2 = function (cb) {
    for (var i in this) {
        //hasOwnProperty kiểm tra các element đó có liền kề nhau không, hay là kiểm tra element đó có nằm trong __proto__  nếu có thì trả về false
        if (this.hasOwnProperty(i)) {
            cb(i, this[i], this);
        }
    }
}

var newCourses1 = course1.forEach2(function (index, course, array) {
    console.log(index, course, array);
});
console.log(newCourses1);



