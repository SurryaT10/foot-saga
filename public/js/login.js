document.querySelector('.input-form')?.addEventListener('submit', login);

function LoginCreds(userName, password) {
    this.userName = userName;
    this.password = password;
}

function login(e) {
    e.preventDefault();

    const userName = document.getElementById('username')?.value;
    const password = document.getElementById('password')?.value;

    const creds = new LoginCreds(userName, password);
    console.log(creds);
}