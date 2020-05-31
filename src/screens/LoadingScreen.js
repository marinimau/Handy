/**
 * project: trHackYourTour
 * author:  Mauro Marini
 * file:    screens.Loading.js
 */


import * as React from 'react';
import {ActivityIndicator, View} from 'react-native';
import GeneralStyle from "../theme/style";
import DarkMode from "../theme/darkMode";
import internetStatus from "../utils/networkState";
import * as firebase from "firebase";
import UserData from "../data/userData";
import Color from "../theme/colors";
import { StackActions, NavigationActions } from 'react-navigation';


const resetActionLogged = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Root' })],
});

const resetActionNotLogged = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Login'})],
});


/*
 * Export the screen
 */
export default class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }





    render() {
        return (
            <View style={[GeneralStyle.style(DarkMode.darkMode).screenContainer]}>
                <ActivityIndicator
                    color={
                        DarkMode.darkMode ?
                            Color.dark.colors.primary:
                            Color.light.colors.primary
                    }
                    style={{top:'45%'}}
                />
            </View>

        );
    }
}
