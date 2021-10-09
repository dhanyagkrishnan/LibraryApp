const express=require("express");
let alert = require('alert');
var bodyParser = require('body-parser');
const port=process.env.PORT||5000;
const navindex=[
    {
        link:'/login',
        name:'Login',
},

{
    link:'/signup',
    name:'Signup'
}
]
const navindex1=[
    {
        link:'/books',
        name:'Books',
},
{
    link:'/books/addbook',
    name:'AddBook',
},
{
    link:'/authors/addauthors',
    name:'AddAuthor',
},

{
    link:'/authors',
    name:'Authors'
}

]
const nav=[
    {
        link:'/books',
        name:'Books',
},
{
    link:'/authors',
    name:'Authors'
},
{
    link:'/books/addbook',
    name:'AddBook'
},
 {
    link:'/authors/addauthor',
    name:'AddAuthor'
    }  

]

const booksRouter=require('./src/routes/bookRoute')(nav);
const authorsRouter=require('./src/routes/authorRoute')(nav);
const signupRouter=require('./src/routes/signupRoute')(navindex);
const loginRouter=require('./src/routes/loginRoute')(navindex);

const app=new express();
app.use(bodyParser.urlencoded({
    extended: true
 }));
 
 app.use(bodyParser.json());
app.set('view engine','ejs');
app.set('views','./src/views');
app.use(express.static('./public'));
app.use('/books',booksRouter)
app.use('/authors',authorsRouter)
app.use('/signup',signupRouter)
app.use('/login',loginRouter)
app.get('/',function(req,res)
{
    res.render("home",{
        navindex,
        title:'Vayanashala'
    });
});
app.post('/index',function(req,res)
{
    var username = req.body.username;
    var password=req.body.password;
    if(username=="")
    {
        alert("Enter Username");
    }
    else if(password=="")
    {
        alert("enter Password")
    }
    else if(username=='admin'&&password=='12345')
    {
    res.render("index",{
        navindex1,
        title:'Library'
    });
}
else{
    alert("incorrect username or password")
}
});

app.listen(port,()=>{console.log("SErver Ready at"+port)});