import { StyleSheet, Text, View, ScrollView, ActivityIndicator, Image } from 'react-native'
import React, { useState } from 'react'
import Header from './components/universal/header'
import Banner from './components/universal/banner'
import Tabs from './components/universal/tabs'

import CategoryTabs from './components/universal/imageTabs'
import Cards from './components/universal/cards'



const index = () => {


    const [popcat, setpopCat] = useState([
        { "id": 0, "name": "All", "icon": "building-o", "colors": "#155C9E" },
        { "id": 6, "name": "Mobiles", "icon": "tshirt", "colors": "#155C9E" },
        { "id": 6, "name": "Desktops", "icon": "mobile", "colors": "#155C9E" },
        { 'id': 5, name: 'Accessories', Icon: 'desktop', colors: "#d4d4d4" },
        { "id": 11, "name": "Tablets", "icon": "cogs", "colors": "#155C9E" },
    ]);
    const [activeCat, setactiveCat] = useState("All");
    const categorySearch = (data) => {
        console.log(data);
    }

    return (
        <ScrollView >
            <Header />
            <Banner width="100%" height={150} image="" />

            <CategoryTabs data={popcat}
                bgcolor="transparent"
                tabVal={activeCat}
                settabData={categorySearch} />
            <Tabs
                data={popcat}
                bgcolor="transparent"
                tabVal={activeCat}
                settabData={categorySearch}
            />
            <Cards data={popcat}
                bgcolor="transparent"
                tabVal={activeCat}
                settabData={categorySearch}
            />

            <Banner width="100%" height={150} image="" />


        </ScrollView>
    )
}

export default index

const styles = StyleSheet.create({})