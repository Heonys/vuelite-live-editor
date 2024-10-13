import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/config/firebase.config";

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

export const createSource = async (html: string, js: string) => {
  const docRef = await addDoc(collection(db, "source"), { html, js });
  return docRef.id;
};

export const getUrl = async () => {
  const querySnapshot = await getDocs(collection(db, "url"));
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id, // 문서 ID
    ...doc.data(), // 문서 데이터
  }));
  return data;
};

export const getDecodedSouce = async (hash: string) => {
  const docRef = doc(db, "source", hash.slice(1));
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    const result = Object.keys(data).reduce(
      (acc, cur) => {
        acc[cur] = decodeURIComponent(data[cur]);
        return acc;
      },
      {} as Record<string, string>,
    );
    return result;
  } else {
    return {
      html: `<div id="app">
    <p>URL을 정확히 확인해주세요</p>
</div>`,
      js: "document.",
    };
  }
};
