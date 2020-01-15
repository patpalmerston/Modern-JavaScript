import { http } from './http';
import { ui } from './ui';

// Get posts on Dom load
document.addEventListener('DOMContentLoaded', getPosts);

//Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

// Listen for delete
document.querySelector('#posts').addEventListener('click', deletePost);

function getPosts() {
    http.get('http://localhost:3000/posts')
        .then(data => ui.showPosts(data))
        .catch(err => console.log(err));
}

// Add Post
function submitPost() {
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;

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
