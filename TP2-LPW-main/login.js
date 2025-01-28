const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = loginForm.username.value;
        const password = loginForm.password.value;

        const storedUser = localStorage.getItem(username);

        if (storedUser && storedUser === password) {
            window.location.href = "inicio.html";
        } else {
            alert('Usuário ou senha incorretos!');
        }
    });