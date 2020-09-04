let inBound = 0;
let outBound = 0;

function add(io){
	
	if (io == "inBound") {
		inBound++;
		document.getElementById("inBound-txt").innerHTML = inBound;
	} else if (io == "outBound") {
		outBound++;
		document.getElementById("outBound-txt").innerHTML = outBound;
	}
}

function sub(io){
	
	if (io == "inBound") {
		inBound--;
		document.getElementById("inBound-txt").innerHTML = inBound;
	} else if (io == "outBound") {
		outBound--;
		document.getElementById("outBound-txt").innerHTML = outBound;
	}
}

function editBtn(btn) {
	var editTxt = document.getElementById( btn + "-txt");
	var newInput = document.createElement("INPUT");
	editTxt.parentNode.replaceChild(newInput,editTxt);
	newInput.setAttribute("value",editTxt.innerHTML);
	newInput.setAttribute("id", btn+"-input");

	var editBtn = document.getElementById(btn +"-Btn-edit");
	editBtn.innerHTML = "Done";
	editBtn.setAttribute("onclick", "doneEdit('"+btn+"')");
	editBtn.setAttribute("id", btn+"-Btn-done");	
}

function doneEdit(btn) {
	var doneBtn = document.getElementById(btn +"-Btn-done");
	doneBtn.innerHTML = "Edit";
	doneBtn.setAttribute("onclick", "editBtn('"+btn+"')");
	doneBtn.setAttribute("id", btn+"-Btn-edit");
	
	var doneTxt = document.getElementById(btn+"-input");
	document.createElement('p');
	var newInputValue = doneTxt.value;
	var newPar = document.createElement("P");
	doneTxt.parentNode.replaceChild(newPar,doneTxt);
	newPar.innerHTML = newInputValue;
	newPar.setAttribute("id", btn + "-txt");

	if(btn == "inBound"){
		inBound = newInputValue;
	} else if ( btn == "outBound") {
		outBound = newInputValue;
	}
}