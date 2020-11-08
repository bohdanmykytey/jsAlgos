let A = [-4,-1,0,3,10]


let sortedSquares = (A) => {
    
    for(let i = 0; i < A.length; i++)   {
        
        let squared = Math.pow(A[i], 2)
        // console.log(squared)
        
        let sorted = squared.sort((a, b) => a - b)

        return sorted;
    }
};

console.log(sortedSquares())