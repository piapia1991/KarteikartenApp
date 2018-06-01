import Rebase from "re-base";
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({ // changed ;-) your values here
    apiKey: "AIzaSyC-kDgFUTsblC1uqnmppx1UB8lwisD35po",
    authDomain: "karteikartenapp.firebaseapp.com",
    databaseURL: "https://karteikartenapp.firebaseio.com",
    projectId: "karteikartenapp",
    storageBucket: "karteikartenapp.appspot.com",
    messagingSenderId: "569635322340"
});
const base = Rebase.createClass(firebaseApp.database());
export {firebaseApp}; // named export
export default base; // default export