const myModal = new bootstrap.Modal(
  document.getElementById('transaction-modal')
)
let logged = sessionStorage.getItem('logged')
const session = localStorage.getItem('session')

let data = {
  transactions: [],
}

const getCashIn = () => {
  const cashIn = data.transactions.filter((item) => item.type === '1')

  if (cashIn.length) {
    let cashInHtml = ``
    let limit = 0
    if (cashIn.length > 5) {
      limit = 5
    } else {
      limit = cashIn.length
    }

    for (let i = 0; i < limit; i++) {
      cashInHtml += `
         <div class="row mb-4">
          <div class="col-12">
              <h3 class="fs-2">R$ ${cashIn[i].value
                .toFixed(2)
                .replace('.', ',')}</h3>
              <div class="container p-0">
                <div class="row">
                  <div class="col-12 col-md-8">
                    ${cashIn[i].description}
                  </div>
                  <div class="col-12 col-md-3 d-flex justify-content-end">
                    ${cashIn[i].date}
                  </div>
                </div>
              </div>
            </div>
        </div>
      `
    }

    document.getElementById('cash-in-list').innerHTML = cashInHtml
  }

  return cashIn
}

const getCashOut = () => {
  const cashOut = data.transactions.filter((item) => item.type === '2')

  if (cashOut.length) {
    let cashOutHtml = ``
    let limit = 0
    if (cashOut.length > 5) {
      limit = 5
    } else {
      limit = cashOut.length
    }

    for (let i = 0; i < limit; i++) {
      cashOutHtml += `
         <div class="row mb-4">
          <div class="col-12">
              <h3 class="fs-2">R$ ${cashOut[i].value
                .toFixed(2)
                .replace('.', ',')}</h3>
              <div class="container p-0">
                <div class="row">
                  <div class="col-12 col-md-8">
                    ${cashOut[i].description}
                  </div>
                  <div class="col-12 col-md-3 d-flex justify-content-end">
                    ${cashOut[i].date}
                  </div>
                </div>
              </div>
            </div>
        </div>
      `
    }

    document.getElementById('cash-out-list').innerHTML = cashOutHtml
  }

  return cashOut
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

  getCashIn()
  getCashOut()
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
  getCashIn()
  getCashOut()
  getTotal()
  alert('Lançamento adicionado com sucesso!')
})

const getTotal = () => {
  const transactions = data.transactions
  let total = 0
  transactions.forEach((item) => {
    if (item.type === '1') {
      total += item.value
    } else {
      total -= item.value
    }
  })
  document.getElementById('total').innerHTML = `R$ ${total
    .toFixed(2)
    .replace('.', ',')}`
}

document.getElementById('transactions-button').addEventListener('click', () => {
  window.location.href = 'transactions.html'
})

getTotal()