const addPoke = document.querySelector('.content-list')
const inputField = document.querySelector('.input-field input')
const filterPoke = document.querySelector('.content-list')
const checkFilter = document.querySelectorAll('button')
console.log(addPoke)
start()

/* -------------------- Start - Function Start -------------------- */
function start() {
    fetchData()
    change(50)
}
/* -------------------- End - Function Start -------------------- */
function change(cash) {
    console.log(cash);
    var note10 = 0;
    var note5 = 0;
    var note2 = 0;
    
    bill = cash / 10;
    if(cash % 10 == 0) {
       note10 === bill;
    }
    console.log(bill);
    console.log(note10);
}

/* -------------------- Start - Fetch to get data from api -------------------- */
function fetchData() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then((response) => response.json())
    .then(function(allpokemon){
        allpokemon.results.forEach(function(pokemon){
            fetchPokemonData(pokemon);
        })
    })
}

function fetchPokemonData(pokemon){
    let url = pokemon.url
    fetch(url)
    .then(response => response.json())
    .then(function(pokeData){
        getPokeObject(pokeData)
    })
}
/* -------------------- Start - Fetch to get data from api -------------------- */


/* -------------------- Start - Get the name of the poke sorted -------------------- */
function getPokeObject(pokeData) {
    const pokeId = pokeData.id
    const pokeName = pokeData.name
    const pokeTypes = pokeData.types

    let pokeImage = document.querySelector('.content-list')
    pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`
    
    template(pokeImage, pokeId, pokeName)
    
    
    pokeTypes.forEach(function(type){
        poketypes = type.type.name
        document.getElementById(pokeId).innerHTML += `<li class="type">${poketypes}</li>`
        // console.log(poketypes)
    })
}
/* -------------------- End - Get the name of the poke sorted -------------------- */


/* -------------------- Start - Set the data of the poke sorted on html -------------------- */
const template = (pokeImage, pokeId, pokeName) => { 
    const html = `  <li class="content-list-item">
                        <img class="item-image"src="${pokeImage.srcset}">
                        <h1 class="item-title">#${pokeId} ${pokeName}</h1>
                        <ul id="${pokeId}" class="type-poke">
                        
                        </ul>
                        
                    </li>`
    // console.log(html)
    addPoke.innerHTML += html
}
/* -------------------- End - Set the data of the poke sorted on html -------------------- */


/* -------------------- Start - Filter Poke Input -------------------- */ 
const filterList = (searchWord) => {
    Array.from(filterPoke.children)
        .filter((poke) => !poke.textContent.toLowerCase().includes(searchWord))
        .forEach((poke) => poke.classList.add('filtered'))

    Array.from(filterPoke.children)
        .filter((poke) => poke.textContent.toLowerCase().includes(searchWord))
        .forEach((poke) => poke.classList.remove('filtered'))
}

inputField.addEventListener('keyup', () => {
    const searchWord = inputField.value.trim().toLowerCase()
    filterList(searchWord)
})
/* -------------------- End - Filter Poke Input -------------------- */


/* -------------------- Start - Filter Poke by type -------------------- */ 
checkFilter.forEach(function(filter) {
    filter.addEventListener('click', () => {
        selectPokebyType(filter.value)




        // sortedArray(filterPoke)
        // pokesFilter(filter.value, filterPoke)
    })
})

const selectPokebyType = (filter) => {
    Array.from(filterPoke.children)
        .filter((poke) => !poke.textContent.toLowerCase().includes(filter))
        .forEach((poke) => poke.classList.add('filtered'))
        

    Array.from(filterPoke.children)
        .filter((poke) => poke.textContent.toLowerCase().includes(filter))
        .forEach((poke) => poke.classList.remove('filtered'))
}
/* -------------------- End - Filter Poke by type -------------------- */ 






// const pokesFilter = (filter, filterPoke) => {
//     const tamArray = filterPoke.children.length
//     console.log('tamanho do array ' + tamArray)
//     console.log('type selected ' + filter)
    
//     const pokeElements = filterPoke.textContent

//     var res = pokeElements.match(/grass/)
//     console.log(res)


//     // console.log(pokeElements)
    
// }