function login() {
    if (document.getElementById('email').value == "" || document.getElementById('password').value == "") {
        alert("All details are required");
        return;
    }
    // send data to https://node25.mc-node.net:26133/ChatConnect/login and get response
    fetch("http://node25.mc-node.net:26133/ChatConnect/login?email=" + document.getElementById('email').value + "&password=" + document.getElementById('password').value).then(response => response.json()).then(data => {
        console.log(data);
        if (response.status == 200) {
            document.cookie = "uid=" + document.getElementById('email').value + "; path=/; max-age="+60*60*24*30;
            window.location.href = "/index.html?q=dashboard.html";
        } else {
            alert("something went wrong");
        }
    });
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
    // #TODO
    fetch("http://node25.mc-node.net:26133/ChatConnect/register?email=" + document.getElementById('email').value + "&password=" + document.getElementById('password').value + "&firstname=" + document.getElementById('firstname').value + "&lastname=" + document.getElementById('lastname').value).then(response => response.json()).then(data => {
        if (response.status == 200) {
            document.cookie = "uid=" + document.getElementById('email').value + "; path=/; max-age="+60*60*24*30;
            window.location.href = "/index.html?q=dashboard.html";
        } else {
            alert("something went wrong");
        }
    });
}