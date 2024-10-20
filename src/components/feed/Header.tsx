import { View, Text, Image } from "react-native";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { PressableOpacity } from "react-native-pressable-opacity";
import { router } from "expo-router";
const Header = () => {
  return (
    <View className="flex-row justify-between mx-4">
      <Image
        source={require("../../../assets/insta.png")}
        className="w-40 h-10"
      />
      <PressableOpacity onPress={()=>router.navigate('inbox')}>
        <FontAwesome5 name="facebook-messenger" size={24} color="black" />
      </PressableOpacity>
    </View>
  );
};

export default Header;
