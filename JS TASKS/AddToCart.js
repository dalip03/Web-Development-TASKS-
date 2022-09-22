
var uname = localStorage.setItem("Username");
var pass = localStorage.setItem("Password")
function login(){

    var name = document.getElementById("uname").value;
    var pass = document.getElementById("pass").value;

    // console.log(name+pass);

    if(name == "" || pass == ""){
        alert("Please Fill All the fields")
    }
    else if(name == uname){
        alert("Login Successfull")
        document.getElementById("login").style.display="none";
        document.getElementById("logout").style.display="block"
        document.getElementById("cart").style.display="block"
    }

    else{
        localStorage.setItem("Username", name);
        localStorage.setItem("Password", pass);

        document.getElementById("h3").innerHTML=name;
        // console.log(name);
        document.getElementById("login").style.display="none";
        document.getElementById("logout").style.display="block"
        document.getElementById("cart").style.display="block"
    

        }

}

function logout(){

    localStorage.removeItem("Username");
    localStorage.removeItem("Password");

    document.getElementById("login").style.display="block"
    document.getElementById("logout").style.display="none"
    document.getElementById("cart").style.display="none"


}

function add(){
    
}