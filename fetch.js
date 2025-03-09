//API (url) (application programing interface) cổng giao tiếp giữa các phần mềm 

var postApi = 'https://jsonplaceholder.typicode.com/posts'


fetch(postApi) //là 1 promise sẵn và ẩn
    //nó trả về 1 phản hồi response cũng là 1 đối tượng
    .then(function (response) {
        return response.json() //đối tượng response này có phương thức json() (là 1 promise)
        //return trên sẽ trả về 1 promise với resolve là JSON.parse 
    })

    .then(function (posts) {
        // console.log(posts);
        var htmls = posts.map(function (post) {
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>`
        })
        var html = htmls.join('');
        document.getElementById('post-block').innerHTML = html;
    });

