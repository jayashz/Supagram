import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabsLayout() {
  return (

    <Tabs
      screenOptions={{ tabBarActiveTintColor: "black", tabBarShowLabel: false, headerShown:false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home-filled" size={26} color={color} />
          ),
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
      <Tabs.Screen name="inbox" options={{tabBarButton:()=>null,tabBarStyle:{
        display:'none'
      }}}/>
    </Tabs>

  );
}
