document.querySelector('.post-form')?.addEventListener('submit', publishPost);

function Post(title, content, tag, image) {
    this.title = title;
    this.content = content;
    this.tag = tag;
    this.image = image;
}

function publishPost(e) {
    e.preventDefault();

    const title = document.getElementById('post-title')?.value;
    const content = document.getElementById('post-content')?.value;
    const tag = document.getElementById('tag')?.value;
    const image = document.getElementById('post-image')?.files[0];


    const post = new Post(title, content, tag, image);
    console.log(post);
}