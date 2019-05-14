var path = require("path")

module.exports = function(app) {
  
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../Public/home.html"))
    })

    app.get("/classes", function(req, res) {
        res.sendFile(path.join(__dirname, "../Public/WOD.html"));
      });
 
};

