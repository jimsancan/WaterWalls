#WaterWalls

const waterWalls = function(array) {

}

Strategy
  Take all the runs in the array where each value is less than the start and end of the run.
  Calculate the volume of water based on the differences in each run to find the largest by volume


Big O 
  iterating is in O(n), as is storing the runs
  calculating volumes will be O(n) 

const waterWalls = function(array) {
  runs arr = []
  volumes = {runsarr[i]: volume}
  iterate through given array and store runs in runs arr
  calculate the volume of water in each run, put in volumes obj
  compare the volumes
  return [start, end, volume]
}