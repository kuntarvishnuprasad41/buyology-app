
// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState } from "react";
import { TouchableOpacity, Image, Text, View, StyleSheet, ScrollView, TabBarIOSItem } from 'react-native'
import DefaultImage from '../../../assets/temp/iPhone.png';
const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;


const Aed1100 = (props) => {

    const tab = (a) => {
        console.log('OK')
    }

    return (

        <View style={{ flex: 1, flexDirection: 'col', alignItems: 'flex-start', paddingTop: 5 }}>
            <View className="flex flex-row justify-between w-screen px-2">
                <Text className="font-bold text-black mb-1 p-2 text-[20px]">Most Popular</Text>
                <Text className="font-bold text-[#402F75] mb-1 p-2">See All</Text>
            </View>

            <ScrollView
                horizontal
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    backgroundColor: props.bgcolor,
                    height: 450
                }}>
                {props.data.map((data, i) => {
                    return (
                        <View className="flex justify-start  ">

                            <TouchableOpacity key={i} onPress={() => props.settabData(data.title ? data.title : data.id ? data.id : data.name)} style={[styles.item, props.tabVal === data.id && styles.itemActive]} className="mt-[0px] p-1" >

                                <ProductCard />

                            </TouchableOpacity>

                        </View>
                    )
                })

                }

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    tab: {
        color: "#000",
    }, container: {
        flex: 1, flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    item: {

    },
    itemActive: {
        paddingBottom: 10,
        borderWidth: 1.4,
        borderColor: "red"

    }, card: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        margin: 10,
        backgroundColor: '#fff',
    },
    image: {
        width: 167,
        height: 192,
        resizeMode: 'cover',
        borderRadius: 8,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    ratingText: {
        marginRight: 4,
        fontSize: 16,
        color: '#4caf50',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 8,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    currentPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    originalPrice: {
        fontSize: 14,
        color: '#888',
        textDecorationLine: 'line-through',
        marginLeft: 8,
    },
    discount: {
        fontSize: 14,
        color: '#4caf50',
        marginLeft: 8,
    },
    cartButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#4caf50',
        padding: 8,
        borderRadius: 4,
    },
    certifiedContainer: {
        marginTop: 2,

        position: 'relative',

        backgroundColor: '#ffeb3b',
        padding: 4,
        width: 60,
        borderRadius: 40,
    },
    certifiedText: {
        fontSize: 12,
        fontWeight: 'bold',
    },

})

export default Aed1100;

export const ProductCard = () => {
    return (
        <View style={styles.card} className="flex flex-col max-w-[170px]  items-center h-[360px] gap-0">
            <Image
                source={{ uri: DEFAULT_IMAGE }} // Replace with your image URL
                style={styles.image}
            />
            <View className="flex flex-row w-full justify-between content-center mb-3">
                <View style={styles.ratingContainer} className="flex items-center content-center justify-center">
                    <Text style={styles.ratingText}>4.6</Text>
                    <Icon name="star" size={16} color="#4caf50" />
                </View>
                <View>
                    <TouchableOpacity style={styles.cartButton}>
                        <Icon name="shopping-cart" size={16} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>

            <View className="flex gap-2 mb-2">
                <Text style={styles.title} className="line-clamp-2" >Apple iPhone 15 Pro Max 256GB Natural...</Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.currentPrice}>AED 4,299</Text>
                    <Text style={styles.originalPrice}>5,099</Text>
                    <Text style={styles.discount}>15%</Text>
                </View>

                <View style={styles.certifiedContainer}>
                    <Text style={styles.certifiedText}>&nbsp;Certified</Text>
                </View>
            </View>

        </View>
    );
};



