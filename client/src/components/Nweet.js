const Nweet = ({nweet,isOwner,onDeleteNweet}) => {
  
    return (
        <tr>
            <td>{nweet.text}</td>
            <td>{nweet.username}</td>
            <td>{new Date(nweet.createAt).toLocaleDateString("en-GB",{
                hour: "2-digit",
                minute: "2-digit"
            })}</td>
            {isOwner && 
            <>
                <td><button onClick={()=>onDeleteNweet(nweet.id)}>DELETE TWEET</button></td>
                <td><button>EDIT TWEET</button></td>
            </>
            }
        </tr>  
    )
}

export default Nweet;