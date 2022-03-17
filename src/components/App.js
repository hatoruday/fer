import React, { useState, useEffect } from 'react';
import AppRouter from "./Router";
import { authService } from "../fbase";
import {updateProfile } from "firebase/auth";


function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
   useEffect(() => {
     authService.onAuthStateChanged( async(user) => {
       if (user) {
		   if(authService.currentUser.displayName == null) {
			   await updateProfile(user, {
				   displayName: user.email.split('@')[0]
			   });
			   setUserObj({
				   displayName: authService.currentUser.displayName,
				   uid: authService.currentUser.uid
			   });
		   } else {
			   setUserObj({
				   displayName: authService.currentUser.displayName,
				   uid: user.uid
			   });
		   }
	   } else {
		   setUserObj(null);
	   }
       setInit(true);
     });
   }, []);
  const refreshUser = () => {
     const user = authService.currentUser;
     setUserObj({
       displayName: user.displayName,
       uid: user.uid
     });
   };
  return (
    <>
	  {init ?
	  <AppRouter
		isLoggedIn={Boolean(userObj)}
		userObj = {userObj}
		refreshUser = {refreshUser}
	  /> : "Initializing..."
	  }
    </>
  );
}


export default App;
