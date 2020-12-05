const removeAddTodo = document.querySelector('.contentToDo') //pega a classe .content e joga dentro da variavel
const removeAddDone = document.querySelector('.contentDone')
const removeAllTodo = document.querySelector('.removeAll')
const removeAllDone = document.querySelector('.removeAllDone')
const form = document.querySelector('.newToDo')
const search = document.querySelector('.search input')


// Start function to hide clear list buttom
function hideButtomToDo() {
    const showHideCleanList = document.querySelectorAll('.contentToDo > *') //pega todos os filhos do elemento contentToDo e coloca dentro do array
    const listTam = showHideCleanList.length // ele le o tamanho do array

    if(listTam === 0){ 
        removeAllTodo.classList.add('hide')
    } else {
        removeAllTodo.classList.remove('hide')
    }
}

function hideButtomDone() {
    const showHideCleanListDone = document.querySelectorAll('.contentDone > *')
    const listTamDone = showHideCleanListDone.length

    if(listTamDone === 0){ 
        removeAllDone.classList.add('hide')
    } else {
        removeAllDone.classList.remove('hide')
    }
}
// End function to hide clear list buttom

//-------------------- START REMOVE TO DO -------------------- 
    // Start delete to do
    removeAddTodo.addEventListener('click', (close) => { //Aqui ele pega o evento de clique na variavel removeAddTodo que recebe a classe .contentToDo
        if (close.target.classList.contains('delete')) { //ELe recebe como alvo, a classe delete, se o botao cliclado tiver a classe delete, executa if  
            close.target.parentElement.remove() //ele remove os elementos da classe delete
            hideButtomToDo()
        }

        if(close.target.classList.contains('complete')) { //se o elemento do clique, tiver a classe complete, faz o if
            const move = close.target.parentElement   //Ele pega o pai do elemento close e joga pra dentro do move
            document.querySelector('.contentDone').appendChild(move) //Muda o elemento dentro do move, para filho da classe contentDone
            hideButtomToDo()
            hideButtomDone()
        }
    })
    // End delete to do

    // Start delete done
    removeAddDone.addEventListener('click', (close) => { 
        if (close.target.classList.contains('delete')) { 
            close.target.parentElement.remove() 
            hideButtomDone()
        }
    })
    // End delete done

    // Start delete All to do
    removeAllTodo.addEventListener('click', () => { 
        removeAddTodo.innerHTML = '' // Aqui ele insere html vazio
        removeAllTodo.classList.add('hide')   
    })
    // End delete All to do

    // Start delete All done
    removeAllDone.addEventListener('click', () => { //Aqui ele pega o evento de clique na variavel list que recebe a classe .content
        removeAddDone.innerHTML = ''
        removeAllDone.classList.add('hide')    
    })
    // End delete All done
//-------------------- START REMOVE TO DO -------------------- 


//--------------------START ADD TO DO -------------------- 
const template = (phrase) => {
    const html = `
  <li class="toDo">
    <span>${phrase}</span><i class="fa fa-check complete" aria-hidden="true"></i><i class="fa fa-times delete" aria-hidden="true"></i> 
  </li>
  `//Aqui ele adiciona o conteudo do html, e adiciona pra variavel html
    removeAddTodo.innerHTML += html //aqui ele adicona o conteudo da variavel html, na variavel removetodo, ou seja, la na classe content 
}

form.addEventListener('submit', (enter) => { //Aqui ele pega o evento do enter(submit), na variavel form, ou seja, la na classe newToDo
    enter.preventDefault() 
    const todo = form.add.value.trim()

    if (todo.length) {
        template(todo)
        form.reset()
        removeAllTodo.classList.remove('hide')
    }
})
//-------------------- END ADD TO DO -------------------- 


//-------------------- START FILTER -------------------- 
const filterList = (filterBy) => {
    Array.from(removeAddTodo.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(filterBy))
        .forEach((todo) => todo.classList.add('filtered'))

    Array.from(removeAddTodo.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(filterBy))
        .forEach((todo) => todo.classList.remove('filtered'))
}

search.addEventListener('keyup', () => {
    const searchWord = search.value.trim().toLowerCase()
    filterList(searchWord)
})
//-------------------- END FILTER -------------------- 