const express = require("express");
const authController = require("../Controllers/authController");
const todoController = require("../Controllers/todoController");
const router = express.Router();

router.get("/gettodo",todoController.getdata)
router.post("/addtodo",todoController.adddata)
router.put("/updatetodo",todoController.update)
router.delete("/deletetodo",todoController.delete)
router.post("/signup",authController.signup)
router.post("/login",authController.login)


module.exports = router;