/**
 * project: trHackYourTour
 * author:  Mauro Marini
 * file:    components.searchArea.js
 */

import * as React from 'react';
import {View} from 'react-native';
import GeneralStyle from "../../theme/style";
import DarkMode from "../../theme/darkMode";
import Strings from "../../Strings/Strings";
import Color from "../../theme/colors";
import * as RootNavigation from "../../rootNavigation";
import filterState from "./filterState";
import {Button, Icon, SearchBar} from "react-native-elements";


function navigateToSearch() {
    RootNavigation.navigate('Search');
}


function goBack() {
    RootNavigation.goBack();
}


export default class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            result: []
        };
    }

    updateSearch = async search => {
        this.setState({ search: search },  async () => {
            filterState.setText(search);
        })
    };


    componentDidMount() {
        //this.searchHeaderRef.show();
    }

    render() {
        const { searchQuery } = this.state;
        return (
            Platform.OS === 'ios' ?
                    <SearchBar
                        placeholder={Strings.searchPlaceHolder}
                        onChangeText={this.updateSearch}
                        value={this.state.search}
                        containerStyle={{backgroundColor: 'transparent'}}
                        inputContainerStyle={[GeneralStyle.style(DarkMode.darkMode).searchIos, {marginRight: 80, paddingTop:0, paddingBottom: 0}]}
                        inputStyle={[GeneralStyle.style(DarkMode.darkMode).searchCardText, {marginTop: 0, marginBottom: 0, opacity: 1}]}
                        showCancel={true}
                        autoFocus={true}
                        tintColor={DarkMode.darkMode ? Color.dark.colors.primary : Color.light.colors.primary}
                        platform="ios"
                        cancelButtonTitle={'Annulla'}
                        cancelButtonProps={{color: DarkMode.darkMode ? Color.dark.colors.accent : Color.light.colors.accent}}
                        onCancel={(() => goBack())}
                    />
                    :
                    <SearchBar
                        placeholder={Strings.searchPlaceHolder}
                        onChangeText={this.updateSearch}
                        value={this.state.search}
                        containerStyle={[GeneralStyle.style(DarkMode.darkMode).searchAndroid,{top: 0}]}
                        inputStyle={[GeneralStyle.style(DarkMode.darkMode).searchCardText, {marginTop: 0, marginLeft: 10, opacity: 1}]}
                        autoFocus={true}
                        placeholderTextColor={DarkMode.darkMode ? Color.dark.colors.icons : Color.dark.colors.search}
                        selectionColor={DarkMode.darkMode ? Color.dark.colors.elevated : Color.light.colors.primaryDark}
                        clearIcon={{
                            color: DarkMode.darkMode ? Color.dark.colors.icons : Color.light.colors.icons ,
                            underlayColor: DarkMode.darkMode ? Color.dark.colors.elevated : Color.light.colors.primaryDark}}
                        cancelIcon={{color: DarkMode.darkMode ? Color.dark.colors.icons : Color.light.colors.icons ,
                            underlayColor: DarkMode.darkMode ? Color.dark.colors.elevated : Color.light.colors.primaryDark}}
                        searchIcon={{color: DarkMode.darkMode ? Color.dark.colors.icons : Color.light.colors.icons ,
                            underlayColor: DarkMode.darkMode ? Color.dark.colors.elevated : Color.light.colors.primaryDark}}
                        platform={"android"}
                        autoCompleteType={"password"}
                        onCancel={(() => goBack())}
                    />

            );
    }
}
