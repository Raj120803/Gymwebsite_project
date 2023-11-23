function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="Raksha"&& password=="Jain")
    {
        window.location.href="login_done.html"; 
    }
    else
    {
        alert("Login fail"); 
    }
}