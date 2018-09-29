import express from "express";
import {UserController} from "../db/controllers/index";
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', UserController.create);

export default router;
