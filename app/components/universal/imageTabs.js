import React, { useState } from "react";
import { TouchableOpacity, Text, View, StyleSheet, ScrollView, TabBarIOSItem } from 'react-native'

const CategoryTabs = (props) => {

    const tab = (a) => {
        console.log('OK')
    }

    return (

        <View style={{ flex: 1, flexDirection: 'col', alignItems: 'flex-start', paddingTop: 16 }} className="mb-[16px]" >
            <View className="flex flex-row justify-between w-screen px-2 pb-0">
                <Text className="font-bold text-black mb-1  py-2 text-[17px]">Category</Text>
                <Text className="font-bold text-[#402F75] mb-1 p-2">See All</Text>
            </View>
            <ScrollView
                horizontal
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    backgroundColor: props.bgcolor,
                    height: 100
                }}>
                {props.data.map((data, i) => {
                    return (
                        <View className="flex justify-center items-center content-center h-20" key={i}>

                            <TouchableOpacity key={i} onPress={() => { }} style={[styles.item, props.tabVal === data.id && styles.itemActive]} >


                            </TouchableOpacity>
                            <Text style={styles.tab}>{data.title ? data.title : data.name}</Text>
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
        backgroundColor: '#d9deea90',
        paddingLeft: 15,
        marginTop: 15,
        paddingRight: 15,
        padding: 7,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '	rgba(211,211,211,0.5)',
        marginLeft: 8,
        // marginRight: 8,
        marginBottom: 1,
        height: 70,
        width: 70
    },
    itemActive: {
        paddingBottom: 10,
        borderWidth: 1.4,
        borderColor: "red"

    }
})

export default CategoryTabs;