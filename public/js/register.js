document.querySelector('.input-form')?.addEventListener('submit', register);

function User(firstName, lastName, userName, password) {
    this.firstName = firstName,
    this.lastName = lastName;
    this.userName = userName;
    this.password = password;
}

async function register(e) {
    e.preventDefault();

    const firstName = document.getElementById('first-name')?.value;
    const lastName = document.getElementById('last-name')?.value;
    const userName = document.getElementById('username')?.value;
    const password = document.getElementById('password')?.value;

    const user = new User(firstName, lastName, userName, password);

    try {
        const response = await fetch("http://localhost:3000/user/register", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        const data = await response.json();
        if (!data.message) {
            localStorage.setItem('user', JSON.stringify(data));
            window.location.href = "posts.html"
        } else {
            const errorText = document.querySelector('.error-message')
            errorText.innerText = data.message;
            errorText.style.display = 'block';
        }
        
    } catch (err) {
        console.log(err);
    }
}