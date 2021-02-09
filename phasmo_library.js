let EMF_LEVEL_5 = "EMF Level 5";
let FINGERPRINTS = "Fingerprints";
let FREEZING_TEMPERATURES = "Freezing Temperatures";
let GHOST_WRITING = "Ghost Writing";
let SPIRIT_BOX = "Spirit Box";
let GHOST_ORB = "Ghost Orb";

let WRAITH_WEAKNESS = "1: no feet means no footsteps\n2: salt is toxic to a wraith\n3: is known to sometimes see through doors and go through walls\n";
let PHANTOM_WEAKNESS = "1: quickly drains sanity when looking at it\n2: dissapears when taken a picture of\n";
let POLTERGEIST_WEAKNESS = "1: noisy ghost (more object moving and footsteps)\n";
let BANSHEE_WEAKNESS = "1: crucifix effectiveness is better against banshee\n2: likes to pick of hunters one by one\n";
let JINN_WEAKNESS = "1: a jinn only attacks when threatened in its area\n2: travels at higher speeds then other ghosts but only when the fusebox is activated\n";
let MARE_WEAKNESS = "1: grows more agressive in the dark and limits its powers when in the light\n2: turns lights off more often\n";
let REVENANT_WEAKNESS = "1: can switch target mid hunt\n2: when hiding from it it moves slower but when in its sights it moves faster then any other ghost\n";
let SHADE_WEAKNESS = "1: less likely to attack when the hunters are in a group but this also makes it harder to find evidence\n";
let DEMON_WEAKNESS = "1: is highly agressive\n2: will attack more often then any other ghost so crucifix is recomended\n3: asking a demon succesfull questions on a ouija board wont drain sanity with a demon\n";
let YUREI_WEAKNESS = "1: smudging a yurei's room will prevent it from moving for a while\n2: will slowly drain more and more sanity as time progresses\n";
let ONI_WEAKNESS = "1: the more hunters around it the more active/agressive it gets\n2: wanders alot around the ghost room\n";
let SPIRIT_WEAKNESS = "1: smudge sticks prevent this ghost from hunting for 3 minutes\n";

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
        "clues": BANSHEE_CLUES,
        "weaknesses": BANSHEE_WEAKNESS
    },
    {
        "name": "Demon",
        "clues": DEMON_CLUES,
        "weaknesses": DEMON_WEAKNESS
    },
    {
        "name": "Jinn",
        "clues": JINN_CLUES,
        "weaknesses": JINN_WEAKNESS
    },
    {
        "name": "Mare",
        "clues": MARE_CLUES,
        "weaknesses": MARE_WEAKNESS
    },
    {
        "name": "Oni",
        "clues": ONI_CLUES,
        "weaknesses": ONI_WEAKNESS
    },
    {
        "name": "Phantom",
        "clues": PHANTOM_CLUES,
        "weaknesses": PHANTOM_WEAKNESS
    },
    {
        "name": "Poltergeist",
        "clues": POLTERGEIST_CLUES,
        "weaknesses": POLTERGEIST_WEAKNESS
    },
    {
        "name": "Revenant",
        "clues": REVENANT_CLUES,
        "weaknesses": REVENANT_WEAKNESS
    },
    {
        "name": "Shade",
        "clues": SHADE_CLUES,
        "weaknesses": SHADE_WEAKNESS
    },
    {
        "name": "Spirit",
        "clues": SPIRIT_CLUES,
        "weaknesses": SPIRIT_WEAKNESS
    },
    {
        "name": "Wraith",
        "clues": WRAITH_CLUES,
        "weaknesses": WRAITH_WEAKNESS
    },
    {
        "name": "Yurei",
        "clues": YUREI_CLUES,
        "weaknesses": YUREI_WEAKNESS
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
