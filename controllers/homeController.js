const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/services", (req, res) => {
  res.render("services");
});

router.get("/partners", (req, res) => {
  res.render("partners");
});

router.get("/contacts", (req, res) => {
  res.render("contacts");
});

module.exports = router;
