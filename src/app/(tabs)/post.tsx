import {
  View,
  Text,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import * as ImagePicker from "expo-image-picker";
import { PressableOpacity } from "react-native-pressable-opacity";
import { useNavigation } from "expo-router";
const post = () => {
  const [image, setImage] = useState(null);
  const navigation = useNavigation();
  useEffect(()=>{
    if(image==null){
      pickImage();
    }
  },[])
  async function pickImage() {
    try{
      let image = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });
      if (image) {
        setImage(image.assets[0].uri);
      }

     
    }catch(error){
      console.log('error')
    }
      
  }
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-row justify-between items-cente mx-3">
        
        <TouchableOpacity onPress={() => navigation.navigate('index')}>
          <Feather name="x" size={24} color="black" />
        </TouchableOpacity>
        <Text>New post </Text>
        <Button title="Next" />
      </View>
      <View className="w-full max-h-[55vh]">
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
