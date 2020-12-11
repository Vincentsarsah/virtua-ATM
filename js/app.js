var accountAame = ["Kwame Ansah", "Kofi Atta", "Isaac Arthur", "Francis Mensah", "Vincent Sarsah"]
var email = ["kwameansah@gamil.com", "kofiatta@gamil.com", "isaacarthur@gamil.com", "francismensah@gamil.com", "vincent.sarsah@amalitech.org"]
var phone_number = ["+233587896287", "+233123125425", "+233123187925", "+2331231425", "+233262756294"]


function check_name() {
    var checkName = prompt("Enter Your Name")
    if (accountAame.includes(checkName)) {
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

function check_phone_number() {
    var checknumber = prompt("Enter Your Phone Number")
    if (phone_number.includes(checknumber)) {
        alert("Verification Sucessful")
    } else {
        alert("Phone Number is nvalide")

    }
}

var a = phone_number[4]

function manage(txt) {
    var bt = document.getElementById('btSubmit');
    if (txt.value === a) {
        bt.disabled = false;
        alert('Number Confirmation Successful... Click "OK"')
    } else {

        bt.disabled = true;
    }
}

function accountPage() {
    window.open("account.html");
}