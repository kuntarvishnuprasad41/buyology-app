import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import { ArrowLeftIcon, ShareIcon, HeartIcon } from 'react-native-heroicons/outline'; // You can use icons from any icon library you prefer.

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        // Implement add to cart functionality
    };

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    return (
        <ScrollView className="bg-white flex-1 p-4">
            <View className="flex-row items-center justify-between">
                <TouchableOpacity className="p-2">
                    <ArrowLeftIcon size={24} />
                </TouchableOpacity>
                <Text className="text-xl font-semibold">iPhone 15 Pro</Text>
                <TouchableOpacity className="p-2">
                    <ShareIcon size={24} />
                </TouchableOpacity>
            </View>

            <Image
                source={{ uri: '' }}
                className="w-full h-64 mt-4 rounded-lg"
                resizeMode="contain"
            />

            <View className="absolute top-32 right-4">
                <TouchableOpacity className="p-2 bg-white rounded-full">
                    <HeartIcon size={24} color="gray" />
                </TouchableOpacity>
            </View>

            <View className="flex-row items-center justify-between mt-4">
                <View className="flex-row items-center">
                    <Text className="text-green-500 text-lg font-semibold">4.6</Text>
                    <Text className="text-gray-500 ml-1">(201)</Text>
                </View>
                <View className="bg-gray-100 px-2 py-1 rounded-lg">
                    <Text className="text-gray-700">Sale ends in: 01d:12h:53m</Text>
                </View>
            </View>

            <View className="bg-white p-4 rounded-lg mt-4 shadow">
                <Text className="text-purple-500 font-semibold">Apple</Text>
                <Text className="text-lg font-semibold mt-2">iPhone 15Pro 256GB Natural Titanium 5G with Facetime - International Version</Text>
                <Text className="text-xl font-bold mt-2 text-green-500">AED 4,299 <Text className="text-gray-500 line-through">5,099</Text> <Text className="text-green-500">15% off</Text></Text>
                <Text className="text-sm text-gray-500 mt-1">Get it by 22 May</Text>
            </View>

            <View className="flex-row items-center justify-between mt-4">
                <View className="flex-row items-center">
                    <TouchableOpacity className="p-2 bg-gray-200 rounded" onPress={decreaseQuantity}>
                        <Text className="text-lg font-semibold">-</Text>
                    </TouchableOpacity>
                    <Text className="mx-4 text-lg font-semibold">{quantity}</Text>
                    <TouchableOpacity className="p-2 bg-gray-200 rounded" onPress={increaseQuantity}>
                        <Text className="text-lg font-semibold">+</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    className="flex-1 bg-purple-600 py-3 ml-4 rounded-lg items-center"
                    onPress={handleAddToCart}
                >
                    <Text className="text-white text-lg font-semibold">ADD TO CART</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default ProductDetails;
