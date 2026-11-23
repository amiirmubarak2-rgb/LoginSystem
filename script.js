function login(event) {
    event.preventDefault();

    let username =
        document.getElementById("username").value;

    let password =
        document.getElementById("password").value;

    let message =
        document.getElementById("message");

    if (username === "admin" && password === "12345") {
        message.style.color = "#00ff88";
        message.innerHTML = "Login Successful! Welcome Admin.";

        setTimeout(function() {
        window.location.href = "Dashboard.html";
    }, 1000);


    } else {
        message.style.color = "red";
        message.innerHTML = "Wrong Username or Password!";
    }
}

function togglePassword() {
    let password = document.getElementById("password");

    password.type =
        password.type === "password" ? "text" : "password";
}

function forgotPassword(event) {
    event.preventDefault();
    alert("Please contact the administrator.");
}

function register(event) {
    event.preventDefault();
    alert("Registration page coming soon!");
}