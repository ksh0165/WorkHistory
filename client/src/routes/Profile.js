const Profile = ({LoginStatus}) => {

    return (
        <>
            <button onClick={()=>{LoginStatus(false);}} >LogOut</button>
        </>
    )
}

export default Profile;