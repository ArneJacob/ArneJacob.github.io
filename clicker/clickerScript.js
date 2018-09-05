    var username
		var clicks = 0;
		var clicksOnClick = 1;
		var clicksPerSecond = 0
		/*document.getElementById("clicks").innerHTML = clicks;*/

			function onButtonClick() {
				clicks += clicksOnClick;
			document.getElementById("clicks").innerHTML = clicks;
	}

/*function clickCounter() {
		if(typeof(Storage) !== "undefined") {
				if (localStorage.clickcount) {
						localStorage.clickcount = Number(localStorage.clickcount)+1;
				} else {
						localStorage.clickcount = 1;
				}
				document.getElementById("result").innerHTML = "You have " + localStorage.clickcount + " click(s).";
		} else {
				document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
		}*/

		var costBaseExtraclick1 = 25;
		var costExtraclick1 = 25;
		var numberExtraclick1 = 0;
		function buyExtraclick1() {
			if (clicks >= costExtraclick1) {
				clicks -= costExtraclick1
				if (numberClickdoubler >= 2) {
					clicksOnClick += 2 ** numberClickdoubler;
					numberExtraclick1 += 1;
					costExtraclick1 = Math.pow(1.25, numberExtraclick1) * costBaseExtraclick1;
					costExtraclick1 = Math.round(costExtraclick1);
					document.getElementById("costExtraclick1Text").innerHTML = costExtraclick1;
					document.getElementById("clicksOnClick").innerHTML = clicksOnClick;
				}
				else if (numberClickdoubler == 1) {
					clicksOnClick += 2;
					numberExtraclick1 += 1;
					costExtraclick1 = Math.pow(1.25, numberExtraclick1) * costBaseExtraclick1;
					costExtraclick1 = Math.round(costExtraclick1);
					document.getElementById("costExtraclick1Text").innerHTML = costExtraclick1;
					document.getElementById("clicksOnClick").innerHTML = clicksOnClick;
				}
				else {
					clicksOnClick += 1;
					numberExtraclick1 += 1;
					costExtraclick1 = Math.pow(1.25, numberExtraclick1) * costBaseExtraclick1;
					costExtraclick1 = Math.round(costExtraclick1);
					document.getElementById("costExtraclick1Text").innerHTML = costExtraclick1;
					document.getElementById("clicksOnClick").innerHTML = clicksOnClick;
				}
				/*numberExtraclick1 += 1;
				costExtraclick1 = Math.pow(1.25, numberExtraclick1) * costBaseExtraclick1;
				costExtraclick1 = Math.round(costExtraclick1);
				document.getElementById("costExtraclick1Text").innerHTML = costExtraclick1;
				document.getElementById("clicksOnClick").innerHTML = clicksOnClick;*/
	}
}

		var costBaseClickdoubler = 10000;
		var costClickdoubler = 10000;
		var numberClickdoubler = 0;
			function buyClickdoubler() {
				if (clicks >= costClickdoubler) {
					clicks -= costClickdoubler
					numberClickdoubler += 1;
					clicksOnClick *= 2;
					costClickdoubler = Math.pow(2, numberClickdoubler) * costBaseClickdoubler;
					costClickdoubler = Math.round(costClickdoubler);
					document.getElementById("costClickdoublerText").innerHTML = costClickdoubler;
					document.getElementById("numberClickdoublerText").innerHTML = numberClickdoubler;
					document.getElementById("clicksOnClick").innerHTML = clicksOnClick;
				}
			}


		var costBaseAutoclick1 = 25;
		var costAutoclick1 = 25;
		var numberAutoclick1 = 0;
		var costAutoclick1Text = costAutoclick1;
		function buyAutoclick1() {
			if (clicks >= costAutoclick1) {
				clicks -= costAutoclick1;{
				numberAutoclick1 += 1;
				clicksPerSecond += 1;
				costAutoclick1 = Math.pow(1.15, numberAutoclick1) * costBaseAutoclick1;
				costAutoclick1 = Math.round(costAutoclick1);
				document.getElementById("costAutoclick1Text").innerHTML = costAutoclick1;
				document.getElementById("numberAutoclick1Text").innerHTML = numberAutoclick1;
			}
		}
	}

	var costBaseAutoclick2 = 250;
	var costAutoclick2 = 250;
	var numberAutoclick2 = 0;
	var costAutoclick2Text = costAutoclick2;
	function buyAutoclick2() {
		if (clicks >= costAutoclick2) {
			clicks -= costAutoclick2;{
			numberAutoclick2 += 1;
			clicksPerSecond += 5;
			costAutoclick2 = Math.pow(1.15, numberAutoclick2) * costBaseAutoclick2;
			costAutoclick2 = Math.round(costAutoclick2);
			document.getElementById("costAutoclick2Text").innerHTML = costAutoclick2;
			document.getElementById("numberAutoclick2Text").innerHTML = numberAutoclick2;
		}
	}
}

	var costBaseAutoclick3 = 1000;
	var costAutoclick3 = 1000;
	var numberAutoclick3 = 0;
	var costAutoclick3Text = costAutoclick3;
	function buyAutoclick3() {
		if (clicks >= costAutoclick3) {
			clicks -= costAutoclick3;{
			numberAutoclick3 += 1;
			clicksPerSecond += 10;
			costAutoclick3 = Math.pow(1.15, numberAutoclick3) * costBaseAutoclick3;
			costAutoclick3 = Math.round(costAutoclick3);
			document.getElementById("costAutoclick3Text").innerHTML = costAutoclick3;
			document.getElementById("numberAutoclick3Text").innerHTML = numberAutoclick3;
		}
	}
}

  var costBaseAutoclick4 = 5000;
  var costAutoclick4 = 5000;
  var numberAutoclick4 = 0;
  var costAutoclick4Text = costAutoclick4;
  function buyAutoclick4() {
    if (clicks >= costAutoclick4) {
      clicks -= costAutoclick4;{
      numberAutoclick4 += 1;
      clicksPerSecond += 25;
      costAutoclick4 = Math.pow(1.15, numberAutoclick4) * costBaseAutoclick4;
      costAutoclick4 = Math.round(costAutoclick4);
      document.getElementById("costAutoclick4Text").innerHTML = costAutoclick4;
      document.getElementById("numberAutoclick4Text").innerHTML = numberAutoclick4;
    }
  }
}

  var costBaseAutoclick5 = 20000;
  var costAutoclick5 = 20000;
  var numberAutoclick5 = 0;
  var costAutoclick5Text = costAutoclick5;
  function buyAutoclick5() {
    if (clicks >= costAutoclick5) {
      clicks -= costAutoclick5;{
      numberAutoclick5 += 1;
      clicksPerSecond += 50;
      costAutoclick5 = Math.pow(1.15, numberAutoclick5) * costBaseAutoclick5;
      costAutoclick5 = Math.round(costAutoclick5);
      document.getElementById("costAutoclick5Text").innerHTML = costAutoclick5;
      document.getElementById("numberAutoclick5Text").innerHTML = numberAutoclick5;
    }
  }
}

  var costBaseAutoclick6 = 50000;
  var costAutoclick6 = 50000;
  var numberAutoclick6 = 0;
  var costAutoclick6Text = costAutoclick6;
  function buyAutoclick6() {
    if (clicks >= costAutoclick6) {
      clicks -= costAutoclick6;{
      numberAutoclick6 += 1;
      clicksPerSecond += 125;
      costAutoclick6 = Math.pow(1.15, numberAutoclick6) * costBaseAutoclick6;
      costAutoclick6 = Math.round(costAutoclick6);
      document.getElementById("costAutoclick6Text").innerHTML = costAutoclick6;
      document.getElementById("numberAutoclick6Text").innerHTML = numberAutoclick6;
    }
  }
}

var click_acc = 0

setInterval(function autoclickers(){
	click_acc += getRealClicksPerSecond()/100;
  if (click_acc >= 1){
    let a = Math.floor(click_acc)
    click_acc -= a
    clicks += a
  }
}, 10)

setInterval(function updateclicks(){
    clicks = clicks;
    document.getElementById("clicks").innerHTML = clicks;
}, 10)

function getRealClicksPerSecond(){
  let a = clicksPerSecond;
  if(numberClickdoubler >= 1){
    a*=2*numberClickdoubler;
  }
  return a;
}
setInterval(function updateClicksPerSecond() {
	document.getElementById("clicksPerSecond").innerHTML = getRealClicksPerSecond();
})
setInterval(function titleUpdater() {
	document.title = "You have " + clicks + " clicks!"
}, 20)

/*setInterval(function bronzeTrophyCheck(){
	if(clicks >= 100000){
		document.getElementsByClassName("bronzeTrophy").style.opacity = "1.0";
	}
}, 1000)

setInterval(function silverTrophyCheck(){
	if(clicks >= 1000000){
		document.getElementsByClassName("silverTrophy").style.opacity = "1.0";
	}
}, 1000)

setInterval(function goldTrophyCheck(){
	if(clicks >= 100000000){
		document.getElementsByClassName("goldTrophy").style.opacity = "1.0";
	}
}, 1000)*/


function loadGame(){
  let unserialized = localStorage.getItem("gamedata");
  let gamedata;
  if (unserialized != null){
    try{
      gamedata = JSON.parse(unserialized)
    }catch(err){
      console.error(err);
      alert("Could not load saved gamedata");
    }
  }
  if(gamedata != null){
    clicks = gamedata.clicks || 0;
    clicksOnClick = gamedata.clicksOnClick || 0;
    clicksPerSecond = gamedata.clicksPerSecond || 0;
    costExtraclick1 = gamedata.costExtraclick1 || 0;
    costClickdoubler = gamedata.costClickdoubler || 0;
    costAutoclick1 = gamedata.costAutoclick1 || 0;
    costAutoclick2 = gamedata.costAutoclick2 || 0;
    costAutoclick3 = gamedata.costAutoclick3 || 0;
    costAutoclick4 = gamedata.costAutoclick4 || 0;
    costAutoclick5 = gamedata.costAutoclick5 || 0;
    costAutoclick6 = gamedata.costAutoclick6 || 0;
    numberExtraclick1 = gamedata.numberExtraclick1 || 0;
    numberClickdoubler = gamedata.numberClickdoubler || 0;
    numberAutoclick1 = gamedata.numberAutoclick1 || 0;
    numberAutoclick2 = gamedata.numberAutoclick2 || 0;
    numberAutoclick3 = gamedata.numberAutoclick3 || 0;
    numberAutoclick4 = gamedata.numberAutoclick4 || 0;
    numberAutoclick5 = gamedata.numberAutoclick5 || 0;
    numberAutoclick6 = gamedata.numberAutoclick6 || 0;
    username = gamedata.username;
    /* other data to load */
    document.getElementById("costExtraclick1Text").innerHTML = costExtraclick1;
    document.getElementById("clicksOnClick").innerHTML = clicksOnClick;
    document.getElementById("clicksPerSecond").innerHTML = clicksPerSecond;
    document.getElementById("costClickdoublerText").innerHTML = costClickdoubler;
    document.getElementById("numberClickdoublerText").innerHTML = numberClickdoubler;
    document.getElementById("costAutoclick1Text").innerHTML = costAutoclick1;
    document.getElementById("numberAutoclick1Text").innerHTML = numberAutoclick1;
    document.getElementById("costAutoclick2Text").innerHTML = costAutoclick2;
    document.getElementById("numberAutoclick2Text").innerHTML = numberAutoclick2;
    document.getElementById("costAutoclick3Text").innerHTML = costAutoclick3;
    document.getElementById("numberAutoclick3Text").innerHTML = numberAutoclick3;
    document.getElementById("costAutoclick4Text").innerHTML = costAutoclick4;
    document.getElementById("numberAutoclick4Text").innerHTML = numberAutoclick4;
    document.getElementById("costAutoclick5Text").innerHTML = costAutoclick5;
    document.getElementById("numberAutoclick5Text").innerHTML = numberAutoclick5;
    document.getElementById("costAutoclick6Text").innerHTML = costAutoclick6;
    document.getElementById("numberAutoclick6Text").innerHTML = numberAutoclick6;
    document.getElementById("usernameHTML").innerHTML = username;
  }
}

function saveGame(){
  let gamedata = {
    clicks: clicks,
    clicksOnClick: clicksOnClick,
    clicksPerSecond: clicksPerSecond,
    costExtraclick1: costExtraclick1,
    costClickdoubler: costClickdoubler,
    costAutoclick1: costAutoclick1,
    costAutoclick2: costAutoclick2,
    costAutoclick3: costAutoclick3,
    costAutoclick4: costAutoclick4,
    costAutoclick5: costAutoclick5,
    costAutoclick6: costAutoclick6,
    numberExtraclick1: numberExtraclick1,
    numberClickdoubler: numberClickdoubler,
    numberAutoclick1: numberAutoclick1,
    numberAutoclick2: numberAutoclick2,
    numberAutoclick3: numberAutoclick3,
    numberAutoclick4: numberAutoclick4,
    numberAutoclick5: numberAutoclick5,
    numberAutoclick6: numberAutoclick6,
    username: username,
    /*other things that should be saved*/
  }
  let serialized = JSON.stringify(gamedata);
  localStorage.setItem("gamedata", serialized);
  alert("The game has been saved. You can now safely close the window.")
}



window.addEventListener("load", function(){
  loadGame()
  if (username == null){
    username = prompt("Please enter your name:", "");
  } else {
    alert("Welcome back, " + username)
  }
})
