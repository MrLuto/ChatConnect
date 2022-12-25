function login() {
    if (document.getElementById('email').value == "" || document.getElementById('password').value == "") {
        alert("All details are required");
        return;
    }
    // send data to https://node25.mc-node.net:26133/ChatConnect/login and get response
    //fetch("https://node25.mc-node.net:26133/ChatConnect/login", {
    //    method: "POST",
    //    body: JSON.stringify({
    //        email: document.getElementById('email').value,
    //        password: document.getElementById('password').value
    //    })
    //}).then(response => response.json()).then(data => {
    //    if (data.success) {
    //        document.cookie = "uid=" + document.getElementById('email').value + "; path=/; max-age="+60*60*24*30; 
    //        window.location.href = "/index.html?q=dashboard.html";
    //    } else {
    //        alert("something went wrong");
    //    }
    //});
    window.location.href = "/index.html?q=dashboard.html";
}

function Register() {
    // check if email is empty
    if (document.getElementById('email').value == "" || document.getElementById('password').value == "" || document.getElementById('passwordcheck').value == "" || document.getElementById('firstname').value == "" || document.getElementById('lastname').value == "") {
        alert("All details are required");
        return;
    }
    // check if password and passwordcheck are same
    if (document.getElementById('password').value != document.getElementById('passwordcheck').value) {
        alert("The passwords do not match");
        return;
    }
    // send data to https://node25.mc-node.net:26133/ChatConnect/register and get response
    //fetch("https://node25.mc-node.net:26133/ChatConnect/register", {
    //    method: "POST",
    //    body: JSON.stringify({
    //        email: document.getElementById('email').value,
    //        password: document.getElementById('password').value,
    //        firstname: document.getElementById('firstname').value,
    //        lastname: document.getElementById('lastname').value
    //    })
    //}).then(response => response.json()).then(data => {
    //    if (data.success) {
    //        document.cookie = "uid=" + document.getElementById('email').value + "; path=/; max-age="+60*60*24*30;
    //        window.location.href = "/index.html?q=dashboard.html";
    //    } else {
    //        alert("something went wrong");
    //    }
    //});
    window.location.href = "/index.html?q=dashboard.html";
}