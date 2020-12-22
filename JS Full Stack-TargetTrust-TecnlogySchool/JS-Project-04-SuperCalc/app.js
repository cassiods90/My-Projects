const form = document.getElementById('form')
const inputValueA = document.getElementById('value-a')
const inputValueB = document.getElementById('value-b')

const appState = {
  valueA: 0,
  valueB: 0,
  'a-plus-b': 0,
  'a-minus-b': 0,
  'b-minus-a': 0,
  'a-times-b': 0,
  'a-divided-by-b': 0,
  'b-divided-by-a': 0,
  'a-squared': 0,
  'b-squared': 0,
  'a-dividers': [],
  'b-dividers': [],
  'a-fat': 0,
  'b-fat': 0,
}

const populateValues = () => {
  appState.valueA = Number(inputValueA.value)
  appState.valueB = Number(inputValueB.value)
}

const sum = () => {
  const { valueA, valueB } = appState
  return valueA + valueB
}

const aMinusB = () => {
  const { valueA, valueB } = appState
  return valueA - valueB
}

const bMinusA = () => {
  const { valueA, valueB } = appState
  return valueB - valueA
}

const aTimesB = () => {
  const { valueA, valueB } = appState
  return valueA * valueB
}

const div = firstValue => {
  const { valueA, valueB } = appState

  if (firstValue === 'a') {
    if (valueB === 0) {
      return 'Unable to divide by zero'
    }

    const result = valueA / valueB
    return result.toFixed(2)
  }

  if (valueA === 0) {
    return 'Unable to divide by zero'
  }

  const result = valueB / valueA
  return result.toFixed(2)
}

const squared = isA => {
  const { valueA, valueB } = appState

  const value = isA ? valueA : valueB

  return Math.pow(value, 2)

  /* if (isA) return Math.pow(valueA, 2)
  return Math.pow(valueB, 2) */
}

const dividers = isA => {
  const { valueA, valueB } = appState

  const value = isA ? valueA : valueB

  const dividers = []

  for (let divider = 1; divider <= value; divider++) {
    if (value % divider === 0) dividers.push(divider)
  }

  return dividers
}

const fat = isA => {
  const { valueA, valueB } = appState

  const value = isA ? valueA : valueB

  if (value > 21) return 'Número muito grande'

  let fatorial = 1

  for (let i = 1; i <= value; i++) fatorial *= i

  return fatorial
}

const changeState = () => {
  appState['a-plus-b'] = sum()
  appState['a-minus-b'] = aMinusB()
  appState['b-minus-a'] = bMinusA()
  appState['a-times-b'] = aTimesB()
  appState['a-divided-by-b'] = div('a')
  appState['b-divided-by-a'] = div()
  appState['a-squared'] = squared(true)
  appState['b-squared'] = squared()
  appState['a-dividers'] = dividers(true)
  appState['b-dividers'] = dividers()
  appState['a-fat'] = fat(true)
  appState['b-fat'] = fat()
}

const fieldPopulate = () => {
  const stateClone = { ...appState }

  delete stateClone.valueA
  delete stateClone.valueB

  const keys = Object.keys(stateClone)

  keys.forEach(key => {
    const element = document.getElementById(key)
    const elementValue = stateClone[key]
    element.value = elementValue
  })
}

form.addEventListener('submit', event => {
  event.preventDefault()

  populateValues()

  changeState()

  fieldPopulate()
})