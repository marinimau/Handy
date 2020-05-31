import React from 'react';
import {StyleSheet, Platform, Dimensions} from "react-native";
import Color from "./colors";
import DarkMode from "./darkMode";


let GeneralStyle = {
    style: (darkMode) => {
        return StyleSheet.create({
            viewPager: {
                flex: 1,
                zIndex: 0,
            },
            button: {
                marginTop: 16,
                borderRadius: 10,
                padding: 4,
                backgroundColor: (darkMode ? Color.dark.colors.accent : Color.light.colors.accent),
            },
            buttonTitle: {
                fontSize: 14,
                color: (darkMode ? Color.dark.colors.primary : Color.light.colors.primaryDark),
            },
            itemButton : {
                backgroundColor: (darkMode ? Color.dark.colors.accent2 : Color.light.colors.accent2),
            },
            itemButtonTitle: {
                color: (darkMode ? Color.dark.colors.primary : Color.light.colors.primaryDark),
            },
            searchHeader: {
                width: '100%',
                paddingTop: Platform.OS === 'ios'? 30 : 10,
                position: 'absolute',
                zIndex: 999,
            },
            screenContainer: {
                width: '100%',
                height: '100%',
                backgroundColor: (darkMode ? Color.dark.colors.primaryDark : Color.light.colors.primaryDark),
                zIndex: 1,
            },
            loadingContainer: {
                backgroundColor: (darkMode ? Color.dark.colors.accent : Color.light.colors.accent),
            },
            searchAndroid: {
                backgroundColor: (darkMode ? Color.dark.colors.elevated : Color.light.colors.elevated),
            },
            searchIos: {
                backgroundColor: (darkMode ? Color.dark.colors.search : Color.light.colors.search),
            },
            searchCardTextContainer: {
                flex: 1,
                marginLeft: 50,
                marginTop: 0,
                justifyContent: 'flex-end',
                zIndex: 8,
            },
            searchCardText: {
                color: (darkMode ? Color.dark.colors.icons : Color.light.colors.icons),
            },
            searchCardPlaceholder: {
                color: (darkMode ? Color.dark.colors.icons : Color.light.colors.icons),
            },
            filterChip:{
                flex: 0,
                width: 'auto',
                margin: 6,
                backgroundColor: (darkMode ? Color.dark.colors.search : Color.light.colors.search)
            },
            filterChipText: {
                color: (darkMode ? Color.dark.colors.primary : Color.light.colors.primary),
                fontWeight: 'bold'
            },
            filterChipTextSelected: {
                color: (darkMode ? Color.dark.colors.primary : Color.light.colors.primaryDark),
                fontWeight: 'bold'
            },
            card: {
                shadowRadius: DarkMode.darkMode ? 4 : 2,
                shadowOpacity: DarkMode.darkMode ? 0.2 : 0.15,
                shadowColor: '#000',
            },
            container: {
                width: '100%',
                flex: 2,
                backgroundColor: (darkMode ? Color.dark.colors.primaryDark : Color.light.colors.primaryDark),
                alignItems: 'flex-start',
                zIndex: 2,
            },
            drawer: {
                shadowColor: '#000000',
                shadowOpacity: 0.4,
                shadowRadius: 3
            },
            topContainer: {
                width: '100%',
                flex: 0,
                paddingTop: 0,
                flexDirection: 'column',
                justifyContent: 'center',
                zIndex: 3,
            },
            bottomSheetHeaderContainer: {
                backgroundColor: (darkMode ? Color.dark.colors.primaryDark : Color.light.colors.primaryDark),
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
            },
            bottomSheetContainer: {
                width: '100%',
                minHeight: '100%',
                backgroundColor: (darkMode ? Color.dark.colors.primaryDark : Color.light.colors.primaryDark),
            },
            bottomSheetGestureIndicator : {
                width: 70,
                height: 5,
                borderRadius: 10,
                opacity: 0.4,
                left: '50%',
                marginLeft: -35,
                marginTop: 20,
                backgroundColor: (darkMode ? Color.dark.colors.icons : Color.light.colors.icons),
            },
            bottomSheetSpacer: {
                width: '100%',
                height: Platform.OS ==='ios' ? 15 : 0,
            },
            bottomSheetDestinationType: {
                marginTop: 15,
                alignSelf: 'center',
            },
            cameraArea: {
                width: '100%',
                flex: 1,
                left: 0,
                top: 0,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 0,
            },
            cameraTarget: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: -100,
                marginLeft: -100,
                width: 200,
                height: 200,
                borderWidth: 5,
                borderRadius: 10,
                borderColor: (darkMode ? Color.dark.colors.cameraBorders : Color.light.colors.cameraBorders),
                zIndex: 1,
            },
            menuSpacer: {
                width: '100%',
                height: 0,
            },
            menuContainer: {
                width: '100%',
                padding: 3,
                zIndex: 2,
            },
            menuTitle: {
                color: (darkMode ? Color.dark.colors.primary : Color.light.colors.primary),
                opacity: 1,
                fontSize: 20,
                marginTop: Platform.OS === 'ios' ? 20 : 40,
                fontWeight: 'bold',
                zIndex: 3,
            },
            centerTitle: {
                textAlign: 'center',
            },
            leftTitle: {
                textAlign: 'left',
                paddingLeft: 10,
            },
            userCard: {
                borderRadius: 10,
                borderWidth: 0.5,
                marginTop: 25,
                borderColor: (darkMode ? Color.dark.colors.borders : Color.light.colors.borders),
                backgroundColor: (darkMode ? Color.dark.colors.primaryDark : Color.light.colors.primaryDark),
                paddingTop: 15,
                paddingLeft: 10,
                paddingRight: 10,
                paddingBottom: 15,
                elevation: 6
            },
            userDataContainer: {
                flexDirection: 'row',
            },
            userDataAvatar: {
                flex: 1,
                paddingTop: 0,
                justifyContent: 'flex-start'
            },
            userDataText: {
                flex: 1,
                marginLeft: 15,
                justifyContent: 'center'
            },
            userNameText: {
                color: (darkMode ? Color.dark.colors.primary : Color.light.colors.primary),
                opacity: 1,
                fontSize: 15,
                textAlign: 'left',
                fontWeight: 'bold',
                zIndex: 3,
            },
            userEmailText: {
                color: (darkMode ? Color.dark.colors.primary : Color.light.colors.primary),
                opacity: 0.5,
                fontSize: 12,
                textAlign: 'left',
                fontWeight: 'normal',
                zIndex: 3,
            },
            menuLinksContainer: {
                marginTop: 15,
            },
            menuLinksListItem: {
                paddingLeft: 18,
                paddingTop: 12,
                paddingBottom: 12,
                paddingRight: 18,
                backgroundColor: 'transparent',
            },
            menuLinksTitle: {
                color: (darkMode ? Color.dark.colors.icons : Color.light.colors.icons),
                opacity: 1,
                fontSize: 14,
                textAlign: 'left',
                fontWeight: 'bold',
                zIndex: 3,
            },
            menuLinksIcon: {
                opacity: 0.8,
            },
            lastScansContainer: {
                padding: 0,
            },
            scanCard: {
                backgroundColor: (darkMode ? Color.dark.colors.elevated : Color.light.colors.primaryDark),
                width: '45%',
                marginLeft: 10,
                marginRight: 0,
                borderRadius: 10,
                borderWidth: 0.5,
                elevation: 6,
                borderColor: (darkMode ? Color.dark.colors.borders : Color.light.colors.borders),
            },
            searchCard: {
                backgroundColor: (darkMode ? Color.dark.colors.elevated : Color.light.colors.primaryDark),
                width: 'auto',
                marginLeft: 10,
                marginRight: 10,
                borderRadius: 10,
                borderWidth: 0.5,
                borderColor: (darkMode ? Color.dark.colors.borders : Color.light.colors.borders),
            },
            cardTitle: {
                color: (darkMode ? Color.dark.colors.primary : Color.light.colors.primary),
                fontSize: 15,
                textAlign: 'center',
                fontWeight: 'bold',
                zIndex: 3,
            },
            cardCorpus: {
                color: (darkMode ? Color.dark.colors.primary : Color.light.colors.primary),
                opacity: 0.7,
                marginBottom: 10
            },
            cardDate: {
                color: (darkMode ? Color.dark.colors.primary : Color.light.colors.primary),
                opacity: 0.5,
                fontSize: 11,
                textAlign: 'center',
                marginBottom: 10
            },
            destinationType: {
                padding: 3,
                borderRadius: 20,
                backgroundColor: (darkMode ? Color.dark.colors.search : Color.light.colors.search),
                marginTop: 5,
                marginBottom: 25,
            },
            destinationTypeText: {
                textAlign: 'center',
                fontSize: 11,
                fontWeight: 'bold',
                color: (darkMode ? Color.dark.colors.primary : Color.light.colors.primary)
            },
            detailDescriptionCorpus: {
                color: (darkMode ? Color.dark.colors.primary : Color.light.colors.primary),
                opacity: 0.7,
                margin: 15,
                lineHeight: 20,
                textAlign: 'justify',
                //fontStyle: 'italic',
                fontSize: 15,
            },
            detailMetadataContainer: {
                width: Dimensions.get('window').width - 20 ,
                flexDirection: 'row',
                marginTop: 20,
                marginBottom: 20,
                marginLeft: 10,
                marginRight: 10
            },
            detailMetadataContainerItem : {
                width: '33%',
                backgroundColor: 'transparent',
                alignItems: 'center',
                flexDirection: 'column'
            },
            detailMetadataContainerInsideText : {
                fontSize: 14,
                color: DarkMode.darkMode ? Color.dark.colors.primary : Color.light.colors.primary
            },
            detailMetadataDescriptionText : {
                fontSize: 12,
                marginTop: 20,
                textTransform: 'uppercase',
                opacity: 0.8,
                color: DarkMode.darkMode ? Color.dark.colors.primary : Color.light.colors.primary
            }

        });
    }
};

export default GeneralStyle;
