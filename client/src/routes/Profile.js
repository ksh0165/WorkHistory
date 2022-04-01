import {useNavigate } from 'react-router-dom';
 
const Profile = ({LoginStatus,logOut}) => {
    const navigate = useNavigate();
    return (
        <>
            <button onClick={()=>{
                LoginStatus(false);
                logOut();
                navigate("/");
            }} >LogOut</button>
        </>
    )
}

export default Profile;