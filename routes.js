const router = require("express").Router();
const homeController = require("./controllers/homeController");
const newsController = require("./controllers/newsController");

router.use(homeController);
router.use("/news", newsController);

module.exports = router;
