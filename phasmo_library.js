let EMF_LEVEL_5 = "EMF Level 5";
let FINGERPRINTS = "Fingerprints";
let FREEZING_TEMPERATURES = "Freezing Temperatures";
let GHOST_WRITING = "Ghost Writing";
let SPIRIT_BOX = "Spirit Box";
let GHOST_ORB = "Ghost Orb";

let BANSHEE_CLUES = [EMF_LEVEL_5, FINGERPRINTS, FREEZING_TEMPERATURES];
let DEMON_CLUES = [GHOST_WRITING, SPIRIT_BOX, FREEZING_TEMPERATURES];
let JINN_CLUES = [EMF_LEVEL_5, SPIRIT_BOX, GHOST_ORB];
let MARE_CLUES = [SPIRIT_BOX, FREEZING_TEMPERATURES, GHOST_ORB];
let ONI_CLUES = [EMF_LEVEL_5, GHOST_WRITING, SPIRIT_BOX];
let PHANTOM_CLUES = [EMF_LEVEL_5, FREEZING_TEMPERATURES, GHOST_ORB];
let POLTERGEIST_CLUES = [FINGERPRINTS, SPIRIT_BOX, GHOST_ORB];
let REVENANT_CLUES = [EMF_LEVEL_5, GHOST_WRITING, FINGERPRINTS];
let SHADE_CLUES = [EMF_LEVEL_5, GHOST_WRITING, GHOST_ORB];
let SPIRIT_CLUES = [GHOST_WRITING, FINGERPRINTS, SPIRIT_BOX];
let WRAITH_CLUES = [FINGERPRINTS, SPIRIT_BOX, FREEZING_TEMPERATURES];
let YUREI_CLUES = [GHOST_WRITING, FREEZING_TEMPERATURES, GHOST_ORB];

let GHOST_CLUES_LIST = [
    {
        "name": "Banshee",
        "clues": BANSHEE_CLUES
    },
    {
        "name": "Demon",
        "clues": DEMON_CLUES
    },
    {
        "name": "Jinn",
        "clues": JINN_CLUES
    },
    {
        "name": "Mare",
        "clues": MARE_CLUES
    },
    {
        "name": "Oni",
        "clues": ONI_CLUES
    },
    {
        "name": "Phantom",
        "clues": PHANTOM_CLUES
    },
    {
        "name": "Poltergeist",
        "clues": POLTERGEIST_CLUES
    },
    {
        "name": "Revenant",
        "clues": REVENANT_CLUES
    },
    {
        "name": "Shade",
        "clues": SHADE_CLUES
    },
    {
        "name": "Spirit",
        "clues": SPIRIT_CLUES
    },
    {
        "name": "Wraith",
        "clues": WRAITH_CLUES
    },
    {
        "name": "Yurei",
        "clues": YUREI_CLUES
    }
];

function getGhostList() {
    return GHOST_CLUES_LIST;
}
function addAll(arr1, arr2) {
    for(c = 0; c<arr2.length; c++) {
        arr1.push(arr2[c]);
    }
}
