document.addEventListener('DOMContentLoaded', function() {
    const blogPostsContainer = document.getElementById('blogPosts');


    // Function to render blog posts
    function renderBlogPosts() {
        const savedData = JSON.parse(localStorage.getItem('blogPost')) || [];

        if(savedData != null){
            savedData.forEach(post => {
                const postElement = document.createElement('article');
                postElement.innerHTML = `
                    <h2 class="blog-user">${post.username}</h2>
                    <p>${post.postContent}</p>
                `;
                blogPostsContainer.append(postElement);
            });
        } else{
            const postElement = document.createElement('article');
            postElement.innerHTML = `
                <h2 class="blog-user"></h2>
                <p>No Post Added</p>
            `;
        }

    }
    renderBlogPosts();
});





