import {BackHandler} from "react-native";
import {useEffect} from "react";
import {navigationRef} from "../Navigation/MainRoute.constants";

interface BackHandlerProp {
    handleBack: () => void;
}

const useBackHandler = (prop: BackHandlerProp) => {
    const {handleBack} = prop;
    const handleBackButtonClick = () => {
        handleBack();
        return !navigationRef.current?.canGoBack();
    };
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
        };
    }, []);
};

export default useBackHandler;
