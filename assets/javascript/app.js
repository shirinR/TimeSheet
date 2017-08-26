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
  	var startFormat = "MM/DD/YY";
  	var convertedStart = moment(start, startFormat);

var months = moment().diff(moment(convertedStart),"months");
	var billed = months * rate;
  	$("#tbody").append("<tr><td id='table-name'> " + name +
        " </td><td id='table-role'> " + role +
        " </td><td id='table-start'> " + start +
        " </td><td id='table-rate'> " + rate + " </td><td id='months-worked'>" + months + "</td><td id='billed'>" + billed +"</td></tr>");

  	console.log(data.name);
  	console.log(data.role);
  	console.log(data.start);
  	console.log(data.rate);

  	
  	console.log('>>>>', moment(convertedStart).toNow());
  	
  	console.log('+++++', moment().diff(moment(convertedStart),"years"));
  	console.log('+++++', moment().diff(moment(convertedStart),"months"));
  	console.log('+++++', moment().diff(moment(convertedStart),"days"));
  	console.log('+++++', moment().diff(moment(convertedStart),"seconds"));
  	
  	

  }, function(errorObject){
  	console.log(errorObject);
  });

  