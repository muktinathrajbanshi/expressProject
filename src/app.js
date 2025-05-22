const express = require("express");
require("./db/conn");

const app = express();
const port = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("Hello how are you!");
})



// server create
app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})