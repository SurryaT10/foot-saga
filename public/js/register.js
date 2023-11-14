document.querySelector('.input-form')?.addEventListener('submit', register);

function User(firstName, lastName, userName, password) {
    this.firstName = firstName,
    this.lastName = lastName;
    this.userName = userName;
    this.password = password;
}

function register(e) {
    e.preventDefault();

    const firstName = document.getElementById('first-name')?.value;
    const lastName = document.getElementById('last-name')?.value;
    const userName = document.getElementById('username')?.value;
    const password = document.getElementById('password')?.value;

    const user = new User(firstName, lastName, userName, password);
    console.log(user);
}