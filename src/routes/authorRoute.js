const express=require("express");
const authorsRouter=express.Router();
function router(nav)
{
var authors=[{
    name:'joseph',
    books:'Tom and Jerry',
    img:'joseph.jpg'
},
{
    name:'Rowling',
    books:'Harry Potter',
    img:'rowling.jpg'
    

},
{
    name:'Basheer',
    books:'Pathummayude Aadu',
    img:'basheer.jpg'
    
  
}
]
authorsRouter.get('/',function(req,res)
{
    res.render("authors",{
        nav,
        title:'Authors',authors
    });
});
authorsRouter.post('/',function(req,res)
{
    res.render("authors",{
        nav,
        title:'Authors',authors
    });
});
authorsRouter.get('/addauthor',function(req,res)
{
   
    res.render("addauthor",{
        nav,
        title:'Author Details',
        

    })
});
authorsRouter.get('/:id',function(req,res)
{
    const id=req.params.id;
    res.render("author",{
        nav,
        title:'Author',
        author:authors[id]

    })
});
return authorsRouter
}
module.exports=router;