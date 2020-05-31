/**
 * project: trHackYourTour
 * author:  Mauro Marini
 * file:    components.FilterChips.js
 */

import React, {Component} from 'react';
import { Chip } from 'react-native-paper';
import {FlatList, ScrollView, View} from 'react-native';
import destinationTypes from "../../data/destinationTypes";
import GeneralStyle from "../../theme/style";
import DarkMode from "../../theme/darkMode";
import Color from "../../theme/colors";
import filterState from "./filterState";


export default class FilterChips extends Component {
    constructor(props) {
        super(props);
        this.state = {
            all: true,
            _0: false,
            _1: false,
            _2: false,
            _3: false,
            _4: false,
            _5: false
        };
        filterState.setType(this.returnStateQuery('all'));
    }

    activateFilter(filter){
        switch (filter) {
            case '_0':
            case '_1':
            case '_2':
            case '_3':
                this.setState({all: false, _0: false, _1: false, _2: false, _3: false});
                this.setState({all: false, [filter]: true});
                filterState.setType(this.returnStateQuery(filter));
                break;
            default:
                this.setState({all: true, _0: false, _1: false, _2: false, _3: false});
                break;
        }
    }

    returnState(stateString){
        switch (stateString) {
            case 'all':
                return this.state.all;
            case '_0':
                return this.state._0;
            case '_1':
                return this.state._1;
            case '_2':
                return this.state._2;
            case '_3':
                return this.state._3;
        }
    }

    returnStateQuery(stateString){
        switch (stateString) {
            case 'all':
                return destinationTypes[0].field;
            case '_0':
                return destinationTypes[1].field;
            case '_1':
                return destinationTypes[2].field;
            case '_2':
                return destinationTypes[3].field;
            case '_3':
                return destinationTypes[4].field;
        }

    }

    render() {
        return (
            <View style={{marginTop: 8}}>
                <FlatList
                    data={destinationTypes}
                    renderItem={({item}) => (
                        <Chip
                            onPress={() => this.activateFilter(item.state)}
                            selected={this.returnState(item.state)}
                            textStyle={this.returnState(item.state) ? GeneralStyle.style(DarkMode.darkMode).filterChipTextSelected
                                : GeneralStyle.style(DarkMode.darkMode).filterChipText}
                            style={[GeneralStyle.style(DarkMode.darkMode).filterChip,
                                { backgroundColor:
                                        this.returnState(item.state) ? DarkMode.darkMode ?
                                            Color.dark.colors.accent :
                                            Color.light.colors.accent :
                                            DarkMode.darkMode ?
                                                Color.dark.colors.chip :
                                                Color.light.colors.search}]}>
                            {item.name}
                        </Chip>
                    )}
                    numColumns={1}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    };
}
