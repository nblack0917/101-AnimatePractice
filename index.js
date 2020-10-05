let animationName = ""
let elementColor = ""
let elementText = ""
let elementTypeSelect = "H1"
let infiniteLoop = null
let delayTime = null
let speed = null

// Can you use these two variables to change the type and text of the next element that's created?
let elementType = ""
let inputtedText = ""

// function that handles the input "animation-name"
const setAnimationName = (name) => {
  animationName = name
  console.log(animationName)
}

// function that handles the input "element-color"
const setElementColor = (color) => {
  elementColor = color
}

const setElementText = (text) => {
  elementText = text
}

const setElementType = (elType) => {
  elementTypeSelect = elType
}

const infiniteCheck = () => {
  if (document.getElementById("infiCheck").checked) {
    infiniteLoop = "infinite"
  } else {
    infiniteLoop = null
  }
}

function setDelayTime(time) {
  delayTime = time
}

function setSpeedSelect(option) {
  speed = option;
}


// This function creates a new element and attaches to the parent element: element-collector
const createNewElement = () => {
  const elementContainer = document.getElementById("element-collector")
  
  // create a new element with default values
  const newElement = document.createElement(elementTypeSelect)
  const textNode = document.createTextNode(elementText)

  // Using dot.notation to access the new element's properties
  infiniteCheck();
  newElement.appendChild(textNode)
  newElement.classList.add("animated", infiniteLoop, animationName, delayTime, speed)
  newElement.style.color = elementColor

  // attach the new element to the parent
  elementContainer.appendChild(newElement)
}

const resetAll = () => {
  animationName = ""
  elementText = ""
  elementTypeSelect = "H1"
  infiniteLoop = null
  elementColor = ""
  delayTime = null
  speed = null
  const elementContainer = document.getElementById("element-collector");
  while (elementContainer.lastElementChild) {
    elementContainer.removeChild(elementContainer.lastElementChild);
  }
}
