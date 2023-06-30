var firebaseConfig = {
    apiKey: "AIzaSyBsUXHQdJLeNXeuaOz2u1w0tath6n7WcX0",
    authDomain: "classtest-1e950.firebaseapp.com",
    databaseURL: "https://classtest-1e950-default-rtdb.firebaseio.com",
    projectId: "classtest-1e950",
    storageBucket: "classtest-1e950.appspot.com",
    messagingSenderId: "519527497079",
    appId: "1:519527497079:web:1745a0b0cf4b11ad0d3572"
  };
  firebase.initializeApp(firebaseConfig);
      user_name = localStorage.getItem("user_name");
      room_name = localStorage.getItem("room_name");
  
  function send()
  
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
     });