



function closureSum(numFijo) {
  /* Tu codigo aqui */
function add(num){
  return num + numFijo;
};
return add;
}


var car = closureSum(5)

console.log(car(5))
console.log(car(35))
console.log(car(25))

























