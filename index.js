const express   =   require('express');
const app   =   express();
const port  =   8000;
const db    =   require('./config/mongoose');
const expressLayouts    =   require('express-ejs-layouts');
app.use(express.urlencoded());


//EJS
app.use(expressLayouts);
app.use(express.static('./assets'));
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.set('view engine','ejs');
app.set('views','./views');

app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server:${err}`);
    }
    console.log(`Server is running on: ${port}`);
});