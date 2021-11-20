import firebase from 'firebase/app'
import { createContext } from 'react';

export interface IFirebaseContext {
    firebase: firebase.app.App,
}
  
export const FirebaseContext = createContext({} as IFirebaseContext)

const config = {
    apiKey: "AIzaSyAwex9jjtg3z3Zp-E_rbWsr4Ds7vaEnN34",
    authDomain: "signin-86b01.firebaseapp.com",
    databaseURL: "https://signin-86b01-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "signin-86b01",
    measurementId: "G-Y6Q08Y1Y6X"
}

const initFirebase = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
}

export const FirebaseProvider = ({ children }: any) => {
    initFirebase();
    return (
        <div>
            <FirebaseContext.Provider value={{ firebase: firebase.app() } as IFirebaseContext}>
                {children}
            </FirebaseContext.Provider>
        </div>
    );
}