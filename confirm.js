let name=localStorage.getItem("studentName");

let events=JSON.parse(localStorage.getItem("event")) || [];

let totalFee=events.length*150;

let result="<h2>Registration confirmed</h2>";
result+= "name: " +name+"<br><br>"

result+="<b>Event: </b><br>";

for(let i=0; i<events.length;i++){
	result+= events[i]+"<br>";
}


result+="<br>total fee: "+totalFee+"taka";

document.getElementById("summary").innerHTML=result;
function goBack(){
	window.location.href="index.html";
}

nameLine.textContent="name:" + name;
summary,appendChild(nameLine)