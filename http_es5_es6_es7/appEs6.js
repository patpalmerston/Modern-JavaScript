const http = new EasyHttP();

// Get User
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// User Data
const post = {
    name: 'pt palmerston',
    username: 'patpalmerston',
    email: 'patpalmerston@gmail.com'
};

// create post
// http.post('https://jsonplaceholder.typicode.com/users', post)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// update post
// http.put('https://jsonplaceholder.typicode.com/users/2', post)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// delete user
http.delete('https://jsonplaceholder.typicode.com/users/1')
    .then(data => console.log(data))
    .catch(err => console.log(err));
