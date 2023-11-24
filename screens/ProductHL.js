import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const Cart = ({ navigation }) => {
  const clothingScreen = () => {
    navigation.navigate("HomeLiving");
  };
  //onPress={() => indexScreen()}
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Pressable onPress={() => clothingScreen()}>
          <Image
            style={{ height: 24, width: 24, marginTop: 20, marginLeft: 10 }}
            source={require("../assets/HL.png")}
          />
        </Pressable>
        <Text
          style={{
            color: "rgba(77, 199, 245, 1)",
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 10,
            marginLeft: 105,
          }}
        >
          Product
        </Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Image
          style={{ height: 500, width: 350 }}
          source={require("../assets/productHL.png")}
        />
      </View>
      <View style={{ marginLeft: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#00AFF0" }}>
          OnlyFans Swim Trunks - Black
        </Text>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>$10.00</Text>
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginTop: 20,
          marginLeft: 20,
        }}
      >
        Size
      </Text>
      <View style={{ marginLeft: 20, marginTop: 10, flexDirection: "row" }}>
        <Pressable
          style={{
            marginTop: 10,
            borderWidth: 1,
            borderColor: "gray",
            height: 35,
            width: 35,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 30,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>S</Text>
        </Pressable>
        <Pressable
          style={{
            marginTop: 10,
            borderWidth: 1,
            borderColor: "gray",
            height: 35,
            width: 35,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 30,
            marginLeft: 10,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>M</Text>
        </Pressable>
        <Pressable
          style={{
            marginTop: 10,
            borderWidth: 1,
            borderColor: "gray",
            height: 35,
            width: 35,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 30,
            marginLeft: 10,

            backgroundColor: "#00AFF0",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
            L
          </Text>
        </Pressable>
        <Pressable
          style={{
            marginTop: 10,
            borderWidth: 1,
            borderColor: "gray",
            height: 35,
            width: 35,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 30,
            marginLeft: 10,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>XL</Text>
        </Pressable>
        <Pressable
          style={{
            marginTop: 10,
            borderWidth: 1,
            borderColor: "gray",
            height: 35,
            width: 35,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 30,
            marginLeft: 10,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>XXL</Text>
        </Pressable>
      </View>
      <View style={{ marginTop: 20, marginLeft: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>Quantity</Text>
        <Pressable
          onPress={() => handleLogin()}
          style={{
            width: 150,
            height: 50,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            flexDirection: "row",
            marginTop: 10,
            marginLeft: 20,
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>- 1 +</Text>
        </Pressable>
      </View>
      <View style={{ alignItems: "center" }}>
        <Pressable
          onPress={() => handleLogin()}
          style={{
            width: 300,
            height: 50,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#00AFF0",
            flexDirection: "row",
            marginTop: 50,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#FFF" }}>
            Add to cart
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});

export default Cart;
