import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQZ8xL3Vk7Jr4to_ghcz3oTBRGFCBGtro",
  authDomain: "twitter-clone-85d04.firebaseapp.com",
  databaseURL: "https://twitter-clone-85d04-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-85d04",
  storageBucket: "twitter-clone-85d04.appspot.com",
  messagingSenderId: "818582542097",
  appId: "1:818582542097:web:987fdd64cdb21d363a9eb0",
  measurementId: "G-QQJKE880XY",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;
