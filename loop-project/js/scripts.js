document.addEventListener("DOMContentLoaded", function(){
    const end1 = document.getElementById('numberInput');
    const btn1 = document.getElementById('btn1');
    const answer1 = document.getElementById('result')

    function displayNumbers(){
        let num = parseInt(end1.value);
        let numbers = "";  
        for(let i=0; i<= num; i++) {
    numbers += i + " ";
    }
    answer1.innerHTML = numbers;
}
    btn1.addEventListener('click', displayNumbers);
});

fhsdfhsjahfjasdjfsfjsdfjhs















// document.addEventListener("DOMContentLoaded", function() {

//     let numberInput = document.getElementById("numberInput");
//     let submit = document.getElementById("submit");
    
//     submit.addEventListener("click", function(){
//         let endOfLine = numberInput.value;
    
    
    
    
//     let i
//     });
//     });