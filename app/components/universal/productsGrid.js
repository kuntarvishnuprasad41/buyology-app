import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native'; // Import View from react-native
import { ProductCard } from './cards';


const ProductsGrid = () => {
    return (
        <ScrollView
            vertical
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ height: 650 }}
        >
            {/* Replace <div> with <View> */}
            <View style={styles.gridContainer}>
                {Array.from({ length: 5 }).map((index) => (
                    <ProductCard key={index} key={index} />
                ))}
            </View>
        </ScrollView>
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
});
