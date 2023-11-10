
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi9nhZCnrbRq9xDP8ovIRrXqVwgEC9ymg",
  authDomain: "olx-demo-95029.firebaseapp.com",
  projectId: "olx-demo-95029",
  storageBucket: "olx-demo-95029.appspot.com",
  messagingSenderId: "1098617042178",
  appId: "1:1098617042178:web:7de27e74db23cb3341be1b",
  measurementId: "G-C291J9XVXP"
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);
export default firebaseApp;
