/**
 * project: trHackYourTour
 * author:  Mauro Marini
 * file:    components.search.Results.js
 */

import React, {Component} from 'react';
import {
    Text,
    View,
    FlatList, ActivityIndicator,
} from 'react-native';


import {Card, Button} from 'react-native-elements'
import GeneralStyle from "../../theme/style";
import DarkMode from "../../theme/darkMode";

import Query from "../../data/allDestinations";
import destinationTypes from "../../data/destinationTypes";
import evaluateDestinationType from "../../data/evaluateDestinationType";
import {locationDetail} from "../../rootNavigation";
import Color from "../../theme/colors";
import GLOBAL from '../../data/global';

/*
 * Export the component
 */

export default class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            dataSource: [],
        };
    }

    componentDidMount() {
        this.fetchResults().then(r => console.log(this.state.dataSource["data"]["queryOst"]["ost"]));
    }


    async fetchResults(){
        this.setState({dataSource: await Query()});
    }


    render() {

        GLOBAL.renderResult = this;

        return (
            <View style={[GeneralStyle.style(DarkMode.darkMode).lastScansContainer, {marginLeft: 7}]}>
                {this.state.dataSource.length === 0 ?
                    <ActivityIndicator
                        color={
                            DarkMode.darkMode ?
                                Color.dark.colors.primary:
                                Color.light.colors.primary
                        }
                        style={{top:20}}
                    />
                :
                    <FlatList
                        data={this.state.dataSource["data"]["queryOst"]["ost"]}
                        renderItem={({item}) => (
                            <Card
                                title={item.name}
                                titleStyle={GeneralStyle.style(DarkMode.darkMode).cardTitle}
                                containerStyle={[GeneralStyle.style(DarkMode.darkMode).card,
                                    GeneralStyle.style(DarkMode.darkMode).scanCard]}>
                                <View style={[
                                    GeneralStyle.style(DarkMode.darkMode).destinationType]}>
                                    <Text
                                        style={GeneralStyle.style(DarkMode.darkMode).destinationTypeText}>{destinationTypes[evaluateDestinationType(item.type)].name}</Text>
                                </View>

                                <Text style={GeneralStyle.style(DarkMode.darkMode).cardCorpus}>
                                    {item.descrizione === null ? 'nessuna descrizione' : item.descrizione.substring(0,60)+'...'}
                                </Text>
                                <Button
                                    buttonStyle={[GeneralStyle.style(DarkMode.darkMode).button, GeneralStyle.style(DarkMode.darkMode).itemButton]}
                                    title="Vedi"
                                    onPress={()=>locationDetail(item.id)}
                                    titleStyle={GeneralStyle.style(DarkMode.darkMode).itemButtonTitle}/>
                            </Card>
                        )}

                        numColumns={2}
                        keyExtractor={(item, index) => index.toString()}
                        keyboardDismissMode={'on-drag'}
                        contentContainerStyle={{ paddingBottom: 150}}
                    />
                }

            </View>
        );
    }
}
