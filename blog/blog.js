document.addEventListener('DOMContentLoaded', function() {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    const blogContainer = document.getElementById('blog-container');

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';

        const titleElement = document.createElement('h2');
        titleElement.textContent = post.title;
        postElement.appendChild(titleElement);

        const contentElement = document.createElement('p');
        contentElement.textContent = post.content;
        postElement.appendChild(contentElement);

        const imageElement = document.createElement('img');
        imageElement.src = post.file_path;
        postElement.appendChild(imageElement);

        blogContainer.appendChild(postElement);
    });
});
