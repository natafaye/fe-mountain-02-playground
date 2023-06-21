function makeEspresso (coffee, cream) {
if (coffee === true && cream === true) {
    return "Coffee Time"
}
else {
    return "So sad"
}
}

console.log("coffe: true cream: false: ", makeEspresso (true, false));

console.log(makeEspresso (true, true));