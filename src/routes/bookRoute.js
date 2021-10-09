const express=require("express");

const booksRouter=express.Router();
function router(nav)
{
    
var books=[{
    title:'tom & jerry',
    author:'joseph',
    genre:'cartoon',
    img:'tomandjerry.jpg'
},
{
    title:'Harry Potter',
    author:'Rowling',
    genre:'cartoon',
    img:'harrypotter.jpg'

},
{
    title:'Pathummayude AAdu',
    author:'Basheer',
    genre:'Drama',
    img:'aadu.jpg'
}
]
booksRouter.get('/',function(req,res)
{
    res.render("books",{
        nav,
        title:'Books',books
    });
});
booksRouter.post('/',function(req,res)
{
    
    
    res.render("books",{
        nav,
        title:'Books',books
    });

});

booksRouter.get('/addbook',function(req,res)
{
   
    res.render("addbook",{
        nav,
        title:'New Book',
        

    })
});
booksRouter.get('/:id',function(req,res)
{
    const id=req.params.id;
    res.render("book",{
        nav,
        title:'Book',
        book:books[id]

    })
});

return booksRouter
}
module.exports=router;