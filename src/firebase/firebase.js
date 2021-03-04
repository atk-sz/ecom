import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDaKBR_cCU73y1MZ1lIPG2zh4xil63UUzs",
    authDomain: "crown-shop-544ba.firebaseapp.com",
    projectId: "crown-shop-544ba",
    storageBucket: "crown-shop-544ba.appspot.com",
    messagingSenderId: "570928901865",
    appId: "1:570928901865:web:31e926d7bb38ed3fdcca78",
    measurementId: "G-HDTJGE8F7R",
};

export const createUser = async (userAuth, otherDetails)=>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const { displayName , email } = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...otherDetails
            })
        }catch(err){
            console.log(err.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;