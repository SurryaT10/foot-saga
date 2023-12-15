document.querySelector('.input-form')?.addEventListener('submit', login);

function LoginCreds(userName, password) {
    this.userName = userName;
    this.password = password;
}

async function login(e) {
    e.preventDefault();

    const userName = document.getElementById('username')?.value;
    const password = document.getElementById('password')?.value;

    const creds = new LoginCreds(userName, password);

    try {
        const response = await fetch("http://localhost:3000/user/login", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(creds),
        });

        const data = await response.json();
        if (!data.message) {
            localStorage.setItem('user', JSON.stringify(data));
            window.location.href = "post.html"
        } else {
            const errorText = document.querySelector('.error-message')
            errorText.innerText = data.message;
            errorText.style.display = 'block';
        }
        
    } catch (err) {
        console.log(err);
    }
    
}