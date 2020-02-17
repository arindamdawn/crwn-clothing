import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCMp9rdMa0Y9P4TZFemvRfqPRYgF3PaXsI",
  authDomain: "crwn-db-3a5c5.firebaseapp.com",
  databaseURL: "https://crwn-db-3a5c5.firebaseio.com",
  projectId: "crwn-db-3a5c5",
  storageBucket: "crwn-db-3a5c5.appspot.com",
  messagingSenderId: "888996912090",
  appId: "1:888996912090:web:6b3f938b1ade9286383ee3"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("An error occurred while creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
