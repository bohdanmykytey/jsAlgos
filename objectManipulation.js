//////////////////////////OBJECT MANIPULATION//////////////////////////
/*
Object.keys(obj)
Object.values(obj)
Object.entries(obj)
create arom an Onject
*/

let house = {
    doors: '3',
    windows: '9',
    color: 'white',
    landSize: '1 Acre',
    type: 'victorian',
    neighborhood: 'Springdale',
    value: '$800k',
    garage: '2 car',
    pool: 'yes',
}

//for(let prop of arr)
//forEach()
//filter()
//map()
//reduce()

let keys = Object.keys(house)
// console.log(keys) //returns an array the object keys
// console.log(Object.values(house)) //returns an array of object values
// console.log(Object.entries(house))// returns object key value pairs with values together.
// let entries = Object.entries(house)
// console.log('Entries: ', entries)
// console.log(entries[2])//return 'color: white'
// console.log(`the color is ${entries[2][1]}`)//returns 'the color is  white'

function houseKeys() {
    for(let key of keys)    {
        return key;
    }
}

console.log(houseKeys()) //returns doors