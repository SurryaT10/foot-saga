window.addEventListener("load", async (event) => {
    await getBlogPosts();
});

const getBlogPosts = async () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) window.location.href = 'login.html';

    console.log(user);

    try {
        const response = await fetch(`http://localhost:3000/article/getAllArticles/${user.user_id}`, {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            }
        });

        const data = await response.json();

        const blogs = document.querySelector('.blogs');
        if (data.length == 0) {
            const noPosts = document.createElement('h2');
            noPosts.innerText = 'No Posts Yet :(';
            noPosts.style.color = 'black';
            blogs.appendChild(noPosts);
        } else {
            data.forEach(article => {
                const sectionTag = document.createElement('section');
                sectionTag.classList.add('featured-posts');
                const articleTag = document.createElement('article');
                articleTag.classList.add('featured-post')
                articleTag.innerHTML = `<h2>${article.article_title}</h2><p class="post-description">${article.article_description}</p>`;
                sectionTag.appendChild(articleTag);
                blogs.appendChild(sectionTag);
            })
        }
        
    } catch (err) {
        console.log(err);
    }
}
