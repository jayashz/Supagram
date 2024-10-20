import {
  View,
  Text,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import * as ImagePicker from "expo-image-picker";
import { PressableOpacity } from "react-native-pressable-opacity";
import { useNavigation } from "expo-router";
const post = () => {
  const [image, setImage] = useState(null);
  const navigation =useNavigation();
    async function pickImage() {
    let image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

    if (image) {
      setImage(image.assets[0].uri);
    }
  }
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-row justify-between items-cente mx-3">
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Entypo name="cross" size={29} color="black" />
        </TouchableOpacity>
        <Text>New post </Text>
        <Button title="Next" />
      </View>
      <View className="w-full h-[55vh]">
        <Image source={{ uri: image }} className=" aspect-[4/3] " />
      </View>
      <View>
        <PressableOpacity
          className="p-3 w-[45px] h-[45px] justify-end rounded-full bg-slate-300 mt-4 ml-4"
          onPress={() => pickImage()}
        >
          <Feather name="camera" size={24} color="black" />
        </PressableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default post;
