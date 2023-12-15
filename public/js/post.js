document.querySelector('.post-form')?.addEventListener('submit', publishPost);

function Post(title, content, tag, image, userId) {
    this.title = title;
    this.content = content;
    this.image = image;
    this.userId = userId

    switch (tag) {
        case 'analysis':
            this.categoryId = 1;
            break;
        case 'profile':
            this.categoryId = 2;
            break;
        case 'transfer-news':
            this.categoryId = 3;
            break;
        case 'team-news':
            this.categoryId = 4;
            break;
        case 'history':
            this.categoryId = 5;
            break;
    }
}

async function publishPost(e) {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    if (!user) {
        window.location.href = 'login.html';
    }

    const title = document.getElementById('post-title')?.value;
    const content = document.getElementById('post-content')?.value;
    const tag = document.getElementById('tag')?.value;
    const image = document.getElementById('post-image')?.files[0];

    const post = new Post(title, content, tag, image, user.user_id);

    try {
        const response = await fetch("http://localhost:3000/article/createArticle", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        });

        const data = await response.json();
        if (!data.message) {
            window.location.href = "post.html";
        } else {
            const errorText = document.querySelector('.error-message')
            errorText.innerText = data.message;
            errorText.style.display = 'block';
        }
        
    } catch (err) {
        console.log(err);
    }
}