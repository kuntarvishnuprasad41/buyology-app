import React from "react";
import { Dimensions, View, Text, TextInput } from 'react-native'
import Icon from '@expo/vector-icons/Ionicons'
import s from '../../../styles/mainStyle';
import { router } from "expo-router";



const { width, height } = Dimensions.get('window');

export default function Header(props) {
    return (
        <View style={[s.row, s.rowflStart, s.pdlt10, s.mgbt20, s.pdtp10, s.pdbt10]} >
            <View style={[{ width: width / 1.08, backgroundColor: '#FFF', borderWidth: 1, borderColor: "#d4d4d4", borderRadius: 140, height: 40 }]}>
                <View style={[s.row, s.pd10]}>
                    <Text>
                        <Icon name="search" size={18} onPress={() => router.replace('/search')} />
                    </Text>
                    <TextInput
                        placeholder='Search mobiles, laptops ...'
                        style={[s.fl1, s.pdlt10, s.f14]}

                    />
                </View>
            </View>

        </View>
    )
}