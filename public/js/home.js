const myModal = new bootstrap.Modal(
  document.getElementById('transaction-modal')
)
let logged = sessionStorage.getItem('logged')
const session = localStorage.getItem('session')

const checkLogged = () => {
  const session = localStorage.getItem('session')

  if (session) {
    sessionStorage.setItem('logged', session)
    logged = session
  }

  if (!logged) {
    alert('Por favor, faça o login para acessar sua conta.')
    window.location.href = 'index.html'
    return
  }
}

checkLogged()
