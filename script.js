function greetUser() {
    console.log("Hello User");
}
greetUser();

function lampStatus() {
    const powerOn = true;
    console.log("Power on: " + powerOn);
}
lampStatus();

function activeStatus() {
    const active = "active";
    const inActive = "inactive";
    console.log("Bob is " + inActive);
}
activeStatus();

function userStatus(status) {
    console.log("Bob is " + status);
}
userStatus("active")

function displayHalf(number) {
    const half = number / 2;
    console.log(half + " is half of " + number);
}
displayHalf(1000);

function greaterThan10(number) {
const result = number > 10;
return result;
}
console.log(greaterThan10(20));

function add20(number) {
    const addTwenty = 20 + number;
    return addTwenty;
}
const result = add20(50);
console.log(result);

function topThree(first,second,third) {
    return first + second + third;
}
let result2 = topThree("Drake", "Post Malone", "Russ");
console.log(result2);

function topViral(first,second,third) {
    const viral = "1st: " + first + " Second: " + second + "Third: " + third
return viral;
}
const result3 = topViral("Bad Bunny", "Shakira", "Drake");
console.log(result3);













