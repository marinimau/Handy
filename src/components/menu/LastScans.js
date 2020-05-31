/**
 * project: trHackYourTour
 * author:  Mauro Marini
 * file:    components.LastScans.js
 */

import React, {Component} from 'react';
import {
    Text,
    View,
    FlatList
} from 'react-native';


import {Card, Button} from 'react-native-elements'
import GeneralStyle from "../../theme/style";
import DarkMode from "../../theme/darkMode";
import UserData from "../../data/userData";
import destinationTypes from "../../data/destinationTypes";
import MenuHeader from "./menuHeader";
import {locationDetail} from "../../rootNavigation";
import getUserScans from "../../data/getUserScans"

/*
 * Export the component
 */

export default class LastScans extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scans: 0,
        };
    }

    componentDidMount() {
        this.fetchResults().then(r => console.log(Object.keys(this.state.scans)));
    }


    async fetchResults(){
        this.setState({scans: await getUserScans('marinimau')});
    }


    render() {
        return (
            <View style={GeneralStyle.style(DarkMode.darkMode).lastScansContainer}>
                <FlatList
                    data={Object.keys(this.state.scans)}
                    ListHeaderComponent={<MenuHeader/>}
                    renderItem={({item}) => (
                        <Card
                            title={this.state.scans[item].name}
                            titleStyle={GeneralStyle.style(DarkMode.darkMode).cardTitle}
                            containerStyle={[GeneralStyle.style(DarkMode.darkMode).card,
                                GeneralStyle.style(DarkMode.darkMode).scanCard]}>

                            <Text style={GeneralStyle.style(DarkMode.darkMode).cardDate}>{this.state.scans[item].date}</Text>

                            <View style={[
                                GeneralStyle.style(DarkMode.darkMode).destinationType]}>
                                <Text
                                    style={GeneralStyle.style(DarkMode.darkMode).destinationTypeText}>{destinationTypes[this.state.scans[item].typeID].name}</Text>
                            </View>

                            <Text style={GeneralStyle.style(DarkMode.darkMode).cardCorpus}>
                                Punti: {this.state.scans[item].points}
                            </Text>
                            <Text style={GeneralStyle.style(DarkMode.darkMode).cardCorpus}>
                                Il tuo voto: {this.state.scans[item].vote} / 5
                            </Text>
                            <Button
                                buttonStyle={[GeneralStyle.style(DarkMode.darkMode).button, GeneralStyle.style(DarkMode.darkMode).itemButton]}
                                title="Vedi"
                                onPress={()=>locationDetail(this.state.scans[item].id)}
                                titleStyle={GeneralStyle.style(DarkMode.darkMode).itemButtonTitle}/>
                        </Card>
                    )}

                    numColumns={2}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={{ paddingBottom: 15}}
                />
            </View>
        );
    }
}
