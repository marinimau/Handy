/**
 * project: trHackYourTour
 * author:  Mauro Marini
 * file:    screens.Login.js
 */


import * as React from 'react';
import {Text, View} from 'react-native';


/*
 * Drawer
 */

/*
 * Components
 */
import GeneralStyle from "../theme/style";
import DarkMode from "../theme/darkMode";
import internetStatus from "../utils/networkState";
import * as firebase from "firebase";
import UserData from "../data/userData";
import Color from "../theme/colors";


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    componentDidMount() {

    }


    render() {
        return (
            <View style={[GeneralStyle.style(DarkMode.darkMode).screenContainer]}>
                <Text>Ciao</Text>
            </View>

        );
    }
}
