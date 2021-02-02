"use strict";

// let option2Display = document.getElementById('option2Display');
// function changeOption2Display() {
//     option2Display.innerHTML = this.innerHTML;
// }
// let option2DropdownItems = document.getElementsByClassName("option2DropdownItem");
// for (let i = 0; i < option2DropdownItems.length; i++) {
//     option2DropdownItems[i].addEventListener('click', changeOption2Display, false);
// }

// let option3Display = document.getElementById('option3Display');
// function changeOption3Display() {
//     option3Display.innerHTML = this.innerHTML;
// }
// let option3DropdownItems = document.getElementsByClassName("option3DropdownItem");
// for (let i = 0; i < option3DropdownItems.length; i++) {
//     option3DropdownItems[i].addEventListener('click', changeOption3Display, false);
// }

// let option4Display = document.getElementById('option4Display');
// function changeOption4Display() {
//     option4Display.innerHTML = this.innerHTML;
// }
// let option4DropdownItems = document.getElementsByClassName("option4DropdownItem");
// for (let i = 0; i < option4DropdownItems.length; i++) {
//     option4DropdownItems[i].addEventListener('click', changeOption4Display, false);
// }

function setupObjectiveDropdownClickListener(displayId, dropdownItemClassName) {
    let toDisplay = document.getElementById(displayId);
    let dropdownItems = document.getElementsByClassName(dropdownItemClassName);
    for (let i = 0; i < dropdownItems.length; i++) {
        dropdownItems[i].addEventListener('click', function(){
            toDisplay.innerHTML = this.innerHTML;
        }, false);
    }
}

setupObjectiveDropdownClickListener("option2Display", "option2DropdownItem");
setupObjectiveDropdownClickListener("option3Display", "option3DropdownItem");
setupObjectiveDropdownClickListener("option4Display", "option4DropdownItem");
