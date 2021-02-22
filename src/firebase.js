import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBEXJbZ02bba6GHL7Q5SxBt95nJYpZ05PM",
  authDomain: "fir-c0166.firebaseapp.com",
  projectId: "fir-c0166",
  storageBucket: "fir-c0166.appspot.com",
  messagingSenderId: "881793235317",
  appId: "1:881793235317:web:e4713c6f586397cb2cfb3c",
  measurementId: "G-JYD9SJL8CL"
});

  const auth =firebase.auth();
  export {auth};