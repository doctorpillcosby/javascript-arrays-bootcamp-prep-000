var chocoloateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  
var array = "foo";
var element = 1;
  return [array, element]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  
  array.unshift(element)
  
  return array
  
  }
  
function accessElementInArray(array)
  { return array[2]
    
    
  }
  
  function destructivelyRemoveElementFromBeginningOfArray(array)
  {
    array.shift(array)
    
    return array
  }
  
  function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}
  
  