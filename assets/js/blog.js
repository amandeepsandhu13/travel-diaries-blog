document.addEventListener('DOMContentLoaded', function() {

    const blogPostsContainer = document.querySelector('#blogPosts');

    // Function to render blog posts
    function renderBlogPosts() {
        
        const savedData = JSON.parse(localStorage.getItem('blogPost')) || [];

        if (savedData.length === 0) {
            let postElement = document.createElement('article');
            postElement.innerHTML = `
                <p>No Post Added</p>
            `; blogPostsContainer.append(postElement);
        }else{
            savedData.forEach(post => {
                const postElement = document.createElement('article');
                postElement.innerHTML = `
                    <h2 class="blog-user">${post.username}</h2>
                    <p>${post.postContent}</p>
                `;
                blogPostsContainer.append(postElement);
            });

        }
    }
    renderBlogPosts();
});