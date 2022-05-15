import React, {useState} from "react";
import {View} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {useNavigation} from "@react-navigation/native";
import showToast from "../../utils/showToast";
import HistoryStackNavigation from "../../Navigation/HistoryStackNavigation/HistoryStackNavigation";
import {HistoryRouteParamList} from "../../Navigation/HistoryStackNavigation/HistoryRoute.constants";

const ProfileScreen = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const navigation = useNavigation<StackNavigationProp<HistoryRouteParamList>>();

    const goBack = async (): Promise<void> => {
        try {
            setLoading(true);
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('success');
                }, 2000);
            });
        } finally {
            setLoading(false);
            showToast.success('Success');
            // showToast.success('Failed');
            // navigation.goBack();
            navigation.pop();
        }

    };
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <HistoryStackNavigation/>

        </View>
    );
}
export default ProfileScreen;

