/**
 * project: trHackYourTour
 * author:  Mauro Marini
 * file:    screens.DetailScreen.js
 */


import * as React from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import GeneralStyle from "../theme/style";
import DarkMode from "../theme/darkMode";
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import query from "../data/allDestinations";
import BottomSheet from 'reanimated-bottom-sheet'
import destinationTypes from "../data/destinationTypes";
import LocationMetadataPercentage from "../components/detail/locationMetadataPercentage";
import mapLight from "../raw/mapLight";
import mapDark from "../raw/mapDark";
import evaluateDestinationType from "../data/evaluateDestinationType";
import locationPlaceholder from "./locationPlaceholder";
import querySingle from "../data/singleDestination";
import currentLocationId from "../navigation/currentLocationId";

export default class DetailScreen extends React.Component {

    renderContent = () => (
        /* render */
        <View style={[GeneralStyle.style(DarkMode.darkMode).bottomSheetContainer]}>
            <View style={GeneralStyle.style(DarkMode.darkMode).bottomSheetSpacer}/>
            <View style={GeneralStyle.style(DarkMode.darkMode).menuContainer}>
                <Text style={[
                    GeneralStyle.style(DarkMode.darkMode).menuTitle,
                    GeneralStyle.style(DarkMode.darkMode).centerTitle]}>
                    {this.state.location.name}
                </Text>
                <View style={[
                    GeneralStyle.style(DarkMode.darkMode).destinationType,
                    GeneralStyle.style(DarkMode.darkMode).bottomSheetDestinationType,
                    {width: 200}]}>
                    <Text
                        style={GeneralStyle.style(DarkMode.darkMode).destinationTypeText}>
                        {destinationTypes[evaluateDestinationType(this.state.location.type)].name}
                    </Text>
                </View>
                <Text style={[GeneralStyle.style(DarkMode.darkMode).cardDate, {marginTop: 0}]}>
                    25 utenti sono stati qui
                </Text>
                <LocationMetadataPercentage done={true} vote={4.5} points={500}/>
                <Text style={[
                    GeneralStyle.style(DarkMode.darkMode).menuTitle,
                    GeneralStyle.style(DarkMode.darkMode).leftTitle, {marginLeft: 5}]}>
                    Descrizione
                </Text>
                <Text style={[
                    GeneralStyle.style(DarkMode.darkMode).detailDescriptionCorpus]}>
                    {this.state.location.descrizione === null  ? 'nessuna descrizione' : this.state.location.descrizione}
                </Text>
            </View>
        </View>
    );

    renderHeader = () => (
        /* render */
        <View style={[GeneralStyle.style(DarkMode.darkMode).bottomSheetHeaderContainer]}>
            <View style={GeneralStyle.style(DarkMode.darkMode).bottomSheetGestureIndicator} />
        </View>
    );


    constructor(props) {
        super(props);
        this.state = {
            location: locationPlaceholder,
            initialPosition: {
                latitude: 40.026247,
                longitude: 9.099298,
                latitudeDelta: 0.09,
                longitudeDelta: 0.035
            }
        };
    }

    componentDidMount() {
        this.fetchResults().then(r => this.updateCoords());
    }

    async fetchResults(){
        this.setState({location: await querySingle(currentLocationId.getId())});
    }

    updateCoords(){
        let coordString = this.state.location.geometry.value;
        coordString = coordString.split('(')[1].split(')')[0];
        let latitude = Number(coordString.split(' ')[1]);
        let longitude = Number(coordString.split(' ')[0]);
        console.log(coordString);
        this.setState({initialPosition : {latitude: latitude, longitude: longitude, latitudeDelta: 0.09,
                longitudeDelta: 0.035}})
    }

    render() {
        return (
            <View style={GeneralStyle.style(DarkMode.darkMode).screenContainer}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    ref={map => this._map = map}
                    style={styles.map}
                    customMapStyle={DarkMode.darkMode ? mapDark : mapLight}
                    region={this.state.initialPosition}>
                    <Marker coordinate={this.state.initialPosition}/>
                </MapView>
                <BottomSheet
                    snapPoints = {['80%', '20%']}
                    initialSnap = {1}
                    enabledInnerScrolling={true}
                    renderContent = {this.renderContent}
                    renderHeader = {this.renderHeader}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject
    },
    map: {
        ...StyleSheet.absoluteFillObject
    }
});
