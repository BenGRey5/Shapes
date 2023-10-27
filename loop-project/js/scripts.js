document.addEventListener("DOMContentLoaded", function(){
    let end1 = document.getElementById('numberInput');
    const btn1 = document.getElementById('btn1');
    const answer1 = document.getElementById('result')

    function displayNumbers(){
        answer1.innerHTML =  end1.value;
    }
    btn1.addEventListener('click',displayNumbers)
});

















// document.addEventListener("DOMContentLoaded", function() {

//     let numberInput = document.getElementById("numberInput");
//     let submit = document.getElementById("submit");
    
//     submit.addEventListener("click", function(){
//         let endOfLine = numberInput.value;
    
    
    
    
//     let i
//     });
//     });