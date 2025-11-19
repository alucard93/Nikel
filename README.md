# Nikel

Sistema de gestão financeira pessoal desenvolvido para ajudar usuários a organizar suas finanças, controlar receitas e despesas, e acompanhar seu saldo de forma simples e eficiente.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação e Uso](#instalação-e-uso)
- [Páginas da Aplicação](#páginas-da-aplicação)
- [Funcionalidades Detalhadas](#funcionalidades-detalhadas)
- [Armazenamento de Dados](#armazenamento-de-dados)
- [Autenticação](#autenticação)

## 🎯 Sobre o Projeto

O Nikel é uma aplicação web de gestão financeira pessoal que permite aos usuários:

- Criar uma conta e fazer login
- Registrar transações financeiras (entradas e saídas)
- Visualizar o saldo total
- Consultar histórico de transações
- Manter sessão ativa (opcional)

A aplicação utiliza armazenamento local do navegador (localStorage e sessionStorage) para persistir dados e sessões de usuário.

## ✨ Funcionalidades

### Autenticação
- **Login**: Autenticação através de e-mail e senha
- **Criação de conta**: Registro de novos usuários via modal
- **Sessão persistente**: Opção de "Permanecer logado" para manter sessão ativa
- **Validação**: Verificação de credenciais e prevenção de contas duplicadas

### Gestão Financeira
- **Saldo total**: Cálculo automático baseado em todas as transações
- **Transações**: Adicionar lançamentos financeiros (entradas e saídas)
- **Visualização**: Lista de últimas 5 entradas e 5 saídas na página inicial
- **Histórico completo**: Visualização de todas as transações em tabela

### Interface
- **Design responsivo**: Layout adaptável para diferentes tamanhos de tela
- **Modais**: Formulários em modais para melhor experiência do usuário
- **Navegação**: Menu superior com links para Home e Transações
- **Feedback visual**: Alertas e confirmações para ações do usuário

## 🛠 Tecnologias Utilizadas

- **HTML5**: Estrutura das páginas
- **CSS3**: Estilização personalizada
- **JavaScript (Vanilla)**: Lógica da aplicação
- **Bootstrap 5.1.3**: Framework CSS para layout responsivo
- **Bootstrap Icons 1.13.1**: Ícones da interface
- **LocalStorage/SessionStorage**: Armazenamento de dados no navegador

## 📁 Estrutura do Projeto

```
Nikel/
│
├── public/
│   ├── assets/
│   │   └── images/          # Imagens e logos
│   │       ├── codai-logo.png
│   │       ├── coins-small.png
│   │       ├── coins.png
│   │       ├── growdev-logo.png
│   │       ├── nikel-logo.png
│   │       ├── nikel-small-logo.png
│   │       └── pocket.png
│   │
│   ├── css/
│   │   └── styles.css       # Estilos customizados
│   │
│   ├── js/
│   │   ├── index.js         # Lógica da página de login
│   │   ├── home.js          # Lógica da página inicial
│   │   └── transactions.js  # Lógica da página de transações
│   │
│   ├── index.html           # Página de login/cadastro
│   ├── home.html            # Página inicial (dashboard)
│   └── transactions.html    # Página de histórico de transações
│
└── README.md                # Documentação do projeto
```

## 🚀 Instalação e Uso

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Servidor web local (opcional, mas recomendado)

### Instalação

1. **Clone o repositório**:
```bash
git clone https://github.com/seu-usuario/Nikel.git
cd Nikel
```

2. **Execute um servidor web local**:

   **Opção 1 - Python**:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

   **Opção 2 - Node.js (http-server)**:
```bash
npx http-server -p 8000
```

   **Opção 3 - VS Code Live Server**:
   - Instale a extensão "Live Server"
   - Clique com o botão direito em `index.html` e selecione "Open with Live Server"

3. **Acesse no navegador**:
```
http://localhost:8000/public/index.html
```

### Uso Básico

1. **Criar conta**:
   - Acesse a página inicial (`index.html`)
   - Clique em "Criar uma conta"
   - Preencha e-mail e senha (mínimo 5 caracteres para e-mail e 4 para senha)
   - Clique em "Criar conta"

2. **Fazer login**:
   - Insira e-mail e senha
   - (Opcional) Marque "Permanecer logado" para manter sessão ativa
   - Clique em "Entrar"

3. **Adicionar transação**:
   - Na página inicial ou de transações, clique no botão flutuante "+"
   - Preencha: valor, descrição, data e tipo (Entrada/Saída)
   - Clique em "Adicionar"

4. **Visualizar transações**:
   - **Home**: Visualiza últimas 5 entradas e 5 saídas
   - **Transações**: Visualiza todas as transações em tabela

5. **Logout**:
   - Clique no ícone de perfil no menu superior
   - Selecione "Sair"

## 📄 Páginas da Aplicação

### 1. Index.html (Login/Cadastro)
- **Rota**: `/public/index.html`
- **Descrição**: Página inicial com formulário de login e modal de cadastro
- **Funcionalidades**:
  - Autenticação de usuário
  - Criação de nova conta
  - Validação de credenciais
  - Redirecionamento automático se já estiver logado

### 2. Home.html (Dashboard)
- **Rota**: `/public/home.html`
- **Descrição**: Página principal com visão geral das finanças
- **Funcionalidades**:
  - Exibição do saldo total
  - Lista das últimas 5 entradas
  - Lista das últimas 5 saídas
  - Botão para ver todas as transações
  - Botão flutuante para adicionar transação
  - Formulário modal para nova transação

### 3. Transactions.html (Histórico)
- **Rota**: `/public/transactions.html`
- **Descrição**: Página com histórico completo de transações
- **Funcionalidades**:
  - Tabela com todas as transações
  - Filtro por tipo (não implementado na interface, mas dados estão disponíveis)
  - Botão flutuante para adicionar transação
  - Formulário modal para nova transação

## 🔧 Funcionalidades Detalhadas

### Sistema de Autenticação

#### Login (`index.js`)
- Validação de e-mail e senha
- Verificação de conta existente no localStorage
- Suporte para sessão persistente
- Redirecionamento automático para usuários já logados

**Funções principais**:
- `getAccount(login)`: Busca dados da conta pelo e-mail
- `saveAccount(data)`: Salva nova conta no localStorage
- `saveSession(data, shouldSave)`: Gerencia sessão (sessionStorage e localStorage)
- `checkLogged()`: Verifica se usuário já está logado

#### Criar Conta
- Validação de e-mail (mínimo 5 caracteres)
- Validação de senha (mínimo 4 caracteres)
- Prevenção de contas duplicadas
- Inicialização com array vazio de transações

### Gestão de Transações

#### Adicionar Transação
- **Campos**: Valor (number), Descrição (text), Data (date), Tipo (radio)
- **Tipos**:
  - `1`: Entrada (receitas)
  - `2`: Saída (despesas)
- **Armazenamento**: Adiciona no início do array (`unshift`) para exibir mais recentes primeiro

#### Cálculo de Saldo (`home.js`)
```javascript
const getTotal = () => {
  // Soma todas as entradas e subtrai todas as saídas
  total = entradas - saídas
}
```

#### Visualização
- **Home**: Exibe até 5 entradas e 5 saídas mais recentes
- **Transactions**: Exibe todas as transações em formato de tabela

### Proteção de Rotas

Todas as páginas internas (home.html e transactions.html) verificam se o usuário está logado:
- Se não houver sessão, redireciona para `index.html`
- Verifica `sessionStorage` e `localStorage` para manter sessão

## 💾 Armazenamento de Dados

### LocalStorage
Armazena dados permanentes:

```javascript
// Estrutura de uma conta:
{
  "email@exemplo.com": {
    "login": "email@exemplo.com",
    "password": "senha123",
    "transactions": [
      {
        "value": 100.50,
        "description": "Salário",
        "date": "2024-01-15",
        "type": "1"
      }
    ]
  }
}

// Sessão persistente:
"session": "email@exemplo.com"
```

### SessionStorage
Armazena dados temporários (durante a sessão do navegador):

```javascript
"logged": "email@exemplo.com"
```

### Estrutura de Transação
```javascript
{
  value: Number,        // Valor da transação
  description: String,  // Descrição do lançamento
  date: String,        // Data no formato YYYY-MM-DD
  type: String         // "1" para entrada, "2" para saída
}
```

## 🔐 Autenticação

### Fluxo de Login
1. Usuário preenche e-mail e senha
2. Sistema busca conta no localStorage usando o e-mail como chave
3. Compara senha fornecida com senha armazenada
4. Se válido, cria sessão em sessionStorage (e localStorage se "Permanecer logado")
5. Redireciona para `home.html`

### Fluxo de Logout
1. Remove `logged` do sessionStorage
2. Remove `session` do localStorage (se existir)
3. Redireciona para `index.html`

### Proteção de Páginas
```javascript
const checkLogged = () => {
  // Verifica localStorage primeiro (sessão persistente)
  // Depois verifica sessionStorage
  // Se não houver sessão, redireciona para login
}
```

## 🎨 Estilos e Design

### Paleta de Cores
- **Primary**: `#4e0070` (Roxo escuro)
- **Secondary**: `#4c79d3` (Azul)
- **Background**: Gradientes com as cores primárias
- **Texto**: Preto e branco conforme contexto

### Componentes CSS
- `.button-login`: Botão de login principal
- `.button-default`: Botões de ação padrão
- `.button-float`: Botão flutuante circular (+)
- `.color-primary`: Cor primária para textos
- `.color-secondary`: Cor secundária para textos
- `.info`: Container de informações financeiras

## 📝 Observações Importantes

1. **Armazenamento Local**: Todos os dados são armazenados localmente no navegador. Ao limpar o cache/localStorage, os dados serão perdidos.

2. **Segurança**: Esta é uma aplicação de demonstração. Para produção, implemente:
   - Backend com API segura
   - Autenticação com tokens JWT
   - Criptografia de senhas
   - Validação server-side

3. **Navegadores Suportados**: Funciona em navegadores modernos que suportam ES6+ e localStorage/sessionStorage.

4. **Responsividade**: A aplicação utiliza Bootstrap 5 para garantir responsividade em diferentes dispositivos.

## 🚧 Possíveis Melhorias Futuras

- [ ] Edição de transações existentes
- [ ] Exclusão de transações
- [ ] Filtros por data e tipo
- [ ] Categorias de transações
- [ ] Gráficos e relatórios
- [ ] Exportação de dados (CSV/PDF)
- [ ] Backup em nuvem
- [ ] Múltiplas contas/carteiras
- [ ] Metas financeiras
- [ ] Notificações e lembretes

## 📄 Licença

Este projeto foi desenvolvido como parte de um curso/treinamento. Consulte os termos de uso específicos.

## 👥 Créditos

- **Criado por**: Marcus Vinicius
- **Design**: Bootstrap 5
- **Ícones**: Bootstrap Icons
- **Parceiros**: Codai, Growdev

---

**Desenvolvido com ❤️ para facilitar a gestão financeira pessoal**
