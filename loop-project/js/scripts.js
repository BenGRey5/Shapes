document.addEventListener("DOMContentLoaded", function(){
    const end1 = document.getElementById('numberInput');
    const btn1 = document.getElementById('btn1');
    const answer1 = document.getElementById('result')

    function containsNumber(number) {
        const numAsString = number.toString();
        return numAsString.includes('1') || numAsString.includes('2') || numAsString.includes('3');
    }

    function displayNumbers(){
        let num = parseInt(end1.value);
        let numbers = "";  
        let changeArray = [];

    for(let i = 0; i <= num; i++) {
        if (i==1){
            changeArray.push("BEEP!");
        }
        else if (i==2){
            changeArray.push("BOOP!");
        }
        else if (i==3){
            changeArray.push("Won't you be my neighbor!");
        }else {
            changeArray.push(i)
        }
        numbers += i + " ";
        }
    }
    
    answer1.innerHTML = numbers;
}



    btn1.addEventListener('click', displayNumbers);
});
















// document.addEventListener("DOMContentLoaded", function() {

//     let numberInput = document.getElementById("numberInput");
//     let submit = document.getElementById("submit");
    
//     submit.addEventListener("click", function(){
//         let endOfLine = numberInput.value;
    
    
    
    
//     let i
//     });
//     });