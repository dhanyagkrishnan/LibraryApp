const express=require("express");
const loginRouter=express.Router();
function router(navindex)
{
    
loginRouter.get('/',function(req,res)
{
    res.render("login",{
        navindex
    });
});


return loginRouter
}
module.exports=router;