import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

//    짹 태그      <FontAwesomeIcon icon={faTwitter} color={"#04AAFF"} size="2x" />


 const Navigation = ({userObj}) => (
   <nav>
     <ul style = {{ display: "flex", justifyContent: "center", marginTop: 50 }}>
       <li>
		  <Link to="/" style={{ marginRight: 10 }}>
			<img src = "https://firebasestorage.googleapis.com/v0/b/fere-5c82d.appspot.com/o/uliKkYmpczfiR1xhKXNvTkWrd5m2%2F3fa93e8e-0d9e-4c1e-91f9-116b55e6bc31?alt=media&token=d7cc58d5-e14b-496d-b808-bd56491505f9"
			 width ="50" height = "50" 
			/>	
			<div style = {{ paddingLeft: 7 }}>
			  방마루
			</div>
          </Link>       
		</li>
       <li>
         <Link
           to="/profile"
           style={{
             marginLeft: 10,
             display: "flex",
             flexDirection: "column",
             alignItems: "center",
             fontSize: 12,
           }}
         >
           <FontAwesomeIcon icon={faUser} color={"#04AAFF"} size="2x"
			   style = {{marginTop: 12}}/>
           <span style={{ marginTop: 15 }}>
             {userObj.displayName
               ? `${userObj.displayName}의 Profile`
               : "Profile"}
           </span>
         </Link>       
	    </li>
     </ul>
   </nav>
 );
 export default Navigation;