document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
    let file = document.getElementById('file').files[0];

    if (file) {
        let reader = new FileReader();
        reader.onload = function(e) {
            let imgData = e.target.result;

            let posts = JSON.parse(localStorage.getItem('posts')) || [];
            posts.push({ title: title, content: content, file_path: imgData });
            localStorage.setItem('posts', JSON.stringify(posts));

            alert('Upload successful!');
        };
        reader.readAsDataURL(file);
    } else {
        alert('Please select an image file.');
    }
});
