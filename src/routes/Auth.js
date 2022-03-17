import React from "react";
import {authService} from "../fbase";
import {GoogleAuthProvider,
	   GithubAuthProvider,
		signInWithPopup
} from "firebase/auth";
import AuthForm from "../components/AuthForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import {
   faTwitter,
   faGoogle,
   faGithub,
 } from "@fortawesome/free-brands-svg-icons";

//<FontAwesomeIcon
//         icon={faTwitter}
 //        color={"#04AAFF"}
  //       size="3x"
  //       style={{ marginBottom: 30 }}
  //     />
const Auth = () => {
	const onSocialClick = async (event) => {
     const {
       target: { name },
     } = event;
     let provider;
     if (name === "google") {
       provider = new GoogleAuthProvider();
     } else if (name === "github") {
       provider = new GithubAuthProvider();
     }
     const data = await signInWithPopup(authService, provider);
   };
   return (
     <div className = "authContainer">
	 <h1 style = {{fontSize:30}}>제 3방공유도탄여단</h1>
		<img src ="https://firebasestorage.googleapis.com/v0/b/fere-5c82d.appspot.com/o/uliKkYmpczfiR1xhKXNvTkWrd5m2%2F3fa93e8e-0d9e-4c1e-91f9-116b55e6bc31?alt=media&token=d7cc58d5-e14b-496d-b808-bd56491505f9"		
		   width = "270"
		   height = "340"
		   style = {{marginBottom: 30}}
	 />
	   <AuthForm />
       <div className = "authBtns">
		 <button onClick={onSocialClick} name="google" className = "authBtn">
           Continue with Google
		   <FontAwesomeIcon icon={faGoogle} />
         </button>
         <button onClick={onSocialClick} name="github" className = "authBtn">
           Continue with Github
		   <FontAwesomeIcon icon={faGithub} />
         </button>
       </div>
     </div>
   );
 };
export default Auth;