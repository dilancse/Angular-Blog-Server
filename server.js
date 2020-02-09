const express = require("express");

const app = express();

app.listen(8000, () => {
    console.log("Server is started and listning");
});

app.get("/", function(request, response){
    response.send("Hello node.js !");
});

require("./articles.js")(app);