import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SecondaryHeader from './components/universal/secondaryHeader'
import Tabs from './components/universal/tabs';
import ProductsGrid from './components/universal/productsGrid';
import BottomNavBar from './components/universal/bottomNavBar';

const categories = () => {
    const [categories, setCategories] = useState("Buyology Certified");
    const [popcat, setpopCat] = useState([
        { "id": 0, "name": "Refurbished", "icon": "building-o", "colors": "#155C9E" },
        { "id": 6, "name": "Brand New", "icon": "tshirt", "colors": "#155C9E" },
        { "id": 4, "name": "Mobiles", "icon": "mobile", "colors": "#155C9E" },
        { 'id': 5, name: 'Accessories', icon: 'desktop', colors: "#d4d4d4" },
        { "id": 11, "name": "Tablets", "icon": "cogs", "colors": "#155C9E" },
    ]);
    const [activeCat, setactiveCat] = useState("All");
    const categorySearch = (data) => {
        console.log(data);
    }
    return (
        <View className="h-screen">
            <SecondaryHeader name={categories} />
            <Tabs
                data={popcat}
                bgcolor="transparent"
                tabVal={activeCat}
                heading={false}
                settabData={categorySearch}
            />

            <ProductsGrid />
            <BottomNavBar />

        </View>
    )
}

export default categories

const styles = StyleSheet.create({})