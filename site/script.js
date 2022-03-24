window.addEventListener("DOMContentLoaded", function(){
   
    var navbar = document.getElementsByClassName("navbar")[0];
  
   
  

    window.addEventListener('scroll', function(e) {
        if(this.window.scrollY > 5){
            navbar.classList.add("scrollNavbar");
        
           
        }else{
           navbar.classList.remove("scrollNavbar");
          
        }
    
    });
});

