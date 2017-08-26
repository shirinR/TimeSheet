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

  database.ref().on('child_added', function(snapshot){
  	var data = snapshot.val();
  	var name = data.name;
  	var role = data.role;
  	var start = data.start;
  	var rate = data.rate;

  	$("#tbody").append("<tr><td id='table-name'> " + name +
        " </td><td id='table-role'> " + role +
        " </td><td id='table-start'> " + start +
        " </td><td id='table-rate'> " + rate + " </td></tr>");

  	console.log(data.name);
  	console.log(data.role);
  	console.log(data.start);
  	console.log(data.rate);

  	var startFormat = "MM/DD/YY";
  	var convertedStart = moment(start, startFormat);

  	console.log('>>>>', moment(convertedStart).toNow());
  	console.log('+++++', moment(convertedStart).diff(moment(),"years"));
  	console.log('+++++', moment(convertedStart).diff(moment(),"months"));
  	console.log('+++++', moment(convertedStart).diff(moment(),"days"));


  }, function(errorObject){
  	console.log(errorObject);
  });

  