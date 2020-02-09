module.exports = function(app){
    app.get("/articles", function(request, response){
        response.send([]);
    });
};