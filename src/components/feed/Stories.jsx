import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import StoriesItems from "./StoriesItems";


const Stories = () => {
  return (
    <View>
      <ScrollView horizontal={true} contentContainerStyle={{gap:8}}>
            <StoriesItems/>
            <StoriesItems/>
            <StoriesItems/>
            <StoriesItems/>
            <StoriesItems/>
            <StoriesItems/>
            <StoriesItems/>
      </ScrollView>
    </View>
  );
};

export default Stories;
