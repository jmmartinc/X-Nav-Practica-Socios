$(function() {
    $("#tabs").tabs(); 
    $("#timeline").accordion();
    $("#myline").accordion();

	$(document).ready(function() { 
		$.getJSON("timeline.json", function(data) {
            var timeline = "";
	        $("#timeline").accordion("destroy");
			for(var i = 0; i < data.timeline.length; i++){
				var user = data.timeline[i].user;
                var avatar = data.timeline[i].avatar;
				var date = data.timeline[i].date;
				var title = data.timeline[i].title;
				var msg = data.timeline[i].msg;
				timeline += "<h3><div class='post'><div class='info'><h4 class='user'>" + user + "</h4><img class='avatar' src="
                + avatar + "></img></div><div class='data'><p class='date'>" + date + "</p><h2 class='title'>" + title +
                "</h2></div></div></h3><p class='msg'>" + msg + "</p>";	
			}
			$("#timeline").html(timeline);
			$("#timeline").accordion({active: true});
		});

        $.getJSON("myline.json", function(data) {
            var myline = "";
	        $("#myline").accordion("destroy");
			for(var i = 0; i < data.myline.length; i++){
				var user = data.myline[i].user;
                var avatar = data.myline[i].avatar;
				var date = data.myline[i].date;
				var title = data.myline[i].title;
				var msg = data.myline[i].msg;
				myline += "<h3><div class='post'><div class='info'><h4 class='user'>" + user + "</h4><img class='avatar' src="
                + avatar + "></img></div><div class='data'><p class='date'>" + date + "</p><h2 class='title'>" + title +
                "</h2></div></div></h3><p class='msg'>" + msg + "</p>";	
			}
			$("#myline").html(myline);
			$("#myline").accordion({active: true});
		});

        $.getJSON("update.json", function(data) {
            if (data.update.length > 0){
			    $("#news").html("<button id='update'>There are " + data.update.length + " new messages.</button>");
                $("#update").click(updateMessages);
            }
		});	
    });
});

function updateMessages(){
    $.getJSON("update.json", function(data) {
        var update = "";
        $("#timeline").accordion("destroy");
        for(var i = 0; i < data.update.length; i++){
            var user = data.update[i].user;
            var avatar = data.update[i].avatar;
			var date = data.update[i].date;
			var title = data.update[i].title;
			var msg = data.update[i].msg;
			update += "<h3><div class='post'><div class='info'><h4 class='user'>" + user + "</h4><img class='avatar' src="
            + avatar + "></img></div><div class='data'><p class='date'>" + date + "</p><h2 class='title'>" + title +
            "</h2></div></div></h3><p class='msg'>" + msg + "</p>";
        }
        $("#timeline").append(update);
		$("#timeline").accordion({active: true});
		$("#news").html("");
	});
}
