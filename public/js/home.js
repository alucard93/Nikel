const myModal = new bootstrap.Modal(
  document.getElementById('transaction-modal')
)
let logged = sessionStorage.getItem('logged')
const session = localStorage.getItem('session')

let data = {
  transactions: [],
}
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

const dataUser = localStorage.getItem(logged)
if (dataUser) {
  data = JSON.parse(dataUser)
}

checkLogged()

const logout = () => {
  sessionStorage.removeItem('logged')
  localStorage.removeItem('session')

  window.location.href = 'index.html'
}

document.getElementById('button-logout').addEventListener('click', logout)
const saveData = (data) => {
  localStorage.setItem(data.login, JSON.stringify(data))
}
document.getElementById('transaction-form').addEventListener('submit', (e) => {
  e.preventDefault()

  const value = parseFloat(document.getElementById('value-input').value)
  const description = document.getElementById('description-input').value
  const date = document.getElementById('date-input').value
  const type = document.querySelector('input[name="type-input"]:checked').value

  data.transactions.unshift({
    value,
    description,
    date,
    type,
  })
  saveData(data)

  myModal.hide()
  e.target.reset()
})
