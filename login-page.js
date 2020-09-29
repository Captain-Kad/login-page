function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("passsword").value;
  var correctUsername = "Deji";
  var correctPassword = "katana";

  if (!username || !password) {
    document.getElementById("result-fail").innerHTML = [
      "Please enter a username or password",
    ];
  } else if (username === correctUsername && password === correctPassword) {
    window.location.href = "login-successful.html";
  } else if (username != correctUsername && password != correctPassword) {
    document.getElementById("result-fail").innerHTML = [
      "The username or password you entered is incorrect.",
    ];
  }
}
