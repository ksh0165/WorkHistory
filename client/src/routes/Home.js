import {useEffect, useState} from 'react';
import { axios } from 'axios';
const Home = () => {
    const [nweet, setNweet] = useState("");
    const [isLoding, setIsLoding] = useState(false);
    const [message,setMessage] = useState("");
    const [maxId,setMaxId] = useState();
    let maxIdVal = null;

    const getMaxId = async () => {
        // const data = fetch("http://localhost:3001/notes")
        // .then(res=>{
        //     if(res.ok){
        //         console.log(data);
        //         {data.notes.map(id=>(
        //             maxIdVal = id
        //         ))}
        //         setMaxId(maxIdVal);
        //     }
        // })
        await fetch("http://localhost:3001/notes")
        .then(res=>{
            return res.json()
            console.log(res.json);
        })
        .then(data =>{
            console.log(data);
        })
        
            // {response.map(id=>(
            //     maxIdVal = id
            // ))}
            // setMaxId(maxIdVal);
    }
    const getNweets = async () =>{
        await fetch("http://localhost:3001/notes")
        .then(res=>{
            return res.json()
            console.log(res.json);
        })
        .then(data =>{
            console.log(data);
        })
        // data2.forEach(element => {
        //     console.log(element);
        //     setNweet((prev)=>[element.data(),...prev]);
        // });
    }

    useEffect(()=>{
        getMaxId();
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
                id: maxId+1,
                text:nweet, 
                createAt: Date.now()
            })
        })
        .then(res=>{
            if(res.ok){
                setMessage("생성이 완료되었습니다.");
                // navigate("/");
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
        <form onSubmit={onSubmit}>
            <input type="text" value={nweet} onChange={onChange} placeholder="what`s on your mind?" maxLength={120} />
            <input style={{opacity: isLoding ? 0.3 : 1}} type="submit" value={isLoding ? "트위터 추가중..." : "트위터 추가"} />
            {message}
        </form>
    )
}
export default Home;