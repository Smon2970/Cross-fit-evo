console.log("Hello World")


var express = require("express")
var app = express();


app.use(express.static('Public'))


var PORT =  process.env.PORT || 8090;


require("./routes/home.js") (app);

app.listen(PORT, function() {
  console.log("App listening on PORT on http://localhost:" + PORT);
});