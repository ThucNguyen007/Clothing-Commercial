import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export const CreateUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  
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
        console.log('error creating user', error.message);
    }
  }

  return userRef;
}

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    
    return accumulator;
  }, {});
};

const firebaseConfig = {
    apiKey: "AIzaSyAHdR1xFzjfSNhxB56qpOTLU-Ttx1X9jSc",
    authDomain: "clothing-ecommerce-39868.firebaseapp.com",
    databaseURL: "https://clothing-ecommerce-39868.firebaseio.com",
    projectId: "clothing-ecommerce-39868",
    storageBucket: "clothing-ecommerce-39868.appspot.com",
    messagingSenderId: "128793752281",
    appId: "1:128793752281:web:b35af05216bd1b4dd9c4c8",
    measurementId: "G-ZFKYG1J2EQ"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;