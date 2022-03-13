import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
/*
const firebaseConfig = {
   apiKey: process.env.REACT_APP_API_KEY,
   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
   projectId: process.env.REACT_APP_PROJECT_ID,
   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
   messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
   appId: process.env.REACT_APP_APP_ID,
 };
*/

const firebaseConfig = {
  apiKey: "AIzaSyCpNjaZTXfoqWXWbaOysgoHHTKoEf30NN4",
  authDomain: "fere-5c82d.firebaseapp.com",
  projectId: "fere-5c82d",
  storageBucket: "fere-5c82d.appspot.com",
  messagingSenderId: "846856172923",
  appId: "1:846856172923:web:46c20a54a2a23aafe2b9de"
};

initializeApp(firebaseConfig);
export const authService = getAuth();
export const dbService = getFirestore();
