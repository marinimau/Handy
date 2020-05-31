/**
 * project: trHackYourTour
 * author:  Mauro Marini
 * file:    screens.SearchScreen.js
 */

import React, {Component} from 'react';
import { View, SafeAreaView } from 'react-native';
import {SearchBar} from 'react-native-elements'
import SearchBtn from "../components/search/SearchBtn";
import GeneralStyle from "../theme/style";
import DarkMode from "../theme/darkMode";
import Color from "../theme/colors";
import Strings from "../Strings/Strings";
import FilterChips from "../components/search/FilterChips";
import Results from "../components/search/Results";


/*
 * Export the screen
 */
export default class Search extends Component {


    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <View style={GeneralStyle.style(DarkMode.darkMode).screenContainer}>
                <SafeAreaView style={{width: '100%', zIndex: 1}}>
                    <FilterChips />
                    <Results />
                </SafeAreaView>
            </View>

        );
    }
}
