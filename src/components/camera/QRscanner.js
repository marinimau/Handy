/**
 * project: trHackYourTour
 * author:  Mauro Marini
 * file:    components.QRscanner.js
 */

import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Button} from "react-native-elements";
import { BarCodeScanner } from 'expo-barcode-scanner';
import GeneralStyle from "../../theme/style";
import DarkMode from "../../theme/darkMode";
import * as RootNavigation from '../../rootNavigation.js';
import scannedLocationID from "../../navigation/scannedLocation";


function navigateToEvaluate(token, id) {
    scannedLocationID.setId(id);
    scannedLocationID.setToken(token);
    RootNavigation.navigate('Evaluate');
}


export default function QRscanner() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        if(type===256){
            let splitted = data.split('/');
            navigateToEvaluate(splitted[1], splitted[0]);
        }
        else {
            alert(`Questo qr code non è supportato`);
        }

    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View
            style={[GeneralStyle.style(DarkMode.darkMode).cameraArea]}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={[StyleSheet.absoluteFillObject, {borderRadius: 10, marginTop: Platform.OS === 'ios' ? 10 : 0}]}
            />
            <View style={GeneralStyle.style(DarkMode.darkMode).cameraTarget}/>
            {scanned && <Button
                title={'Tocca per fare un\'altra scansione'}
                buttonStyle={[GeneralStyle.style(DarkMode.darkMode).button, {marginTop: 260}]}
                titleStyle={GeneralStyle.style(DarkMode.darkMode).buttonTitle}
                onPress={() => setScanned(false)} />}
        </View>
    );
}


