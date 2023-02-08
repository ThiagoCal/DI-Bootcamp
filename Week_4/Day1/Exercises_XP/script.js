let bankAmount = 1000;

const TAXES = 1.17

const details = ["+200", "-100", "+146", "+167", "-2900"]


details.forEach((elem, index) => details[index] = elem * TAXES)

details.forEach((elem)=> bankAmount += elem * TAXES)


const colors = ["red", "blue"]

const favColors = colors


favColors.push("blue")

console.log("colors", colors,"favColors", favColors)