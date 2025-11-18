// Inicializa modal de cadastro
const myModal = new bootstrap.Modal(document.getElementById('register-modal'))
let logged = sessionStorage.getItem('logged')

// --------- FUNÇÕES AUXILIARES ---------

const saveAccount = (data) => {
  localStorage.setItem(data.login, JSON.stringify(data))
}

const getAccount = (login) => {
  const accountData = localStorage.getItem(login)

  if (accountData) {
    return JSON.parse(accountData)
  }

  return null
}

const saveSession = (data, shouldSave) => {
  if (shouldSave) {
    localStorage.setItem('session', data)
  }
  sessionStorage.setItem('logged', data)
}

const checkLogged = () => {
  const session = localStorage.getItem('session')

  if (session) {
    sessionStorage.setItem('logged', session)
    logged = session
  }

  if (logged) {
    saveSession(logged, true)
    window.location.href = 'home.html'
  }
}

// ---- CHAMA VERIFICAÇÃO DE LOGIN DEPOIS DAS FUNÇÕES ----
checkLogged()

// --------- LOGIN ---------

const loginForm = document.getElementById('login-form')

if (loginForm) {
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const email = document.getElementById('email-input').value
    const password = document.getElementById('password-input').value
    const session = document.getElementById('session-check').checked

    const account = getAccount(email)

    if (!account || account.password !== password) {
      alert('Ops! Verifique o usuário e a senha.')
      return
    }

    saveSession(email, session)
    window.location.href = 'home.html'
  })
}

// --------- CRIAR CONTA ---------

const createForm = document.getElementById('create-form')
const emailInput = document.getElementById('email-create-input')
const passwordInput = document.getElementById('password-create-input')

if (createForm) {
  createForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const email = emailInput.value.trim()
    const password = passwordInput.value.trim()

    if (email.length < 5) {
      alert('Por favor, insira um e-mail válido.')
      return
    }

    if (password.length < 4) {
      alert('Por favor, insira uma senha válida.')
      return
    }

    // opcional: bloquear conta duplicada
    if (getAccount(email)) {
      alert('Já existe uma conta com esse e-mail.')
      return
    }

    saveAccount({ login: email, password, transactions: [] })
    myModal.hide()
    alert('Conta criada com sucesso!')
  })
}
