//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCqOD9TpsTEqXJqTFwWlqvwmf9mAaNq7Qs",
    authDomain: "kwitter-14d9e.firebaseapp.com",
    databaseURL: "https://kwitter-14d9e-default-rtdb.firebaseio.com",
    projectId: "kwitter-14d9e",
    storageBucket: "kwitter-14d9e.appspot.com",
    messagingSenderId: "878235737501",
    appId: "1:878235737501:web:8f1816c0c8354806372374"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
      var textinput = document.getElementById("name").value;
      console.log("Username : " + textinput);
      firebase.database().ref("/").child(textinput).update({
          purpose : "Text Input",
          hulk : "Bruce Banner"

      });
  }