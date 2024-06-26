import React, { useState } from "react";
import { TouchableOpacity, Text, View, StyleSheet, ScrollView, TabBarIOSItem } from 'react-native'
import index from "../..";

const Tabs = (props) => {

    const tab = (a) => {
        console.log('OK')
    }

    return (

        <View style={{ flex: 1, flexDirection: 'col', alignItems: 'flex-start', paddingTop: 5 }} className="h-15 ">
            {props.heading ? <View className="flex flex-row justify-between w-screen px-2">
                <Text className="font-bold text-black mb-1 pb-0 text-[17px]">{props.heading}</Text>
            </View> : <></>}

            <ScrollView
                horizontal
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    backgroundColor: props.bgcolor,
                    height: 60
                }}>
                {props.data.map((data, i) => {
                    return (
                        <View key={i}>
                            <TouchableOpacity key={i} onPress={() => props.settabData(data.title ? data.title : data.id ? data.id : data.name)} style={[styles.item, props.tabVal === data.id && styles.itemActive]} >
                                <Text style={styles.tab}>{data.title ? data.title : data.name}</Text>
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
        backgroundColor: '#d9deea90',
        paddingLeft: 15,
        paddingRight: 15,
        padding: 7,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '	rgba(211,211,211,0.5)',
        marginLeft: 8,
        // marginRight: 8,
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    itemActive: {
        paddingBottom: 10,
        borderWidth: 1.4,
        borderColor: "red"

    }
})

export default Tabs;