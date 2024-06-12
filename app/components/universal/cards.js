
// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState } from "react";
import { TouchableOpacity, Image, Text, View, StyleSheet, ScrollView, TabBarIOSItem } from 'react-native'
// import DefaultImage from '../../../assets/temp/iPhone.png';
const DEFAULT_IMAGE = "http://dev.sscinitiatives.com:6002/assets/temp/iPhoneLive.png";


const ProductsCard = (props) => {

    const tab = (a) => {
        console.log('OK')
    }

    return (

        <View style={{ flex: 1, flexDirection: 'col', alignItems: 'flex-start', paddingTop: 5 }}>

            <ScrollView
                horizontal
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    backgroundColor: props.bgcolor,

                }}>
                {props.data.map((data, i) => {
                    return (
                        <View className="flex justify-start  " key={i}>

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
        // overflow: 'hidden',
        margin: 0,
        backgroundColor: '#fff',
    },
    image: {
        width: 150,
        height: 192,
        resizeMode: 'cover',
        borderRadius: 8,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    ratingText: {

        fontSize: 16,
        color: '#4caf50',
    },
    title: {
        fontSize: 16,
        fontWeight: 'semibold',

    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    currentPrice: {
        fontSize: 16,
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
        marginTop: 0,

        position: 'relative',

        backgroundColor: '#ffeb3b',
        padding: 2,
        width: 60,
        borderRadius: 40,
    },
    certifiedText: {
        fontSize: 12,
        fontWeight: 'bold',
    },

})

export default ProductsCard;


export const ProductCard = () => {
    return (

        // <View className="flex flex-col gap-2">
        //     <Text>Hey</Text>
        //     <Text>Hello</Text>
        // </View>

        <View style={styles.card} className="flex flex-col max-w-[200px]  items-start content-start justify-start  gap-0 overflow-hidden">
            <View className="w-full h-[200px] rounded-t-[8px]">
                <Image
                    source={{ uri: DEFAULT_IMAGE }} // Replace with your image URL
                    // style={styles.image}
                    className="w-full h-[200px]  "
                />
            </View>

            <View className="flex p-3m flex-col   bg-white ">
                <Text className=" line-clamp-2 text-[16px] font-medium mb-2" >Apple iPhone 15 Pro Max 256GB Natural...</Text>
                <View className=" flex flex-row justify-start mb-2">
                    <Text style={styles.currentPrice} >AED 4,299</Text>
                    <Text style={styles.originalPrice}>5,099</Text>
                    <Text style={styles.discount}>15%</Text>
                </View>
                <View style={styles.certifiedContainer}>
                    <Text style={styles.certifiedText}>&nbsp;Certified</Text>
                </View>
            </View>

            <View className=" flex flex-row w-full h-[360px] justify-between   absolute p-2 mt-[300px]  ">
                <View className="flex items-center content-center justify-center">
                    <View className="flex flex-row  bg-white rounded-[30px] w-[60px] h-[24px]  justify-center content-center items-center">
                        <Text className="text-[#4caf50] mr-1 ">4.6</Text>
                        <Icon name="star" size={12} color="#4caf50" />
                    </View>
                </View>
                {/* <View>
                    <TouchableOpacity style={styles.cartButton}>
                        <Icon name="shopping-cart" size={16} color="#fff" />
                    </TouchableOpacity>
                </View> */}
            </View>
        </View>
    );
};



