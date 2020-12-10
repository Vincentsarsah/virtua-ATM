var email = ["kwameansah@gamil.com", "kofiatta@gamil.com", "isaacarthur@gamil.com", "francismensah@gamil.com", "vincent.sarsah@amalitech.org"]
var name = ["Kwame Ansah", "Kofi Atta", "Isaac Arthur", "Francis Mensah", "Vincent Sarsah"]
var phone_number = ["+233587896287", "+233123125425", "+233123187925", "+2331231425", "+233262756294"]

const button = document.querySelector('button')

function check_name() {  
    var checkName = prompt("Enter Your Name")
    if (name.includes(checkName)) {   
        alert(check_mail())
    } else {
        alert("name is nvalide")

    }
}

function check_mail() {
    var checmail = prompt("Enter Your Email")
    if (email.includes(checmail)) {
        alert(check_phone_number())
    } else {
        alert("Email is nvalide")
    }
}

var message = document.getElementById("message").innerHTML = success()

function check_phone_number() {
    var checknumber = prompt("Enter Your Phone Number")
    if (phone_number.includes(checknumber)) {
        alert(message)   
    } else {
        alert("Phone Number is nvalide")

    }
}


/*
document.getElementById("btnID").disabled = true;

function myFunction() {
    window.open("https://www.w3schools.com");
  }
  */
	



