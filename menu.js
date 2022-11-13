    function changeClass() {
        document.querySelector(".burger").className = "active";
        document.querySelector(".inactive").className = "activated";
        document.querySelector(".navMenu").className = "open";
    }
    
    function returnClass() {
        document.querySelector(".active").className = "burger";
        document.querySelector(".activated").className = "inactive";
        document.querySelector(".open").className = "navMenu";
    }

    