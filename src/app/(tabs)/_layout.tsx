import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { PressableOpacity } from "react-native-pressable-opacity";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import Header from "../../components/feed/Header";
import { View } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home-filled" size={26} color={color} />
          ),
          headerShown: true,
          headerRight: () => (
            <View className="flex-row gap-5">
              <PressableOpacity>
              <AntDesign name="hearto" size={24} color="black" />
              </PressableOpacity>
            <PressableOpacity onPress={() => router.navigate("inbox")} className="mr-3">
              <FontAwesome5 name="facebook-messenger" size={24} color="black" />
            </PressableOpacity>
            </View>
          ),
          headerTitle:()=><Header/>,
          headerTitleAlign:'left'
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="post"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="plus-square-o" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="reels"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="smart-display" size={29} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-circle-o" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          tabBarButton: () => null,
          tabBarStyle: {
            display: "none",
          },
        }}
      />
    </Tabs>
  );
}
