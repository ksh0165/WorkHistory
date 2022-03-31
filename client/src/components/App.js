import AppRouter from "components/Router";
import {useEffect, useState} from "react";
import axios from 'axios';
//json-server-auth
//jsonwebtoken
//cors
//express
//concurrently nodemon
//json-server-auth jsonwebtoken path body-parser
// npm install htpp-proxy-middleware --save
function App () {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId,setUserId] = useState('');
    const LoginStatus = (isLog) =>{
        alert("LoginStatus call "+isLog);
        setIsLoggedIn(isLog);
    }

    const getUserId = (id) =>{
        console.log(id);
        setUserId(id);
    }
    // const fetchAuth = async () =>{
    //     try{
    //         const response = await axios.get(
    //             '/users',
    //             {
    //                 params:{
    //                     username:'test',
    //                     password:123
    //                 }
    //             },
    //             { withCredentials: true }
    //         )
    //         .then(function (response){
    //             console.log(response.data.isLoggedIn);
    //             if(response.data.isLoggedIn === true){
    //                setIsLoggedIn(true);
    //             }
    //         }).catch(function (err){
    //             alert("인증에 실패하였습니다.");
    //         }).then(function(){

    //         })
    //     }catch(e){
    //         alert("인증 시도중 실패하였습니다.");
    //     }
    // }

    // useEffect(()=>{
    //     fetchAuth();
    // },[])
    return (
        <>
            <AppRouter LoginStatus={LoginStatus} isLoggedIn={isLoggedIn} getUserId={getUserId} userId={userId} />
            <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
        </>
    )
}

export default App;