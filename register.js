const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = registerForm.username.value;
        const password = registerForm.password.value;

        if (localStorage.getItem(username)) {
            alert('Usuário já existe! Tente outro nome.');
        } else {
            localStorage.setItem(username, password);
            alert('Conta criada com sucesso!');
            window.location.href = "login.html";
        }
    });