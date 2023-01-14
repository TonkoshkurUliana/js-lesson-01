"use stric"
//Task1
var admin, name;
name = "John";
admin = name;
console.log(admin);

//Task2
var login, password;
login = "Admin";
password = "Cancel";

    if (login == "Admin") {
        if (password == "TheMaster") {
        console.log ("If-else ---> Welcome")}
        else if (password == "Cancel"){
        console.log ("If-else ---> Canceled.")}
        else
        console.log ("If-else ---> Wrong password");
    } else if ( login == "Cancel") {
    console.log ("If-else ---> Canceled.")
    } else
    console.log ("If-else ---> I don't know you")

//Task3
    switch(login){
    case 'Admin': {
                    switch(password){
                    case 'TheMaster': { console.log ("Switch ---> Welcome");break;}
                    case 'Cancel': {console.log ("Switch ---> Canceled.");break;}
                    default:  {console.log ("Switch ---> Wrong password");break;}
                    }
        break;}
    case 'Cancel': {
        console.log ("Switch ---> Canceled.");
        break;}
    default :  {
        console.log ("Switch ---> I don't know you");
        break;}
}
