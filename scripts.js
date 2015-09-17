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
var numOfGroups = $(button id);
var groupArray = [];
var remainder = 0;
var groupNumber = 0;
var studentNumber = 0;
var counter = 0;

function buildGroups(groupNumber, studentNumber, counter) {
     groupArray[groupNumber][counter] = classArray[studentNumber];
}

var studentsInGroup = Math.floor(numOfStudents / numOfGroups);
for (var i = 0; i < numOfGroups; i++) {
     groupArray[i] = [];
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
console.log(groupArray);