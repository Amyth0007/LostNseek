import express from 'express'
import Home from '../controllers/Home.js';
import Signup from '../controllers/Signup.js';
import Login from '../controllers/Login.js';
import auth from '../middleware/auth.js';
import updateprofile from '../controllers/updateprofile.js';
import getprofile from '../controllers/getprofile.js';

const router = express.Router();


router.get("/home", auth,  Home);
router.put('/updateprofile', auth, updateprofile)
router.get('/getprofile', auth, getprofile)
router.post("/Signup", Signup);
router.post("/Login", Login);
export default router;