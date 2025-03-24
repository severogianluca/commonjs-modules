const nomeCognome = require('./names')
const hobby = require ('./hobbies.js')


function data (){
    return {
        fullName: nomeCognome('gianluca', 'severo'),

        hobbies: hobby('giocare', 'mangiare', 'allenarsi')  
    }

}

console.log(data())
