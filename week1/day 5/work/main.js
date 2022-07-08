let username;
let password;
function login(){
    
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    if ((username=="vaishnavi") && (password=="123"))
    {
        alert("login succes");
    }
    else
    {
        alert("login failed");
    }
}