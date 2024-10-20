import { View, Text, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { PressableOpacity } from "react-native-pressable-opacity";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "expo-router";
const inbox = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView>
      <PressableOpacity onPress={()=>navigation.goBack()}>
        <Ionicons name="chevron-back-outline" size={30} color="black" />
      </PressableOpacity>
      <Text>inbox</Text>
    </SafeAreaView>
  );
};

export default inbox;
