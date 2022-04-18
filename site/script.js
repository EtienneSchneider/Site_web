window.addEventListener("DOMContentLoaded", function(){  
    var navbar = document.getElementsByClassName("navbar")[0];
    window.addEventListener('scroll', function(e) {
        if(this.window.scrollY > 5){
            navbar.classList.add("scrollNavbar");
        
           
        }else{
           navbar.classList.remove("scrollNavbar");
          
        }
    
    });


    let menu = document.getElementById("burg-menu")
    let burger = document.getElementById("burgerlogo")
    let cross = document.getElementById("crosslogo")

    burger.addEventListener('click', function(){
        menu.classList.add("burg-active");
        menu.style.display = "block";
        burger.style.display = "none";
        cross.style.display = "block";
    });

    
    cross.addEventListener('click', function(){
        menu.classList.remove("burg-active");
        menu.style.display = "none";
        burger.style.display = "block";
        cross.style.display = "none";
    });


});

