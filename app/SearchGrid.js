import { StyleSheet, Text, View, ScrollView, ActivityIndicator, Image } from 'react-native'
import React, { useState } from 'react'
import Header from './components/universal/header'
import Banner from './components/universal/banner'
import Tabs from './components/universal/tabs'
// import Tabs from './components/universal/tabs'

import CategoryTabs from './components/universal/imageTabs'
import ProductCard from './components/universal/cards'
import MostPopular from './components/universal/mostPopular'
import Aed1100 from './components/universal/aed1-100'
import OrderStatusCard from './components/universal/orderStatusCard'
import BottomNavBar from './components/universal/bottomNavBar'
import LocationCard from './components/universal/locationCard'
import Search from './search'
import { styled } from 'nativewind'
import ProductsGrid from './components/universal/productsGrid'
import { TouchableOpacity } from 'react-native-web'

import { FontAwesome } from '@expo/vector-icons';
import { ArrowLeftIcon, ShareIcon, HeartIcon } from 'react-native-heroicons/outline';
// import Cards from './components/universal/cards'



const SearchGrid = () => {


    const [popcat, setpopCat] = useState([
        { "id": 0, "name": "Refurbished", "icon": "building-o", "colors": "#155C9E" },
        { "id": 6, "name": "Brand New", "icon": "tshirt", "colors": "#155C9E" },
        { "id": 4, "name": "Mobiles", "icon": "mobile", "colors": "#155C9E" },
        { 'id': 5, "name": 'Accessories', "icon": 'desktop', "colors": "#d4d4d4" },
        { "id": 11, "name": "Tablets", "icon": "cogs", "colors": "#155C9E" },
        { "id": 12, "name": "Tablets", "icon": "cogs", "colors": "#155C9E" },
    ]);
    const [activeCat, setactiveCat] = useState("All");
    const categorySearch = (data) => {
        console.log(data);
    }

    return (
        <View className="bg-white  flex   ">
            {/* <View className="flex-row items-center justify-between">
                <TouchableOpacity className="p-2">
                    <ArrowLeftIcon size={24} />
                </TouchableOpacity>
                <Text className="text-xl font-semibold">iPhone 15 Pro</Text>
                <TouchableOpacity className="p-2">
                    <ShareIcon size={24} />
                </TouchableOpacity>
            </View> */}
            <ScrollView className="   ">
                <Tabs
                    data={popcat}
                    bgcolor="transparent"
                    tabVal={activeCat}
                // heading={""}
                // settabData={categorySearch}
                />
                <ProductsGrid type={"search"} />
            </ScrollView>
            {/* <Search /> */}
            <BottomNavBar />
        </View>

    )
}

export default styled(SearchGrid);

const styles = StyleSheet.create({})