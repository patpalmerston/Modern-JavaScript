const http = new easyHttP();

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// });

// get single posts
http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
    if (err) {
        console.log(err);
    } else {
        console.log(post);
    }
});
