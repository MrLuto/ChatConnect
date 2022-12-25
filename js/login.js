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
    // add user to cookie
    document.cookie = "uid=" + document.getElementById('email').value + "; path=/; max-age="+60*60*24*30; 
    // add user to ./db/users.json
    var user = {
        "email": document.getElementById('email').value,
        "password": document.getElementById('password').value,
        "firstname": document.getElementById('firstname').value,
        "lastname": document.getElementById('lastname').value
    };
    var users = JSON.parse("./db/users.json");
    users.push(user);
    var json = JSON.stringify(users);
    fs.writeFile("./db/users.json", json, 'utf8', function(err) {
        if (err) {
            console.log(err);
        }
    });

}