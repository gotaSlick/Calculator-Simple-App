calcView = {
	display: function(result) {
		var resultDisplay = document.getElementById('resultDisplay');
		resultDisplay.innerHTML = result;
		document.getElementById('arg1').value = '';
		document.getElementById('arg2').value = '';
	}
}