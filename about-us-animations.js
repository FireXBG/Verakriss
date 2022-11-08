    /* First vector */

    function animate() {

        setTimeout(() => {
            Person.style.opacity = "100%";
        }, 800);

        setTimeout(() => {
            var Vector = document.querySelector("#Vector");
            Vector.style.opacity = "100%";
        }, 1200);

        setTimeout(() => {
            var Vector2 = document.querySelector("#Vector_2_2");
            Vector2.style.opacity = "100%";
        }, 1400);

        setTimeout(() => {
            var Vector3 = document.querySelector("#Vector_3_2");
            Vector3.style.opacity = "100%";
        }, 1600);

        setTimeout(() => {
            var Vector4 = document.querySelector("#Vector_4_2");
            Vector4.style.opacity = "100%";
        }, 1800);

        setTimeout(() => {
            var Vector5 = document.querySelector("#Vector_5_2");
            Vector5.style.opacity = "100%";
        }, 2000);

        setTimeout(() => {
            var Ball1 = document.querySelector("#Ball_1");
            Ball1.style.opacity = ("100%");
        }, 2200);

        setTimeout(() => {
            var Ball2 = document.querySelector("#Ball_2");
            Ball2.style.opacity = ("100%");
        }, 2400);

        setTimeout(() => {
            var Ball3 = document.querySelector("#Ball_3");
            Ball3.style.opacity = ("100%");
        }, 2600);

        setTimeout(() => {
            var Ball4 = document.querySelector("#Ball_4");
            Ball4.style.opacity = ("100%");
        }, 2800);

        setTimeout(() => {
            var Ball5 = document.querySelector("#Ball_5");
            Ball5.style.opacity = ("100%");
        }, 3000);

        setTimeout(() => {
            var Line = document.querySelector("#Line");
            Line.style.opacity = ("100%");
        }, 3300);
        /* Second Vector */
        
        
        
        window.addEventListener("scroll", () => {
            
            /*
            const scrolled = window.scrollY;
            console.log(scrolled);
            */
           
           var scrollLimit = 550;
           if (scrollY >= scrollLimit) {
               setTimeout(() => {
                   var Background = document.querySelector("#Background");
                   Background.style.opacity = "100%";
                }, 1000);
                
                setTimeout(() => {
                    var Person2 = document.querySelector("#Person_2");
                    Person2.style.opacity = "100%";
                }, 1200);
                
                setTimeout(() => {
                    var TableLine1 = document.querySelector("#Table_line_1");
                    TableLine1.style.opacity = "100%";
                }, 1600);
                
                setTimeout(() => {
                    var TableLine2 = document.querySelector("#Table_line_2");
                    TableLine2.style.opacity = "100%";
                }, 1800);
                
                setTimeout(() => {
                    var TableLine3 = document.querySelector("#Table_line_3");
                    TableLine3.style.opacity = "100%";
                }, 2000);
                
                setTimeout(() => {
                    var TableLine4 = document.querySelector("#Table_line_4");
                    TableLine4.style.opacity = "100%";
                }, 2200);
                
                setTimeout(() => {
                    var TableConfirm = document.querySelector("#Table_confirm");
                    TableConfirm.style.opacity = "100%";
                }, 2500);
                
                setTimeout(() => {
                    var Ball2_1 = document.querySelector("#Ball_2_3");
                    Ball2_1.style.opacity = "100%";
                }, 2700);
                
                setTimeout(() => {
                    var Ball2_2 = document.querySelector("#Ball_2_2");
                    Ball2_2.style.opacity = "100%";
                }, 2900);
                
                setTimeout(() => {
                    var Ball2_3 = document.querySelector("#Ball_2_1");
                    Ball2_3.style.opacity = "100%";
                }, 3200);    
            }
            
            scrollLimit = 1100;
            
            if (scrollY >= scrollLimit) {
                setTimeout(() => {
                    var Person3 = document.querySelector("#Person_3");
                    Person3.style.opacity = "100%";
                }, 1000);
                
                setTimeout(() => {
                    var Menu = document.querySelector("#Menu");
                    Menu.style.opacity = "100%";
                }, 1200);
                
                setTimeout(() => {
                    var SmallSquare1 = document.querySelector("#Small_square_1");
                    SmallSquare1.style.opacity = "100%";
                }, 1600);
                
                setTimeout(() => {
                    var SmallSquare2 = document.querySelector("#Small_square_2");
                    SmallSquare2.style.opacity = "100%";
                }, 1800);
                
                setTimeout(() => {
                    var SmallSquare3 = document.querySelector("#Small_square_3");
                    SmallSquare3.style.opacity = "100%";
                }, 2000);
                
                setTimeout(() => {
                    var SmallSquare4 = document.querySelector("#Small_square_4");
                    SmallSquare4.style.opacity = "100%";
                }, 2200);
                
                setTimeout(() => {
                    var SmallSquare5 = document.querySelector("#Small_square_5");
                    SmallSquare5.style.opacity = "100%";
                }, 2400);
                
                setTimeout(() => {
                    var SmallLine1 = document.querySelector("#Small_line_1");
                    SmallLine1.style.opacity = "100%";
                }, 2600);
                
                setTimeout(() => {
                    var SmallLine2 = document.querySelector("#Small_line_2");
                    SmallLine2.style.opacity = "100%";
                }, 2800);
                
                setTimeout(() => {
                    var SmallLine3 = document.querySelector("#Small_line_3");
                    SmallLine3.style.opacity = "100%";
                }, 3000);
                
                setTimeout(() => {
                    var SmallLine4 = document.querySelector("#Small_line_4");
                    SmallLine4.style.opacity = "100%";
                }, 3200);
                
                setTimeout(() => {
                    var SmallLine5 = document.querySelector("#Small_line_5");
                    SmallLine5.style.opacity = "100%";
                }, 3400);
                
                setTimeout(() => {
                    var BigSquare1 = document.querySelector("#Big_square_1");
                    BigSquare1.style.opacity = "100%";
                }, 3800);
                
                setTimeout(() => {
                    var SmallSquare7 = document.querySelector("#Small_square_7");
                    SmallSquare7.style.opacity = "100%";
                }, 4000);
                
                setTimeout(() => {
                    var SmallSquare8 = document.querySelector("#Small_square_8");
                    SmallSquare8.style.opacity = "100%";
                }, 4200);
                
                setTimeout(() => {
                    var BigSquare3 = document.querySelector("#Big_square_3");
                    BigSquare3.style.opacity = "100%";
                }, 4400);
                
                setTimeout(() => {
                    var Part1 = document.querySelector("#Part_1");
                    Part1.style.opacity = "100%";
                }, 4600);
                
                setTimeout(() => {
                    var Part2 = document.querySelector("#Part_2");
                    Part2.style.opacity = "100%";
                }, 4700);
                
                setTimeout(() => {
                    var Part3 = document.querySelector("#Part_3");
                    Part3.style.opacity = "100%";
                }, 4800);
                
                setTimeout(() => {
                    var Part4 = document.querySelector("#Part_4");
                    Part4.style.opacity = "100%";
                }, 4900);
                
                setTimeout(() => {
                    var BigSquare2 = document.querySelector("#Big_square_2");
                    BigSquare2.style.opacity = "100%";
                }, 5200);
            }

            scrollLimit = 999999;
            if(scrollLimit === 999999) {
                setTimeout(() => {
                    console.log("All animations on this page have been executed");
                }, 5000);
            }
        });      
    }