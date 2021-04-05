window.onload = function() {
    
    var x = document.getElementById("myTopNav");
    var y = document.getElementsByClassName("nav")[0];
    var contBrand = document.getElementsByClassName("container-brand")[0];
    var contTop = document.getElementsByClassName("container-top")[0];
    console.log(contTop);
    

    function reSizeNav() {
        var winX = window.innerWidth;
        var winY = window.innerHeight;

        if (window.innerWidth <= 950) {
            if (x.className === "container-nav") {
                x.classList.add("disappear");
            }
        }
        
        else {
            if (x.className === "container-nav disappear") {
                x.classList.remove("disappear");
                
            }
            else {
                if (x.className === "container-nav responsiveNav") {
                    x.classList.remove("responsiveNav");
                    y.classList.remove("responsiveUl");
                }
                if (y.className === "nav responsiveUl") {
                    y.classList.remove("responsiveUl");
                }
                contBrand.after(x);
            }   
        }
        console.log('resolution: ' + winX + ' x ' + winY);
    }

    reSizeNav();
   
    window.addEventListener('resize', reSizeNav);
    
}

function respMenuFn() {
    var x = document.getElementById("myTopNav");
    var y = document.getElementsByClassName("nav")[0];
    var contTop = document.getElementsByClassName("container-top")[0];

    
    if (x.className === "container-nav disappear") {
      x.classList.remove("disappear");
      x.classList.add("responsiveNav");
      y.classList.add("responsiveUl");
      contTop.after(x);
    } else {
      x.className = "container-nav disappear";
      contBrand.after(x);
    }
  }

