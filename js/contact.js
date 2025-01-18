const button = document.getElementById("contactButton");

button.addEventListener("click", function() {
	window.open("mailto:contact@thecolobevi.com");
});

button.addEventListener("mouseover", function() {
	/*
	background-color: #4b83ce;
	border-color: #6dabf4;
	border-width: 0.2em;
	margin-top: 0.1em;
	margin-left: 3em;
	*/
	this.style.backgoundColor = "4B8AFF";
	this.style.borderColor = "#6DAFFF";
	this.style.borderWidth = "0.3em";
	this.style.marginTop = "0em";
	this.style.marginLeft = "2.8";
});

button.addEventListener("mouseout", function() {
	this.style.backgoundColor = "";
	this.style.borderColor = "";
	this.style.borderWidth = "";
	this.style.marginTop = "";
	this.style.marginLeft = "";
});