

const mainEL = document.querySelector('#main');
function renderLastRegistered() {

    let blogs = [];
    if (localStorage.getItem('blogs')) {
        blogs = JSON.parse(localStorage.getItem('blogs'))
    }
    console.log(blogs.length)

    for (const blog of blogs) {
        console.log({ blog })
        const usernameEl = document.createElement('span');
        const usertitleEl = document.createElement('h3');
        const usercontentEl = document.createElement('p');
        const articleEl = document.createElement('article');
        usernameEl.textContent = blog.username;
        usertitleEl.textContent = blog.title;
        usercontentEl.textContent = blog.content;
        articleEl.appendChild(usertitleEl);
        articleEl.appendChild(usercontentEl);
        articleEl.appendChild(usernameEl);
        mainEL.appendChild(articleEl);
    }
}
renderLastRegistered();



