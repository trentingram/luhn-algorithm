// function for validating typeof
function typeValidate(num){
  return typeof num === "number"
}
// function for validating length
function lengthValidate(num){
  return num.toString().length === 11
}

// function that creates number for chart
function chartNumber(val){
  var num = val.toString()
  num = Number(num.slice(0, num.length-1))
  return num
}


// function that stores the check digit
function checkDigit(val){
var num = val.toString()
  num = Number(num.charAt(num.length-1))
  return num
}

// helper for chart forEach loop: splits number and returns sum of both digits
function splitter(num){
    var newNum = num.toString().split("")
    var final = (+newNum[0]) + (+newNum[1])
    return final
}
// helper function that creates chart
function chart(val){

var chartRow = []
val.toString().split("").reverse()
.forEach((each, i) => {
  var digit = +each
  
  if(i%2 == 0){
    if((digit*2) > 9){
     chartRow.push(splitter(digit*2))
      } else
     chartRow.push(digit*2)
  }  else
     chartRow.push(digit)  
    
})
return chartRow
}
// reduces array produced from chart function, muliplies by 10, then returns the last digit in number
function reduceComputer(row){
  var unitsDigit = row.reduce((a,b)=>a+b) * 9
  unitsDigit = unitsDigit.toString()
  var len = unitsDigit.length - 1
  return +unitsDigit.charAt(len)
}
// var forChart = chartNumber(aNumber) // produces number to create chart
// var myRow = chart(forChart) // returns an array for reduction
// var myCheck = checkDigit(aNumber) // check digit for validation
// var myCheckDigit = reduceComputer(myRow) // produces reduced and computed number
// console.log(myCheck === myCheckDigit)

// checkDigit
// chartNumber
// chart & splitter
// reduceComputer
function computer(val){
  var forChart = chartNumber(val)
  var makeChartRow = chart(forChart)
  return reduceComputer(makeChartRow)
}

module.exports = {
  getCheckDigit: checkDigit,
  getComputedDigit: computer,
  confirmType: typeValidate,
  confirmLength: lengthValidate
  }