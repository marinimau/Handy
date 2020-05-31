import * as React from 'react';
import {View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from "../screens/MenuScreen";
import ViewPager from '@react-native-community/viewpager';
import GeneralStyle from "../theme/style";
import DarkMode from "../theme/darkMode";
import {Component} from "react";


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activePage: 1
        }
    }

    componentDidMount() {

    }


    render() {
        return (
            <ViewPager
                style={GeneralStyle.style(DarkMode.darkMode).viewPager} initialPage={1}
                showPageIndicator={false}>
                <View key="0">
                    <MenuScreen/>
                </View>
                <View key="1">
                    <HomeScreen/>
                </View>
            </ViewPager>


        );
    }
}

