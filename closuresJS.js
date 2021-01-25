/*
/*
    from Osman Medzhytov (privately):    4:03 PM
    2Write a function that would allow you to do this.
    var addSix = createBase(6);
    addSix(10); // returns 16
    addSix(21); // returns 27

*/

function addTo(input)   {
    let add = function(inner)   {
        return input + inner;
    }
    return add;
}

let addSix = new addTo(6)
console.log(addSix(21))

