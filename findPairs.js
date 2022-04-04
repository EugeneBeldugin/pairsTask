let arr = [1, 5, 6, 1, 0, 1, 2, 3, 4, 7, 8, 9];

const findSumPairs = (arr, value) => {
   const sortedArr = []
   const copy = [...arr]

   let i = 0
   do {
      copy.forEach((num, index) => {
         if (copy[i] + num === value) {
            sortedArr.push([copy[i], num])
            copy.splice(index, 1)
            copy.splice(i, 1)
         } 
      })
      i++
   } while (i <= arr.length)

   return sortedArr.length ? sortedArr : null
}

console.log(findSumPairs(arr, 12));