function loginAuth () {

    let userName = prompt(`Please enter your username:`);

    if (userName === "admin") {

        let passWord = prompt(`Please enter your password:`);

            if (passWord === "TheMaster") {
                document.getElementById("login").innerHTML = "Identity Confirmed - Permission Granted";
                alert(`Welcome!`);

            } else if (passWord == "") {
                alert(`Canceled`);
                document.getElementById("login").innerHTML = "No Password Entered - Operation Canceled";

            } else {
                alert(`Wrong password`)
                document.getElementById("login").innerHTML = "Wrong Password - Permission Denied";
            }

    } else if (userName == "") {
        alert(`Canceled`);
        document.getElementById("login").innerHTML = "No Username Entered - Operation Canceled";

    } else {
        alert(`I don't know you`);
        document.getElementById("login").innerHTML = "Identity Unknown - Permission Denied";
    }

}