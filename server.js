const jsonServer = require('json-server');
const server = jsonServer.create();
const auth = require('json-server-auth');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY=require('json-server-auth/dist/constants').JWT_SECRET_KEY;
const path = require('path');
const router = jsonServer.router(path.join(__dirname,'data.json'));
const middlewares = jsonServer.defaults();
const axios = require('axios');

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

server.get('/users',(req,res,next)=>{
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
        let resVal,userData = null;
        axios({
            url: 'http://localhost:3001/users',
            method: 'GET'
          }).then((res)=>{
            console.log(_username);
            if(_username === JSON.parse(JSON.stringify(res.data))[0].username){
                resVal=JSON.parse(JSON.stringify(res.data))[0].status;
                console.log(resVal);
            }else{
                resVal="";
            } 

          });

        if(resVal != "") {
            console.log('send json data isLoggedIn true');
            res.json({'isLoggedIn':true});
        }
    }catch(err){
        console.log(req.query.username+req.query.password)
        res.status(401).json();
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

server.listen(5000,()=>console.log('Server started...'));