function getUserClues() {
    let numClues = +prompt("How many clues do you have?");
    let userClues = [];
  
    for(let i = 0; i < numClues; i++) {
        userClues.push(prompt(`What is clue #${i+1}?`));
    }
    return userClues;
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
    let userClues = getUserClues();

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

runPhasmoScript();