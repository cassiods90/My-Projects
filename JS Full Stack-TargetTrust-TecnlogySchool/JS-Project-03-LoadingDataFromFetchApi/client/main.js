const url = 'http://localhost:3000'
const postsContainer = document.getElementById('posts')
const formCriarUsuario = document.getElementById('criar-usuario')

const appState = {
  users: [],
  posts: [],
  comments: [],
}

function getUserById(id) {
  const {users} = appState

  let userName = 'Sem autor'

  users.forEach((usuario) => {
    if (id === usuario.id) userName = usuario.name
  })

  return userName
}

function getCommentsByPostId(postId) {
  const {comments} = appState

  /*   const commentsByPost = []
  comments.forEach((comentario) => {
    if (comentario.postId === postId) commentsByPost.push(comentario)
  })
  return commentsByPost */

  return comments.filter((comentario) => comentario.postId === postId)
}

function criarComentarios(comentarios) {
  let marcacao = ''

  comentarios.forEach(
    (comentario) =>
      (marcacao += `
        <div class="comment">
          <div class="comment-email">
            ${comentario.email}
          </div>
          <div class="comment-body">
            ${comentario.body}
          </div>
        </div>
      `),
  )

  return marcacao
}

function novoComentario() {
  const form = document.createElement('form')
  form.classList.add('criar-comentario')

  const textarea = document.createElement('textarea')

  const br = document.createElement('br')

  const button = document.createElement('button')
  button.textContent = 'Adicionar comentário'

  form.appendChild(textarea)
  form.appendChild(br)
  form.appendChild(button)

  const novoComentario = document.createElement('div')
  novoComentario.appendChild(form)

  return novoComentario.innerHTML
}

function criarPost(post) {
  const {title, body, userId, id} = post

  const userName = getUserById(userId)

  const comments = getCommentsByPostId(id)

  return `
    <div class="container">
      <div class="post-title">
        ${title}
      </div>
      <div class="post-body">
        ${body}
      </div>
      <div class="post-author">
        ${userName}
      </div>
      <div class="comments">
        ${criarComentarios(comments)}
      </div>
      <div class="novo-comentario">
        ${novoComentario()}
      </div>
    </div>
  `
}

function criarEventos() {
  const addCommentForm = document.querySelectorAll('form.criar-comentario')
  addCommentForm.forEach((formulario) =>
    formulario.addEventListener('submit', (evento) => {
      evento.preventDefault()
      const form = evento.target
      const value = form.querySelector('textarea').value
      console.log(
        '🚀 ~ file: main.js ~ line 117 ~ formulario.addEventListener ~ value',
        value,
      )
    }),
  )
}

function createApp() {
  const {users, posts, comments} = appState

  if (users.length && posts.length && comments.length) {
    let marcacaoFinal = ''

    posts.forEach((post) => (marcacaoFinal += criarPost(post)))

    postsContainer.innerHTML = marcacaoFinal

    criarEventos()
  }
}

fetch(`${url}/posts`)
  .then((resposta) => resposta.json())
  .then((posts) => {
    const postsSelecionados = posts.slice(0, 10)
    appState.posts = postsSelecionados
    createApp()
  })

fetch(`${url}/users`)
  .then((resposta) => resposta.json())
  .then((usuarios) => {
    appState.users = usuarios
    createApp()
  })

fetch(`${url}/comments`)
  .then((resposta) => resposta.json())
  .then((comentarios) => {
    appState.comments = comentarios
    createApp()
  })

formCriarUsuario.addEventListener('submit', (event) => {
  event.preventDefault()

  const usuario = {
    name: document.getElementById('name').value,
    username: document.getElementById('username').value,
    email: document.getElementById('email').value,
  }

  fetch(`${url}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(usuario),
  })
})