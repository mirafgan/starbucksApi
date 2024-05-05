const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");
app.use((req, res, next) => {
    req.headers["content-type"] = "application/json"
    next()
})
app.use(cors());
app.use(express.json())
app.use(routes)

app.listen(3000, () => console.log("Project running"));
