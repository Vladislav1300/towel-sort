
// You should implement your task here.

module.exports = function towelSort (matrix) {
  try {
    let result = [];
    matrix.forEach((elem, index) => {
      if (index % 2 === 0){
        result.push(...elem);
      }
      else {
        elem.reverse();
        result.push(...elem)
      }
    })
    return result
  }
  catch(e) {
    return []
  }
  
}
