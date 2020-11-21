//CATEGORIZE NEW MEMBER
//a golf club wants your help accepting new memebers. 
//2 memebership tiers: open and senior. 
//if at or over 55 age and handicap greater than 7 === open else regular

function categorizeMemberships(memberInfo) {
    return memberInfo.map(([age, handicap]) => (age => 55 && handicap > 7) ? "Senior" : "Open");
}

console.log(categorizeMemberships([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))