//CATEGORIZE NEW MEMBER
//a golf club wants your help accepting new memebers. 
//2 memebership tiers: open and senior. 
//if at or over 55 age and handicap greater than 7 === open else regular

function categorizeMemberships(memberInfo)    {
    return memberInfo.map((info) => {
        if(info[0] >= 55 && info[1] > 7) {
            return 'Senior'
        }   
        return "Open"
    })
}

console.log(categorizeMemberships([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))