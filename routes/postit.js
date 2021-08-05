const PostitController = require("../controller/PostitController");

const express = require("express");
const routes = express.Router();

routes.get("/fetch", PostitController.GetPostits);
routes.post("/create", PostitController.AddPostit);
routes.delete("/delete", PostitController.DeletePostit);

/* 

:-) 

*/

module.exports = routes;
