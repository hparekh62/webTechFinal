function heroFact()
{
	var theDate = new Date();
	var theHour = theDate.getHours();

	var firstVariable = document.createElement("P");

	if(theHour > 0 && theHour < 6)
	{
		var secondVariable = document.createTextNode("Hero Fact: Superman is from the planet Krypton.");
		firstVariable.appendChild(secondVariable);
		document.getElementById("fact").appendChild(firstVariable);
	}
	else if(theHour > 6 && theHour < 12)
	{
		var secondVariable = document.createTextNode("Hero Fact: Wonder Woman is a member of the Amazonian race.");
		firstVariable.appendChild(secondVariable);
		document.getElementById("fact").appendChild(firstVariable);
	}
	else if(theHour > 12 && theHour < 18)
	{
		var secondVariable = document.createTextNode("Hero Fact: Thor is from the realm of Asgard.");
		firstVariable.appendChild(secondVariable);
		document.getElementById("fact").appendChild(firstVariable);
	}
	else if(theHour > 18 && theHour < 23)
	{
		var secondVariable = document.createTextNode("Hero Fact: Wolverine is a member of the X-Men.");
		firstVariable.appendChild(secondVariable);
		document.getElementById("fact").appendChild(firstVariable);
	}
	else
	{
		var secondVariable = document.createTextNode("Hero Fact: Batman is not featured on this website.");
		firstVariable.appendChild(secondVariable);
		document.getElementById("fact").appendChild(firstVariable);
	}
}

function goBack()
{
	window.history.back();
}

function userChoice()
{
	var sm = document.getElementById("1").checked;
	var ww = document.getElementById("2").checked;
	var th = document.getElementById("3").checked;
	var wv = document.getElementById("4").checked;

	if(sm == true && ww == true && th == false && wv == false)
	{
		document.getElementById("battleLink").setAttribute("href", "http://www.albany.edu/~HP947686/smwwbp.html");
	}
	else if(sm == true && th == true && ww == false && wv == false)
	{
		document.getElementById("battleLink").setAttribute("href", "http://www.albany.edu/~HP947686/smthbp.html");
	}
	else if(sm == true && wv == true && th == false && ww == false)
	{
		document.getElementById("battleLink").setAttribute("href", "http://www.albany.edu/~HP947686/smwvbp.html");
	}
	else if(ww == true && th == true && sm == false && wv == false)
	{
		document.getElementById("battleLink").setAttribute("href", "http://www.albany.edu/~HP947686/wwthbp.html");
	}
	else if(ww == true && wv == true && th == false && sm == false)
	{
		document.getElementById("battleLink").setAttribute("href", "http://www.albany.edu/~HP947686/wwwvbp.html");
	}
	else if(th == true && wv == true && sm == false && ww == false)
	{
		document.getElementById("battleLink").setAttribute("href", "http://www.albany.edu/~HP947686/thwvbp.html");
	}
	else
	{
		alert("You must choose two characters.");
	}
}

function smPowers()
{
	var smArray = [" Super Strength ", " Flight ", " Heat Vision ", " Super Speed ", " X-ray Vision "];
	var powerNum1 = parseInt(document.getElementById("powerIn1").value);
	var powerPrint1 = powerNum1 - 1;
	var blank1 = "";

	while(powerPrint1 >= 0)
	{
		blank1 = blank1 + smArray[powerPrint1];
		document.getElementById("power1").innerHTML = blank1;
		powerPrint1--;
	}
}

function wwPowers()
{
	var wwArray = [" Super strength ", " Flight ", " Healing Factor ", " Super Speed ", " Lasso of Truth "];
	var powerNum2 = parseInt(document.getElementById("powerIn2").value);
	var powerPrint2 = powerNum2 - 1;
	var blank2 = "";

	while(powerPrint2 >= 0)
	{
		blank2 = blank2 + wwArray[powerPrint2];
		document.getElementById("power2").innerHTML = blank2;
		powerPrint2--;
	}
}

function thPowers()
{
	var thArray = [" Lightning Control ", " Super Strength ", " Flight ", " Mjolnir ", " Super Speed "];
	var powerNum3 = parseInt(document.getElementById("powerIn3").value);
	var powerPrint3 = powerNum3 - 1;
	var blank3 = "";

	while(powerPrint3 >= 0)
	{
		blank3 = blank3 + thArray[powerPrint3];
		document.getElementById("power3").innerHTML = blank3;
		powerPrint3--;
	}
}

function wvPowers()
{
	var wvArray = [" Retractable Claws ", " Adamantium Skeleton ", " Healing Factor ", " Super Strength ", " Enhanced Reflexes "];
	var powerNum4 = parseInt(document.getElementById("powerIn4").value);
	var powerPrint4 = powerNum4 - 1;
	var blank4 = "";

	while(powerPrint4 >= 0)
	{
		blank4 = blank4 + wvArray[powerPrint4];
		document.getElementById("power4").innerHTML = blank4;
		powerPrint4--;
	}
}