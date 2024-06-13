import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'; // Import View from react-native
import { ProductCard } from './cards';
import { Image } from 'react-native';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



const ProductsGrid = ({ type }) => {


    const [popcat, setpopCat] = useState([
        { "id": 0, "name": "All", "icon": "building-o", "colors": "#155C9E" },
        { "id": 6, "name": "Mobiles", "icon": "tshirt", "colors": "#155C9E" },
        { "id": 4, "name": "Desktops", "icon": "mobile", "colors": "#155C9E" },
        { 'id': 5, "name": 'Accessories', "icon": 'desktop', "colors": "#d4d4d4" },
        { "id": 11, "name": "Tablets", "icon": "cogs", "colors": "#155C9E" },
        { "id": 12, "name": "Tablets", "icon": "cogs", "colors": "#155C9E" },
    ]);


    return (
        <View className=" ">

            <ScrollView
                vertical
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            // contentContainerStyle={{ height: 650 }}
            >
                {/* Replace <div> with <View> */}



                <View style={styles.gridContainer} className="flex">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <View className="my-2" key={index}>
                            {type == "search" ? <SearchCard /> : <ProductCard key={index} />}
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default ProductsGrid;



const styles = StyleSheet.create({
    gridContainer: {
        // Add your grid layout styles here using Flexbox or other layout techniques
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between', // Adjust as needed
        padding: 10, // Add some padding around the grid items
    },

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
        // borderRadius: 8,
        // borderWidth: 1,
        // borderColor: '#ddd',
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
        // position: 'absolute',
        // top: 10,
        // right: 10,
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 4,
    },
    wishlistButton: {
        // position: 'absolute',
        // top: 10,
        // right: 10,
        // backgroundColor: 'white',
        padding: 8,
        borderRadius: 4,
    },
    certifiedContainer: {
        marginTop: 0,

        position: 'relative',

        backgroundColor: '#FFBE12',
        padding: 2,
        width: 60,
        borderRadius: 40,
    },
    certifiedText: {
        fontSize: 12,
        fontWeight: 'bold',
    },

});


export const SearchCard = () => {

    const DEFAULT_IMAGE = "http://dev.sscinitiatives.com:6002/assets/temp/iPhoneLive.png"
    const wishlist_b = "http://dev.sscinitiatives.com:6002/assets/icons/wishlist-b.svg"
    return (

        // <View className="flex flex-col gap-2">
        //     <Text>Hey</Text>
        //     <Text>Hello</Text>
        // </View>

        <View style={styles.card} className="flex flex-col max-w-[200px]  items-start content-start justify-start  gap-0 overflow-hidden  ">
            <View className="w-full h-[200px] rounded-t-[8px]">
                <Image
                    source={{ uri: DEFAULT_IMAGE }}
                    // style={styles.image}
                    className="w-full h-[200px]  rounded-xl"
                />
            </View>

            <View className="flex p-3 flex-col   bg-white ">
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

            <View className=" flex flex-row w-full  justify-between   absolute p-2 mt-[300px] h-[355px]  ">
                <View className="flex items-center content-center justify-center">
                    <View className="flex flex-row  bg-white rounded-[30px] w-[60px] h-[24px]  justify-center content-center items-center">
                        <Text className="text-[#4caf50] mr-1 ">4.6</Text>
                        <Icon name="star" size={12} color="#4caf50" />
                    </View>

                </View>
                <View className="mt-[155px]">
                    <TouchableOpacity style={styles.cartButton}>
                        <View>
                            <Icon name="shopping-cart" size={16} color="#000" />
                        </View>
                    </TouchableOpacity>
                </View>

                <View className="absolute ml-[150px] mt-2">
                    <TouchableOpacity style={styles.wishlistButton}>
                        <View>
                            {/* <Icon name="heart" size={16} color="#000" /> */}
                            <Image source={{ uri: wishlist_b }} className="w-[30px] h-[30px]" />
                        </View>
                    </TouchableOpacity>
                </View>


            </View>
        </View>
    );
};
