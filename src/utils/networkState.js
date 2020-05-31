import NetInfo from "@react-native-community/netinfo";
import {Alert} from "react-native";

let internetStatus;


internetStatus = {

    unsubscribe : 0,

    checkConnection : () =>{
        NetInfo.fetch().then(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
        })
    },

    setConnectionListener : () =>{
        this.unsubscribe = NetInfo.addEventListener(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
            if (!state.isConnected){
                Alert.alert(
                    'Internet non disponibile',
                    'Controlla la tua connessione',
                    [
                        { text: 'OK', onPress: () => console.log('OK Pressed') }
                    ],
                    { cancelable: false }
                );

            }
        })
    },

    unsuscribeListener: () =>{
        this.unsubscribe()
    }
};

export default internetStatus;
