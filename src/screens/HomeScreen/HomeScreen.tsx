import {useNavigation} from "@react-navigation/native";
import React, {useRef, useState} from "react";
import {Button, Text, View} from "react-native";
import {StackNavigationProp} from '@react-navigation/stack';
import {MainRouteName, MainRouteParamList} from "../../Navigation/MainRoute.constants";
import NumericInput from "react-native-numeric-input";
import CustomNumericInput from "../../components/CustomNumericInput";

const HomeScreen = () => {
    const navigation = useNavigation<StackNavigationProp<MainRouteParamList>>();
    const [value, setValue] = useState<number>();
    const firstMax = useRef<boolean>(false);

    const onLimitReach = (isMax: boolean, msg: string) => {
        if (isMax && !firstMax.current) {
            firstMax.current = true;
            return;
        }
        if (isMax && firstMax.current) {
            console.log('limitReach');
        }
    };
    const onValueChanged = (value: number) => {
        if (firstMax.current) {
            firstMax.current = false;
        }
        setValue(value);
    };

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate(MainRouteName.ProfileScreen)}
            />
            <NumericInput
                value={value}
                onChange={value => setValue(value)}
                onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                // totalWidth={93.53}
                // totalHeight={0}
                iconSize={25}
                step={1}
                valueType='integer'
                textColor='#000000'
                iconStyle={{color: 'white', fontSize: 28}}
                rightButtonBackgroundColor='#ff8133'
                containerStyle={{borderColor: 'transparent'}}
                buttonStyle={{borderRadius: 4}}
                editable={false}
                borderColor={'transparent'}
                inputStyle={{
                    borderColor: 'transparent',
                    borderWidth: 0,
                    borderRightWidth: 0,
                    borderLeftWidth: 0,
                }}
                leftButtonBackgroundColor='#ff8133'/>
            <CustomNumericInput minValue={1} maxValue={3} onLimitReached={onLimitReach} onChange={onValueChanged}
                                value={value}/>
        </View>
    );
};

export default HomeScreen;