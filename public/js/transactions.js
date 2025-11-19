const myModal = new bootstrap.Modal(
  document.getElementById('transaction-modal')
)

let logged = sessionStorage.getItem('logged')

let data = {
  transactions: [],
}

// Renderiza a lista de lançamentos na tabela
const getTransactions = () => {
  const transactions = data.transactions
  let transactionsHtml = '' // antes era const, isso quebrava no "+="

  if (transactions.length) {
    transactions.forEach((item) => {
      const type = item.type === '2' ? 'Saída' : 'Entrada'

      transactionsHtml += `
        <tr>
          <th scope="row">${item.date}</th>
          <td>${item.value.toFixed(2)}</td>
          <td>${type}</td>
          <td>${item.description}</td>
        </tr>
      `
    })
  }

  const listEl = document.getElementById('transactions-list')
  if (listEl) {
    listEl.innerHTML = transactionsHtml
  }

  return transactions
}

// Logout
function logout() {
  sessionStorage.removeItem('logged')
  localStorage.removeItem('session')
  window.location.href = 'index.html'
}

document.getElementById('button-logout')?.addEventListener('click', logout)

// Verifica login e carrega dados do usuário
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

  // Carrega dados do usuário logado
  const dataUser = localStorage.getItem(logged)
  if (dataUser) {
    data = JSON.parse(dataUser)
  }

  getTransactions()
}

checkLogged()

// Salva os dados no localStorage usando o login do usuário
const saveData = (dataToSave) => {
  if (!logged) return

  // se quiser garantir que o login fique salvo junto nos dados:
  const payload = {
    ...dataToSave,
    login: logged,
  }

  localStorage.setItem(logged, JSON.stringify(payload))
}

// Listener do formulário de lançamento
document.getElementById('transaction-form')?.addEventListener('submit', (e) => {
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
  getTransactions()

  myModal.hide()
  e.target.reset()

  alert('Lançamento adicionado com sucesso!')
})
