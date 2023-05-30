const firebaseConfig = {
  apiKey: "AIzaSyA6iAZy9umZ3Q7YCDIwsgypgm5_UJn6ZEY",
  authDomain: "mycrud-b124e.firebaseapp.com",
  databaseURL: "https://mycrud-b124e-default-rtdb.firebaseio.com",
  projectId: "mycrud-b124e",
  storageBucket: "mycrud-b124e.appspot.com",
  messagingSenderId: "719271829989",
  appId: "1:719271829989:web:25ebae829a335174fa4f0c"
};

firebase.initiaizeApp(firebaseConfig);

var database = firebase.database()

function save() {
  var roll = document.getElementById('roll').value
  var name = document.getElementById('name').value
  var gender = document.getElementById('gender').value
  var address = document.getElementById('address').value

  database.ref("student/" + roll).set({
    roll : roll,
    name : name,
    gender : gender,
    address : address,
  })

alert("Data Inserted Successfully!")
}
