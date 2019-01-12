// WATS 3020 Mad Libs Assignment
//
// For this assignment you must fill in the code below so that it functions
// to populate the text of the "Mad Libs" style story in the HTML.
//
// In order to achieve this goal, you will need to write prompt() statements
// to collect input from the user. The input you collect will be used to
// generate the story.


///////////////////////////////////////////////////////////////////////////
// The following Section creates a series of prompts for the user to fill out
// Their answers are used to fill out a poem mad lib later on
//
// The Intention of each variable is listed above its prompt for reference
// but can be removed later if deemed unnecessary cluter

let honorific = prompt('Please enter an honorific title (e.g. Mister or Colonel)','Mrs.');

// "authorName" for authorial attribution.
let authorName = prompt('What is your full name?','Jim');

// "adjective1" for a word used to describe something.
let adjective1 = prompt('Enter a descriptive adjective','Warm');

// "vehicle" for a mode of transation (e.g. plane, boat, etc.).
let vehicle = prompt('Name a Transportation Vehicle','Sailboat');

// "vehiclePart" for a part of the vehicle you just named.
let vehiclePart = prompt('Name a part of that Vehicle','Mast');

// "parking" for a location where you park the vehicle you just named.
let parking = prompt('Where would you Park/Store that Vehicle?','Harbor');

// "precious" for a precious object.
let precious = prompt('Name a precious object','Amulet');

// "noiseMaker" for something that makes a sound.
let noiseMaker = prompt('Name a device that makes sound','Siren');

// "crowdBehavior" for something that people do together as a group.
let crowdBehavior = prompt('Name a group activity','Dance');

// "adjective2" for a word used to describe something.
let adjective2 = prompt('Enter a descriptive adjective','Comfortable');

// "adjective3" for a word used to describe something.
let adjective3 = prompt('Enter a descriptive adjective again','Slick');

// "color" for the name of a color.
let color = prompt('Enter a color','Azure');

// "familyMember" for the name of a family relationship (e.g. sister, father, etc.).
let familyMember = prompt('Name a Familial role (e.g. sister, father, etc.)','Grandfather');

// "organ" for the name of a body organ (e.g. heart, liver, spleen, etc.).
let organ = prompt('Name a Bodily Organ (e.g. heart, liver, spleen, etc.)','Lung');

// "bodyPart1" for the name of a body part.
let bodyPart1 = prompt('Name a Body Part','Leg');

// "bodyPart2" for the name of a body part.
let bodyPart2 = prompt('Name another Body Part','Eye');

// "bodyPart3" for the name of a body part.
let bodyPart3 = prompt('Name one more Body Part','Finger');

// "thing" for an object.
let thing = prompt('Name an object','Desk');

// "thing2" for an object you might give somebody you love.
let thing2 = prompt('Enter the Name of a loving gift','Necklace');

// "thing3" for an object you might give somebody you like.
let thing3 = prompt('Enter an object you might give to someone you like','Candy');

// "adjective4" for a word used to describe the vehicle.
let adjective4 = prompt('Enter a descriptive adjective once more','Massive');

// "adjective5" for a word used to describe the vehicle.
let adjective5 = prompt('Enter a descriptive adjective for the last time','Cute');

////////////////////////////////////////////////////////////////////////
// Section Numbers
//
// The poem we are using has section numbers. We allow the user to
// generate their own. User number cannot be a 0;

let userNumber = prompt('Enter Your Favorite Number','83');

let number2 = userNumber ** 4;

let number3 = number2 % 3;

// DO NOT EDIT BELOW THIS LINE /////////////////////////////////////////
//
// The code below his line handles variable replacement into the HTML file.
// Please do not edit this code unless you are attempting a stretch goal.

let titleText = `O ${honorific}! My ${honorific}! by <small>${authorName}</small>`;
let titleHeading = document.querySelector("#madlib-title");
titleHeading.innerHTML = titleText;

let storyText = `

    ${userNumber}
    O ${honorific}! my ${honorific}! our ${adjective1} trip is done;
    The ${vehicle} has weather'd every rack, the ${precious} we sought is won;
    The ${parking} is near, the ${noiseMaker} I hear, the people all ${crowdBehavior},
    While follow ${bodyPart1} the steady keel, the vessel ${adjective4} and ${adjective5}:
    But O ${organ}! ${organ}! ${organ}!
    O the bleeding drops of ${color},
    Where on the ${vehiclePart} my ${honorific} lies,
    Fallen ${adjective2} and ${adjective3}.

    ${number2}
    O ${honorific}! my ${honorific}! rise up and hear the ${noiseMaker};
    Rise up-for you the ${thing} is flung-for you the bugle trills;
    For you ${thing2} and ribbon'd ${thing3}-for you the shores a-crowding;
    For you they ${crowdBehavior}, the swaying mass, their eager faces turning;
    Here ${honorific}! dear ${familyMember}!
    This ${bodyPart2} beneath your ${bodyPart3};
    It is some dream that on the ${vehiclePart},
    You've fallen ${adjective2} and ${adjective3}.

    ${number3}
    My ${honorific} does not answer, his lips are pale and still;
    My ${familyMember} does not feel my arm, he has no pulse nor will;
    The ${vehicle} is anchor'd safe and sound, its voyage closed and done;
    From fearful trip, the victor ${vehicle}, comes in with ${precious} won;
    Exult, O shores, and ring, O ${noiseMaker}!
    But I, with mournful tread,
    Walk the ${vehiclePart} my ${honorific} lies,
    Fallen ${adjective2} and ${adjective3}.
`;
let storyParagraph = document.querySelector("#madlib-text");
storyParagraph.innerHTML = storyText;