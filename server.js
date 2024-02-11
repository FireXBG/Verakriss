const express = require("express");

const configExpress = require("./config/configExpress");
const configHandlebars = require("./config/configHandlebars");
const routes = require("./routes");

const app = express();

const port = 3001;

configHandlebars(app);
configExpress(app);

app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
