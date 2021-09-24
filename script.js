function myFunction() {
    alert("Username is admin and Password is admin@123 ");
    
  }
function validation() 
{
    var username=document.getElementById("Username").value;
    var password=document.getElementById("password").value;
    if(username=="admin" && password=="admin@123")
    {
        alert("login sucessfully......")
        window.location.assign("Home.html")
    }
    else{
        alert("login fail");
       
    }
   
  }