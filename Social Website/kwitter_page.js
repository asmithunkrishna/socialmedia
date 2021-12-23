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
var userName = localStorage.getItem("username"); 
var roomName = localStorage.getItem("Room_name"); 

function getData() { 
      firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { 
            firebase_message_id = childKey; 
            message_data = childData;

console.log(firebase_message_id);
console.log(message_data);
var user_name = message_data["user"];
var msg = message_data["msg"];
var likes = message_data["likes"];
var user_tag = "<h4>" + user_name + "<img class='user_tick' src='tick.png'>" +  "</h4>";
var message_tag = "<h4 class='message_h4'>" + msg + "</h4>";
var buttton_likes ="<button class='btn btn-warning' onclick='like(this.id)' value=" + likes +    "id=" + firebase_message_id + ">";
var span ="<span class='glyphicon glyphicon-thumbs-up'>Like:" + likes + "</span> </button> <hr>";
var row = user_tag + message_tag + buttton_likes + span ;
 document.getElementById("output").innerHTML += row;
      } });  }); }
getData();

function send(){
       var message = document.getElementById("input").value;
      firebase.database().ref(roomName).push({
          msg :   message,
          user : userName,
          likes : "0"
      });
      document.getElementById("input").value  = "";
}
function like(message_id){
      console.log(message_id);
      var likes = document.getElementById(message_id).value;
      var updatedlikes = Number(likes) + 1;
      console.log(updatedlikes);
      firebase.database().ref(roomName).child(message_id).update({
            likes : updatedlikes

      });
}
