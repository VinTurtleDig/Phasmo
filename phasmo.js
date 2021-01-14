function getUserClues() {
    let numClues = +prompt("How many clues do you have?");
    let userClues = [];

    for (let i = 0; i < numClues; i++) {
        let rC = prompt(`What is clue #${i + 1}?`);
        let clue = translateUserClue(rC);
        userClues.push(clue);

    }
    return userClues;
}

function getClues() {
    let boxButton = document.getElementById("spiritBox").checked;
    let emfButton = document.getElementById("emf5").checked;
    let printsButton = document.getElementById("fingerprints").checked;
    let writingButton = document.getElementById("ghostWriting").checked;
    let orbButton = document.getElementById("ghostOrb").checked;
    let tempButton = document.getElementById("freezingTemp").checked;
    let cls = [];
    if (emfButton == true) {
        cls.push(EMF_LEVEL_5);
    }
    if (tempButton == true) {
        cls.push(FREEZING_TEMPERATURES);
    }
    if (boxButton == true) {
        cls.push(SPIRIT_BOX);
    }
    if (printsButton == true) {
        cls.push(FINGERPRINTS);
    }
    if (orbButton == true) {
        cls.push(GHOST_ORB);
    }
    if (writingButton == true) {
        cls.push(GHOST_WRITING);
    }
    return cls;
}

var freezingCheckbox = document.querySelector("input[id=freezingTemp]");

freezingCheckbox.addEventListener('change', function () {
    runPhasmoScript();
});
var orbCheckbox = document.querySelector("input[id=ghostOrb]");

orbCheckbox.addEventListener('change', function () {
    runPhasmoScript();
});
var writingCheckbox = document.querySelector("input[id=ghostWriting]");

writingCheckbox.addEventListener('change', function () {
    runPhasmoScript();
});
var printsCheckbox = document.querySelector("input[id=fingerprints]");

printsCheckbox.addEventListener('change', function () {
    runPhasmoScript();
});
var emfCheckbox = document.querySelector("input[id=emf5]");

emfCheckbox.addEventListener('change', function () {
    runPhasmoScript();
});
var spiritCheckbox = document.querySelector("input[id=spiritBox]");

spiritCheckbox.addEventListener('change', function () {
    runPhasmoScript();
});

function getMissingClues(ghostClues, userClues) {
    let missingC = [];
    for (c = 0; c < ghostClues.length; c++) {
        if (!userClues.includes(ghostClues[c])) {
            missingC.push(ghostClues[c]);
        }
    }
    return missingC;
}

function couldBeGhost(ghostClues, userClues) {
    for (let i = 0; i < userClues.length; i++) {
        let includesClue = ghostClues.includes(userClues[i]);
        if (!includesClue) {
            return false;
        }
    }
    return true;
}

function getMissingClues(ghostClues, userClues) {
    let missingClues = [];
    for (let q = 0; q < ghostClues.length; q++) {
        if (!userClues.includes(ghostClues[q])) {
            missingClues.push(ghostClues[q]);
        }
    } return missingClues;
}

function formatListOfClues(clues) {
    if(clues.length == 1) {
        return `Look for <u>${clues[0]}</u>`;
    }
    let formatted = "Look for ";
    for(var i = 0 ; i < clues.length-1; i++) {
        formatted += `<u>${clues[i]}</u>`;
        if(i < clues.length-2) {
            formatted += ", ";
        }
    }
    formatted += ` and <u>${clues[clues.length-1]}</u>`;
    return formatted;
}

function runPhasmoScript() {
    let userClues = getClues();

    let ghosts = getGhostList();
    document.getElementById("effectiveGhosts").innerHTML = "";
    if(userClues.length == 0) {
        return;
    }
    document.getElementById("effectiveGhosts").innerHTML = "Your ghost could be...<br>";
    ghosts.forEach(function (ghost) {
        let ghostName = ghost.name;
        let ghostClues = ghost.clues;

        let couldBe = couldBeGhost(ghostClues, userClues);
        if (couldBe) {
            let missingClues = getMissingClues(ghostClues, userClues);
            document.getElementById("effectiveGhosts").innerHTML += `${ghostName}. ${formatListOfClues(missingClues)}<br>`;
        }
    });
}
runPhasmoScript();
