import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const OrderStatusCard = () => {
    return (
        <View className="bg-[#b9b9b9]">

            <TouchableOpacity key={1} onPress={() => props.settabData(data.title ? data.title : data.id ? data.id : data.name)} style={styles.card} >

                <View style={styles.iconContainer}>
                    <Icon name="cube" size={24} color="#000" />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.statusText}>Your order being processed</Text>
                    <Text style={styles.deliveryText}>Expected delivery on 15 June 2024</Text>
                </View>
                <Icon name="chevron-right" size={24} color="#000" style={styles.arrowIcon} />

            </TouchableOpacity>



        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        margin: 10,
        backgroundColor: '#fff',
    },
    iconContainer: {
        backgroundColor: '#ffeb3b33', // Light yellow background
        borderRadius: 20,
        padding: 8,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    statusText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    deliveryText: {
        fontSize: 14,
        color: '#888',
        marginTop: 4,
    },
    arrowIcon: {
        marginLeft: 10,
    },
});

export default OrderStatusCard;
