var checker = require("./luhn");

var acctNumbers = [79927398710, 79927398711, 79927398712, 79927398713, 79927398714, 79927398715, 79927398716, 79927398717, 79927398718, 79927398719]
var [test0, test1, test2, test3, test4, test5, ...rest] = acctNumbers

checkDigit = checker.getCheckDigit(test3)
computedCheckDigit = checker.getComputedDigit(test3)

// return true if checkDigit matches computed digit
function validator(check, computedCheck){
    return check === computedCheck
}
// validator(checkDigit, computedCheckDigit)
module.exports = {
    validate: validator
}