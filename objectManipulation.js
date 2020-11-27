//////////////////////////OBJECT MANIPULATION//////////////////////////
/*
Object.keys(obj)
Object.values(obj)
Object.entries(obj)
create arom an Onject
*/

const house = {
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

// let keys = Object.keys(house)
// console.log(keys) //returns an array the object keys

// let values = Object.values(house)
// console.log(values) //returns an array of object values

// console.log(Object.entries(house))// returns object key value pairs with values together.
// let entries = Object.entries(house)
// console.log('Entries: ', entries)
// console.log(entries[2])//return 'color: white'
// console.log(`the color is ${entries[2][1]}`)//returns 'the color is  white'

// function houseKeys() {
//     for(const key of keys)    {
//         return key;
//     }
// }

//when called returns doors

// function houseKeys() {
//     values.forEach(value => {
//         console.log(value);
//     });
// }

// returns values of keys

const students = {
    'steve@gmail.com': 90,
    'mikejones@gmail.com': 67,
    'mickjagger@aol.com': 85,
    'stevesmith@yahoo.com': 55
}

let sum = 0;
let count = 0;

for (let value in students) {
    // console.log(value);//logs the emails
    // console.log(students[value])//logs the student scores
    
    sum += students[value];
    // console.log(sum)
    count++
    // console.log(count)
}

//find average of all scores 
function findAverage()  {
    return averageScores = sum / count;
}

console.log(findAverage())