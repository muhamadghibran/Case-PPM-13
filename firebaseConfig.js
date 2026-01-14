import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Replace the following with your app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdATvaA27l-uRKFyzWVJlyx-zWn0glvx0",
  authDomain: "todo-app-df775.firebaseapp.com",
  projectId: "todo-app-df775",
  storageBucket: "todo-app-df775.firebasestorage.app",
  messagingSenderId: "553725190206",
  appId: "1:553725190206:web:214b55539ebdd25bb8716f",
  measurementId: "G-1K7SC554PM",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
