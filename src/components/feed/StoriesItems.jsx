import { View, Text, Image } from "react-native";
import React from "react";

const StoriesItems = () => {
  return (
    <View className="items-center gap-1">
      <Image
        source={require("../../../assets/userPhoto.png")}
        className="w-[60px] h-[60px] rounded-full bg-slate-300"
      />
      <Text>Your story</Text>
    </View>
  );
};

export default StoriesItems;
