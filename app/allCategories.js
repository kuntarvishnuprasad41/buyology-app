import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

const AllCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = [
    {
      id: "1",
      name: "Mobiles & Accessories",
      subcategories: ["Mobiles", "Accessories"],
    },
    { id: "2", name: "Laptop & Accessories", subcategories: [] },
    { id: "3", name: "Desktop & Accessories", subcategories: [] },
    { id: "4", name: "Smart Watches", subcategories: [] },
  ];

  const CategoryItem = ({ item }) => (
    <View className="flex-row">
      <TouchableOpacity
        className="p-4 border-b border-gray-300 flex-1"
        onPress={() => setSelectedCategory(item.id)}
      >
        <Text className="text-lg">{item.name}</Text>
      </TouchableOpacity>
      {selectedCategory === item.id && item.subcategories.length > 0 && (
        <View className="pl-4 pb-2">
          {item.subcategories.map((sub, index) => (
            <TouchableOpacity
              key={index}
              className="rounded-md border border-gray-300 p-2"
            >
              <Text>{sub}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );

  return (
    <View className="flex-1 bg-white px-4">
      <TextInput
        className="h-10 border border-gray-300 rounded-md px-2 mt-4"
        placeholder="Search mobiles, laptops..."
      />
      <View className="flex-row justify-between mt-4">
        <TouchableOpacity className="rounded-md border border-gray-300 px-4 py-2">
          <Text>Refurbished</Text>
        </TouchableOpacity>
        <TouchableOpacity className="rounded-md border border-gray-300 px-4 py-2">
          <Text>Brand New</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={categories}
        renderItem={CategoryItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity className="rounded-md bg-gray-200 px-4 py-2 mt-4 items-center">
        <Text>Trending Items</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AllCategories;
