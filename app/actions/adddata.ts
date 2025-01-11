import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
    // Your Firebase configuration object goes here
    apiKey: "AIzaSyDNF8IclQF8rBFiq8yPA-4Bczxzx2IJSoY",
    authDomain: "atar1-f0830.firebaseapp.com",
    projectId: "atar1-f0830",
    storageBucket: "atar1-f0830.firebasestorage.app",
    messagingSenderId: "973639712303",
    appId: "1:973639712303:web:2f32be1d28949da178d0da",
    measurementId: "G-M9JLXES2TP"
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
