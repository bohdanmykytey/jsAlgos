function solution(A) {
    let sorted = A.sort((a,b) => a - b)
    console.log(sorted);
    
    sorted.map((current) =>    {
         if(current > 0) {
             Math.min(current + 1)
         }
    })
 }
 
//  solution([1,3,6,4,1,2])

function solution(A) {
    for (let i = 1; i <= 1000000; i++) {
        if(!A.includes(i)) return i;
    }
}

console.log(solution([1, 3, 6, 4, 1, 2]))