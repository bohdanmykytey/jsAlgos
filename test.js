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
console.log(addSix(10))

// Given an expression string exp, write a program to examine whether the pairs and the orders of “{“, “}”, “(“, “)”, “[“, “]” are correct in exp.
// Example:
// Input: exp = “[()]{}{[()()]()}”
// Output: Balanced
// Input: exp = “[(])”
// Output: Not Balanced

function isBallanced(n) {
  let halfString = n.split(n.lenght);
  return halfString;
}

console.log(isBallanced("[()]{}{[()()]()}"));
