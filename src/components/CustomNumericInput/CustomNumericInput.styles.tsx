import {StyleSheet} from "react-native";

export const customNumericInputStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff8133',
        borderWidth: 0,
        borderRadius: 8
    },
    inputWrapperStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 12

    },
    iconStyle: {
        color: 'white',
        fontSize: 28
    },
    inputStyle: {
        fontSize: 14,
        color: '#000',
    }
});