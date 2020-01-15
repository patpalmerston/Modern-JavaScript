import { http } from './http';
import { ui } from './ui';

// Get posts on Dom load
document.addEventListener('DOMContentLoaded', getPosts);

//Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

// Listen for delete
document.querySelector('#posts').addEventListener('click', deletePost);

// listen for edit state
document.querySelector('#posts').addEventListener('click', enableEdit);

function getPosts() {
    http.get('http://localhost:3000/posts')
        .then(data => ui.showPosts(data))
        .catch(err => console.log(err));
}

// Add Post
function submitPost() {
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;

    if (title === '' || body === '') {
        ui.showAlert('Please fill in all fields', 'alert alert-danger');
    } else {
        const data = {
            title,
            body
        };

        // Create Post
        http.post('http://localhost:3000/posts', data)
            .then(data => {
                ui.showAlert('Post added', 'alert alert-success');
                ui.clearFields();
                getPosts();
            })
            .catch(err => console.log(err));
    }
}

// Delete post
function deletePost(e) {
    e.preventDefault();

    if (e.target.parentElement.classList.contains('delete')) {
        const id = e.target.parentElement.dataset.id;
        if (confirm('Are you sure?')) {
            http.delete(`http://localhost:3000/posts/${id}`)
                .then(data => {
                    ui.showAlert('Post Removed', 'alert alert-success');
                    getPosts();
                })
                .catch(err => console.log(err));
        }
    }
}

// enable edit state
function enableEdit(e) {
    console.log(e.target);
    if (e.target.parentElement.classList.contains('edit')) {
        const id = e.target.parentElement.dataset.id;
        const title =
            e.target.parentElement.previousElementSibling.previousElementSibling
                .textContent;
        const body = e.target.parentElement.previousElementSibling.textContent;

        const data = {
            id,
            title,
            body
        };

        // fill form with the current post
        ui.fillForm(data);
    }
    e.preventDefault();
}
