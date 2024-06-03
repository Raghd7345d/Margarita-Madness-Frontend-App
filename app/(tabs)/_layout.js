import { Drawer } from "expo-router/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../styles/constants";

export default function MainTabs() {
  return (
    <Drawer
      screenOptions={{
        headerStyle: {
          // backgroundColor: COLORS.dark,
        },
        headerShown: false,

        // headerTintColor: COLORS.light,
        tabBarStyle: {
          // backgroundColor: COLORS.dark,
        },
        // tabBarActiveTintColor: COLORS.primary,
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => {
            return <MaterialIcons name="animation" size={24} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="pizza/[id]"
        options={{
          title: "Details",

          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name="animation-outline"
                size={24}
                color={color}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="camera"
        options={{
          title: "camera",

          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name="animation-outline"
                size={24}
                color={color}
              />
            );
          },
        }}
      />
    </Drawer>
  );
}
