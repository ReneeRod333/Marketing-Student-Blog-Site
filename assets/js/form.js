const usernameInput = document.querySelector('#uname');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');
const msgDiv = document.querySelector('#msg');
const usernameSpan = document.querySelector('#user-name');
const usertitleSpan = document.querySelector('#user-title');
const usercontentSpan = document.querySelector('#blog-content');

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
}

submitButton.addEventListener('click', function (event) {
  event.preventDefault();

  const username = usernameInput.value;
  const title = titleInput.value;
  const content = contentInput.value;

  if (username === '') {
    displayMessage('error', 'User name cannot be blank');
  } else if (title === '') {
    displayMessage('error', 'Title cannot be blank');
  } else if (content === '') {
    displayMessage('error', 'Content cannot be blank');
  } else {
    displayMessage('success', 'Registered successfully');

    let blogs = [];
    if (localStorage.getItem('blogs')) {
      blogs = JSON.parse(localStorage.getItem('blogs'))
    }

    const bloginfo = { username, title, content };
    blogs.push(bloginfo);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    usernameInput.value = '';
    titleInput.value = '';
    contentInput.value = '';
    window.location.href = '/blog.html';
  }
});