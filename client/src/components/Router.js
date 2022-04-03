import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import Auth from "routes/Auth";
import Home from "routes/Home";
import EmptyPage from "./EmptyPage";
import Navigation from './Navigation';
import Profile from 'routes/Profile';

const AppRouter = ({isLoggedIn, LoginStatus,getUserId,userInfo,logOut}) => {
    return (
        <Router>
            {isLoggedIn && <Navigation userInfo={userInfo} />}
            <Routes>
                {isLoggedIn ? (
                    <>
                        <Route path="/" element={<Home userInfo={userInfo}/>}/> {/* userId => username */}
                            <Route path="/profile" element={<Profile LoginStatus={LoginStatus} logOut={logOut} userInfo={userInfo} getUserId={getUserId} />}/> {/* userId => username */}
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