// script.js
let usuarioAtual = null;

function mostrar(tela) {
  document.querySelectorAll('.tela').forEach(t => t.style.display = 'none');
  document.getElementById(tela).style.display = 'block';
}

function fazerLogin() {
  const user = document.getElementById('loginUser').value;
  const pass = document.getElementById('loginPass').value;
  const salva = localStorage.getItem('user_' + user);
  if (salva && JSON.parse(salva).senha === pass) {
    usuarioAtual = user;
    alert('Bem-vindo, ' + user);
    mostrar('diario');
  } else {
    alert('Usuário ou senha incorretos');
  }
}

function fazerCadastro() {
  const user = document.getElementById('cadastroUser').value;
  const pass = document.getElementById('cadastroPass').value;
  if (!user || !pass) return alert('Preencha tudo');
  if (localStorage.getItem('user_' + user)) return alert('Usuário já existe');
  localStorage.setItem('user_' + user, JSON.stringify({ senha: pass }));
  alert('Cadastro realizado!');
  mostrar('login');
}

function salvarEntrada() {
  if (!usuarioAtual) return alert('Você precisa estar logado.');
  const data = document.getElementById('dataEntrada').value;
  const texto = document.getElementById('textoEntrada').value;
  localStorage.setItem(`diario_${usuarioAtual}_${data}`, texto);
  alert('Entrada salva!');
}

function carregarEntrada() {
  if (!usuarioAtual) return alert('Você precisa estar logado.');
  const data = document.getElementById('dataEntrada').value;
  const texto = localStorage.getItem(`diario_${usuarioAtual}_${data}`) || '';
  document.getElementById('textoEntrada').value = texto;
}

function logout() {
  usuarioAtual = null;
  alert('Você saiu.');
  mostrar('login');
}

function enviarMensagem() {
  const msg = document.getElementById('mensagem').value;
  if (!msg.trim()) return;
  adicionarMensagem('Você', msg);
  document.getElementById('mensagem').value = '';
  respostaBot(msg);
}

function adicionarMensagem(remetente, texto) {
  const chat = document.getElementById('chat');
  const novaMsg = document.createElement('div');
  novaMsg.innerHTML = `<strong>${remetente}:</strong> ${texto}`;
  chat.appendChild(novaMsg);
  chat.scrollTop = chat.scrollHeight;
}

function respostaBot(pergunta) {
  let resposta = '';
  pergunta = pergunta.toLowerCase();

  if (pergunta.includes('oi') || pergunta.includes('olá')) {
    resposta = 'Olá, humano! Como posso te ajudar hoje?';
  } else if (pergunta.includes('nome')) {
    resposta = 'Eu sou o G4BBz, seu assistente virtual hacker.';
  } else if (pergunta.includes('ajuda')) {
    resposta = 'Posso ajudar com o diário, cadastro, ou segredos do universo 😎';
  } else if (pergunta.includes('internet')) {
    resposta = 'Ainda não tenho acesso à rede, mas posso simular isso pra você.';
  } else {
    resposta = 'Desculpe, ainda estou aprendendo com o mestre Gabriel...';
  }

  setTimeout(() => adicionarMensagem('G4BBz', resposta), 600);
}

// Auto mostrar login ao carregar
mostrar('login');
