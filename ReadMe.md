#WaterWalls

const waterWalls = function(array) {

}

Strategy -
  Check each wall against left and right for smallest height difference, store difference
  Use height differences to find holes, check for valleys


Big O 
  iterating is in O(n), as is storing the runs
  calculating volumes will be O(n) 

const waterWalls = function(array) {
  runs arr = []
  check left and right, store difference in runs
  use runs and array to find valleys
  return [start, end, volume]
}