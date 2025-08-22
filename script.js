console.log("Welcome to Geaux Engineering");
const innatebutton = document.querySelector("#binnate");


// List to define each innator by name and its function
var Innators = [
        {name: "Innator Innovator", function: "A website that designs Innators at the click of a button"}, 
        {name: "drawinator", function: "it draws things"},
        {name: "enginnerrinator", function: "inator that engineers things"},
        {name: "coralreefbooboominator", function: "blow up coral reefs"},
        {name: "innatorinator", function: "inator that inates innators"},
        {name: "innatorinatorinator", function: "inator that inates innatorinators"},
        {name: "doodleinator", function: "inator that doodles things"},
        {name: "cubeinator", function: "inator that turns things into cubes"},
        {name: "squishinator", function: "inator that squishes things"},
        {name: "shakeinator", function: "its THE shakeinator"},
        {name: "gasinator", function: "no bro that thing farts"},
        {name: "inlluminator", function: "inator that illuminates things"},
        {name: " twerkinator", function: "inator that makes people twerks"},
        {name: "mikeinator", function: "inator turns people into Mike the Tiger"},
        {name: "rizzinator", function: "inator that gives people rizz"},
        {name: "timeinator", function: "inator that controls time"},
        {name: "speedinator", function: "inator that speeds things up"},
        {name: "strengthinator", function: "inator that increases strength"},
        {name: " flightinator", function: "inator that allows flight"},
        {name: "liquidinator", function: "inator that turns things into liquid"},
        {name: " blipinator", function: "inator that makes things disappear in a blip"},
        {name: "mulitverseinator", function: "inator that opens portals to other universes"}
    ];

// function to return a randomly selected innator
function INNATE() {
    let random_List_num = Math.floor(Math.random() * (Innators.length));
    let Innator = [Innators[random_List_num]["name"], Innators[random_List_num]["function"]];
    return Innator
};

//function to display the text
function display(){
    let Innator = INNATE();
    console.log(Innator)
    document.getElementById("innate_display").innerHTML = (Innator[0]);
    document.getElementById("innate_function").innerHTML = (Innator[1]);
};


//Takes the returned innator and displays it on a paragraph
innatebutton.onclick = function() {
    console.log("CLICK");
    display();
};

