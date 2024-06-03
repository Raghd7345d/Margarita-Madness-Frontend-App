import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, Link } from "expo-router";
import React, { useState } from "react";
import { pizzaItems } from "../constants";
export default function PizzaCard({ item }) {
  const navigation = useNavigation();
  const [listPizza, setListPizza] = useState(pizzaItems);

  return (
    <View
      style={{
        borderRadius: 40,
        backgroundColor: "#ff9f1c",
        height: 350,
        width: 250,
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 10,
      }}
    >
      <View
        style={{
          shadowColor: "black",
          shadowRadius: 30,
          shadowOffset: { width: 0, height: 40 },
          shadowOpacity: 0.8,
        }}
        className="flex-row justify-center -mt-14 "
      >
        <Image source={item.image} className="h-40 w-40 rounded-full" />
      </View>

      <View className="px-5 mt-5 space-y-3">
        <Text className="text-3xl text-white font-semibold z-10">
          {item.name}
        </Text>
        <View
          style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          className="flex-row items-center rounded-3xl p-1 px-2 space-x-1 w-20"
        >
          <EvilIcons name="star" size={24} color="yellow" />
          <Text className="text-base font-semibold text-white">
            {item.stars}
          </Text>
        </View>
        <View className="flex-row space-x-1 z-10 mb-6">
          <Text className="text-base text-white font-semibold opacity-60">
            Volume
          </Text>
          <Text className="text-white text-base font-semibold">
            {item.volume}
          </Text>
        </View>
        <View
          style={{
            shadowRadius: 25,
            shadowOffset: { width: 0, height: 40 },
            shadowOpacity: 0.8,
          }}
          className="flex-row justify-between items-center"
        >
          <Text className="text-white font-bold text-lg">€ {item.price}</Text>
          <View key={item.id}>
            <Link href={`/(tabs)/pizza/${item.id}`} asChild>
              <TouchableOpacity
                style={{
                  shadowColor: "black",
                  shadowRadius: 40,
                  shadowOffset: { width: -20, height: -10 },
                  shadowOpacity: 1,
                }}
                className="p-4 rounded-full"
              >
                <AntDesign name="pluscircle" size={45} color="white" />
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
}
