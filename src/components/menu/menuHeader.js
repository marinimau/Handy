/**
 * project: trHackYourTour
 * author:  Mauro Marini
 * file:    components.menuHeader.js
 */

import React, {Component} from 'react';
import {
    Text,
    View,
} from 'react-native';

import GeneralStyle from "../../theme/style";
import DarkMode from "../../theme/darkMode";
import UserCard from "./UserCard";
import MenuLinks from "./MenuLinks";


/*
 * Export the component
 */
export default class MenuHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <View style={GeneralStyle.style(DarkMode.darkMode).menuSpacer}/>
                <UserCard/>
                <View style={GeneralStyle.style(DarkMode.darkMode).menuContainer}>
                    <MenuLinks/>
                    <Text style={[
                        GeneralStyle.style(DarkMode.darkMode).menuTitle,
                        GeneralStyle.style(DarkMode.darkMode).leftTitle]}>
                        Scansioni recenti
                    </Text>
                </View>

            </View>
        );
    }
}
