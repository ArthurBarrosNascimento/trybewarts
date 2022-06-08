function loginForms() {
  const btnLogin = document.getElementById('btn-login');
  btnLogin.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email === 'tryber@teste.com' && password === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}

function doOnload() {
  loginForms();
}

function availableBtn() {
  const checkBox = document.querySelector('#agreement');
  const btn = document.querySelector('#submit-btn');
  btn.disabled = true;
  checkBox.addEventListener('click', () => {
    if (checkBox.checked) {
      btn.disabled = false;
    }
    else {
      btn.disabled = true;
    }
  });

}

availableBtn();

window.onload = doOnload;
