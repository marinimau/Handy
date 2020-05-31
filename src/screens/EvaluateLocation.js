/**
 * project: trHackYourTour
 * author:  Mauro Marini
 * file:    screens.EvaluateLocation.js
 */

import * as React from 'react';
import {Alert, Dimensions, Text, View} from 'react-native';
import * as sha256 from 'js-sha256';

/*
 * Drawer
 */

/*
 * Components
 */
import GeneralStyle from "../theme/style";
import DarkMode from "../theme/darkMode";
import locationPlaceholder from "./locationPlaceholder";
import querySingle from "../data/singleDestination";
import scannedLocationID from "../navigation/scannedLocation";
import {AirbnbRating, Button, Card} from "react-native-elements";
import Colors from "../theme/colors";
import * as RootNavigation from "../rootNavigation";
import {locationDetail} from "../rootNavigation";

const KEY = 'thisisaverystupidway';


function navigateToRoot() {
    RootNavigation.navigate('Root');
}

/*
 * Export the screen
 */
export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            valid: false,
            rating: 3,
            location: locationPlaceholder,
        };
    }

    componentDidMount() {
        this.fetchResults().then(r =>this.evaluateToken());
    }

    async fetchResults(){
        this.setState({location: await querySingle(scannedLocationID.getId())});
    }

    evaluateToken(){
        let token = scannedLocationID.getToken();
        let x = this.state.location.name.concat(KEY);
        console.log(x);
        let hash = sha256.create();
        hash.update((x));
        console.log(hash.hex().toString());
        console.log(token);
        if(hash.hex().toString() === token.toString()){
            this.setState({loading: false});
            console.log("è valido");
        }
        else {
            this.invalidQR();
        }
    }

    invalidQR(){
        Alert.alert(
            `Qr non valido`,
            'se pensi ci sia un errore fai un secondo tentativo',
            [
                {
                    text: 'OK',
                    onPress: () => navigateToRoot()
                }
            ],
            {cancelable: false}
        );
    }

    ratingComplete(rating){
        this.setState({rating: rating});
    }

    confirmRating(){
        Alert.alert(
            `Ben fatto!`,
            'hai ottenuto 300 punti',
            [
                {
                    text: 'OK',
                    onPress: () => navigateToRoot()
                }
            ],
            {cancelable: false}
        );
    }

    render() {
        return (

            <View style={GeneralStyle.style(DarkMode.darkMode).screenContainer}>
                {this.state.loading === false ?
                    <Card
                        title={'Come valuti '+this.state.location.name+'?'}
                        titleStyle={GeneralStyle.style(DarkMode.darkMode).cardTitle}
                        containerStyle={[GeneralStyle.style(DarkMode.darkMode).card,
                            GeneralStyle.style(DarkMode.darkMode).scanCard, {width: Dimensions.get("window").width - 20}]}>
                        <AirbnbRating
                            count={5}
                            reviews={["Pessimo", "Non mi è piaciuto", "Così così", "Bello", "Consiglio assolutamente!"]}
                            defaultRating={3}
                            size={20}
                            ratingBackgroundColor={DarkMode.darkMode ? Colors.dark.colors.search : Colors.light.colors.search}
                            ratingColor={DarkMode.darkMode ? Colors.dark.colors.accent : Colors.light.colors.accent}

                            />
                        <Button
                            buttonStyle={[GeneralStyle.style(DarkMode.darkMode).button, GeneralStyle.style(DarkMode.darkMode).itemButton]}
                            title="Conferma"
                            onPress={()=>this.confirmRating()}
                            titleStyle={GeneralStyle.style(DarkMode.darkMode).itemButtonTitle}/>
                    </Card>
                    :
                    <View/>
                }
            </View>
        );
    }
}
