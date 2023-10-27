document.addEventListener("DOMContentLoaded", function(){
    const end1 = document.getElementById('numberInput');
    const btn1 = document.getElementById('btn1');
    const answer1 = document.getElementById('result')

    function displayNumbers(){
        let num = parseInt(end1.value);
        let i;  
        for(let i=1; i<= num; i++) {
    console.log(i)
    }
    answer1.innerHTML = i;
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