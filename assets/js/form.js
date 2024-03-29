let username = document.getElementById('user-name');
let postTitle = document.getElementById('blog-post-title');
let postContent = document.getElementById('post-content');
const saveButton = document.getElementById('save');

/************** blog page elements ************/

let blogUserName = document.querySelector('.blog-user');

//let postedDataString = "";

function savePost(blogPost) {
    let postedData = localStorage.getItem('blogPost');
    
    // Check if there's existing data in local storage
    if (postedData !== null) {
        // Parse the existing data from JSON to an array
        postedData = JSON.parse(postedData);
    } else {
        // If no existing data, initialize as an empty array
        postedData = [];
    }

    // Push the new blog post to the array
    postedData.push(blogPost);
    
    // Store the updated array back into local storage
    localStorage.setItem('blogPost', JSON.stringify(postedData));
}


saveButton.addEventListener('click', function (event) {
    event.preventDefault();

    let blogPost = {
        username: username.value.trim(),
        postTitle: postTitle.value.trim(),
        postContent: postContent.value.trim(), }
       

    savePost(blogPost);
    document.getElementById('post-form').reset();
    //renderSavedPost1();
  });

 



