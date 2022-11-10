// https://github.com/github/fetch

document.querySelector(".submit").addEventListener("click", function (event) {
  console.log("test");
  event.preventDefault();
  fetch("https://formsubmit.co/ajax/v.nenova@verakriss.eu", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: document.querySelector("#name").value,
      phone: document.querySelector("#phone").value,
      email: document.querySelector("#email").value,
      message: document.querySelector("#message").value,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

  setTimeout(() => {
    var confirm = document.querySelector(".submit-confirm");
    var form = document.querySelector(".form-left");
    form.style.height = "32rem";

    setTimeout(() => {
      confirm.style.display = "inline-block";
    }, 1500);

    setTimeout(() => {
      confirm.style.opacity = "100%";
    }, 1000);
  }, 2000);
});
