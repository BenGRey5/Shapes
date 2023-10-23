// User Interface Logic
function handleForm(event) {
  event.preventDefault();
  const userSelections = document.querySelectorAll("input[name=grocery-option]:checked");
  const userSelectionsArray = Array.from(userSelections);
  
  let upperCasedSelectionsArray = [];
  userSelectionsArray.forEach(function(item) {
    const upperCaseItem = item.value.toUpperCase();
    upperCasedSelectionsArray.push(upperCaseItem);
  })
  
  let sortedUpperCasedSelectionsArray = upperCasedSelectionsArray.sort();
  sortedUpperCasedSelectionsArray.forEach(function(element) {
    const paragraph = document.createElement("p");
    paragraph.append(element);
    document.body.append(paragraph);
  });
console.log()
  document.getElementById("grocery-list").setAttribute("class","hidden")

}

window.addEventListener("load", function() {
  document.querySelector("form#grocery-list").addEventListener("submit", handleForm);
});

