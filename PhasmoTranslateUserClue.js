"use strict";

function translateUserClue(userClue){
    let translatedClue;
    let lowerUserClue = userClue.toLowerCase();
    switch (lowerUserClue){
        case "emf":
        case "emf level 5":
        case "level 5":
            translatedClue = "EMF Level 5";
            break;

        case "fingerprint":
        case "fingerprints":
        case "prints":
            translatedClue = "Fingerprints";
            break;

        case "ghost writing":
        case "writing":
            translatedClue = "Ghost Writing";
            break;

        case "spirit box":
        case "box":
        case "spirit":
            translatedClue = "Spirit Box";
            break;

        case "ghost orb":
        case "orb":
            translatedClue = "Ghost Orb";
            break;

        case "freezing temperatures":
        case "freezing temperature":
        case "freezing temp":
        case "temp":
        case "freezing":
            translatedClue = "Freezing Temperatures";
            break;

        case "ghost":
            let lowerGhostClarification;
            do{
                let ghostClarification = prompt("Your clue is too vague! Did you mean 'Ghost Orb' or 'Ghost Writing'? Please write out your answer in full!",);
                lowerGhostClarification = ghostClarification.toLowerCase();
                switch (lowerGhostClarification){
                    case "ghost orb":
                        translatedClue = "Ghost Orb";
                        break;
                    
                    case "ghost writing":
                        translatedClue = "Ghost Writing";
                        break;
                }
            }while(!(lowerGhostClarification == "ghost orb" || lowerGhostClarification == "ghost writing"));
            break;
    }
    return translatedClue;
}
