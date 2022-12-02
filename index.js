function validate() {
    let username = document.getElementById("username");
    let pwd = document.getElementById("pwd");
    if (username.value=="admin" && pwd.value==12345){
        location.href = "/todo.html";
    }
    else{
        alert("Invalid Credentials");
        return false;
    }
}