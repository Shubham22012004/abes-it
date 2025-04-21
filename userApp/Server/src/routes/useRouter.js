const express=require("express");
const userController = require("../controller//userController");
const router= express.Router();

router.get("/",userController.getSlash);
router.get("/users",userController.getAllUsers);
router.get("/user/:email",userController.getUserByEmail);
router.post("/addUser",userController.addUser);
router.put("/updateUser",userController.editUser);
router.delete("/removeUser",userController.deleteUser);

module.exports=router;

 