var email = document.getElementById("field1")
var err1 = document.getElementById("err1")
var phn = document.getElementById('field3')
var err3 = document.getElementById('err3')
var pwd = document.getElementById("field2")
var err2 = document.getElementById("err2")
var num = document.getElementById('num')
var regex =  /^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]+).([a-z]{2,3}).([a-z]{2,3})?$/




function validateEmail(){
    // alert("err")
if(email.value.trim()==''){
    err1.innerText="Field cannot be empty";
    email.style.border='1px solid red'
    return false
}
else if(!email.value.match(regex)){
    err1.innerText="Email is not in correct format";
    email.style.border='1px solid red';
    return false

}
else{
    err1.innerText="";
    email.style.border="1px solid green";
     return  true
    }
}
function validateNum(){
    if(phn.value.trim()==''){
        phn.style.border='1px solid red';
        err3.innerText='should contain 10 nums'
        return false
    }
    else if(phn.value.length<10){
        phn.style.border='1px solid red';
        err3.innerText="phonenumber should be 10 numbers"
    
    }
    else{
        phn.style.border='1px solid green';
        err3.innerText='';
        return true
    }
   
    
}



function validatePass(){
    if(pwd.value.trim()==''){
        err2.innerText="incorrect password";
        pwd.style.border='1px solid red'
        return false
    }
    else if(pwd.value.length<8){
        pwd.style.border='1px solid red';
        err2.innerText="password should be more than 8 character"
    }
    else{
         pwd.style.border='1px solid green';
            err2.innerText=" ";
            return true}
}




