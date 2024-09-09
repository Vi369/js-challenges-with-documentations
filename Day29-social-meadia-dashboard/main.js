document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(username, password);

    if(username === "" || password === ""){
        alert("Please enter username and password");
        return;
    }

    const user = {
        username: username,
        isLoggedIn: true,
    };

    // store the user information in local storage
    localStorage.setItem("user", JSON.stringify(user));
    alert("Login Successful");
    document.getElementById("form").reset();

    window.location.href = "dashboard.html";
})