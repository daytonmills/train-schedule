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

schedule.ref().on("child_added", function (data)
{
    var train = data.val();
    var trainName = train.name;
    var trainDestination = train.destination;
    var trainTime = train.time;
    var trainFrequency = train.frequency;

    $("#trainList").append(
        "<tr><td>"  + trainName +
        "</td><td>" + trainDestination +
        "</td><td>" + trainFrequency +
        "</td><td>" + "Todo..." +
        "</td><td>" + "Todo..." +
        "</td></tr>");
});
