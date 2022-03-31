import {useNavigate } from 'react-router-dom';
 
const Profile = ({LoginStatus}) => {
    const navigate = useNavigate();
    return (
        <>
            <button onClick={()=>{
                LoginStatus(false);
                navigate("/");
            }} >LogOut</button>
        </>
    )
}

export default Profile;