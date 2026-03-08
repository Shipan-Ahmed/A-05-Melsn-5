
// console.log("Hello, World!");

document.getElementById("loginBtn").addEventListener("click", function () {
    const username = document.getElementById("inputUsername").value;
    // console.log(username);
    const password = document.getElementById("inputPassword").value;
    // console.log(password);

    if (username === "admin" && password === "admin123") {
        alert("Login successfully completed!");
        window.location.assign("./home.html");
    } else {
        alert("Username or Password is wrong!");
        return;
    }

});