import AppRouter from "components/Router";
import {useEffect, useState} from "react";
import axios from 'axios';
//json-server-auth
//jsonwebtoken
//cors
//express
//concurrently nodemon
//json-server-auth jsonwebtoken path body-parser

function App () {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const fetchAuth = async () =>{
        try{
            const response = await axios.get(
                '/login',{
                    params:{
                        username:'test',
                        password:123
                    }
                }
            )
            .then(function (response){
                setIsLoggedIn(response.data);
            }).catch(function (err){
                alert("인증에 실패하였습니다.");
            }).then(function(){

            })
        }catch(e){
            alert("인증 시도중 실패하였습니다.");
        }
    }

    useEffect(()=>{
        fetchAuth();
    },[])
    return (
        <>
            <AppRouter isLoggedIn={isLoggedIn} />
            <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
        </>
    )
}

export default App;