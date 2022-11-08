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
        
}
        /* Second Vector */

window.addEventListener("scroll", () => {

/* scroll px check 
const scrolled = window.scrollY;
console.log(scrolled);
*/

const scrollLimit = 550;
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
});      