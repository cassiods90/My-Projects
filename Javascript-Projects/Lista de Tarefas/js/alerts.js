function alert(string1,string2,idAlert,typeMSG, animation){
	
	document.getElementById(idAlert).innerHTML = "";//clear all msgs

	//create a node type DIV
	var div = document.createElement("div");
	var anim = "animated " + animation;
	if(typeMSG == 0){ div.setAttribute("class", "alert alert-danger " + anim); }// 0 - danger
	if(typeMSG == 1){ div.setAttribute("class", "alert alert-success " + anim); }// 1 - sucess
	if(typeMSG == 2){ div.setAttribute("class", "alert alert-warning " + anim); }// 2 - warning
	if(typeMSG == 3){ div.setAttribute("class", "alert alert-info " + anim); }// 3 - info

	var s1 = document.createElement("strong");
	var s1Txt = document.createTextNode(string1);
	s1.appendChild(s1Txt);

	var s2 = document.createElement("small");
	var s2Txt = document.createTextNode(string2);
	s2.appendChild(s2Txt);

	//append nodes
	div.appendChild(s1);
	div.appendChild(s2);

	//send a msg for the div idAlert
	var msg = document.getElementById(idAlert);
	msg.insertBefore(div, msg.childNodes[0]);
}