import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBtVuFiw4Bcd7eUORWGuqAPHXNKVoNhMoE",
    authDomain: "project-newlist.firebaseapp.com",
    databaseURL: "https://project-newlist-default-rtdb.firebaseio.com",
    projectId: "project-newlist",
    storageBucket: "project-newlist.appspot.com",
    messagingSenderId: "476100547830",
    appId: "1:476100547830:web:853ec51eee5d443a2d48d7",
    measurementId: "G-W5P5Z9F7K9"
};

firebase.initializeApp(firebaseConfig);
export default firebase; 