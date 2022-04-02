import {useEffect, useState,useCallback} from 'react';
import {useNavigate } from 'react-router-dom';
 
const Profile = ({LoginStatus,logOut,userInfo}) => {
    const navigate = useNavigate();
    const [nweets, setNweets] = useState([]);
    const getNweets = async () =>{
        await fetch("http://localhost:3001/notes")
        .then(res=>{
            return res.json();
        })
        .then(data =>{
            data.filter(text=> text.username === userInfo.username)
            .map(mine => {
                setNweets((prev)=>[mine,...prev])
            });
        })
    }

    useEffect(()=>{
        getNweets();
    },[])

    console.log(typeof nweets);
    console.log(nweets);
    return (
        <>  
            {nweets.map((nweet)=>(
                <div key={nweet.id}>
                {nweet.text}
                {nweet.username}
                {nweet.filename}
                {new Date(nweet.createAt).toLocaleDateString("en-GB",{
                    hour: "2-digit",
                    minute: "2-digit"
                })}
                </div>
            ))}
            <button onClick={()=>{
                LoginStatus(false);
                logOut();
                navigate("/");
            }} >LogOut</button>
        </>
    )
}

export default Profile;