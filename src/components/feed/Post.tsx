import { View, Text, Image, Button } from "react-native";
import React from "react";
// import { data } from "../../../assets/data/posts";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from '@expo/vector-icons/Feather';

const Post = ({data}) => {
  
  return (
    <View className="my-3">
      <View className="flex-row h-[45px] items-center justify-between gap-2 ">
        <View className="flex-row items-center">
          <Image
            source={{ uri: data.user.image_url }}
            className="w-10 h-10 rounded-full"
          />
          <Text>{data.user.username}</Text>
        </View>
        <Button title="..."></Button>
      </View>

      <View>
        <Image
          source={{ uri: data.image_url }}
          className="w-full aspect-[4/3] object-contain"
        />
      </View>
      <View className="h-[35px] items-center flex-row mx-2 justify-between">
        <View className="flex-row items-center gap-2">
          <AntDesign name="hearto" size={24} color="black" />
          <Text>307</Text>
          <Feather name="message-circle" size={24} color="black" />
          <Text>307</Text>
          <Feather name="send" size={24} color="black" />
        </View>
        <View>
          <Feather name="bookmark" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

export default Post;
