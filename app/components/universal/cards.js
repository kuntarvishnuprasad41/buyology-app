import React, { useState } from "react";
import { TouchableOpacity, Text, View, StyleSheet, ScrollView, TabBarIOSItem, Image } from 'react-native'
import DefaultImage from '../../../assets/temp/iPhone.png';

const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;

const Cards = (props) => {

    const tab = (a) => {
        console.log('OK')
    }

    return (

        <View style={{ flex: 1, flexDirection: 'col', alignItems: 'flex-start', paddingTop: 5 }} className="mb-5">

            <ScrollView
                horizontal
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    backgroundColor: props.bgcolor,

                }}

            >
                {props.data.map((data, i) => {
                    return (


                        <TouchableOpacity key={i} onPress={() => props.settabData(data.title ? data.title : data.id ? data.id : data.name)} style={[styles.item, props.tabVal === data.id && styles.itemActive]} className="flex flex-col justify-start content-start items-start " >

                            <View className="w-full h-full p-2">
                                <Image source={{ uri: DEFAULT_IMAGE }}
                                    // source={{ uri: props.image }}
                                    style={{ width: '100%', height: '100%', resizeMode: 'contain', borderRadius: 0 }}
                                />
                            </View>
                        </TouchableOpacity>


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
        backgroundColor: '#fff',

        borderRadius: 10,
        borderWidth: 1,
        borderColor: '	rgba(211,211,211,0.5)',
        marginLeft: 10,
        marginRight: 8,

        height: 304.02,
        width: 183.07
    },
    itemActive: {
        paddingBottom: 10,
        borderWidth: 1.4,
        borderColor: "red"

    }
})

export default Cards;