import { StyleSheet, Text, View, ScrollView, ActivityIndicator, Image } from 'react-native'
import React, { useState } from 'react'
import Header from './components/universal/header'
import Banner from './components/universal/banner'
import Tabs from './components/universal/tabs'

import CategoryTabs from './components/universal/imageTabs'
import ProductCard from './components/universal/cards'
import MostPopular from './components/universal/mostPopular'
import Aed1100 from './components/universal/aed1-100'
import OrderStatusCard from './components/universal/orderStatusCard'
import BottomNavBar from './components/universal/bottomNavBar'
import LocationCard from './components/universal/locationCard'
import Search from './search'
import { styled } from 'nativewind'
// import Cards from './components/universal/cards'



const HomePage = () => {


    const [popcat, setpopCat] = useState([
        { "id": 0, "name": "All", "icon": "building-o", "colors": "#155C9E" },
        { "id": 6, "name": "Mobiles", "icon": "tshirt", "colors": "#155C9E" },
        { "id": 4, "name": "Desktops", "icon": "mobile", "colors": "#155C9E" },
        { 'id': 5, "name": 'Accessories', "icon": 'desktop', "colors": "#d4d4d4" },
        { "id": 11, "name": "Tablets", "icon": "cogs", "colors": "#155C9E" },
        { "id": 12, "name": "Tablets", "icon": "cogs", "colors": "#155C9E" },
    ]);
    const [activeCat, setactiveCat] = useState("All");
    const categorySearch = (data) => {
        console.log(data);
    }

    return (
        <View className="bg-white  flex px-2">
            <ScrollView className="   ">
                <View className="bg-[#F7F7FA]">
                    <LocationCard location="Sharjah, UAE" />
                    <Header />
                    <Banner width="100%" height={150} image="" />


                </View>
                <CategoryTabs data={popcat}
                    bgcolor="transparent"
                    tabVal={activeCat}
                    settabData={categorySearch} />
                <Tabs
                    data={popcat}
                    bgcolor="transparent"
                    tabVal={activeCat}
                    heading={"New Arrivals"}
                    settabData={categorySearch}
                />
                <ProductCard data={popcat}
                    bgcolor="transparent"
                    tabVal={activeCat}
                    settabData={categorySearch}
                />

                <Banner width="100%" height={150} image="a" />

                <MostPopular data={popcat}
                    bgcolor="transparent"
                    tabVal={activeCat}
                    settabData={categorySearch} />

                <OrderStatusCard />

                <Aed1100 data={popcat}
                    bgcolor="transparent"
                    tabVal={activeCat}
                    settabData={categorySearch} />


            </ScrollView>
            {/* <Search /> */}
            <BottomNavBar />
        </View>

    )
}

export default styled(HomePage);

const styles = StyleSheet.create({})