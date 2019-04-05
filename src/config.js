import firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDYWin6etsKvAL4DaAiUzkTjo6URiIGfPk",
    authDomain: "shopbus-1d9ba.firebaseapp.com",
    databaseURL: "https://shopbus-1d9ba.firebaseio.com",
    projectId: "shopbus-1d9ba",
    storageBucket: "",
    messagingSenderId: "902862695627"
  };
  
export const Initialize = () =>{
    firebase.initializeApp(config);
}
    
