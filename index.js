function iterativeLog(array){
  array.forEach((element,index)=>{console.log(`${index}: ${element}`)})
}

function iterate(callback){
  var array = ["one","two"]
  array.forEach(callback)
  return array
}

function doToArray(array,callback){
  array.forEach(callback)
}
