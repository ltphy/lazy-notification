import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {customNumericInputStyles} from "./CustomNumericInput.styles";
import Icon from "react-native-vector-icons/Ionicons";

interface NumericInputProps {
    minValue: number;
    maxValue: number;
    onLimitReached: (isMax: boolean, msg: string) => void;
    onChange: (value: number) => void;
    step?: number;
    value?: number;
}

const CustomNumericInput = ({onLimitReached, minValue = 1, maxValue, step = 1, onChange, value}: NumericInputProps) => {
    const [updatedValue, setUpdatedValue] = useState<number>(value ? value : 1);

    const dec = () => {
        let limitReach = false;
        let newValue = updatedValue;
        if (minValue === null || (newValue - step > minValue)) {
            newValue = newValue - step;
        } else {
            limitReach = true;

            newValue = minValue
        }
        if (newValue !== value) {
            onChange(newValue);
        }
        setUpdatedValue(newValue);
        if (limitReach) {
            onLimitReached(false, 'Reached Minimum Value!');
        }
    };
    const inc = () => {
        let limitReach = false;
        let newValue = updatedValue;
        if (maxValue === null || (newValue + step < maxValue)) {
            newValue = newValue + step;
        } else {
            limitReach = true;
            newValue = maxValue
        }
        setUpdatedValue(newValue);
        if (newValue !== value) {
            onChange(newValue);
        }
        if (limitReach) {
            onLimitReached(true, 'Reached Maximum Value!');
        }
    };

    return <View style={customNumericInputStyles.container}>
        <TouchableOpacity onPress={dec} style={customNumericInputStyles.buttonStyle}>
            <Icon name='md-remove' size={15}
                  style={customNumericInputStyles.iconStyle}/>
        </TouchableOpacity>
        <View style={[customNumericInputStyles.inputWrapperStyle]}>
            <Text style={customNumericInputStyles.inputStyle}>{updatedValue}</Text>
        </View>
        <TouchableOpacity onPress={inc} style={customNumericInputStyles.buttonStyle}>
            <Icon name='md-add' size={15}
                  style={[customNumericInputStyles.iconStyle]}/>
        </TouchableOpacity>
    </View>;
};

export default CustomNumericInput;
