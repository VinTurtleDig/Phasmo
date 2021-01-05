function getUserClues() {
    let numClues = +prompt("How many clues do you have?");
    let userClues = [];
  
    for(let i = 0; i < numClues; i++) {
        let rC = prompt(`What is clue #${i+1}?`);
        let clue = translateUserClue(rC);
        userClues.push(clue);
        
    }
    return userClues;
}

function getClues() {
    let emf5Button = false;
    let tempButton = document.getElementById("freezingTemp").checked;
    let cls = [];
    if(emf5Button == true) {
        cls.push(EMF_LEVEL_5);
    } else if (tempButton == true){
        cls.push(FREEZING_TEMPERATURES);
    }
    return cls;
}

function freezingTempsClick() {
    
}

function getMissingClues(ghostClues, userClues) {
    let missingC = [];
    for(c = 0; c<ghostClues.length; c++) {
        if (!userClues.includes (ghostClues[c])) {
            missingC.push(ghostClues[c]);
        }
    }
    return missingC;
}

function couldBeGhost(ghostClues, userClues){
    for(let i = 0; i < userClues.length; i++ ) {
        let includesClue = ghostClues.includes(userClues[i]);
        if(!includesClue) {
            return false;
        }
    } 
    return true;
}

function getMissingClues(ghostClues, userClues){
    let missingClues = [];
    for(let q = 0; q < ghostClues.length; q++){
        if(!userClues.includes(ghostClues[q])){
            missingClues.push(ghostClues[q]);
        }
    } return missingClues;
}

function runPhasmoScript(){
    // let userClues = getUserClues();
    let userClues = getClues();

    let ghosts = getGhostList();
    ghosts.forEach(function(ghost){
        let ghostName = ghost.name;
        let ghostClues = ghost.clues;

        let couldBe = couldBeGhost(ghostClues, userClues);
        if(couldBe) {
            let missingClues = getMissingClues(ghostClues, userClues);
            console.log(`${ghostName}: [${missingClues.join(", ")}]`);
        }
    });
}

var freezingCheckbox = document.querySelector("input[id=freezingTemp]");

freezingCheckbox.addEventListener('change', function() {
    runPhasmoScript();
});

runPhasmoScript();