/**
 * project: trHackYourTour
 * author:  Mauro Marini
 * file:    components.searchWithLogo.js
 */

import React, {Component} from 'react';
import {Icon} from "react-native-elements";
import {TouchableOpacity} from 'react-native';
import GeneralStyle from "../../theme/style";
import DarkMode from "../../theme/darkMode";
import * as RootNavigation from '../../rootNavigation.js';
import Color from "../../theme/colors";



function navigateToSearch() {
    RootNavigation.navigate('Search');
}

/*
 * Export the component
 */
export default class SearchBtn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity>
                <Icon
                    reverse
                    name='search'
                    type='material'
                    color={DarkMode.darkMode ? Color.dark.colors.elevated : Color.light.colors.search}
                    reverseColor={DarkMode.darkMode ? Color.dark.colors.icons : Color.light.colors.icons}
                    size={20}
                    onPress={navigateToSearch}
                />
            </TouchableOpacity>
        );
    }
}
