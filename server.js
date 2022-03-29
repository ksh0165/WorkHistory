const express = require('express');
const jsonServer = require('json-server')
const server = jsonServer.create();
const auth = require('json-server-auth');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY=require('json-server-auth/dist/constants').JWT_SECRET_KEY;
const path = require('path');
const router = jsonServer.router(path.join(__dirname,'data.json'));
const middlewares = jsonServer.defaults();
const bodyParser = require('body-parser');
const app = express();

server.use(
    cors({
        origin: "*",
        preflightContinue: false,
        methods: "GET,POST,DELETE"
    })
);

server.options("*",cors());

server.use(auth);
server.use(middlewares);
server.use(bodyParser.json());


// server.get(`/users/me`,auth,(req,res)=>{
//     const { authorization } = req.headers;
//     if(!authorization){
//         res.status(401).jsonp("Missing authorization header");
//         return;
//     }

//     const [scheme, token] = authorization.split(" ");
//     if(scheme !== "Bearer"){
//         res.status(401).jsonp("Incorrect authorization scheme");
//         return;
//     }

//     if(!token){
//         res.status(401).jsonp("Missing toke");
//         return;
//     }

//     try{
//         const data = jwt.verify(token, JWT_SECRET_KEY);
//         const {db} = req.app;
//         const {id,email, ... } = db
//         .get('users')
//         .find({email:data.email})
//         .value();
//         res.status(200).json({id,email,... });
//     }catch(err){
//         res.status(401).jsonp(err.message);
//     }
// })

server.use((req,res,next) =>{
    if(req.methods === 'GET'){
        console.log(req);
        next();
    }else{
        if(req.path === '/login'){
            getToken(req,res);
        }
        isAuthorized(req,res,next);
    }
})
server.use(router);
function isAuthorized(req,res){
    console.log("isAuthorized started...");

    var token = req.headers['access-token'];
    console.log(token);
    if(token){
        console.log("Inside token");
        jwt.verify(token, JWT_SECRET_KEY,( err,decoded) =>{
            console.log("Inside JWT fn");
            if(err){
                console.log("Inside JWT fn err");
                return res.status(401).json({message:'invalid token'});
            }else{
                console.log("Inside JWT fn success");
                req.decoded = decoded;
                return next();
            }
        });
    }else{
        res.status(401).send({
            message: 'No token provided.'
        });
    }
}

function getToken(req,res){
    if(req.body.username === "test"){
        if(req.body.password === 123){
            const payload = {
                chekc: true
            };
            var token = jwt.sign(payload,JWT_SECRET_KEY,{
                expiresIn: 60
            });
            res.json({
                message: 'Authentication Successful',
                token: token
            });
        }else{
            res.json({
                error: 'Invalid Password'
            });
        }
    }else{
        res.json({
            error: 'Please provide valid credentials'
        })
    }
}

app.listen(5000,()=>console.log('Server started...'));