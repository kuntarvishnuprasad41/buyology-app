//initial flow
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Platform, SafeAreaView, View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './index.js';
import Shop from './index.js';
import Saved from './index.js';
import Profile from './index.js';
import AccountStacks from './index.js';
const Tab = createBottomTabNavigator();
const MyTabs = () => {


    return (

        <Tab.Navigator initialRouteName="Profile"
            screenOptions={{
                headerShown: true,
            }}

        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" color={color} size={20} />
                    )
                }}
            />
            <Tab.Screen name="Shop" component={Shop}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="grid-outline" color={color} size={20} />
                    )
                }}
            />

            <Tab.Screen name="Saved" component={Saved}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="heart-outline" color={color} size={20} />
                    )
                }}
            />

            <Tab.Screen name="account"
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="person-circle-outline" color={color} size={20} />
                    ),
                    headerShown: false,
                    headerTitle: 'Account'
                }}>
                {(props) => <AccountStacks {...props} />}
            </Tab.Screen>

        </Tab.Navigator>
    )
}


const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#ffffff'
    },
};
export default function App() {

    return (
        <SafeAreaView style={[s.fl1, Platform.OS === 'android' && s.mgtp30]}>

            <NavigationContainer theme={MyTheme} >
                <MyTabs />
            </NavigationContainer>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const s = StyleSheet.create({
    fl1: { flex: 1 },
    mgtp30: { marginTop: 30 }
})


{/* <SafeAreaView style={[s.fl1]}>
		<Text>Hekki</Text>
      <StatusBar style="auto" />
	</SafeAreaView> */}