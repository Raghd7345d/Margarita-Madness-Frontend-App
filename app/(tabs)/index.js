import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { categories, pizzaItems } from "../../constants";
import Carousel from "react-native-snap-carousel";
import PizzaCard from "../../components/Card";
import { EvilIcons } from "@expo/vector-icons";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(1);
  const [listPizza, setListPizza] = useState(pizzaItems);

  function searchByName(query) {
    setListPizza(
      pizzaItems.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  }

  function toggleFavorite(id) {
    setListPizza((prevList) =>
      prevList.map((pizza) =>
        pizza.id === id ? { ...pizza, favorite: !pizza.favorite } : pizza
      )
    );
  }

  function filterByCategory(categoryId) {
    setActiveCategory(categoryId);
    if (categoryId === 0) {
      setListPizza(pizzaItems);
    } else {
      setListPizza(pizzaItems.filter((item) => item.categoryId === categoryId));
    }
  }

  return (
    <View className="flex-1 relative bg-white">
      <StatusBar />
      <Image
        source={require("../../assets/images/Pizza.jpeg")}
        className="w-full absolute -top-5"
        style={{ height: 220 }}
        alt="Delicious Pizza"
      />
      <SafeAreaView className="flex-1">
        {/* Avatar and bell icon */}
        <View className="px-4 flex-row justify-between items-center mt-4">
          <Image
            source={require("../../assets/images/PizzaMan.jpeg")}
            className="h-9 w-9 rounded-full"
          />
          <View className="flex-row items-center space-x-2">
            <FontAwesome5 name="map-marker-alt" size={24} color="#ee9b00" />
            <Text className="text-base font-semibold text-black-700">
              New York, NYC
            </Text>
          </View>
          <AntDesign name="bells" size={27} color="black" />
        </View>

        {/* Search bar */}
        <View className="mx-7 mt-14">
          <View className="flex-row justify-center rounded-full p-1 bg-[#e6e6e6]">
            <TextInput
              placeholder="Search"
              className="p-3 flex-1 font-semibold text-gray-700"
              onChangeText={(text) => searchByName(text)}
            />
            <TouchableOpacity className="rounded-full p-2">
              <AntDesign
                name="search1"
                size={25}
                color="black"
                style={{ backgroundColor: "#ee9b00" }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories */}
        <View className="px-5 mt-6">
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={(item) => item.id.toString()}
            className="overflow-visible"
            renderItem={({ item }) => {
              let isActive = item.id === activeCategory;
              let activeTextClass = isActive ? "text-white" : "text-gray-700";
              return (
                <TouchableOpacity
                  onPress={() => filterByCategory(item.id)}
                  style={{ backgroundColor: isActive ? "#ff9f1c" : "#DDE1DE" }}
                  className="p-4 px-5 rounded-full mr-2 shadow"
                >
                  <Text className={"font-semibold " + activeTextClass}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        {/* Pizza Cards */}
        <View className="mt-16 py-2">
          <Carousel
            containerCustomStyle={{ overflow: "visible" }}
            data={listPizza}
            loop={true}
            renderItem={({ item }) => (
              <PizzaCard item={item} toggleFavorite={toggleFavorite} />
            )}
            firstItem={1}
            inactiveSlideOpacity={0.75}
            inactiveSlideScale={0.77}
            sliderWidth={400}
            itemWidth={260}
            slideStyle={{ display: "flex", alignItems: "center" }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
