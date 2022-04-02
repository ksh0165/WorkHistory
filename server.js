const express = require('express');
const jsonServer = require('json-server');
const server = jsonServer.create();
const auth = require('json-server-auth');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY=require('json-server-auth/dist/constants').JWT_SECRET_KEY;
const path = require('path');
const router = jsonServer.router(path.join(__dirname,'/client/src/db/data.json'));
const middlewares = jsonServer.defaults();
const axios = require('axios');
const app = express();
const fileUpload = require('express-fileupload');
const timeout = require('connect-timeout');
const fs = require('fs');

app.use(timeout('5s'))
app.use(fileUpload());

app.post('/users/upload',(req,res)=>{
    console.log('/users/upload');
    let uploadPath;
    if(req.files === null){
        return res.status(400).json({msg:'No  file uploaded'});
    }

    const file = req.files.file;

    uploadPath = __dirname + '/client/public/uploads/'+file.name;

    file.mv(uploadPath,err=>{
        if(err){
            console.log(err);
            return res.status(500).json(err);
        }

        res.json({fileName: file.name, filePath: uploadPath});
    });
});

app.delete("/users/delete", async(req,res)=> {
    console.log("/users/delete");
    const deleteId = req.query.id;
    console.log(deleteId);
    console.log(fs.existsSync(path.join(__dirname,"/client/public/uploads/"+deleteId+".jpg")));
    if(fs.existsSync(path.join(__dirname,"/client/public/uploads/"+deleteId+".jpg"))){
        try{
            fs.unlinkSync(path.join(__dirname,"/client/public/uploads/"+deleteId+".jpg"));
            console.log("image delete");
        }catch(err){
            console.log(err);
        }
    }
})

server.use(
    cors({
        origin: "*",
        preflightContinue: false,
        methods: "GET,POST,DELETE",
        credentials: true
    })
);

// server.use(cors());

server.use(auth);
server.use(middlewares);
server.use(jsonServer.bodyParser);
app.use(server);

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

app.get('/users',(req,res)=>{
    console.log('/users url call');
    // const { authorization } = req.headers;
    // if(!authorization){
    //     res.status(401).json("Missing authorization header");
    //     return;
    // }

    // const [scheme, token] = authorization.split(" ");
    // if(scheme !== "Bearer"){
    //     res.status(401).json("Incorrect authorization scheme");
    //     return;
    // }

    // if(!token){
    //     res.status(401).json("Missing toke");
    //     return;
    // }

    try{
        // const data = jwt.verify(token, JWT_SECRET_KEY);
        const _username = req.query.username;
        const _password = req.query.password;
        let resVal = "";
        axios({
            url: 'http://localhost:3001/users',
            method: 'GET'
        }).then((response)=>{
            console.log(_username);
            console.log(JSON.parse(JSON.stringify(response.data))[0].username);
            console.log(JSON.parse(JSON.stringify(response.data))[0].nickname);
            console.log(JSON.parse(JSON.stringify(response.data))[0]);
            if(_username == JSON.parse(JSON.stringify(response.data))[0].username){
                resVal=JSON.parse(JSON.stringify(response.data))[0].status;
            }else{
                resVal="";
            } 
            console.log('send json data isLoggedIn true');
            return res.json(JSON.parse(JSON.stringify(response.data))[0]);
        });
    }catch(err){
        console.log(req.query.username+req.query.password)
        res.status(401).json({msg:err});
    }
})

// server.use((req,res,next) =>{
//     console.log(req.body);
//     res.header('Access-Control-Allow-Origin', '*');
//     if(req.methods === 'GET'){
//         console.log(req);
//         next();
//     }else{
//         if(req.path === '/login'){
//             getToken(req,res);
//         }
//         isAuthorized(req,res,next);
//     }
// })
// server.use(router);
// function isAuthorized(req,res){
//     console.log("isAuthorized started...");

//     var token = req.headers['access-token'];
//     console.log(token);
//     if(token){
//         console.log("Inside token");
//         jwt.verify(token, JWT_SECRET_KEY,( err,decoded) =>{
//             console.log("Inside JWT fn");
//             if(err){
//                 console.log("Inside JWT fn err");
//                 return res.status(401).json({message:'invalid token'});
//             }else{
//                 console.log("Inside JWT fn success");
//                 req.decoded = decoded;
//                 return next();
//             }
//         });
//     }else{
//         res.status(401).send({
//             message: 'No token provided.'
//         });
//     }
// }

// function getToken(req,res){
//     if(req.body.username === "test"){
//         if(req.body.password === 123){
//             const payload = {
//                 chekc: true
//             };
//             var token = jwt.sign(payload,JWT_SECRET_KEY,{
//                 expiresIn: 60
//             });
//             res.json({
//                 message: 'Authentication Successful',
//                 token: token
//             });
//         }else{
//             res.json({
//                 error: 'Invalid Password'
//             });
//         }
//     }else{
//         res.json({
//             error: 'Please provide valid credentials'
//         })
//     }
// }

app.listen(5000,()=>console.log('Server started...'));