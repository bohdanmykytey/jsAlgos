//Reverse int

function reverseInt(...input) {
    let result = input.toString().split('').reverse().join('');
    let int = parseInt(result)
    return int;
}

console.log(reverseInt(123456))


