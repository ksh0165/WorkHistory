import { useState } from "react";

const Nweet = ({nweet,isOwner,onDeleteNweet,onUpdateNweet}) => {
    const [newNweet, setNewNweet] = useState(nweet.text);
    const [editing, setEditing] = useState(false);

    const toggleEditing = () => {setEditing((prev)=>!prev)}

    const onChange = (e) => {
        const {
            target : {value},
        } = e;
        setNewNweet(value);
    }

    const onSubmit = async (e) =>{
        e.preventDefault();
        onUpdateNweet({
            ...nweet,
            text: newNweet
        }) 
    }

    return (
        <div>
            {editing ? (
                <>
                    <form  onSubmit={onSubmit}>
                        <input type="text" value={newNweet} required onChange={onChange} />                
                        <input type="submit" value="send" />
                    </form>&nbsp;
                    <button onClick={toggleEditing}>CANCLE</button>
                    <h4>{nweet.username}&nbsp;
                        {new Date(nweet.createAt).toLocaleDateString("en-GB",{
                        hour: "2-digit",
                        minute: "2-digit"
                    })}</h4>
                </>
            ):(
                <>
                    <h4>{nweet.text}&nbsp;
                        {nweet.username}&nbsp;
                        {new Date(nweet.createAt).toLocaleDateString("en-GB",{
                        hour: "2-digit",
                        minute: "2-digit"
                    })}&nbsp;
                    {isOwner && 
                    <>
                        <button onClick={()=>onDeleteNweet(nweet.id)}>DELETE TWEET</button>&nbsp;
                        <button onClick={toggleEditing}>EDIT TWEET</button>
                    </>
                    }
                    </h4>
                </>
            )}
        </div>
    )
}

export default Nweet;