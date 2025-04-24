// Dados do login
const correctUsername = "Gabbz";
const correctPassword = "230112";

// Função para checar o login
function checkLogin(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obter valores do formulário
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificar se o login está correto
    if (username === correctUsername && password === correctPassword) {
        // Se estiver correto, redireciona para o diário
        window.location.href = "diario.html";
    } else {
        // Se não estiver correto, exibe um alerta
        alert("Usuário ou senha incorretos.");
    }
}

// Adicionar evento de submit no formulário
document.getElementById('loginForm').addEventListener('submit', checkLogin);
