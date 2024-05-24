import React from "react";
import { Dimensions, View, Text, TextInput } from 'react-native'
import Icon from '@expo/vector-icons/Ionicons'
import s from '../../../styles/mainStyle';


const { width, height } = Dimensions.get('window');

export default function SecondaryHeader(props) {
    return (
        <View   >
            <View style={[{ width: width, backgroundColor: '#FFF', height: 40 }]} className="w-screen mt-10">
                <View style={[s.row, s.pd10]}>
                    <Text>
                        <Icon name="arrow-back" size={18} />
                        {props.name}
                    </Text>

                </View>
            </View>

        </View>
    )
}