var friendData = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
      });
    
  // push new data to the table. 
  app.post("/api/friends", function(req, res) {
    console.log(req.body.scores);
});


};
