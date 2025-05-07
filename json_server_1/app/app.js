//JSON server: API server (FAKE) / Mock Api
//JSON server đang tuân theo tiêu chuẩn rest api
//npm (node package manager): nó là thư viện được quản lý bởi thằng node
//nó sinh ra 1 thằng npmjs.com nó quản lý tất cả các thư viện trong node và được viết bằng js
//node là run time để chạy js
/*CRUD
  create -> get
  read -> post
  update -> put / patch
  delete -> delete

  http protocol là giao thức http, dữ liệu được truyền tải qua internet hầu hết đều thông qua phương thức http
*/



var courseAPI = 'http://localhost:3000/courses'

// fetch(courseAPI)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (courses) {
//         console.log(courses);
//     })

// var listCoursesBlock = document.querySelector('#list-courses')

function start() {
    // getCourses(function (courses) {
    //     // console.log(courses);
    //     rederCourses(courses)
    // })
    getCourses(renderCourses)
    handleCreateForm();
    // handleUpdateForm();
}
start();

function getCourses(callback) {
    fetch(courseAPI)
        .then(function (response) {
            return response.json();
        })
        .then(callback)
}

function createCourse(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(courseAPI, options)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    fetch(courseAPI + '/' + id, options)
        .then(function (response) {
            return response.json();
        })
        .then(function () {
            // getCourses(renderCourses);
            var courseItem = document.querySelector('.course-item-' + id)
            if (courseItem) {
                courseItem.remove();
            }
        })
}

function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses')
    var htmls = courses.map(function (course) {
        return `
            <li class="course-item-${course.id}">
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button class="edit-button" data-id="${course.id}">Edit</button>
                <button class="delete-button" data-id="${course.id}">&times;</button>
            </li>`;
        // `<li class="course-item-${course.id}">
        //     <h4>${course.name}</h4>
        //     <p>${course.description}</p>
        //     <button onclick="handleDeleteCourse(${course.id})">&times;</button>
        // </li>`
    })
    listCoursesBlock.innerHTML = htmls.join('');

    // // Add event listeners to Edit buttons
    // var editButtons = document.querySelectorAll('.edit-button');
    // editButtons.forEach(function (button) {
    //     button.addEventListener('click', function () {
    //         var courseId = button.getAttribute('data-id');
    //         // Find the course and populate the form with its data
    //         var course = courses.find(function (c) { return c.id == courseId; });
    //         populateEditForm(course);
    //     });
    // });

    //delete id are random and simple,
    var deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var courseId = button.getAttribute('data-id');
            handleDeleteCourse(courseId);
        });
    });
}

// // Populate the form with course data for editing
// function populateEditForm(course) {
//     var nameInput = document.querySelector('input[name="name"]');
//     var descriptionInput = document.querySelector('input[name="description"]');
//     nameInput.value = course.name;
//     descriptionInput.value = course.description;

//     // Show the 'Save' button and hide the 'Create' button
//     var saveBtn = document.querySelector('#save');
//     var createBtn = document.querySelector('#create');
//     saveBtn.style.display = 'inline-block';
//     createBtn.style.display = 'none';

//     // Store the course ID in a custom data attribute
//     var form = document.querySelector('#course-form');
//     form.setAttribute('data-course-id', course.id);
// }

function handleCreateForm() {
    var createBtn = document.querySelector('#create')

    createBtn.onclick = function () {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        var formData = {
            name: name,
            description: description
        }
        // console.log(formData);
        createCourse(formData, function (newCourse) {
            getCourses(renderCourses(newCourse))
        })
    }
}

// // Update the course (use PUT request)
// function updateCourse(courseId, data) {
//     var options = {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     };

//     fetch(courseAPI + '/' + courseId, options)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (updatedCourse) {
//             // Update the DOM with the updated course
//             var courseItem = document.querySelector('.course-item-' + courseId);
//             courseItem.querySelector('h4').textContent = updatedCourse.name;
//             courseItem.querySelector('p').textContent = updatedCourse.description;

//             // Reset the form and buttons to create mode
//             resetForm();
//         });
// }

function renderNewCourse(course) {
    var listCoursesBlock = document.querySelector('#list-courses');
    var html = `
        <li class="course-item-${course.id}">
            <h4>${course.name}</h4>
            <p>${course.description}</p>
            <button class="edit-button" data-id="${course.id}">Edit</button>
            <button class="delete-button" data-id="${course.id}">&times;</button>
        </li>`;

    listCoursesBlock.innerHTML += html;

    // var editButton = listCoursesBlock.querySelector(`.course-item-${course.id} .edit-button`);
    // editButton.addEventListener('click', function () {
    //     populateEditForm(course);
    // });
}

// // Ensure Save button is present and ready before attaching click handler
// function handleUpdateForm() {
//     var saveBtn = document.querySelector('#save');
//     if (saveBtn) {
//         saveBtn.onclick = function () {
//             var name = document.querySelector('input[name="name"]').value;
//             var description = document.querySelector('input[name="description"]').value;

//             if (!name || !description) {
//                 alert("Please fill in both the course name and description.");
//                 return;
//             }

//             var formData = {
//                 name: name,
//                 description: description
//             };

//             var form = document.querySelector('#course-form');
//             var courseId = form.getAttribute('data-course-id');
//             updateCourse(courseId, formData);
//         };
//     }
// }

// // Reset form and buttons to "create mode" after update
// function resetForm() {
//     var nameInput = document.querySelector('input[name="name"]');
//     var descriptionInput = document.querySelector('input[name="description"]');
//     nameInput.value = '';
//     descriptionInput.value = '';

//     var saveBtn = document.querySelector('#save');
//     var createBtn = document.querySelector('#create');
//     saveBtn.style.display = 'none';
//     createBtn.style.display = 'inline-block';

//     var form = document.querySelector('#course-form');
//     form.removeAttribute('data-course-id');
// }
