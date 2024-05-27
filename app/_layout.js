import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';


const RootLayout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="categories" options={{ headerShown: false }} />


            </Stack>
        </>
    )
}

export default RootLayout

const styles = StyleSheet.create({})