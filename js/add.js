function add() {
	document.getElementById("add").onclick = function() {
	  var num1 = parseInt(document.getElementById("num1").value);
	  var num2 = parseInt(document.getElementById("num2").value);
	  alert(num1 + num2);	  
	};
}