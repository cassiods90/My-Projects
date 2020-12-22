const globalDivCheckboxes = document.getElementById('checkboxes')
const globalDivCountries = document.getElementById('divCountries')
const globalRadioAnd = document.getElementById('radioAnd')
const globalRadioOr = document.getElementById('radioOr')
const globalInputName = document.getElementById('inputName')

const globalState = {
  allCountries: [],
  filteredCountries: [],

  currentFilter: '',

  radioAnd: false,
  radioOr: true,

  checkboxes: [
    {
      filter: 'english',
      description: 'english',
      checked: true,
    },
    {
      filter: 'french',
      description: 'french',
      checked: true,
    },
    {
      filter: 'portuguese',
      description: 'portuguese',
      checked: true,
    },
  ],
}

const removeAccents = string => {
  const WITH_ACCENT_MARKS = 'áãâäàéèêëíìîïóôõöòúùûüñç'.split('')
  const WITHOUT_ACCENT_MARKS = 'aaaaaeeeeiiiiooooouuuunc'.split('')

  const newText = string.split('').map(caractere => {
    // canadá c a n a d á

    // retorna indice se encontrar o elemento ou
    // retorna -1 caso não encontre o elemento
    const index = WITH_ACCENT_MARKS.indexOf(caractere)

    if (index > -1) return WITHOUT_ACCENT_MARKS[index]

    return caractere
  })

  return newText.join('')
}

const fetchAll = async () => {
  const url =
    'https://my-json-server.typicode.com/rrgomide/json-countries/countries'

  const resource = await fetch(url)
  const json = await resource.json()

  const jsonWithImprovedSearch = json.map(country => {
    const { name } = country

    const lowerCaseName = name.toLowerCase()
    const noSpaces = lowerCaseName.replaceAll(' ', '')
    // const noSpaces = lowerCaseName.replace(/ /g, '')
    const noAccents = removeAccents(noSpaces)

    return {
      ...country,
      searchName: noAccents,
      searchLanguages: country.languages.sort(),
    }
  })
  console.log(
    '🚀 ~ file: script.js ~ line 74 ~ fetchAll ~ jsonWithImprovedSearch',
    jsonWithImprovedSearch,
  )

  globalState.allCountries = [...jsonWithImprovedSearch]
  globalState.filteredCountries = [...jsonWithImprovedSearch]
}

const renderLanguages = languages => {
  const { checkboxes } = globalState

  return languages
    .map(
      language => checkboxes.find(item => item.filter === language).description,
    )
    .join(', ')
}

const renderCountry = country => {
  const { name, flag, languages } = country

  return `
    <div class="col s12 m6 l4">
      <div class="country-card">
        <img class="flag" src="${flag}" alt="${name}" />
        <div class="data">
          <span>${name}</span>
          <span class="language">
            <strong>${renderLanguages(languages)}</strong>
          </span>
        </div>
      </div>
    </div>
  `
}

const renderCountries = () => {
  const { filteredCountries } = globalState

  const countriesToShow = filteredCountries
    .map(country => renderCountry(country))
    .join('')

  const renderedHTML = `
    <div>
      <h2>${filteredCountries.length} Country(ies) found</h2>
      <div class="row">
        ${countriesToShow}
      </div>
    </div>
  `

  globalDivCountries.innerHTML = renderedHTML
}

const filterCountries = () => {
  const { allCountries, radioOr, currentFilter, checkboxes } = globalState

  const filterCountries = checkboxes
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.filter)
    .sort()

  let filteredCountries = allCountries.filter(country => {
    // filteredCountries = ['portuguese', 'english'] => join portugueseenglish
    // country.languages = ['portuguese'] => join portuguese
    return radioOr
      ? filterCountries.some(item => country.languages.includes(item))
      : filterCountries.every(item => country.languages.includes(item))
  })

  if (currentFilter) {
    filteredCountries = filteredCountries.filter(country =>
      country.searchName.includes(currentFilter),
    )
  }

  globalState.filteredCountries = filteredCountries

  renderCountries()
}

const handleCheckboxClick = evento => {
  const { target } = evento
  const { id, checked } = target
  const { checkboxes } = globalState

  const checkboxToChange = checkboxes.find(checkbox => checkbox.filter === id)
  checkboxToChange.checked = checked

  filterCountries()
}

const renderCheckboxes = () => {
  const { checkboxes } = globalState

  const inputCheckboxes = checkboxes.map(checkbox => {
    const { filter, description, checked } = checkbox

    return `<label class="option">
        <input 
          id="${filter}"
          type="checkbox"
          checked="${checked}"
        />
        <span>${description}</span>
        </label>`
  })

  globalDivCheckboxes.innerHTML = inputCheckboxes.join('')

  checkboxes.forEach(checkbox => {
    const { filter } = checkbox
    const element = document.getElementById(filter)
    element.addEventListener('input', handleCheckboxClick)
  })
}

function handleRadioClick(evento) {
  const { target } = evento
  const radioId = target.id

  globalState.radioAnd = radioId === 'radioAnd' // true ou false
  globalState.radioOr = radioId === 'radioOr' // true ou false

  filterCountries()
}

function handleInputChange(evento) {
  globalState.currentFilter = evento.target.value.toLowerCase().trim()

  filterCountries()
}

const start = async () => {
  // console.log('iniciando aplicação ...')
  // adicionar eventos aos inputs
  globalRadioAnd.addEventListener('input', handleRadioClick)
  globalRadioOr.addEventListener('input', handleRadioClick)

  globalInputName.addEventListener('input', handleInputChange)

  // Criando checkboxes dinamicamente
  renderCheckboxes()

  /* Obtendo dados dos países de forma assíncrona */
  await fetchAll()

  /* Mandar renderizar todos os países inicialmente */
  filterCountries()

  // console.log('já tenho os dados')
}

/* iniciando o app */
start()