
// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState } from "react";
import { TouchableOpacity, Image, Text, View, StyleSheet, ScrollView, TabBarIOSItem } from 'react-native'
// import DefaultImage from '../../../assets/temp/iPhone.png';
const DEFAULT_IMAGE = "http://dev.sscinitiatives.com:6002/assets/temp/iPhoneLive.png";


const MostPopular = (props) => {

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
                    // height: 300
                }}>
                {props.data.map((data, i) => {
                    return (
                        <View className="flex justify-start  " key={i}>

                            <TouchableOpacity key={i} onPress={() => props.settabData(data.title ? data.title : data.id ? data.id : data.name)} className="mt-[0px] p-0" >

                                <MostPopularCard />

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
        // padding: 10,
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

        backgroundColor: '#FFE5A0',
        padding: 4,
        width: 80,
        borderRadius: 40,
    },
    certifiedText: {
        fontSize: 12,
        fontWeight: 'bold',
    },

})

export default MostPopular;


export const MostPopularCard = () => {
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

            <View className="flex p-3 flex-col   bg-white ">
                <Text className=" line-clamp-2 text-[16px] font-medium mb-2" >Apple iPhone 15 Pro Max 256GB Natural...</Text>
                {/* <View className=" flex flex-row justify-start mb-2">
                    <Text style={styles.currentPrice} >AED 4,299</Text>
                    <Text style={styles.originalPrice}>5,099</Text>
                    <Text style={styles.discount}>15%</Text>
                </View> */}
                <View style={styles.certifiedContainer}>
                    <Text style={styles.certifiedText}>&nbsp;Sold Out 145</Text>
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



// const MostPopularCard = () => {
//     return (
//         <View style={styles.card} className="flex flex-col max-w-[170px]  items-center h-[290px] gap-0">
//             <Image
//                 source={{ uri: DEFAULT_IMAGE }} // Replace with your image URL
//                 style={styles.image}
//             />
//             <View className="flex flex-row w-full justify-between content-center mb-3">
//                 <View style={styles.ratingContainer} className="flex items-center content-center justify-center">
//                     <Text style={styles.ratingText}>4.6</Text>
//                     <Icon name="star" size={16} color="#4caf50" />
//                 </View>
//                 <View>
//                     <TouchableOpacity style={styles.cartButton}>
//                         <Icon name="shopping-cart" size={16} color="#fff" />
//                     </TouchableOpacity>
//                 </View>
//             </View>

//             <View className="flex gap-2 mb-2 justify-start items-start content-start w-full">


//                 <View style={styles.certifiedContainer}>
//                     <Text style={styles.certifiedText}>&nbsp;Sold 145</Text>
//                 </View>
//             </View>

//         </View>
//     );
// };



