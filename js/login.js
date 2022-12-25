function login() {
    if (document.getElementById('email').value == "" || document.getElementById('password').value == "") {
        alert("All details are required");
        return;
    }
    document.cookie = "uid=" + document.getElementById('email').value + "; path=/; max-age="+60*60*24*30; 
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
    document.cookie = "uid=" + document.getElementById('email').value + "; path=/; max-age="+60*60*24*30; 
}