import Jwt from 'jsonwebtoken'
import Users from '../models/user.js';
const auth = async (req, res, next)=>{
    console.log("meiddleware");
    const {authorization} = req.headers;
    const token = JSON.parse(authorization);
    console.log(token);
       const jwtsecret = "asdfghjk";
       const verifytoken =  Jwt.verify(token, jwtsecret);
       const vuser = await Users.findOne({_id : verifytoken.user.id})
       console.log("problem here");
       console.log(vuser);
       req.user = vuser;
       next();
}

export default auth