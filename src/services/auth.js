import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";


export function registerUser(email,password){
   return createUserWithEmailAndPassword(auth,email,password)
}

export function loginUser(email,password){
    return signInWithEmailAndPassword(auth,email,password)
}

export function logout(){
    return signOut(auth)
}