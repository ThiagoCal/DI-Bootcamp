// const formMarvel = document.forms.marvel

// formMarvel.addEventListener("submit", validateForm)

// function validateForm(e){
//   let x = formMarvel["query"].value;
//   let y = formMarvel["limit"].value
//   console.log(x, y)
//   if(x.length < 4 || y === "" || y !== 10) {
//     console.log("wrong");
//     e.preventDefault();
// }
// }


let jsonString = `
{
    "quiz": {
        "sport": {
            "q1": {
                "question": "Which one is correct team name in NBA?",
                "options": [
                    "New York Bulls",
                    "Los Angeles Kings",
                    "Golden State Warriros",
                    "Huston Rocket"
                ],
                "answer": "Huston Rocket"
            }
        },
        "maths": {
            "q1": {
                "question": "5 + 7 = ?",
                "options": [
                    10,
                    11,
                    12,
                    13
                ],
                "answer": 12
            },
            "q2": {
                "question": "12 - 8 = ?",
                "options": [
                    1,
                    2,
                    3,
                    4
                ],
                "answer": 4
            }
        }
    }
}`

const parsedObj = JSON.parse(jsonString)

let optionsQ1 = parsedObj.quiz.sport.q1.options

// let stringfied = JSON.stringify(parsed)

//to make it nicer and easy to read we add null, and the number of spaces to stringfy
let stringfied = JSON.stringify(optionsQ1, null, 2)
console.log(stringfied)
