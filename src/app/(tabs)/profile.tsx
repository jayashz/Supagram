import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import CustBtn from "../../components/CustBtn";
import Ionicons from "@expo/vector-icons/Ionicons";
const profile = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 p-4 ">
        <View className="flex-row justify-between mb-6">
          <View className="flex-row items-center">
            <Text className="text-2xl">_jayash.stha</Text>
            <Feather name="chevron-down" size={20} color="black" />
          </View>
          <View className="flex-row gap-5">
            <FontAwesome6 name="threads" size={24} color="black" />
            <FontAwesome name="plus-square-o" size={28} color="black" />
            <Feather name="menu" size={24} color="black" />
          </View>
        </View>
        <View className=" gap-5 ">
          <View className="gap-4 flex-row items-center justify-between">
            <Image
              source={require("../../../assets/userPhoto.png")}
              className="w-[100px] h-[100px] rounded-full bg-slate-300"
            />
            <View className="items-center">
              <Text>0</Text>
              <Text>posts</Text>
            </View>
            <View className="items-center">
              <Text>0</Text>
              <Text>followers</Text>
            </View>
            <View className="items-center">
              <Text>0</Text>
              <Text>follwing</Text>
            </View>
          </View>
          <View className=" gap-5">
            <Text className="font-semibold">Jayash Shrestha</Text>
            <Text>Born and Raised</Text>
          </View>
        </View>
        <View className="flex-row justify-between gap-2 mt-4">
          <View className="flex-1">
            <CustBtn onPress={() => console.warn("pressed")}>
              Edit profile
            </CustBtn>
          </View>
          <View className="flex-1">
            <CustBtn onPress={() => console.warn("pressed")}>
              Share profile
            </CustBtn>
          </View>
          <CustBtn onPress={() => console.warn("pressed")}>
            <Ionicons name="person-add-outline" size={18} color="black" />
          </CustBtn>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default profile;
