const express=require("express");
const router =express.Router();
const {getAllStories,getAllStoriesTesting}=require("../controllers/stories")
router.route("/").get(getAllStories);
router.route("/testing").get(getAllStoriesTesting);
module.exports =router;