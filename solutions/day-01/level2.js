let webTechs = require('./web_tech.js')
let countries = require('./countries.js')

// 1
console.log(webTechs)
console.log(countries)

// 2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let arrayText = text.replace(/[.,]/g,"").split(" ")
console.log(arrayText.length)

// 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
let foundMeat = false
let foundSugar = false
for(i=0; i<shoppingCart.length; i++) {
    if(element == 'Meat') {
        foundMeat = true
    }
    else if(element == 'Sugar') {
        foundSugar = true
    }
}
if(foundMeat==false) {
    shoppingCart.unshift('Meat')
} 
if(foundSugar==false) {
    shoppingCart.push('Sugar')
}

