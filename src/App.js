import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {Platform, AppRegistry, StatusBar, View} from 'react-native';
import {SafeAreaView} from "react-navigation";
//import useCachedResources from './hooks/useCachedResources';
import ViewPagerNavigation from './navigation/ViewPagerNavigation';
import SearchArea from "./components/search/SearchArea";
import GeneralStyle from "./theme/style";
import DarkMode from "./theme/darkMode";
import SearchScreen from "./screens/SearchScreen";
import DetailScreen from "./screens/DetailScreen";
import LoginScreen from "./screens/LoginScreen";
import EvaluateLocation from "./screens/EvaluateLocation";
import Color from "./theme/colors";
import {navigationRef} from "./rootNavigation";
import SearchBtn from "./components/search/SearchBtn";

const Stack = createStackNavigator();
import * as firebase from 'firebase';
import {firebaseConfig} from "./config";
//import checkIfLoggedIn from "./auth/sessionManagement";
import internetStatus from "./utils/networkState";



//firebase.initializeApp(firebaseConfig);

if (Platform.OS === 'android') {
    SafeAreaView.setStatusBarHeight(0);
}

export default class App extends React.Component {

    componentDidMount() {
        internetStatus.checkConnection();
        internetStatus.setConnectionListener();
    }

    constructor(props) {
        super(props);
        //let logged = checkIfLoggedIn();
        this.state = {
            isLogged: true
        };
    }

    render() {
        return (
            <View style={GeneralStyle.style(DarkMode).screenContainer}>
                <StatusBar
                    barStyle={DarkMode.darkMode ? 'light-content' : 'dark-content'}
                    backgroundColor={DarkMode.darkMode ? Color.dark.colors.primaryDark :
                        Color.light.colors.primaryDark}
                />
                <NavigationContainer
                    ref={navigationRef}
                    mode={'modal'}>
                    <Stack.Navigator
                        mode={'modal'}
                        screenOptions={{
                            animationEnabled: true,
                            headerStyle: {
                                backgroundColor: DarkMode.darkMode ?
                                    Color.dark.colors.primaryDark :
                                    Color.light.colors.primaryDark,
                                elevation: 0,
                                shadowOpacity: 0
                            },
                            headerTintColor: DarkMode.darkMode ?
                                Color.dark.colors.primary :
                                Color.light.colors.primary,
                        }}
                        headerMode={"float"}
                    >
                        {this.state.isLogged === false ?
                            (
                                <Stack.Screen
                                    name="Login"
                                    component={LoginScreen}
                                    options={{title: ""}}
                                />
                            ) : (
                                <>
                                    <Stack.Screen
                                        name="Root"
                                        component={ViewPagerNavigation}
                                        options={{
                                            title: "Home",
                                            headerRight: props => <SearchBtn/>,
                                            headerRightContainerStyle: {marginRight: 15},
                                            headerLeftContainerStyle: {marginLeft: 15},}}
                                    />
                                    <Stack.Screen
                                        name="Search"
                                        component={SearchScreen}
                                        options={{
                                            title: "",
                                            headerLeft: null,
                                            headerRight: props => <SearchArea />,
                                            headerRightContainerStyle: {
                                                width: '100%',
                                                padding: 0,
                                                margin: 0,
                                                left: 0,
                                                right:0,
                                                alignItems: 'center',}}}
                                    />
                                    <Stack.Screen
                                        name="Detail"
                                        component={DetailScreen}
                                        options={{
                                            title: "Dettagli itinerario",}}
                                    />
                                    <Stack.Screen
                                        name="Evaluate"
                                        component={EvaluateLocation}
                                        options={{
                                            title: "Valuta itinerario",}}
                                    />
                                </>
                            )}

                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        );
    }
};
