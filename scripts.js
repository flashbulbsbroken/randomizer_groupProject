$(document).ready(function(){
var classArray = [
                    "Aarti",
                    "Danielle",
                    "David B.",
                    "Brian",
                    "David H.",
                    "Amelia",
                    "Geoffrey",
                    "Jacob",
                    "Manu",
                    "John",
                    "Jonathan",
                    "Laura",
                    "Lauren",
                    "Erick",
                    "Nicholas",
                    "Doug",
                    "Ryan",
                    "Sarah",
                    "Zachary",
                    "Liz"
                ];

var numOfStudents = classArray.length;
var numOfGroups = 0;

$(".groupButtons button").on("click", function() {
     $(".listGroups").empty();
     numOfGroups = $(this).data("group");
     doStuff();
});

function doStuff(){

     shuffle(classArray);

var groupArray = [];
var remainder = 0;
var groupNumber = 0;
var studentNumber = 0;
var counter = 0;

     if (numOfGroups > 0) {
          function buildGroups(groupNumber, studentNumber, counter) {
               groupArray[groupNumber][counter] = classArray[studentNumber];
               //append the li to ul 
          }

          var studentsInGroup = Math.floor(numOfStudents / numOfGroups);
          for (var i = 0; i < numOfGroups; i++) {
               groupArray[i] = [];
               //append the ul under div listGroups

               $(".listGroups").append("<ul id='group" + (i + 1) + "'>Group " + (i + 1) + "</ul>");
          }

          while (groupNumber < numOfGroups) {
               buildGroups(groupNumber, studentNumber, counter);
               counter++;
               if (counter == studentsInGroup) {
                    groupNumber++;
                    counter = 0;
               }

               studentNumber++;
          }   

          if (numOfStudents % numOfGroups > 0) {
               groupNumber = 0;

               while (studentNumber < numOfStudents) {
                    groupArray[groupNumber][groupArray[groupNumber].length] = classArray[studentNumber];
                    groupNumber++;
                    studentNumber++;
                    counter++;
               }
          }
          for (var i = 0; i < numOfGroups; i++) {
               for (var j = 0; j < groupArray[i].length; j++) {
                    $("#group" + (i + 1)).append("<li>" + groupArray[i][j] + "</li");
               }
          }
          console.log(groupArray);
     }
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

});