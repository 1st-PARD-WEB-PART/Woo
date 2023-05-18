import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, redirect } from "react-router-dom";
import Home from "../routes/Home";
import Auth from "../routes/Auth";
import Navigation from "./navigation";
import Profile from "../routes/Profile";

const AppRouter = ({ refresher,isLoggedin,UserObj }) => {
  return (
    <Router>
      {isLoggedin && <Navigation UserObj={UserObj} />}

      <Routes>
        {isLoggedin ? (
          <>
            <Route path="/" element={<Home 
            UserObj={UserObj} // props를 전달
            //home이 UserObj props를갖게됨
            />} />
            <Route path="/profile" element={<Profile
            UserObj={UserObj}
            refresher={refresher}
            />}
            
            />

          </>
        ) : (
            <>
          <Route path="/" element={<Auth />} />
   
          </>
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;

        


