const addImage = document.querySelector('.content-left')
const randomPokeButton = document.querySelector('.random-poke')
const getInput = document.querySelector('.input-poke')
const correctPoke = document.querySelector('.whos-Poke')
const countPoke = document.querySelector('.guessed-pokes')

var count = 0;

audioPlay()
start()

/* Start - Function Start */
function start() {
    fetchData()
}
/* End - Function Start */


/* Start - Fetch to get data from api */
function fetchData() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then((response) => response.json())
    .then((data) => {
        // console.log(data)
        // sortedArray(data)
        sortedArray(data)
    })
}
/* Start - Fetch to get data from api */


/* Start - Sorted a random element from array and get the data from this element sorted */
function sortedArray(data) {
    const tamArray = data.results.length
    // console.log(tamArray)
    const pokeSorted = Math.floor(Math.random() * tamArray)
    pokeID = pokeSorted + 1
    // console.log('teste pokeSorted' + pokeSorted)
    // console.log('teste pokeID' + pokeID)
    // console.log(data.results[pokeSorted])
    var pokeData = data.results[pokeSorted]
    getPokeObject(pokeData, pokeID)
}
/* End - Sorted a random element from array and get the data from this element sorted */


/* Start - Get the name of the poke sorted */
function getPokeObject(pokeData, pokeID) {
    // console.log(pokeData)
    createPokeImage(pokeID)
    const pokeName = pokeData.name
    console.log(pokeName)
    comparePoke(pokeName)
}
/* End - Get the name of the poke sorted */


/* Start - Get the image of the poke sorted */
function createPokeImage(pokeID) {  
    let pokeImage = document.createElement('img')
    pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`  
    template(pokeImage)
}
/* End -  Get the image of the poke sorted */


/* Start - Set the image of the poke sorted on html */
const template = (pokeImage) => {
    // console.log(pokeImage.srcset)
    const html = `<img class="poke-image" src="${pokeImage.srcset}">`
    // console.log(html)
    addImage.innerHTML = html
}
/* End - Set the image of the poke sorted on html */


/* Start - When click the button, print on html the phrase */
randomPokeButton.addEventListener('click', () => {
    const html = `<h1 class="whos-Poke">Who's that Pokémon</h1>`
    correctPoke.innerHTML = html
    audioPlay()
    start()
})
/* End - When click the button, print on html the phrase */


/* Start - Play audio */
function audioPlay() {
    document.getElementById("myAudio").play();
}
/* End - Play audio */


/* Start - Compare the poke sorted with the poke typed */
function comparePoke(pokeName) {
    getInput.addEventListener('keyup', () => {
        const searchWord = getInput.value.trim().toLowerCase()
        // console.log('poke sorteado ' + pokeName)
        // console.log('poke digitado' + searchWord)

        if(pokeName === searchWord) {
            // console.log('voce acertouuuuuuuuuuuuuu')
            
            const correctPokeHtml = `<h1>Gotcha !!! <br>The Pokemon is <br> ${pokeName}</h1>`
            correctPoke.innerHTML = correctPokeHtml
            
            const pokeShadow = document.querySelector('.poke-image')
            // console.log(pokeShadow)

            pokeShadow.classList.add('shadow')

            count ++
            // console.log(count)
            const countPokeHtml = `<h1 class="guessed-text">You guessed ${count} Pokémons !!!</h1>`
            countPoke.innerHTML = countPokeHtml
        }
    })
}
/* End - Compare the poke sorted with the poke typed */