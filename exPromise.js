var users = [
    {
        id: 1,
        name: 'Kien Dam'
    },
    {
        id: 2,
        name: 'Son Dang'
    },
    {
        id: 3,
        name: 'Hung Dam'
    },
];

var comments = [
    {
        id: 1,
        user_id: 2,
        content: 'Anh Son chua ra video'
    },
    {
        id: 2,
        user_id: 1,
        content: 'vua ra xong em oi'
    },
    {
        id: 3,
        user_id: 1,
        content: 'cam on anh'
    }
]

//1. lấy comments
//2. từ comments lấy ra user tương ứng
//3 từ user_id lấy ra user tương ứng

//fake API

function getComments() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(comments);
        }, 1000);
    });
}

function getUsersByIds(userIds) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            var result = users.filter(function (user) {
                return userIds.includes(user.id)
            });
            resolve(result);
        }, 1000);
    })
}

getComments()
    .then(function (comments) {
        var userIds = comments.map(function (comment) {
            return comment.user_id;
        });
        // console.log(userIds);
        return getUsersByIds(userIds)
            .then(function (users) {
                // console.log(users);
                // return users,
                return {
                    users: users,
                    comments: comments,
                };
            })
    })

    .then(function (data) {
        // console.log(users);
        console.log(data);

        var commentBlock = document.getElementById('comment-block');
        var html = ''
        data.comments.forEach(function (comment) {
            var user = data.users.find(function (user) {
                return user.id === comment.user_id
            })
            html += `<li>${user.name}: ${comment.content}</li>`
        });
        commentBlock.innerHTML = html;
    })

