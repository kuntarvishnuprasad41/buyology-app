import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import ProductsCard, { ProductCard } from './components/universal/cards';
import { router } from 'expo-router';
import { useNavigation } from 'expo-router';

export default function Account() {
    const navigation = useNavigation();
    return (
        <ScrollView className="flex-1 bg-gray-100">
            {/* Header */}
            <View className="bg-white ">
                <View className="p-4 bg-white flex-row items-center justify-between">
                    <Text className="text-xl font-bold">Hi, John Doe</Text>
                    <TouchableOpacity>
                        <Text className="text-blue-500">Edit</Text>
                    </TouchableOpacity>
                </View>

                {/* Profile Section */}
                <View className="p-4 bg-white mt-2">
                    <Text>Complete your profile to personalize your experience!</Text>
                </View>

                {/* Announcement Section */}
                <View className="m-2 p-4 bg-[#F7F7FA] rounded-md mt-2 flex flex-row justify-center items-center content-center">
                    <View>
                        <Text>Announcement</Text>
                        <Text className="text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</Text>
                    </View>
                    <View className="bg-[#3C3271] p-1 rounded-2xl">
                        <FontAwesome name="arrow-right" size={14} color="white" />
                    </View>
                </View>
            </View>

            {/* My Orders Section */}
            <View className="p-4 bg-white mt-2 flex gap-2">
                <Text className="font-bold mb-2">My Orders</Text>
                <TouchableOpacity className="flex-row items-center py-3 border rounded-md border-[#402F75] p-2" onPress={() => { router.replace('/ordersToRecieve') }}>
                    <FontAwesome name="inbox" size={24} color="black" />
                    <Text className="ml-2">Orders to Receive</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center py-3  border rounded-md  border-[#402F75] p-2">
                    <FontAwesome name="star" size={24} color="black" />
                    <Text className="ml-2">Orders to Review</Text>
                </TouchableOpacity>
            </View>

            {/* Recently Viewed Section */}
            <View className="p-4 bg-white mt-2">
                <Text className="font-bold mb-2">Recently Viewed</Text>
                <ScrollView horizontal>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </ScrollView>
            </View>

            {/* My Account Section */}
            <View className="p-4 bg-white mt-2 flex gap-2">
                <Text className="font-bold mb-2">My Account</Text>
                <TouchableOpacity className="flex-row items-center py-3 border rounded-md  border-[#402F75] p-2">
                    <View className="bg-[#FFF8E7] p-2 rounded-3xl">
                        <FontAwesome name="heart" size={24} color="#402F75" />
                    </View>
                    <Text className="ml-2">Wishlist</Text>
                </TouchableOpacity>

                <TouchableOpacity className="flex-row items-center py-3 border rounded-md  border-[#402F75] p-2">
                    <View className="bg-[#FFF8E7] p-2 rounded-3xl">
                        <FontAwesome name="ticket" size={24} color="#402F75" />
                    </View>
                    <Text className="ml-2">Vouchers</Text>
                </TouchableOpacity>

                <TouchableOpacity className="flex-row items-center py-3 border rounded-md  border-[#402F75] p-2">
                    <View className="bg-[#FFF8E7] p-2 rounded-3xl">
                        <FontAwesome name="address-book" size={24} color="#402F75" />
                    </View>
                    <Text className="ml-2">Addresses</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center py-3 border rounded-md  border-[#402F75] p-2">
                    <View className="bg-[#FFF8E7] p-2 rounded-3xl">

                        <FontAwesome name="credit-card" size={24} color="#402F75" />
                    </View>
                    <Text className="ml-2">Payment</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center py-3 border rounded-md  border-[#402F75] p-2">
                    <View className="bg-[#FFF8E7] p-2 rounded-3xl">

                        <FontAwesome name="wrench" size={24} color="#402F75" />
                    </View>
                    <Text className="ml-2">Warranty Claim</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center py-3 border rounded-md  border-[#402F75] p-2">
                    <View className="bg-[#FFF8E7] p-2 rounded-3xl">

                        <FontAwesome name="undo" size={24} color="#402F75" />
                    </View>
                    <Text className="ml-2">Returns</Text>
                </TouchableOpacity>
            </View>

            {/* Settings Section */}
            <View className="p-4 bg-white mt-2 mb-4 flex gap-0">
                <Text className="font-bold mb-2">Settings</Text>
                <TouchableOpacity className="py-3 border-t border-l border-r rounded-t-md   border-[#402F75] p-4">
                    <Text className="ml-2">Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity className="py-3 border   border-[#402F75] p-4">
                    <Text className="ml-2">Country</Text>
                </TouchableOpacity>
                <TouchableOpacity className="py-3 border-l border-r   border-[#402F75] p-4">
                    <Text className="ml-2">Language</Text>
                </TouchableOpacity>
                <TouchableOpacity className="py-3  border  rounded-b-md border-[#402F75] p-4">
                    <Text className="ml-2">Language</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
