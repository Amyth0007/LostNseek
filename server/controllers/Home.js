const  Home = (req, res)=>{
   console.log("this user");
   console.log(req.user);
   res.send(req.user);
   
}

export default Home