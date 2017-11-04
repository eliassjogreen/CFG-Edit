var cfg = ""
var type = "Normal"

function cfgSubmit () {

	cfg = "PART" + "\r\n" +
		"{" + "\r\n" +
		"name = " + document.getElementById('name').value + "\r\n" +
		"module = " + document.getElementById('module').value + "\r\n" +
		"author = " + document.getElementById('author').value + "\r\n" +
		"mesh = " + document.getElementById('mesh').value + "\r\n" +
		"title = " + document.getElementById('title').value + "\r\n" +
		"manufacturer = " + document.getElementById('manufacturer').value + "\r\n" +
		"description = " + document.getElementById('description').value + "\r\n" +
		"scale = " + document.getElementById('scale').value + "\r\n" +
		"rescaleFactor = " + document.getElementById('Rescalefactor').value + "\r\n" +
		"TechRequired = " + document.getElementById('TechRequired').options[document.getElementById('TechRequired').selectedIndex].value + "\r\n" +
		"attachRules = " + document.getElementById('attachRules0').value + ", " + document.getElementById('attachRules1').value + ", " + document.getElementById('attachRules2').value + ", " + document.getElementById('attachRules3').value + ", " + document.getElementById('attachRules4').value + "\r\n" +
		"category = " + document.getElementById('category').options[document.getElementById('category').selectedIndex].value + "\r\n" + "entryCost = " + document.getElementById('entryCost').value + "\r\n" +
		"cost = " + document.getElementById('cost').value + "\r\n"

	if (type == "Command") {
		cfg += "CrewCapacity = " + document.getElementById('CrewCapacity').value + "\r\n" + "MODULE" + "\r\n" + "{" + "\r\n" +"name = ModuleCommand" + "\r\n" + "minimumCrew = 0" + "\r\n" + "RESOURCE" + "\r\n" + "{" + "\r\n" + "name = ElectricCharge" + "\r\n" + "rate = " + document.getElementById('EPS').value + "\r\n" + "}" + "\r\n" + "hasHibernation = " + document.getElementById('hasHibernation').options[document.getElementById('hasHibernation').selectedIndex].value + "\r\n" + "}" + "\r\n"
	}


	cfg = cfg + "}"

	document.getElementById('finalCFG').value = cfg
}

function changeType() {
	type = document.getElementById('type').options[document.getElementById('type').selectedIndex].value
}

function copyToClipboard(text) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}
