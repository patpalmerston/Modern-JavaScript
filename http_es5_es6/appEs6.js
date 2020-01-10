const http = new EasyHttP();

// Get User
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// User Data
const post = {
    name: 'john doe',
    username: 'johndoe',
    email: 'john@gmail.com'
};

// create post
http.post('https://jsonplaceholder.typicode.com/users', post)
    .then(data => console.log(data))
    .catch(err => console.log(err));
