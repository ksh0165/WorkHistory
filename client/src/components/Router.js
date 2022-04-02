import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import Auth from "routes/Auth";
import Home from "routes/Home";
import EmptyPage from "./EmptyPage";
import Navigation from './Navigation';
import Profile from 'routes/Profile';

const AppRouter = ({isLoggedIn, LoginStatus,getUserId,userId,logOut}) => {
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Routes>
                {isLoggedIn ? (
                    <>
                        <Route path="/" element={<Home userId={userId}/>}/>
                        <Route path="/profile" element={<Profile LoginStatus={LoginStatus} logOut={logOut} />}/>
                    </>
                ):(
                    <Route path="/"element={<Auth LoginStatus={LoginStatus} getUserId={getUserId}/>}/>
                )}
                <Route path="*" element={<EmptyPage />}/>
            </Routes>
        </Router>
    )
}

export default AppRouter;