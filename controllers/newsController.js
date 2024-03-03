const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("news/news");
});

module.exports = router;
