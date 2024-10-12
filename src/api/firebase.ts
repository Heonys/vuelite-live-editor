import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "@/config/firebase.config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  return await signInWithPopup(auth, googleProvider);
};

export const logout = async () => {
  await signOut(auth);
};

export const signInWithLocal = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    const user = auth.currentUser;
    console.log(user);
  } catch {
    //
  }
};
