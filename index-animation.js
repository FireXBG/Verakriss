function animate() {
    setTimeout(() => {
        var heading = document.querySelector(".welcome-information h1");
        heading.style.opacity = "100%";
    }, 1000);

    setTimeout(() => {
        var paragraph = document.querySelector(".welcome-information p");
        paragraph.style.opacity = "100%";
    }, 1200);

    setTimeout(() => {
        var button = document.querySelector(".welcome-information a");
        button.style.opacity = "100%";
    }, 1400);

    setTimeout(() => {
        var img = document.querySelector(".welcome-vector img");
        img.style.opacity = "100%";
    }, 1600);

    window.addEventListener("scroll", () => {
        const scrolled = window.scrollY;
        console.log(scrolled);
        
        var scrollLimit = 500;
        if (scrollY >= scrollLimit) {
            setTimeout(() => {
                var aboutUsBackground = document.querySelector(".why-choose-container");
                aboutUsBackground.style.opacity = "100%";
            }, 1000);
        
            setTimeout(() => {
                var aboutUsBackgroundH1 = document.querySelector(".why-choose-container h1");
                aboutUsBackgroundH1.style.opacity = "100%";
            }, 1600);
        
            setTimeout(() => {
                var aboutUsBackgroundP = document.querySelector(".why-choose-container p");
                aboutUsBackgroundP.style.opacity = "100%";
            }, 1800);
        
            setTimeout(() => {
                var aboutUsBackgroundA = document.querySelector(".why-choose-container a");
                aboutUsBackgroundA.style.opacity = "100%";
            }, 2000);
        }

        scrollLimit = 1000;
        if (scrollY >= scrollLimit) {
            setTimeout(() => {
                
                setTimeout(() => {
                    var serviceH1 = document.querySelector(".services-container h1");
                    serviceH1.style.opacity = "100%";
                }, 1000);
                
                setTimeout(() => {
                    var service1 = document.querySelector(".service-1");
                    service1.style.opacity = "100%";
                }, 1400);
                
                setTimeout(() => {
                    var service2 = document.querySelector(".service-2");
                    service2.style.opacity = "100%";
                }, 1600);
                
                setTimeout(() => {
                    var service3 = document.querySelector(".service-3");
                    service3.style.opacity = "100%";
                }, 1800);
                
                setTimeout(() => {
                    var servicesA = document.querySelector(".services-container a");
                    servicesA.style.opacity = "100%";
                }, 2400);
            }, 1000);
            }
            
        })
}