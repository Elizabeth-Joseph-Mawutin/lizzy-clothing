import { initializeApp} from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore, doc,getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyDAWAQirj7IMnIF2cUAXFzNuDU8VlzBWPE",
	authDomain: "lizzy-clothing-db.firebaseapp.com",
	projectId: "lizzy-clothing-db",
	storageBucket: "lizzy-clothing-db.appspot.com",
	messagingSenderId: "20317842261",
	appId: "1:20317842261:web:32ab8a52549bc795f8dddc"
};
  

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: "select-account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

const createUserDocumentFromAuth = async (userAuth) => {
	// const userDocRef = doc(db,'users', )
}