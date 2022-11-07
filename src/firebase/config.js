import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCY573Kb957VjiC6iC7YvQO1YddyJ_dLgc",
    authDomain: "agroyse-metziye.firebaseapp.com",
    projectId: "agroyse-metziye",
    storageBucket: "agroyse-metziye.appspot.com",
    messagingSenderId: "223096985369",
    appId: "1:223096985369:web:f418ace27ae90837165788"
};

initializeApp(firebaseConfig)

const db = getFirestore()
const auth = getAuth()


export { db, auth }