const express=require("express");
const signupRouter=express.Router();
let alert = require('alert');
function router(navindex)
{

signupRouter.post('/',function(req,res)
{
    var username = req.body.username;
    var password=req.body.password;
    var email = req.body.email;
    var cpassword=req.body.cpassword;
    if(username==""||email==""||password==""||cpassword=="")
    {
        alert("All fields are Mandatory");
    }
    else if(password!=cpassword)
    {
        alert("password cannot match")
    }
    else{
    res.render("login",{
        navindex
    });
    
 
}
});

signupRouter.get('/',function(req,res)
{
    res.render("signup",{
        navindex
    });
});
return signupRouter
}
module.exports=router;