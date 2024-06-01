import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styled } from 'nativewind';

const CartDetail = () => {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    const products = [
        {
            id: 1,
            name: 'Apple iPhone 15 Pro 256GB Natural Titanium 5G with Facet...',
            price: 4299,
            originalPrice: 5099,
            discount: '15%',
            image: 'http://dev.sscinitiatives.com:6002/assets/temp/iPhone.png', // Replace with actual image URL
            certified: true,
        },
        {
            id: 2,
            name: 'Apple iPhone 15 Pro 256GB Natural Titanium 5G with Facet...',
            price: 4299,
            originalPrice: 5099,
            discount: '15%',
            image: 'http://dev.sscinitiatives.com:6002/assets/temp/iPhone.png', // Replace with actual image URL

            certified: true,
        },
    ];

    const addresses = [
        {
            id: 1,
            name: 'John Doe',
            address: 'Safa Tower, 2509 | Bukhara Street - Al Nahda - Sharjah - United Arab Emirates',
            phone: '+971 123456789',
        },
        {
            id: 2,
            name: 'John Doe',
            address: 'Safa Tower, 2509 | Bukhara Street - Al Nahda - Sharjah - United Arab Emirates',
            phone: '+971 123456789',
        },
    ];

    return (
        <ScrollView className="flex-1 bg-white p-4">
            <View className="flex flex-row items-center justify-between mb-4">
                <TouchableOpacity>
                    <FontAwesome name="chevron-left" size={24} color="black" />
                </TouchableOpacity>
                <Text className="text-lg font-bold">Cart</Text>
                <TouchableOpacity>
                    <FontAwesome name="heart-o" size={24} color="black" />
                </TouchableOpacity>
            </View>

            {products.map(product => (
                <View key={product.id} className="flex flex-row mb-4">
                    <Image source={{ uri: product.image }} className="w-24 h-24 mr-4" />
                    <View className="flex-1">
                        <Text className="text-sm font-semibold">{product.name}</Text>
                        <Text className="text-lg font-bold text-red-600">AED {product.price}</Text>
                        <Text className="text-sm text-gray-600 line-through">AED {product.originalPrice}</Text>
                        <Text className="text-sm text-green-600">{product.discount}</Text>
                        {product.certified && (
                            <Text className="text-sm text-yellow-500 mt-1">Certified</Text>
                        )}
                        <View className="flex flex-row items-center mt-2">
                            <TouchableOpacity onPress={decrementQuantity} className="px-2 py-1 border rounded">
                                <Text>-</Text>
                            </TouchableOpacity>
                            <Text className="mx-2">{quantity}</Text>
                            <TouchableOpacity onPress={incrementQuantity} className="px-2 py-1 border rounded">
                                <Text>+</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="ml-4">
                                <Text className="text-red-600">Remove</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            ))}

            <TouchableOpacity className="mb-4">
                <Text className="text-purple-600">Continue Shopping</Text>
            </TouchableOpacity>

            <View className="mb-4">
                <Text className="text-lg font-bold">Address</Text>
                {addresses.map(address => (
                    <View key={address.id} className="p-4 mt-2 border rounded-lg flex flex-row justify-between">
                        <View>
                            <Text className="font-bold">{address.name}</Text>
                            <Text className="text-sm text-gray-600">{address.address}</Text>
                            <Text className="text-sm text-gray-600">{address.phone}</Text>
                        </View>
                        <TouchableOpacity>
                            <FontAwesome name="pencil" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                ))}
                <TouchableOpacity className="mt-2">
                    <Text className="text-purple-600">+ Add New Address</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity className="py-4 bg-purple-600 rounded-full">
                <Text className="text-center text-white font-bold">BUY NOW</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default styled(CartDetail);
