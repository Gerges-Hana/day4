var nameuser=document.getElementById("names");
var butn=document.getElementById("Register");

// var myWindow;
// butn.addEventListener("click",function(){


//     myWindow = window.open("", "","_blank", "width=500, height=500");
//     myWindow.document.write("Thank you," + nameuser.value +"  for registering in our website”")
// });

// ############## b ############
nameuser.placeholder="“Enter your Name:” ";

// ###############  c  ################3
nameuser.addEventListener("focus",function(){

    nameuser.style.border= "1px blue solid";
});
nameuser.addEventListener("blur",function(){

    nameuser.style.border= "none";
});
// ###############  d  ################3
function err(){
    if(nameuser.value.lenthe<3){
    document.getElementsByTagName('small').style.display="visibility";
}
}
// ###############  c  ################3
var pass1 =document.getElementById("password");
var pass2 =document.getElementById("password2");
var Register=document.getElementById("Register");
Register.addEventListener("click",function(){
if(pass1.value!==pass2.value){
document.getElementById("pErr").style.display="visibility";
}
});
