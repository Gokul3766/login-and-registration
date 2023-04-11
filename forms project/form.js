function login()
        {
            var user=document.myform.username.value;
var pass=document.myform.password.value;

if(user==null || user=="")
{
    document.getElementById("one").innerHTML="* Please Enter the user name";
    return false;
}
else if(pass==null || pass=="")
{
    document.getElementById("two").innerHTML="* Please Enter the Password";
    return false;
}
else
{
    alert("Login Successfull");
}

        }


        function register()
        {
var user=document.myform.username.value;
var mail=document.myform.email.value;
var pass=document.myform.password.value;
var repass=document.myform.repassword.value;

if(user==null || user=="")
{
    document.getElementById("one").innerHTML="* Please Enter the user name";
    return false;
}
if(mail==null || mail=="")
{
    document.getElementById("two").innerHTML="* Please Enter the user name";
    return false;
}
 if(pass==null || pass=="")
{
    document.getElementById("three").innerHTML="* Please Enter the Password";
    return false;
}
if(repass==null || repass=="")
{
    document.getElementById("four").innerHTML="* Please re-enter the Password";
    return false;
}
if(pass != repass)
{
    document.getElementById("four").innerHTML="* Password must be same";
    return false;
}
if(user != "" && mail != "" && pass != "" && repass !="" && pass == repass)
{
 alert("Login Successfull");
}

}