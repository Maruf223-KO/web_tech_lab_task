let events=[];




function addEvent(){
	 let eventsName = document.getElementById("event").value.trim();

    if (eventsName == "") {

        alert("Please Enter a event Name");

        return;

    }
	if(events.length >=3){
		alert("You can join maximum 3 events");
		return;
	}
	events.push(eventsName);
	
	alert("event added");
	document.getElementById("event").value="";
}

function confirmRegistration(){
	let name=document.getElementById("studentName").value.trim();
	
	if(name==""){
		alert("PLease enter your name");
		return
	}
	
	if(events.length==0){
		alert("add atleast one event");
		return;
	}
	
	localStorage.setItem("studentName",name);
	localStorage.setItem("event", JSON.stringify(events));
	
	window.location.href="confirm.html";
}