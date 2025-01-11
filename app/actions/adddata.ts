import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
    // Your Firebase configuration object goes here
    // You should replace this with your actual Firebase config
    apiKey: "AIzaSyB1Tpv9S00TO__RCkAN95ydnMQDR7yEb0A",
    authDomain: "csa3-e2b6a.firebaseapp.com",
    databaseURL: "https://csa3-e2b6a-default-rtdb.firebaseio.com",
    projectId: "csa3-e2b6a",
    storageBucket: "csa3-e2b6a.firebasestorage.app",
    messagingSenderId: "328650323342",
    appId: "1:328650323342:web:468ea6435238c0452be0df",
    measurementId: "G-D32GDGT38Q"
  }
  
  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)
  
export async function addData(data:any){
    try {
        const docRef = await doc(db, 'pays', data.id!);
        const ref = await setDoc(docRef, data)
  
        console.log("Document written with ID: ", docRef.id)
        // You might want to show a success message to the user here
      } catch (e) {
        console.error("Error adding document: ", e)
        // You might want to show an error message to the user here
      }
}
