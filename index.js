const express=require('express');
const cors=require('cors');
const morgan=require('morgan');
const dotenv=require('dotenv');
const router=require('./routes/Testroutes');
const Auth_router=require('./routes/AuthRoutes');
const bodyParser= require('body-parser');
const rest_routes=require('./routes/resturantroutes');
const category_routes=require('./routes/categoryroutes');

const connection=require('./config/connection');
// rest object
const app=express();

// middleware
dotenv.config();
app.use(cors());

app.use(bodyParser.json()); // Body parser for JSON payloads
app.use(bodyParser.urlencoded({ extended: false })); 
// to get data from client side we use express.json.
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
// ye hmme saare api hit krke console pe dikhayega


app.use('/app',router);
app.use('/app/auth',Auth_router);
app.use('/app/rest',rest_routes);
app.use('/app/category',category_routes);

app.use(morgan('dev'))


// route
app.get('/',(req,res)=>{
    res.send("hi server is running");
})
// api link
const port=3000;
app.listen(port,()=>{
    console.log(`app is listening on ${port}`);
})
// MVC pattern