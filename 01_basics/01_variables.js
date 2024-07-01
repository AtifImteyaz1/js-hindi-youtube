const accountId = 144553
let accountEmail = "atifimteyaz867@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"


accountEmail = "atif@123"
accountPassword = "12356"
accountCity = "delhi"
let acccountState;

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]);

console.table([accountId, accountEmail, accountPassword, accountCity, acccountState]);
// prefer to not use var
// bcz of issue in block scope and functional scope