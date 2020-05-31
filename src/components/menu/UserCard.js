/**
 * project: trHackYourTour
 * author:  Mauro Marini
 * file:    components.UserCard.js
 */

import React, {Component} from 'react';
import {
    Text,
    View,
} from 'react-native';

import {Avatar, Card, Button} from "react-native-elements";

import GeneralStyle from "../../theme/style";
import DarkMode from "../../theme/darkMode";
import Color from "../../theme/colors";
import getUserData from "../../data/userData"

/*
 * Export the component
 */
export default class UserCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
        };
    }

    componentDidMount() {
        this.fetchResults().then(r => console.log(this.state.user["data"]));
    }


    async fetchResults(){
        this.setState({user: await getUserData('marinimau')});
    }

    render() {
        return (
            <Card
                containerStyle={[GeneralStyle.style(DarkMode.darkMode).userCard,
                    GeneralStyle.style(DarkMode.darkMode).card]}>
                <View style={GeneralStyle.style(DarkMode.darkMode).userDataContainer}>
                    <Avatar
                        rounded
                        source={{
                            uri: this.state.user === null ? 'https://www.beautycolorcode.com/747880.png' : this.state.user.imgProfile
                        }}
                        avatarStyle={[GeneralStyle.style(DarkMode.darkMode).userDataAvatar]}
                        size={45}
                    />
                    <View style={GeneralStyle.style(DarkMode.darkMode).userDataText}>
                        <Text style={GeneralStyle.style(DarkMode.darkMode).userNameText}>
                            {this.state.user === null ? '' : this.state.user.displayName}
                        </Text>
                        <Text style={GeneralStyle.style(DarkMode.darkMode).userEmailText}>
                            {this.state.user === null ? '' : this.state.user.email}
                        </Text>
                    </View>
                </View>
                <Button
                    buttonStyle={[GeneralStyle.style(DarkMode.darkMode).button]}
                    title="Logout"
                    type="solid"
                    color={DarkMode.darkMode ? Color.dark.colors.accent : Color.light.colors.accent}
                    titleStyle={GeneralStyle.style(DarkMode.darkMode).buttonTitle}
                />
            </Card>

        );
    }
}
