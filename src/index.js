const waterWalls = function(array) {
  let water = [];
  for (let i = 0 ; i < array.length; i++) {
    if (array[i-1] > array[i] && array[i+1] > array[i]) {
      water.push(Math.min(array[i-1], array[i+1]) - array[i])
    }
    if (array[i] > array[i+1]) {
      
    }
    else {
      water.push(0)
    }
  }
  return water
}