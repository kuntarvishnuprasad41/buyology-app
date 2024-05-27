import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Icon from '@expo/vector-icons/Ionicons'
import s from '../styles/mainStyle';

const Search = () => {
    return (
        <View className="bg-white h-screen">
            <View className="bg-white h-24 w-screen flex justify-end p-5 ">
                <Icon name="arrow-back" size={18} />
                <View style={[s.row, s.pd10]}>
                    <Text>
                        <Icon name="search" size={18} onPress={() => router.replace('/search')} />
                    </Text>
                    <TextInput
                        placeholder='Search mobiles, laptops ...'
                        style={[s.fl1, s.pdlt10, s.f14]}

                    />


                </View>


            </View>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }}
            />


            <View className="p-6 flex flex-row justify-between">
                <Text className="text-[15px] font-bold">Recent Searches</Text>
                <Text className="text-[14px] text-[#402F75]"> Clear</Text>

            </View>


            <SearchHistory />
            <PopularSearches />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({})


export const SearchHistory = () => {
    return <>
        <View className="flex flex-col gap-6 " >
            {Array.from({ length: 5 }).map((_, index) => (
                <View className="">

                    <View className="flex flex-row justify-between px-5">
                        <Text className=" text-[14px]">Some random search history</Text>
                        <Icon name="arrow-right-up" size={18} />
                    </View>

                    <View
                        style={{
                            borderBottomColor: '#CCCCCC',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }}
                        className="mt-2"
                    />

                </View>


            ))}
        </View>
    </>
}


const PopularSearches = () => {
    return <View className="">
        {Array.from({ length: 5 }).map((_, index) => (
            <View className="bg-[#F2F2F2] w-[50px]">

                <Text>Hey</Text>

            </View>


        ))}
    </View>
}