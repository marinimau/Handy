import * as firebase from "firebase";
import UserData from "../data/userData";

export default function checkIfLoggedIn () {
    firebase.auth().onAuthStateChanged(function (user) {
        if(user){
            UserData.setCurrentUser(user);
            return true;
        }
        else {
            return false;
        }
    }.bind(this));
}
