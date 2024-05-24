import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NativeWindStyleSheet } from 'nativewind';
import { TouchableOpacity } from 'react-native';
import { router } from 'expo-router';


const BottomNavBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.navItem}>
                <TouchableOpacity key={1} onPress={() => { router.replace('./index'); }} className="mt-[0px] p-0 w-full flex items-center justify-center content-center" >

                    <Icon name="home" size={24} color="#4A148C" />
                    <Text style={[styles.navText, { color: '#4A148C' }]}>Home</Text>

                </TouchableOpacity>
            </View>
            <View style={styles.navItem}>
                <TouchableOpacity key={1} onPress={() => { router.replace('/categories'); }} className="mt-[0px] p-0 w-full flex items-center justify-center content-center" >
                    <Icon name="th" size={24} color="#888" />
                    <Text style={styles.navText}>Category</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.navItem}>
                <TouchableOpacity key={1} onPress={() => { }} className="mt-[0px] p-0 w-full flex items-center justify-center content-center" >
                    <Icon name="heart" size={24} color="#888" />
                    <Text style={styles.navText}>Wishlist</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.navItem}>
                <TouchableOpacity key={1} onPress={() => { }} className="mt-[0px] p-0 w-full flex items-center justify-center content-center" >
                    <Icon name="shopping-cart" size={24} color="#888" />
                    <Text style={styles.navText}>Cart</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.navItem}>
                <TouchableOpacity key={1} onPress={() => { }} className="mt-[0px] p-0" >
                    <Icon name="user" size={24} color="#888" />
                    <Text style={styles.navText}>Account</Text></TouchableOpacity>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    navItem: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    navText: {
        fontSize: 12,
        color: '#888',
        marginTop: 4,
    },
});

export default BottomNavBar;
