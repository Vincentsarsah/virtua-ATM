var vincentsarsah = ["Vincent Sarsah", "vincent.sarsah@amalitech.org", 4112, "+233262756294", 2000]


function showBalance(){
	document.getElementById("balance").innerHTML = `Your current balance is $ ${vincentsarsah[4]}`
}

function withdraw() {
    amount = prompt("Enter Amount")
    if (vincentsarsah[4] < amount) {
        alert("Your balance is insuficient")
    }else if (vincentsarsah[4] == amount){
    	alert("Amount should be less than balance")
    }else{
    	alert(pin())
    }
}


function currentBalance (){
	var balance2 = amount
	var balance3 = vincentsarsah[4] - balance2
	return document.getElementById("dis").innerHTML = `$${amount} has been deducted from your account, curent balance is $${balance3}`
}


function pin() {
    var pin = prompt("Enter pin")
    if (vincentsarsah[2] == pin) {
        alert(confirmpin())
    }else{
    	alert("Incorrect pin")
    }
}

function confirmpin() {
    var pin = prompt("Confirm pin")
    if (vincentsarsah[2] == pin) {
        alert("Transaction successful")
        alert(currentBalance())
    }else{
    	alert("pin do not match")
    	
    }
}

//function myFunction() {
    //window.open("https://www.w3schools.com");
 // }


//var final = vincentsarsah[4] - amount

  
 


