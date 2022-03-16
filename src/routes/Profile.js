import React, {useEffect, useState} from "react";
import { authService, dbService } from "../fbase";
import {signOut, updateProfile} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
 
export default ({userObj, refreshUser}) => {
	const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
   const navi = useNavigate();
   const onLogOutClick = () => {
     signOut(authService);
     navi("/");
   };
	const getMyNweets = async () => {
		const q = query(collection(dbService, "nweets"), 
			where("creatorId", "==", userObj.uid)
		);
		const nweets = await getDocs(q)
     //console.log(nweets.docs.map((doc) => doc.data()));
   };
	const onChange = (event) => {
     const {
       target: { value },
     } = event;
     setNewDisplayName(value);
   };
   const onSubmit = async (event) => {
     event.preventDefault();
     if (userObj.displayName !== newDisplayName) {
       await updateProfile(authService.currentUser, {
         displayName: newDisplayName,
       });
	 refreshUser();
     }
   };
   useEffect(() => {
    getMyNweets();
   }, []);
   return (
     <>
	   <form onSubmit = {onSubmit}>
	     <input
			type="text"
			placeholder="ProfileName"
			value = {newDisplayName}
			onChange ={onChange}
		 />
		 <input 
		    type ="submit"
			value = "updateProfileName"
		 />
	   </form>
       <button onClick={onLogOutClick}>Log Out</button>
     </>
   );
 };