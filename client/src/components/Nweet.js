const Nweet = ({nweet}) => {
    return (
        <tr key={nweet.id}>
                <td>{nweet.text}</td>
                <td>{nweet.userId}</td>
                <td>{new Date(nweet.createAt).toLocaleDateString("en-GB",{
                    hour: "2-digit",
                    minute: "2-digit"
                })}</td>
        </tr>  
    )
}

export default Nweet;