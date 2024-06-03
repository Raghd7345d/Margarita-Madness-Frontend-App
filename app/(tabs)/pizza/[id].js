import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { pizzaItems } from "../../../constants";
import { useLocalSearchParams } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function ProductScreen() {
  const { id } = useLocalSearchParams();
  const pizza = pizzaItems.find((item) => item.id.toString() === id);
  const navigation = useNavigation();
  const [size, setSize] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleQuantityChange = (action) => {
    if (action === "increase" && quantity < 10) {
      setQuantity(quantity + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} ${size} ${pizza.name}(s) to cart!`);
  };

  const handleBuyNow = () => {
    alert(`Proceeding to buy ${quantity} ${size} ${pizza.name}(s)!`);
  };

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
      <SafeAreaView className="flex-1">
        <ScrollView
          contentContainerStyle={{ paddingBottom: 20, paddingTop: 10 }}
        >
          <View className="mx-4 flex-row justify-between items-center mt-4">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Entypo name="arrow-with-circle-left" size={50} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={toggleFavorite}
              className="rounded-full border-2 border-black p-2"
            >
              <FontAwesome
                name="heart"
                size={30}
                color={isFavorite ? "red" : "gray"}
              />
            </TouchableOpacity>
          </View>

          <View
            className="flex-row justify-center rounded-full mt-4"
            style={{
              shadowColor: "#bc6c25",
              shadowRadius: 30,
              shadowOffset: { width: 0, height: 30 },
              shadowOpacity: 0.9,
            }}
          >
            <Image source={pizza.image} className="h-60 w-60 rounded-full" />
          </View>

          <View
            style={{ backgroundColor: "#ff9f1c" }}
            className="flex-row mx-4 items-center rounded-3xl p-1 px-2 space-x-1 w-20 opacity-90 mt-4"
          >
            <EvilIcons name="star" size={24} color="yellow" />
            <Text className="text-base font-semibold text-white">
              {pizza.stars}
            </Text>
          </View>

          <View className="mx-4 flex-row justify-between items-center mt-4">
            <Text
              style={{ color: "#161a1d" }}
              className="text-3xl font-semibold"
            >
              {pizza.name}
            </Text>
            <Text className="text-lg font-semibold">€{pizza.price}</Text>
          </View>

          <View className="mx-4 space-y-2 mt-4">
            <Text style={{ color: "#161a1d" }} className="text-lg font-bold">
              Pizza size
            </Text>
            <View className="flex-row justify-between">
              <TouchableOpacity
                onPress={() => setSize("small")}
                className="p-3 px-8 rounded-full"
                style={{
                  backgroundColor: size === "small" ? "gray" : "#f48c06",
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
                className="p-3 px-8 rounded-full"
                style={{
                  backgroundColor: size === "medium" ? "gray" : "#f48c06",
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
                className="p-3 px-8 rounded-full"
                style={{
                  backgroundColor: size === "large" ? "gray" : "#f48c06",
                }}
              >
                <Text
                  className={size === "large" ? "text-white" : "text-gray-700"}
                >
                  Large
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="mx-4 space-y-2 mt-4">
            <Text style={{ color: "#161a1d" }} className="text-lg font-bold">
              About
            </Text>
            <Text style={{ color: "#161a1d" }} className="text-gray-600">
              {pizza.desc}
            </Text>
          </View>

          <View className="flex-row justify-between items-center mx-4 mb-2 mt-4">
            <View className="flex-row items-center space-x-1">
              <Text className="text-base text-gray-700 font-semibold opacity-60">
                Volume
              </Text>
              <Text className="text-base text-black font-semibold">
                {pizza.volume}
              </Text>
            </View>
            <View className="flex-row items-center space-x-4 border-gray-500 border rounded-full p-1 px-4">
              <TouchableOpacity
                onPress={() => handleQuantityChange("decrease")}
              >
                <AntDesign name="minus" size={24} color="black" />
              </TouchableOpacity>
              <Text
                style={{ color: "#161a1d" }}
                className="font-extrabold text-lg"
              >
                {quantity}
              </Text>
              <TouchableOpacity
                onPress={() => handleQuantityChange("increase")}
              >
                <AntDesign name="plus" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-row justify-between mx-4">
            <TouchableOpacity
              className="p-4 rounded-full border border-gray-400"
              onPress={handleAddToCart}
            >
              <FontAwesome5 name="shopify" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: "#ff9f1c" }}
              className="p-4 rounded-full flex-1 ml-3"
              onPress={handleBuyNow}
            >
              <Text className="text-center text-base font-semibold">
                Buy now
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
