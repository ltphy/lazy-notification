import {PermissionsAndroid} from "react-native";

const requestCameraPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                'title': 'Example App',
                'message': 'Example App access to your location',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            });
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the location")
        } else {
            console.log("location permission denied")
        }
    } catch (err) {
        console.warn(err);
    }
};

export default requestCameraPermission;