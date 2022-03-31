import {useEffect, useState} from 'react';
import { axios } from 'axios';
const Home = () => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    const [isLoding, setIsLoding] = useState(false);
    const [message,setMessage] = useState("");
    const [maxId,setMaxId] = useState();

    const getNweets = async () =>{
        await fetch("http://localhost:3001/notes")
        .then(res=>{
            return res.json();
        })
        .then(data =>{
            setMaxId(data.length+1);
            data.map((text)=>(
                setNweets((prev)=>[text,...prev])
            ));
        })
    }

    useEffect(()=>{
        getNweets();
    },[])

    //notes {id: id, text:nweet, createAt: Data.now() }
    const onSubmit = (e) => {
        e.preventDefault();
        setIsLoding(true);
        fetch(`http://localhost:3001/notes/`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                id: maxId,
                text:nweet, 
                createAt: Date.now()
            })
        })
        .then(res=>{
            if(res.ok){
                setMessage("생성이 완료되었습니다.");
                setIsLoding(false);
            }
        })
        setNweet("");
    }

    const onChange = (e) => {
        e.preventDefault();
        const {
            target: {value},
        } = e;
        setNweet(value);
    }

    return (
        <>
        <form onSubmit={onSubmit}>
            <input type="text" value={nweet} onChange={onChange} placeholder="what`s on your mind?" maxLength={120} />
            <input style={{opacity: isLoding ? 0.3 : 1}} type="submit" value={isLoding ? "트위터 추가중..." : "트위터 추가"} />
            {message}
        </form>
        <table>
            <tbody>
                {nweets.map((nweet)=>(
                <tr key={nweet.id}>
                    <td>{nweet.text}</td>
                    <td>{new Date(nweet.createAt).toLocaleDateString("en-GB",{
                            hour: "2-digit",
                            minute: "2-digit"
                        })}</td>
                </tr>                   
                ))}
            </tbody>
        </table>
        </>
    )
}
export default Home;