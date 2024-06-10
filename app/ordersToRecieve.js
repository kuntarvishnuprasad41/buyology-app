import React from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
const DEFAULT_IMAGE = "http://dev.sscinitiatives.com:6002/assets/temp/iPhone.png"

export default function OrdersToRecieve() {
    return (
        <View className="flex-1 bg-gray-100">
            {/* Search Bar */}
            <View className="p-4 bg-white flex-row items-center justify-between">
                <TextInput
                    className="flex-1 border border-gray-300 rounded-full px-4 py-2"
                    placeholder="Search for orders..."
                />
                <TouchableOpacity className="ml-2">
                    <FontAwesome name="filter" size={24} color="gray" />
                </TouchableOpacity>
            </View>

            <ScrollView className="mt-2">
                {/* Order Status Section */}
                <OrderStatusSection status="Packed" orders={packedOrders} />
                <OrderStatusSection status="Out for Delivery" orders={outForDeliveryOrders} />
                <OrderStatusSection status="Cancelled" orders={cancelledOrders} />
                <OrderStatusSection status="Delivered" orders={deliveredOrders} />
            </ScrollView>
        </View>
    );
}

const OrderStatusSection = ({ status, orders }) => (
    <View className="p-4 bg-white mt-2">
        <Text className="font-bold mb-2">{status}</Text>
        {orders.map((order, index) => (
            <OrderItem key={index} order={order} />
        ))}
    </View>
);

const OrderItem = ({ order }) => (
    <View className="flex-row items-center py-3 border-b border-gray-200">
        <View className="bg-[#ECEAF1] p-2 rounded-full">
            <FontAwesome name={order.icon} size={24} color={order.iconColor} />
        </View>
        <View className="ml-2 flex-1">
            <Text>{order.title}</Text>
            <Text className="text-gray-500">{order.description}</Text>
        </View>
        <Image source={{ uri: order.imageUrl }} className="w-16 h-16" />
    </View>
);

// Sample order data
const packedOrders = [
    {
        icon: "cube",
        iconColor: "black",
        title: "Packed",
        description: "Order #123456",
        imageUrl: DEFAULT_IMAGE
    }
];

const outForDeliveryOrders = [
    {
        icon: "truck",
        iconColor: "orange",
        title: "Out for Delivery",
        description: "Expected to deliver on 25 May",
        imageUrl: DEFAULT_IMAGE
    },
    {
        icon: "truck",
        iconColor: "orange",
        title: "Out for Delivery",
        description: "Expected to deliver on 25 May",
        imageUrl: DEFAULT_IMAGE
    }
];

const cancelledOrders = [
    {
        icon: "times-circle",
        iconColor: "red",
        title: "Cancelled",
        description: "Order #123456",
        imageUrl: DEFAULT_IMAGE
    }
];

const deliveredOrders = [
    {
        icon: "check-circle",
        iconColor: "green",
        title: "Delivered",
        description: "Order #123456",
        imageUrl: DEFAULT_IMAGE
    },
    {
        icon: "check-circle",
        iconColor: "green",
        title: "Delivered",
        description: "Order #123456",
        imageUrl: DEFAULT_IMAGE
    }
];
