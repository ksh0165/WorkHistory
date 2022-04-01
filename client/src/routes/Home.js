import {useEffect, useState,useCallback} from 'react';
import Nweet from '../components/Nweet';

const Home = ({userId}) => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    const [isLoding, setIsLoding] = useState(false);
    const [message,setMessage] = useState("");
    const [maxId,setMaxId] = useState();
    const forceUpdate = useCallback(()=>setNweet(""),[]);
    const sortedNweet = nweets.sort((a,b)=>(b.createAt-a.createAt));
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

    const onDeleteNweet = (deleteId) => {
        const ok = window.confirm("삭제하시겠습니까?");
        if(ok){
            console.log(deleteId);
            fetch(`http://localhost:3001/notes/${deleteId}`,{
                method:'DELETE',
            })
            .then(res=>{
                if(res.ok){
                    setNweets(nweets.filter((dId)=>(dId.id !== deleteId)))
                    alert(deleteId+" 삭제가 완료되었습니다.")
                }
            })
        }   
    }
    
    const onUpdateNweet = (updateNweet) => {
        const updatedNweetArray = nweets.map((nweet)=>{
            if(nweet.id === updateNweet.id){
                return updateNweet;
            }
            return nweet;
        });

        fetch(`http://localhost:3001/notes/${updateNweet.id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                id:updateNweet.id,
                text:updateNweet.text,
                username:updateNweet.username,
                createAt:Date.now()
            })
        })
        .then(res=>{
            if(res.ok){
                setNweets(updatedNweetArray); 
            }
        })
    }

    //notes {id: id, text:nweet, username:username, createAt: Data.now() }
    const onSubmit = (e) => {
        e.preventDefault();
        setIsLoding(true);
        const id = maxId;
        const text = nweet;
        const createAt = Date.now();
        fetch(`http://localhost:3001/notes/`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                id: maxId,
                text:nweet,
                username:userId, 
                createAt: createAt
            })
        })
        .then(res=>{
            if(res.ok){
                setMessage("생성이 완료되었습니다.");
                const newNweets = [...nweets];
                newNweets.push({id:id,text:text,username:userId,createAt:createAt})
                setNweets(newNweets);
                forceUpdate();
                setIsLoding(false);
            }
        })
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
        <div>
            {sortedNweet.map((nweet)=>(
            // <tr key={nweet.id}>
            //     <td>{nweet.text}</td>
            //     <td>{nweet.userId}</td>
            //     <td>{new Date(nweet.createAt).toLocaleDateString("en-GB",{
            //             hour: "2-digit",
            //             minute: "2-digit"
            //         })}</td>
            // </tr>  
            <Nweet key={nweet.id} nweet={nweet} isOwner={userId === nweet.username} onDeleteNweet={onDeleteNweet} onUpdateNweet={onUpdateNweet} />                
            ))}
        </div>
        </>
    )
}
export default Home;