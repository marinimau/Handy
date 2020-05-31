/**
 * project: trHackYourTour
 * author:  Mauro Marini
 * file:    components.detail.LocationMetadataPercentage.js
 */


import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import {View, Text, Dimensions} from 'react-native';
import ProgressCircle from 'react-native-progress-circle'
import DarkMode from "../../theme/darkMode";
import Color from "../../theme/colors";
import GeneralStyle from "../../theme/style";


export default class LocationMetadataPercentage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            done: this.props.done,
            vote: this.props.vote,
            points: this.props.points,
        };
    }

    render() {
        return (
            <View style={GeneralStyle.style(DarkMode.darkMode).detailMetadataContainer}>

                <View style={GeneralStyle.style(DarkMode.darkMode).detailMetadataContainerItem}>
                    <ProgressCircle
                        percent={this.props.done ? 100 : 0}
                        radius={Dimensions.get('window').width / 6 - 30}
                        borderWidth={8}
                        color={DarkMode.darkMode ? Color.dark.colors.accent : Color.light.colors.accent}
                        shadowColor={DarkMode.darkMode ? Color.dark.colors.search : Color.light.colors.search}
                        bgColor={DarkMode.darkMode ? Color.dark.colors.primaryDark : Color.light.colors.primaryDark}
                    >
                        <Text style={GeneralStyle.style(DarkMode.darkMode).detailMetadataContainerInsideText}>
                            {this.props.done ? 'Sì' : 'No'}
                        </Text>
                    </ProgressCircle>
                    <Text style={GeneralStyle.style(DarkMode.darkMode).detailMetadataDescriptionText}>Completato</Text>
                </View>

                <View style={GeneralStyle.style(DarkMode.darkMode).detailMetadataContainerItem}>
                    <ProgressCircle
                        percent={this.props.vote==='N/D' ? 0 : this.props.vote/5*100}
                        radius={Dimensions.get('window').width / 6 - 30}
                        borderWidth={8}
                        color={DarkMode.darkMode ? Color.dark.colors.accent : Color.light.colors.accent}
                        shadowColor={DarkMode.darkMode ? Color.dark.colors.search : Color.light.colors.search}
                        bgColor={DarkMode.darkMode ? Color.dark.colors.primaryDark : Color.light.colors.primaryDark}
                    >
                        <Text style={GeneralStyle.style(DarkMode.darkMode).detailMetadataContainerInsideText}>
                            {this.props.vote}
                        </Text>
                    </ProgressCircle>
                    <Text style={GeneralStyle.style(DarkMode.darkMode).detailMetadataDescriptionText}>Valutazione</Text>
                </View>

                <View style={GeneralStyle.style(DarkMode.darkMode).detailMetadataContainerItem}>
                    <ProgressCircle
                        percent={this.props.points/500*100}
                        radius={Dimensions.get('window').width / 6 - 30}
                        borderWidth={8}
                        color={DarkMode.darkMode ? Color.dark.colors.accent : Color.light.colors.accent}
                        shadowColor={DarkMode.darkMode ? Color.dark.colors.search : Color.light.colors.search}
                        bgColor={DarkMode.darkMode ? Color.dark.colors.primaryDark : Color.light.colors.primaryDark}
                    >
                        <Text style={GeneralStyle.style(DarkMode.darkMode).detailMetadataContainerInsideText}>
                            {this.props.points}
                        </Text>
                    </ProgressCircle>
                    <Text style={GeneralStyle.style(DarkMode.darkMode).detailMetadataDescriptionText}>Premio</Text>
                </View>


            </View>
        );
    }
}
