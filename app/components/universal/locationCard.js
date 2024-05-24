import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ChevronDownIcon, BellIcon } from 'react-native-heroicons/outline';
import { MarkerIcon } from 'react-native-heroicons/solid';

const LocationCard = ({ location }) => {
    return (
        <View className="bg-white rounded-lg p-4 shadow-sm flex-row justify-between items-center mt-10">
            <View className="flex-row items-center">
                <View className="mr-2">
                    {/* <LocationMarkerIcon size={20} color="gray" /> */}
                </View>
                <View>
                    <Text className="text-gray-800 font-semibold">{location}</Text>
                    <TouchableOpacity>
                        <ChevronDownIcon size={16} color="gray" />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity>
                <BellIcon size={24} color="gray" />
            </TouchableOpacity>
        </View>
    );
};

export default LocationCard;
