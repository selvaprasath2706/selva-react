import { Button } from "@material-ui/core";
import {useHistory} from "react-router-dom";
import "./firebase"

import firebase from "firebase/app"
import "firebase/auth";

export default function Login(){
    const history = useHistory();
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in.
          console.log(user);
          history.push("/home");
        }
      });
    function signInWithGoogle(){
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
   console.log(result)
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
    }
    return(
        <div className="container d-flex align-items-center justify-content-center flex-column" style={{minHeight:"100vh"}}>
            <h2 className="mb-4">React APP</h2>
            
            <Button variant="contained" color="primary" style={{textTransform:"capitalize"}} onClick={signInWithGoogle}>
                Sign In With Google
            </Button>
        </div>
    );
}