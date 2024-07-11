const express=require("express");
const router=express.Router();
const test= require("../controllers/user.controllers")

router.get("/test" , test)

module.exports = router;