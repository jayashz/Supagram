import { View, Text, Image, Button } from "react-native";
import React from "react";
import Post from "../../components/feed/Post";
import { data } from "../../../assets/data/posts";
import { FlatList } from "react-native";
import Header from "../../components/feed/Header";
import { SafeAreaView } from "react-native";


const index = () => {
  return (
    <SafeAreaView className="flex-1">
    <View className="flex-1 bg-white">
      <Header/>
        <FlatList className="" data={data} contentContainerStyle={{maxWidth:512,width:'100%',alignSelf:'center'}} renderItem={(item)=><Post data={item.item} />}/>
     
    </View>
    </SafeAreaView>
  );
};

export default index;
