/* project: trHackYourTour
 * author:  Mauro Marini
 * file:    rootNavigation.js
 */

import * as React from 'react';
import { StackActions } from 'react-navigation';
import currentLocationId from "./navigation/currentLocationId";

export const navigationRef = React.createRef();

export function navigate(name, params) {
    navigationRef.current?.navigate(name, params);

}

export function goBack() {
    navigationRef.current?.navigate('Root');
}

export function locationDetail(id) {
    currentLocationId.setId(id);
    navigationRef.current?.navigate('Detail');
}

export function goToLogin(){
    navigationRef.current?.dispatch(StackActions.popToTop());
    navigationRef.current?.navigate('Login');
}
