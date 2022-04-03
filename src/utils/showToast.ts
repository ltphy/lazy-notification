import Toast from "react-native-root-toast";
import {styles} from "./Toast.styles";

const showToast = {
    success: (message: string)=>{
        Toast.show(message, {
            duration: Toast.durations.SHORT,
            position: Toast.positions.BOTTOM,
            shadow: true,
            animation: true,
            hideOnPress: true,
            containerStyle: {...styles.base, ...styles.success},
            textStyle: styles.text1,
        });
    },
    error: (message: string)=>{
        Toast.show(message, {
            duration: Toast.durations.SHORT,
            position: Toast.positions.BOTTOM,
            shadow: true,
            animation: true,
            hideOnPress: true,
            containerStyle: {...styles.base, ...styles.error},
            textStyle: styles.text1
        });
    },

};
export default  showToast;
