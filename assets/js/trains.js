var config = {
  apiKey: "AIzaSyAuT6phm91rmDLqbaL49N8KUcnHWE5cvoQ",
  authDomain: "trains-6a522.firebaseapp.com",
  databaseURL: "https://trains-6a522.firebaseio.com",
  projectId: "trains-6a522",
  storageBucket: "",
  messagingSenderId: "880704993009"
};

firebase.initializeApp(config);
var schedule = firebase.database();

function train(name, destination, time, frequency)
{
    this.name = name;
    this.destination = destination;
    this.time = time;
    this.frequency = frequency;
}

$("#addTrain").on("click", function ()
{
    event.preventDefault();

    var newTrain = new train(
        $("#trainName").val().trim(),
        $("#trainDestination").val().trim(),
        $("#trainTime").val().trim(),
        $("#trainFrequency").val().trim()
    );

    schedule.ref().push(newTrain);
});
