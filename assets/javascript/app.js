var config = {
    apiKey: "AIzaSyD0-WntfjyySmahjbxE-ACUTR7FnxXClmI",
    authDomain: "timesheet-6b410.firebaseapp.com",
    databaseURL: "https://timesheet-6b410.firebaseio.com",
    projectId: "timesheet-6b410",
    storageBucket: "timesheet-6b410.appspot.com",
    messagingSenderId: "351635069014"
  };
  firebase.initializeApp(config);

  var database = firebase.database();


  $('#submit').on('click', function(){
  	event.preventDefault();
  	var name = $('#name').val().trim();
  	var role = $('#role').val().trim();
  	var start = $('#start').val().trim();
	var rate = $('#rate').val().trim();
	database.ref().push({
		name: name,
		role: role,
		start: start,
		rate: rate
	});

  });

  