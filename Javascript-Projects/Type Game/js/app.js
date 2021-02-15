const fieldArea = document.querySelector('.field-game-area')
const restartButton = document.querySelector('.restart-button')
const scoreboardButton = document.querySelector('.scoreboard-button')
const originalPhrase =  document.querySelector('.original-phrase')
const nameInput = document.querySelector('.name-input')
const addScoreboard = document.querySelector('.scoreboard-results')
const removePeople = document.querySelector('.scoreboard-results')
const errorMsg = document.querySelector('.msg-error')

game = {
    'typeFinish': 50,
};


/* -------------------- Start - Function Start -------------------- */
start()
function start() {
    phraseSize()
    startChronometer()
    startGame()
    startCounters()
    restartGame()
    scoreboard()
    removePeopleScoreboard()
}
/* -------------------- End - Function Start -------------------- */


/* -------------------- Start - Get the size and set the Html of main text -------------------- */
function phraseSize() {
    const phrase =  originalPhrase.innerHTML
    const numberWords  = phrase.split(" ").length
    const phraseSize = document.querySelector('.phrase-size')
    phraseSize.innerHTML = `<i class="fa fa-file-text" aria-hidden="true"></i>  ${numberWords} words`
}
/* -------------------- End - Get the size and set the Html of main text -------------------- */


/* -------------------- Start - Chronometer of game -------------------- */
function startChronometer() {
    const timeLeft = document.querySelector('.time-left')
    
    fieldArea.addEventListener('focus', () => {
        var timeLeftText = game.typeFinish

        var cronometroID = setInterval(function() {
            timeLeftText--;

            timeLeft.innerHTML =  timeLeftText //game.typeFinish
            if (timeLeftText < 1 || game.typeFinish < 1) {
                clearInterval(cronometroID)
                fieldArea.disabled = true
    		}
    	}, 1000);
    })
}
/* -------------------- End - Chronometer of game -------------------- */


/* -------------------- Start - When click on text area, start the game and compare the typed content -------------------- */
function startGame () {
    const phrase =  originalPhrase.innerHTML
    fieldArea.addEventListener('keyup', () => {
        const typedText = fieldArea.value
        var textLength = typedText.split("").length
        const compare =  phrase.substr(0, textLength)
        
    
        if(typedText === phrase) {    
            game.typeFinish = 0
        }

        if (typedText === compare) {
            fieldArea.classList.add('green-border')
            fieldArea.classList.remove('red-border')
        } else {
            fieldArea.classList.add('red-border')
            fieldArea.classList.remove('green-border')
        }
    })
}
/* -------------------- End - When click on text area, start the game and compare the typed content -------------------- */


/* -------------------- Start - start the counters variables -------------------- */
function startCounters() {
    fieldArea.addEventListener('keyup', () => {
        const content = fieldArea.value
        const words = content.split(/\S+/).length - 1
        const characters = content.length

        const amountWords = document.querySelector('.words-typed')
        amountWords.innerHTML = words

        const amountCharacters = document.querySelector('.character-typed')
        amountCharacters.innerHTML = characters
    })
}
/* -------------------- End - start the counters variables -------------------- */


/* -------------------- Start - Restart game  -------------------- */
function restartGame() {
    restartButton.addEventListener('click', () => {
        fieldArea.disabled = false
        fieldArea.classList.remove('red-border')
        fieldArea.classList.remove('green-border')
        // startChronometer()
        fieldArea.value = ""

        game.typeFinish = "50"
        let timeLeft = document.querySelector('.time-left')
        timeLeft.innerHTML = game.typeFinish

        const amountWords = document.querySelector('.words-typed')
        amountWords.innerHTML = "0"

        const amountCharacters = document.querySelector('.character-typed')
        amountCharacters.innerHTML = "0"

        errorMsg.innerHTML = ``
    })
}
/* -------------------- End - Restart game  -------------------- */


/* -------------------- Start - Scoreboard game  -------------------- */
function scoreboard() {
    scoreboardButton.addEventListener('click', () => {
        if(fieldArea.classList.contains('green-border')) {
            const amountWords = document.querySelector('.words-typed').innerHTML
            const amountCharacters = document.querySelector('.character-typed').innerHTML
    
            const html = `  <li class="people-results">
                                <p class="people-name">${nameInput.value}</p>
                                <p class="peplo-word">${amountWords}</p>
                                <p class="people-character">${amountCharacters}</p>
                                <p class="people-remove"><i class="delete fa fa-times" aria-hidden="true"></i></p>
                            </li>`
        
            addScoreboard.innerHTML += html


        } else {
            const htmlError = `<p class="error-msg"> You missed, try again !!!`
        
            errorMsg.innerHTML = htmlError
        }
        
    })
}
/* -------------------- End - Scoreboard game  -------------------- */


/* -------------------- Start - Remove Scoreboard game  -------------------- */
function removePeopleScoreboard() {
    removePeople.addEventListener('click', (remove) => {
        if (remove.target.classList.contains('delete')) { 
            remove.target.parentElement.parentElement.remove()
        }
    })
}
/* -------------------- Start - Remove Scoreboard game  -------------------- */