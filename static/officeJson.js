var json = {};

$('#btn').click(function(){
    console.log(getdata())
    $.post('http://internal-systems.ml.com/uptime-test/offices',   // url
       getdata(), // data to be submit
       function(data, status, jqXHR) {// success callback
            alert('Office add sucessfully');
            window.location.href = "/office"
        })
});


function getdata(){

    /* json.schedules = [];
    $('input:checked').each(function(i){
        json.schedules.push({ 'hourFrom' : $(this).val()});
    }); */

    json.description = document.getElementById("description").value;
    json.timeZoneOffset = Number(document.getElementById("timezone").value);
    json.ponderation = document.getElementById("ponderation").value;


	json.schedules = [];
    // create schedule

    // sunday
    sunday_hourFrom = document.getElementById("sunday_hourFrom").value;
    sunday_hourTo = document.getElementById("sunday_hourTo").value;
    if (sunday_hourFrom == "" || sunday_hourTo == "") {

    } else {
    	if (sunday_hourTo == "0") {
      	    json.schedules.push({ 'weekday': 0,
                                  'isActive': 1,
                                  'changesDay': 1,
                                  'hourFrom' : Number(sunday_hourFrom),
                                  'hourTo': Number(sunday_hourTo)});
        } else {
    		json.schedules.push({ 'weekday': 0,
                                  'isActive': 1,
                                  'changesDay': 0,
                                  'hourFrom' : Number(sunday_hourFrom),
                                  'hourTo': Number(sunday_hourTo)});
     	}
    }


    // monday
    monday_hourFrom = document.getElementById("monday_hourFrom").value;
    monday_hourTo = document.getElementById("monday_hourTo").value;
    if (monday_hourFrom == "" || monday_hourTo == "") {

    } else {
    	if (monday_hourTo == "0") {
      	    json.schedules.push({ 'weekday': 1,
                                  'isActive': 1,
                                  'changesDay': 1,
                                  'hourFrom' : Number(monday_hourFrom),
                                  'hourTo': Number(monday_hourTo)});
        } else {
    		json.schedules.push({ 'weekday': 1,
                                  'isActive': 1,
                                  'changesDay': 0,
                                  'hourFrom' : Number(monday_hourFrom),
                                  'hourTo': Number(monday_hourTo)});
     	}
    }

    // tuesday
    tuesday_hourFrom = document.getElementById("tuesday_hourFrom").value;
    tuesday_hourTo = document.getElementById("tuesday_hourTo").value;
    if (tuesday_hourFrom == "" || tuesday_hourTo == "") {

    } else {
    	if (tuesday_hourTo == "0") {
      	json.schedules.push({ 'weekday': 2,
    						  'isActive': 1,
                              'changesDay': 1,
    						  'hourFrom' : Number(tuesday_hourFrom),
    						  'hourTo': Number(tuesday_hourTo)});
        } else {
    		json.schedules.push({ 'weekday': 2,
    							  'isActive': 1,
                                  'changesDay': 0,
                                  'hourFrom' : Number(tuesday_hourFrom),
                                  'hourTo': Number(tuesday_hourTo)});
     	}
    }

    // wednesday
    wednesday_hourFrom = document.getElementById("wednesday_hourFrom").value;
    wednesday_hourTo = document.getElementById("wednesday_hourTo").value;
    if (wednesday_hourFrom == "" || wednesday_hourTo == "") {

    } else {
        if (wednesday_hourTo == "0") {
        json.schedules.push({ 'weekday': 3,
                              'isActive': 1,
                              'changesDay': 1,
                              'hourFrom' : Number(wednesday_hourFrom),
                              'hourTo': Number(wednesday_hourTo)});
        } else {
            json.schedules.push({ 'weekday': 3,
                                  'isActive': 1,
                                  'changesDay': 0,
                                  'hourFrom' : Number(wednesday_hourFrom),
                                  'hourTo': Number(wednesday_hourTo)});
        }
    }

    // thursday
    thursday_hourFrom = document.getElementById("thursday_hourFrom").value;
    thursday_hourTo = document.getElementById("thursday_hourTo").value;
    if (thursday_hourFrom == "" || thursday_hourTo == "") {

    } else {
        if (thursday_hourTo == "0") {
        json.schedules.push({ 'weekday': 4,
                              'isActive': 1,
                              'changesDay': 1,
                              'hourFrom' : Number(thursday_hourFrom),
                              'hourTo': Number(thursday_hourTo)});
        } else {
            json.schedules.push({ 'weekday': 4,
                                  'isActive': 1,
                                  'changesDay': 0,
                                  'hourFrom' : Number(thursday_hourFrom),
                                  'hourTo': Number(thursday_hourTo)});
        }
    }

    // friday
    friday_hourFrom = document.getElementById("friday_hourFrom").value;
    friday_hourTo = document.getElementById("friday_hourTo").value;
    if (friday_hourFrom == "" || friday_hourTo == "") {

    } else {
        if (friday_hourTo == "0") {
        json.schedules.push({ 'weekday': 5,
                              'isActive': 1,
                              'changesDay': 1,
                              'hourFrom' : Number(friday_hourFrom),
                              'hourTo': Number(friday_hourTo)});
        } else {
            json.schedules.push({ 'weekday': 5,
                                  'isActive': 1,
                                  'changesDay': 0,
                                  'hourFrom' : Number(friday_hourFrom),
                                  'hourTo': Number(friday_hourTo)});
        }
    }

    // saturday
    saturday_hourFrom = document.getElementById("saturday_hourFrom").value;
    saturday_hourTo = document.getElementById("saturday_hourTo").value;
    if (saturday_hourFrom == "" || saturday_hourTo == "") {
        
    } else {
        if (saturday_hourTo == "0") {
        json.schedules.push({ 'weekday': 6,
                              'isActive': 1,
                              'changesDay': 1,
                              'hourFrom' : Number(saturday_hourFrom),
                              'hourTo': Number(saturday_hourTo)});
        } else {
            json.schedules.push({ 'weekday': 6,
                                  'isActive': 1,
                                  'changesDay': 0,
                                  'hourFrom' : Number(saturday_hourFrom),
                                  'hourTo': Number(saturday_hourTo)});
        }
    }




    return json;
}