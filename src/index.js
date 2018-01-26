
findGreatestRun = arr => {
  let returnObj = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length - 1; j++) {
      let sum = sumBetween(i, j, arr)
      returnObj[sum] = [i, j + 1]
    }
  }
  let highest = returnObj[returnObj.length - 1 ]
  return [...highest, returnObj.length - 1] 
}

sumBetween = (i, j, arr) => arr.slice(i, j).reduce((a, e) => a + e, 0)

let waterWalls = (array) => {
  let waterDepths = [0]
  for (let i = 1; i < array.length - 1; i++) {
    let left = array.slice(0,i)
    let right = array.slice(i+1)
    let leftV = Math.max(...left)
    let rightV = Math.max(...right)
    let waterLevel = Math.min(leftV, rightV)
    waterDepths.push(waterLevel - array[i])
  }
  return findGreatestRun(waterDepths)
}

console.log(waterWalls([5, 3, 7, 2, 6, 4, 5, 9, 1, 2]))
