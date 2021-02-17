const form = document.getElementById('form-saver')
const name = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const favoriteType = document.getElementById('favoriteType')
const generations = document.getElementsByName('generation')
const initialType = document.getElementsByName('starter')
const feedback = document.getElementById('feedback')
const localStorageKey = 'form-saver'
const hideShowLocalStorage = document.querySelector('.localStorageContent')
const hideLocalStorage = document.querySelector('.localStorageContent')
const showLocalStorage = document.querySelector('.showLocalStorage')

function getFormData() {
    const nameVal = name.value
    const emailVal = email.value
    const phoneVal = phone.value
    const selectedFavorite = favoriteType.value
    const selectedGenerations = []
    let selectedStarterType
    const feedbackVal = feedback.value

    generations.forEach((generation) => {
        if (generation.checked) {
            selectedGenerations.push(generation.id)
        }
    })

    initialType.forEach((type) => {
        if (type.checked) selectedStarterType = type.value
    })

    const formData = {
        name: nameVal,
        email: emailVal,
        phone: phoneVal,
        favoriteType: selectedFavorite,
        generation: selectedGenerations,
        starter: selectedStarterType,
        feedback: feedbackVal,
    }
    return formData
}

function save(formData) {
    const formEmString = JSON.stringify(formData)
    localStorage.setItem(localStorageKey, formEmString)


}

form.addEventListener('input', () => {
    const formData = getFormData()
    save(formData)
})

function getlocalStorageInfos() {
    let LocalStorageItem = JSON.parse(localStorage.getItem(localStorageKey));
    const viewLocalStorage = document.querySelector('.localStorageContent')
    const html = `
    <i class="fa fa-times" aria-hidden="true"></i>
    <div class="storageTitle">
        <h1>This is the data saved on LocalStorage<h1>        
    </div>
    <div class="storageData">
        <span>Name:                 ${LocalStorageItem.name}</span>
        <span>Mail:                 ${LocalStorageItem.email}</span> 
        <span>Phone:                ${LocalStorageItem.phone}</span> 
        <span>Favorite Type:        ${LocalStorageItem.favoriteType}</span> 
        <span>Poke Generation:      ${LocalStorageItem.generation}</span> 
        <span>Initial Tye:          ${LocalStorageItem.starter}</span> 
        <span>Your Text:            ${LocalStorageItem.feedback}</span>
    </div> 
    `
    console.log(LocalStorageItem)
    viewLocalStorage.innerHTML = html
}

hideLocalStorage.addEventListener('click', () => {     
    hideShowLocalStorage.classList.add('hide')   
})

showLocalStorage.addEventListener('click', () => {     
    hideShowLocalStorage.classList.remove('hide') 
    getlocalStorageInfos()  
})