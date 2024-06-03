import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { pizzaItems } from "../../../constants";
import { useLocalSearchParams } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

export default function ProductScreen() {
  const { id } = useLocalSearchParams();
  const pizza = pizzaItems.find((item) => item.id.toString() === id);
  const navigation = useNavigation();
  const [size, setSize] = useState("small");
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <Image
        source={require("../../../assets/images/creative.jpeg")}
        style={{
          height: 300,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
        className="w-full absolute"
      />
      <SafeAreaView className="space-y-4">
        <View className="mx-4 flex-row justify-between items-center">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo name="arrow-with-circle-left" size={50} color="black" />
          </TouchableOpacity>
          <TouchableOpacity className="rounded-full border-2 border-black p-2">
            <FontAwesome name="heart" size={30} color="red" />
          </TouchableOpacity>
        </View>

        <View
          className="flex-row justify-center rounded-full"
          style={{
            shadowColor: "#bc6c25",
            shadowRadius: 30,
            shadowOffset: { width: 0, height: 30 },
            shadowOpacity: 0.9,
          }}
        >
          <Image source={pizza.image} className="h-60 w-60" />
        </View>
        <View className="flex-row mx-4 items-center rounded-3xl p-1 px-2 space-x-1 w-16 opacity-90">
          <FontAwesome name="star" size={24} color="black" />
          <Text className="text-base font-semibold text-white">
            {pizza.stars}
          </Text>
          <View className="mx-4 flex-row justify-between items-center">
            <Text className="text-3xl font-semibold">{pizza.name}</Text>
            <Text className="text-lg font-semibold">€{pizza.price}</Text>
          </View>
          <View className="mx-4 space-y-2">
            <Text className="text-lg font-bold">Pizza size</Text>
          </View>
          <View className="flex-row justify-between">
            <TouchableOpacity
              onPress={() => setSize("small")}
              className="px-8 p-3 rounded-full"
              style={{
                backgroundColor:
                  size === "small?" ? "#e9c46a" : "rgba(0, 0, 0, 07)",
              }}
            >
              <Text
                className={size === "small" ? "text-white" : "text-gray-700"}
              >
                Small
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSize("medium")}
              className="px-8 p-3 rounded-full"
              style={{
                backgroundColor:
                  size === "medium ?" ? "#e9c46a" : "rgba(0, 0, 0, 07)",
              }}
            >
              <Text
                className={size === "medium" ? "text-white" : "text-gray-700"}
              >
                Medium
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSize("large")}
              className="px-8 p-3 rounded-full"
              style={{
                backgroundColor:
                  size === "large?" ? "#e9c46a" : "rgba(0, 0, 0, 07)",
              }}
            >
              <Text
                className={size === "large" ? "text-white" : "text-gray-700"}
              >
                Large
              </Text>
            </TouchableOpacity>
          </View>
          <View className="mx-4 space-y-2 h-28">
            <Text className="text-lg font-bold">About</Text>
            <Text className="text-gray-600"></Text>
          </View>
          <View className="flex-row justify-between items-center mx-4 mb-2">
            <View className="flex-row items-center space-x-1">
              <Text className="text-base text-gray-700 font-semibold opacity-60">
                Volume
              </Text>
              <Text className="text-base text-black font-semibold">
                {pizza.volume}
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
