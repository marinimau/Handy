/**
 * project: trHackYourTour
 * author:  Mauro Marini
 * file:    components.MenuLinks.js
 */

import React, {Component} from 'react';
import {
    Text,
    View,
} from 'react-native';

import {ListItem} from 'react-native-elements'
import GeneralStyle from "../../theme/style";
import DarkMode from "../../theme/darkMode";

import TouchableScale from 'react-native-touchable-scale';
import Color from "../../theme/colors";
import getUserData from "../../data/userData"

/*
 * Export the component
 */
export default class CameraView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
        };
    }

    componentDidMount() {
        this.fetchResults().then(r => console.log(this.state.user));
    }


    async fetchResults(){
        this.setState({user: await getUserData('marinimau')});
    }

    render() {
        return (
            <View style={GeneralStyle.style(DarkMode.darkMode).menuLinksContainer}>
                <ListItem
                    title={"Punti"}
                    containerStyle={GeneralStyle.style(DarkMode.darkMode).menuLinksListItem}
                    titleStyle={GeneralStyle.style(DarkMode.darkMode).menuLinksTitle}
                    leftIcon={{
                        name: 'grade',
                        color: (DarkMode.darkMode ? Color.dark.colors.icons : Color.light.colors.icons),
                        size: 25,
                        containerStyle: GeneralStyle.style(DarkMode.darkMode).menuLinksIcon
                    }}
                    rightElement={<Text
                        style={GeneralStyle.style(DarkMode.darkMode).menuLinksTitle}>
                        {this.state.user === null ? '' : this.state.user.points}
                    </Text>}
                />

                <ListItem
                    title={"Completato"}
                    containerStyle={GeneralStyle.style(DarkMode.darkMode).menuLinksListItem}
                    titleStyle={GeneralStyle.style(DarkMode.darkMode).menuLinksTitle}
                    leftIcon={{
                        name: 'done',
                        color: (DarkMode.darkMode ? Color.dark.colors.icons : Color.light.colors.icons),
                        size: 25,
                        containerStyle: GeneralStyle.style(DarkMode.darkMode).menuLinksIcon
                    }}
                    rightElement={<Text
                        style={GeneralStyle.style(DarkMode.darkMode).menuLinksTitle}>
                        {this.state.user === null ? '' : this.state.user.scansNumber} /
                        2453</Text>}
                />

                <ListItem
                    Component={TouchableScale}
                    friction={90}
                    tension={100}
                    activeScale={0.95}
                    title={"Regolamento"}
                    containerStyle={GeneralStyle.style(DarkMode.darkMode).menuLinksListItem}
                    titleStyle={GeneralStyle.style(DarkMode.darkMode).menuLinksTitle}
                    leftIcon={{
                        name: 'description',
                        color: (DarkMode.darkMode ? Color.dark.colors.icons : Color.light.colors.icons),
                        size: 25,
                        containerStyle: GeneralStyle.style(DarkMode.darkMode).menuLinksIcon
                    }}
                    chevron
                />

            </View>
        );
    }
}
