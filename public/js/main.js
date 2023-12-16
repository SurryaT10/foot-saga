const logoutBtn = document.querySelector('#logout-btn');
logoutBtn.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = 'login.html';
})