import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styled } from 'nativewind';

const CheckoutDetail = () => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('Cash on Delivery');
    const [deliveryMethod, setDeliveryMethod] = useState('Standard Delivery');
    const [voucherCode, setVoucherCode] = useState('');

    const paymentMethods = [
        { name: 'Cash on Delivery', fee: 20.00 },
        { name: 'Credit/Debit Card', fee: 0.00 },
        { name: 'Tabby - Buy Now Pay Later', fee: 20.00, highlight: true },
        { name: 'Installment Plans Only For Credit Card', fee: 20.00 },
    ];

    return (
        <ScrollView className="flex-1 bg-white p-4">
            <View className="mb-4">
                <Text className="text-lg font-bold">Address</Text>
                <View className="p-4 mt-2 border rounded-lg flex flex-row justify-between">
                    <View>
                        <Text className="font-bold">John Doe</Text>
                        <Text className="text-sm text-gray-600">
                            Safa Tower, 2509 | Bukhara Street - Al Nahda - Sharjah - United Arab Emirates
                        </Text>
                        <Text className="text-sm text-gray-600">+971 123456789</Text>
                    </View>
                    <TouchableOpacity>
                        <FontAwesome name="pencil" size={20} color="black" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity className="mt-2">
                    <Text className="text-purple-600">+ Add New Address</Text>
                </TouchableOpacity>
            </View>

            <View className="mb-4">
                <Text className="text-lg font-bold">Payment Method</Text>
                {paymentMethods.map((method, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => setSelectedPaymentMethod(method.name)}
                        className={`p-4 mt-2 border rounded-lg ${selectedPaymentMethod === method.name ? 'border-purple-500' : 'border-gray-300'
                            } ${method.highlight ? 'bg-green-100' : ''}`}
                    >
                        <View className="flex flex-row justify-between">
                            <Text className="font-bold">{method.name}</Text>
                            <FontAwesome name="chevron-down" size={20} color="black" />
                        </View>
                        <Text className="text-sm text-gray-600">Processing Fees AED {method.fee.toFixed(2)}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View className="mb-4">
                <Text className="text-lg font-bold">Delivery</Text>
                <View className="flex flex-row mt-2">
                    <TouchableOpacity
                        onPress={() => setDeliveryMethod('Standard Delivery')}
                        className={`flex-1 mr-2 px-4 py-2 border rounded-full ${deliveryMethod === 'Standard Delivery' ? 'border-gray-300' : 'border-gray-300'
                            }`}
                    >
                        <Text className={`${deliveryMethod === 'Standard Delivery' ? 'text-gray-700' : 'text-gray-700'}`}>
                            Standard Delivery
                        </Text>
                        <Text className="text-sm text-gray-500">5-7 Days</Text>
                        <Text className="text-sm text-green-600">FREE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setDeliveryMethod('Express Delivery')}
                        className={`flex-1 px-4 py-2 border rounded-full ${deliveryMethod === 'Express Delivery' ? 'border-purple-500' : 'border-gray-300'
                            }`}
                    >
                        <Text className={`${deliveryMethod === 'Express Delivery' ? 'text-purple-500' : 'text-gray-700'}`}>
                            Express Delivery
                        </Text>
                        <Text className="text-sm text-gray-500">5-7 Days</Text>
                        <Text className="text-sm text-red-600">AED 25</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View className="mb-4">
                <Text className="text-lg font-bold">Redeem Voucher</Text>
                <View className="flex flex-row mt-2">
                    <View className="flex-1 mr-2 p-4 border rounded-lg flex flex-row justify-between">
                        <Text>Save Upto AED 120.00</Text>
                        <Text>tabby</Text>
                    </View>
                    <TextInput
                        value={voucherCode}
                        onChangeText={setVoucherCode}
                        placeholder="Enter voucher code"
                        className="flex-1 px-4 py-2 border rounded-lg"
                    />
                    <TouchableOpacity className="ml-2 px-4 py-2 bg-purple-600 rounded-lg">
                        <Text className="text-white">ADD</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View className="mb-4">
                <Text className="text-lg font-bold">Price Details</Text>
                <View className="mt-2 p-4 border rounded-lg">
                    <View className="flex flex-row justify-between mb-2">
                        <Text>Cart Sub Total</Text>
                        <Text>AED 19,897.00</Text>
                    </View>
                    <View className="flex flex-row justify-between mb-2">
                        <Text>Processing Fee</Text>
                        <Text>AED 0.00</Text>
                    </View>
                    <View className="flex flex-row justify-between mb-2">
                        <Text>Shipping Charge</Text>
                        <Text>AED 0.00</Text>
                    </View>
                    <View className="flex flex-row justify-between mb-2">
                        <Text>Voucher Deducted</Text>
                        <Text>AED 0.00</Text>
                    </View>
                    <View className="flex flex-row justify-between mb-2">
                        <Text className="font-bold">Sub Total</Text>
                        <Text className="font-bold">AED 19,897.00</Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity className="py-4 bg-purple-600 rounded-full">
                <Text className="text-center text-white font-bold">BUY NOW</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default styled(CheckoutDetail);
