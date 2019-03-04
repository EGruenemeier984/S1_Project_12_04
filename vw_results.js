"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Ethan gruenemeier
   Date:  3.1.19
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/
// This var is set equal to a heading tag that is set to the raceTitle var
var reportHTML = `<h1>${raceTitle}</h1>`;
// This for loop loops through the race length array starting at 0.
for (var i = 0; i < race.length; i++) {
    // sets the totalVotes var to 0
    var totalVotes = 0;
    // This runs the calcSum function on every value in the votes array
    votes[i].forEach(calcSum);
    // This adds the table to the reportHTML var along with the candidateRows function with two arguments.
    reportHTML += `<table> <caption>${race[i]}</caption> <tr><th>Candidate</th><th>Votes</th></tr>`;
    reportHTML += candidateRows(i, totalVotes);
    reportHTML += "</table>"
}
// This sets the reportHTML var equal to the first tag with the name section inner HTML
document.getElementsByTagName("section")[0].innerHTML = reportHTML;
// This function takes in the parameters of raceNum and totalVotes 
function candidateRows(raceNum, totalVotes) {
    // this var of rowHTML is set to an empty string.
    var rowHTML = "";
    // This for loop starts at 0 and stops at 2 while iterating by 1.
    for (var j = 0; j <= 2; j++) {
        // This var is set to the multidimensional array called candidate with two index values one being raceNum and the other is j.
        var candidateName = candidate[raceNum][j];
        // This var is set to the multidimensional array called party with two index values one being raceNum and the other is j.
        var candidateParty = party[raceNum][j];
        // This var is set to the multidimensional array called votes with two index values one being raceNum and the other is j.
        var candidateVotes = votes[raceNum][j];
        // this var is set to the calcPercent function with the arguments of candidateVotes and totalVotes.
        var candidatePercent = calcPercent(candidateVotes, totalVotes);
        // This adds the table row to the rowHTML var
        rowHTML += `<tr> <td>${candidateName} (${candidateParty})</td> <td>${candidateVotes.toLocaleString()} (${candidatePercent.toFixed(1)})</td>`
        // This for loop starts at 0 and stops at the value of candidatePercent while iterating by 1
        for (var k = 0; k < candidatePercent; k++) {
            // This adds the createBar function to the rowHTML creating the bar graphs 
            rowHTML += createBar(candidateParty, candidatePercent);
        }
        // closes the table row.
        rowHTML += `</tr>`;
    }
    // returns this as the output of the function.
    return rowHTML;
}
// This function creates the bars with a parameter of partyType 
function createBar(partyType) {
    // This var is set to an empty string 
    var barHTML = "";
    // This is a switch/case conditional statement that checks the party type of each race.
    switch (partyType) {
        case "D":
            barHTML += "<td class='dem'></td>";
            break;
        case "R":
            barHTML += "<td class='rep'></td>";
            break;
        case "I":
            barHTML += "<td class='ind'></td>";
    }
    // returns this as the output
    return barHTML;
}

/* Callback Function to calculate an array sum */
function calcSum(value) {
    totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
    return (100 * value / sum);
}