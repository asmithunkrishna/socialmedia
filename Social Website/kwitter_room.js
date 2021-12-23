
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAL-pdORedrhyEC1ihYTf1yQryrfcXICdA", 
      authDomain: "kwitter-e57aa.firebaseapp.com", 
      databaseURL: "https://kwitter-e57aa-default-rtdb.firebaseio.com", 
      projectId: "kwitter-e57aa",
      storageBucket: "kwitter-e57aa.appspot.com", 
      messagingSenderId: "646718022026", 
      appId: "1:646718022026:web:d35e5239af69d6651b2873" };

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);
    function add_room(){
      var addRoom = document.getElementById("addroom").value;
      console.log("Username : " + addRoom);
      firebase.database().ref("/").child(addRoom).update({
          purpose : "Adding Room",
      });
      localStorage.setItem("Room_name",addRoom);
      window.location = "kwitter_page.html";
  }
  

var user_nam = localStorage.getItem("username");

document.getElementById("user_name").innerHTML = "Welcome " + user_nam;


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name" + Room_names);
       var row = "<div id=" + Room_names + "onclick='Redirect_To_Name(this.id)'>" + Room_names + "</div> <hr>";
       document.getElementById("output").innerHTML += row; 
      
      });});}
getData();

function Redirect_To_Name(Redirect){
      localStorage.setItem("Room_name",Redirect);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("Room_name");
      window.location = "index.html";
}
