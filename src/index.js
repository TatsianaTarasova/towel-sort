
// You should implement your task here.

module.exports = function towelSort (matrix) {
let Arr = [];
if(matrix === [] || ! matrix) {
  return [];
}
for(let i = 0; i < matrix.length; i++){
  if(i % 2 !== 0){
    Arr.push(matrix[i].reverse());
  } 
  else{
    Arr.push(matrix[i]);
  }
}
return Arr.flat();
}
