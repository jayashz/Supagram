import { View, Text, Image } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View className=" justify-between">
      <Image
        source={require("../../../assets/insta.png")}
        className="w-[85px] h-[35px]"
      />
    </View>
  );
};

export default Header;
