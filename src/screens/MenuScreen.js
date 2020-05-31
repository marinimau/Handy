/**
 * project: trHackYourTour
 * author:  Mauro Marini
 * file:    screens.MenuScreen.js
 */


import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import LastScans from "../components/menu/LastScans";


/*
 * Drawer
 */

/*
 * Components
 */
import GeneralStyle from "../theme/style";
import DarkMode from "../theme/darkMode";



/*
 * Export the screen
 */
export default class MenuScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        return (
            <View style={GeneralStyle.style(DarkMode.darkMode).screenContainer}>
                <SafeAreaView style={{flex: 1}}>
                    <LastScans />
                </SafeAreaView>
            </View>
        );
    }
}
