// Initialize Firebase
var config = {
    apiKey: "AIzaSyAP8upGXVWjxfvrRXO4DEGuq1RnYRSg2Jg",
    authDomain: "train-scheduler-ea5c7.firebaseapp.com",
    databaseURL: "https://train-scheduler-ea5c7.firebaseio.com",
    projectId: "train-scheduler-ea5c7",
    storageBucket: "",
    messagingSenderId: "1042504306031"
  };
  firebase.initializeApp(config);

var database = firebase.database();

var trainName = "";
var trainDestination = "";
var trainTime = 0;
var trainFrequency = 0; 

$("#add-train").on("click", function(){
    trainName = $("#train-name-input").val().trim();
    trainDestination = $("#destination-input").val().trim();
    trainTime = $("#train-time-input").val().trim();
    trainFrequency = $("frequency-input").val().trim();

    firebase.database().ref().set({
        Name: Name,
        Destination: Destination,
        Time: Time,
        Frequency: Frequency,



    })
});

database.ref().push(newTrain);

 // Logs everything to console
 console.log(newTrain.Name);
 console.log(newTrain.Destination);
 console.log(newTrain.Time);
 console.log(newTrain.Frequency);

 // Alert
 alert("Train successfully added");

 // Clears all of the text-boxes
 $("#employee-name-input").val("");
 $("#role-input").val("");
 $("#start-input").val("");
 $("#rate-input").val("");
)};

// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

 console.log(childSnapshot.val());

 // Store everything into a variable.
 var trainName = childSnapshot.val().name;
 var trainDestination = childSnapshot.val().role;
 var trainTime = childSnapshot.val().start;
 var trainFrequency = childSnapshot.val().rate;

 // Employee Info
 console.log(trainName);
 console.log(trainDestination);
 console.log(trainTime);
 console.log(trainFrequency);

$("#train-name-input").val().trim();
$("#destination-input").val().trim();
$("#train-time-input").val().trim();
$("frequency-input").val().trim();

// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().role;
    var trainTime = childSnapshot.val().start;
    var trainFrequency = childSnapshot.val().rate;
  
    // Employee Info
    console.log(trainName);
    console.log(trainDestination);
    console.log(trainTime);
    console.log(trainFrequency);
  
    // Prettify the employee start
    var trainStartPretty = moment.unix(trainTime).format("HH:mm");
  
    // Calculate the months worked using hardcore math
    // To calculate the months worked
    var trainFreq = moment().diff(moment(empStart, "X"), "minutes", "hour");
    console.log(trainFreq);
  
  
    // Add each train's data into the table
    $("#employee-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" +
    trainTime + "</td><td>" + trainFrequency + "</td><td>" 
  });
