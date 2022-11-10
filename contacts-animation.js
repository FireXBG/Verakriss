function animate() {
    setTimeout(() => {
        var heading = document.querySelector(".contact-us-h1");
        heading.style.opacity = "100%";
    }, 1000);

    setTimeout(() => {
        var formLeft = document.querySelector(".form-left");
        formLeft.style.opacity = "100%";
    }, 1500);

    setTimeout(() => {
        var formRight = document.querySelector(".form-right");
        formRight.style.opacity = "100%";
    }, 2000);
}