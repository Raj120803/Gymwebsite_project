function Admistrate()
{
    var username=document.getElementById("adminUsername").value;
    var password=document.getElementById("adminPassword").value;
    if(username=="admin"&& password=="user0507")
    {
        window.location.href="admin_page.html"; 
    }
    else
    {
        alert("Login fail"); 
    }
}