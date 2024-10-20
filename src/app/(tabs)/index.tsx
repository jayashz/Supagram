import { View, Text, Image, Button } from "react-native";
import React from "react";
import Post from "../../components/feed/Post";
import { data } from "../../../assets/data/posts";
import { FlatList } from "react-native";


const index = () => {
  return (
    <View className="flex-1 bg-white">
        <FlatList data={data} renderItem={(item)=><Post data={item.item} />}/>
    </View>
  );
};

export default index;
