/**
 * project: trHackYourTour
 * author:  Mauro Marini
 * file:    screens.HomeScreen.js
 */


import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { View } from 'react-native';


/*
 * Drawer
 */

/*
 * Components
 */
import GeneralStyle from "../theme/style";
import DarkMode from "../theme/darkMode";
import CameraView from "../components/camera/CameraView";
import QRscanner from "../components/camera/QRscanner";



/*
 * Export the screen
 */
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
        <View style={GeneralStyle.style(DarkMode.darkMode).screenContainer}>
            <QRscanner />
        </View>

    );
  }
}
