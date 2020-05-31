/**
 * project: trHackYourTour
 * author:  Mauro Marini
 * file:    components.CameraView.js
 */
'use strict';

import React, { PureComponent, useState, useEffect } from 'react';
import { Text, AppRegistry, View, TouchableOpacity } from 'react-native';

import GeneralStyle from "../../theme/style";
import DarkMode from "../../theme/darkMode";
import { Camera } from 'expo-camera';

/*
 * Export the component
 */


export default function CameraView() {

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View
            style={GeneralStyle.style(DarkMode.darkMode).cameraArea}>
            <Camera style={{ width: '100%', marginTop: Platform.OS === 'ios'? 5: 0, flex: 1 }} type={type}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                    }}>
                </View>
            </Camera>
            <View style={GeneralStyle.style(DarkMode.darkMode).cameraTarget}/>
        </View>
    );
}

