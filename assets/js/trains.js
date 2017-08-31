var config = {
  apiKey: "AIzaSyAuT6phm91rmDLqbaL49N8KUcnHWE5cvoQ",
  authDomain: "trains-6a522.firebaseapp.com",
  databaseURL: "https://trains-6a522.firebaseio.com",
  projectId: "trains-6a522",
  storageBucket: "",
  messagingSenderId: "880704993009"
};

firebase.initializeApp(config);

function train(name, destination, time, frequency)
{
    this.name = name;
    this.destination = destination;
    this.time = time;
    this.frequency = frequency;
}
