#!/usr/bin/env node

/*let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}

function multiplyNumeric(obj){
    for (let key in obj){
        if (typeof obj[key] === 'number'){
            obj[key] *= 3
        }
    }
    return menu
}

console.log(multiplyNumeric(menu))*/

const hangul = require("hangul-js")
console.log(hangul.assemble("믹스동"))
console.log(hangul.assemble("쇠고기양송이덮밥"))

console.log("Hello World!")