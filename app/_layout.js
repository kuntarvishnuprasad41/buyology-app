import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';


const RootLayout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="allCategories" options={{ headerShown: true }} />
                <Stack.Screen name="productDetails" options={{ headerShown: true }} />
                <Stack.Screen name="search" options={{ headerShown: false }} />

            </Stack>
        </>
    )
}

export default RootLayout

const styles = StyleSheet.create({})