import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
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
                source={{ uri: 'http://dev.sscinitiatives.com:6002/assets/temp/iPhone.png' }}
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

            <ProductSpec />

        </ScrollView>



    );
};

export default ProductDetails;


export const ProductSpec = () => {
    const [selectedColor, setSelectedColor] = useState('Natural Titanium');
    const [selectedMemory, setSelectedMemory] = useState('256GBGB');

    const colors = ['Natural Titanium', 'Blue Titanium', 'Black'];
    const memories = ['128GB', '256GBGB', '512GB', '1TB'];
    return <ScrollView className="flex-1 bg-white p-4">
        <View className="mb-4">
            <Text className="text-lg font-bold">Color</Text>
            <View className="flex flex-row mt-2">
                {colors.map(color => (
                    <TouchableOpacity
                        key={color}
                        onPress={() => setSelectedColor(color)}
                        className={`mr-2 px-4 py-2 border rounded-full ${selectedColor === color ? 'border-purple-500' : 'border-gray-300'
                            }`}
                    >
                        <Text className={`${selectedColor === color ? 'text-purple-500' : 'text-gray-700'}`}>{color}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>

        <View className="mb-4">
            <Text className="text-lg font-bold">Internal Memory</Text>
            <View className="flex flex-row mt-2">
                {memories.map(memory => (
                    <TouchableOpacity
                        key={memory}
                        onPress={() => setSelectedMemory(memory)}
                        className={`mr-2 px-4 py-2 border rounded-full ${selectedMemory === memory ? 'border-purple-500' : 'border-gray-300'
                            }`}
                    >
                        <Text className={`${selectedMemory === memory ? 'text-purple-500' : 'text-gray-700'}`}>{memory}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>

        <View className="mb-4 p-4 bg-yellow-100 rounded-lg">
            <View className="flex flex-row justify-between items-center">
                <Text className="text-lg font-bold">Buy Now, Pay Later</Text>
                <FontAwesome name="chevron-right" size={20} color="#000" />
            </View>
            <Text className="text-sm text-gray-700 mt-2">Easy Installment Plans with 0% Interest.</Text>
            <Text className="text-sm text-gray-700">Pay <Text className="font-bold">AED 479.60</Text> Now, Rest pay later</Text>
        </View>

        <View className="mb-4 p-4 bg-yellow-100 rounded-lg">
            <View className="flex flex-row justify-between items-center">
                <Text className="text-lg font-bold">Bank Offers</Text>
                <FontAwesome name="chevron-right" size={20} color="#000" />
            </View>
            <View className="mt-2">
                <View className="flex flex-row items-center justify-between mb-2">
                    <Text className="text-sm text-gray-700">Standard EMI Plans. Pay AED 53.26 with ENBD</Text>
                    <TouchableOpacity>
                        <Text className="text-sm text-blue-600">Learn more</Text>
                    </TouchableOpacity>
                </View>
                <View className="flex flex-row items-center justify-between mb-2">
                    <Text className="text-sm text-gray-700">Standard EMI Plans. Pay AED 108.31 with ADCB</Text>
                    <TouchableOpacity>
                        <Text className="text-sm text-blue-600">Learn more</Text>
                    </TouchableOpacity>
                </View>
                <View className="flex flex-row items-center justify-between mb-2">
                    <Text className="text-sm text-gray-700">Standard EMI Plans. Pay AED 46.49 with FAB</Text>
                    <TouchableOpacity>
                        <Text className="text-sm text-blue-600">Learn more</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

        <View className="mb-4">
            <Text className="text-lg font-bold">Delivery</Text>
            <View className="flex flex-row mt-2">
                <TouchableOpacity className="flex-1 mr-2 px-4 py-2 border rounded-full border-gray-300">
                    <Text className="text-gray-700">Standard Delivery</Text>
                    <Text className="text-sm text-gray-500">5-7 Days</Text>
                    <Text className="text-sm text-green-600">FREE</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-1 px-4 py-2 border rounded-full border-purple-500">
                    <Text className="text-purple-500">Express Delivery</Text>
                    <Text className="text-sm text-gray-500">5-7 Days</Text>
                    <Text className="text-sm text-red-600">AED 25</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
}