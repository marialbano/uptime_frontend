var json = {};

$('#create').click(function(){
    var info = getdata()
    var id = document.getElementById("id").value;
    $.ajax({
        url: `http://internal-systems.ml.com/uptime-test/downtimes/${id}`,
        type: 'PUT',
        data: info,
        success: function(data) {
          alert('Postmortem add sucessfully');
          window.location.href = "/events"
        },
        error: function (xhr, textStatus, errorThrown) {  
          alert('Error: ' +xhr, textStatus, errorThrown);
        }
      });
});


function getdata(){
    json.postMortem = document.getElementById("description").value;
    json.comments = "";
    json.postMortemStatus = document.getElementById("status").value;
    json.ponderation = document.getElementById("ponderation").value;;

    return json;
}