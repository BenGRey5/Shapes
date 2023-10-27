document.addEventListener("DOMContentLoaded", function () {
let inputValue = document.getElementById("numberInput").value;
const numberArray = [];
for (let i = 0; i <= inputValue; i++) {
    numberArray.push(i)
}

function replaceNumbers(number) {
    for (const digit of numberToCheck)
    if (number.includes(numberToCheck)) {
        if (number.includes(1)) {
        return "BEEP!";
    } else if (number.includes(2)) {
        return "BOOP!";
    } else if (number.includes(3)) {
        return "Won't you be my neighbor?";
    } else {
        return number;
    }
}

});












































// document.addEventListener("DOMContentLoaded", function(){
//     const end1 = document.getElementById('numberInput');
//     const btn1 = document.getElementById('btn1');
//     const answer1 = document.getElementById('result');

//     function containsNumber(number) {
//         const numAsString = number.toString();
//         return /[123]+/.test(numAsString);
//     }

//     function displayNumbers() {
//         let num = parseInt(end1.value);
//         let numbers = "";  
//         let changeArray = [];

//     for(let i = 0; i <= num; i++) {
//         if (containsNumber(i)) {
//             if (i.toString().includes('1')) {
//             changeArray.push("BEEP!");
//             } else if (i.toString().includes('2')) {
//             changeArray.push("BOOP!");
//             } else {
//             changeArray.push("Won't you be my neighbor!");
//         }
//         }else {
//             changeArray.push(i)
        
        
//         }
//         numbers += changeArray[changeArray.length - 1] + " ";
//     }
    
//     answer1.innerHTML = numbers;
// }



//     btn1.addEventListener('click', displayNumbers);
// })