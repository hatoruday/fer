import React from "react";
import { authService } from "../fbase";
import {signOut} from "firebase/auth";
import { useNavigate } from "react-router-dom";

 export default () => {
   const navi = useNavigate();
   const onLogOutClick = () => {
     signOut(authService);
     navi("/");
   };
   return (
     <>
       <button onClick={onLogOutClick}>Log Out</button>
     </>
   );
 };