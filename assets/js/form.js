let username = document.getElementById('user-name');
let email = document.getElementById('email');
let postTitle = document.getElementById('blog-post-title');
let postContent = document.getElementById('post-content');
const saveButton = document.getElementById('save');


function savePost() {
    // Save related form data as an object
    const blogPost = {
        username: username.value,
        email: email.value,
        postTitle: postTitle.value,
        postContent: postContent.value,
    }
    localStorage.setItem('blogPost', JSON.stringify(blogPost));
};

saveButton.addEventListener('click', function (event) {
    event.preventDefault();
    savePost();
   // renderSavedPost();
  });