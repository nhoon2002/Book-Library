//Initialize Firebase

var config = {
  apiKey: "AIzaSyDnE8O14I4Tm0hdG0WIL1ZAXZRGKEnr2yc",
  authDomain: "fir-tester-5e288.firebaseapp.com",
  databaseURL: "https://fir-tester-5e288.firebaseio.com",
  storageBucket: "fir-tester-5e288.appspot.com",
  messagingSenderId: "1022221600483"
};

firebase.initializeApp(config);
var currentUser = "nate";
// Create a variable to reference the database
var database = firebase.database();

// Login
$('.loginButton').on("click" , function(event) {
   event.preventDefault();

   currentUser = $('#userName').val().trim();
   console.log(currentUser);

   return false;
});






$('#addBookBtn').on('click', function() {

   var inputName = $('#bookNameInput').val().trim();
   var inputAuth = $('#authorInput').val().trim();
   var inputISBN = $('#isbnInput').val().trim();
   var inputPub = $('#publisherInput').val().trim();


   //Local variable to hold data
   var newBook = {
      name: inputName,
      author: inputAuth,
      isbn: inputISBN,
      publisher: inputPub
   }

   database.ref(currentUser).push(newBook);
   // console.log();

   $('#bookNameInput').val('');
   $('#authorInput').val('');
   $('#isbnInput').val('');
   $('#publisherInput').val('');

   //Prevents reload
   return false;
});

database.ref(currentUser).on("child_added", function(childSnapshot, prevChildKey){

   console.log(childSnapshot.val());

   var inputName = childSnapshot.val().name;
   var inputAuth = childSnapshot.val().author;
   var inputISBN = childSnapshot.val().isbn;
   var inputPub = childSnapshot.val().publisher;



   $("#bookTable > tbody").append("<tr><td>" + inputName + "</td><td>" + inputAuth + "</td><td>" + inputISBN + "</td><td>" + inputPub + "</td></tr>");


});



// $('#clearBookBtn').on("click", function() {
//    database.ref('User').child.remove();
// });


$('#clearLibraryBtn').on("click", function() {

   database.ref().remove();

});



console.log('somethingelse');
