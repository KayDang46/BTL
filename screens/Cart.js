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

const Cart = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={{ alignItems: "center" }}>
        <Pressable
          onPress={() => handleLogin()}
          style={{
            width: 350,
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
            Check out | $45.00
          </Text>
        </Pressable>
      </SafeAreaView>
      <SafeAreaView>
        <Text
          style={{
            marginLeft: 40,
            fontSize: 30,
            fontWeight: "bold",
            marginTop: 80,
            color: "#00AFF0",
          }}
        >
          Your cart
        </Text>
      </SafeAreaView>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Image
          style={{ height: 100, width: 100 }}
          source={require("../assets/1b.png")}
        />
        <View style={{ marginLeft: 7 }}>
          <Text style={{ flexDirection: "column", marginTop: 20 }}>
            OnlyFans Super <br></br>Crop Hoodie
          </Text>
          <Text>L/Black</Text> <br></br>
          <Text>$20.00</Text>
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
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>- 1 +</Text>
          </Pressable>
        </View>
        <Image
          style={{ height: 24, width: 24 }}
          source={require("../assets/rubbish.png")}
        />
      </View>
      <View style={{ flexDirection: "row", marginTop: 30 }}>
        <Image
          style={{ height: 100, width: 100 }}
          source={require("../assets/3b.png")}
        />
        <View style={{ marginLeft: 7 }}>
          <Text style={{ flexDirection: "column", marginTop: 20 }}>
            OnlyFans Super <br></br>Crop Hoodie
          </Text>
          <Text>L/Black</Text> <br></br>
          <Text>$25.00</Text>
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
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>- 1 +</Text>
          </Pressable>
        </View>
        <Image
          style={{ height: 24, width: 24 }}
          source={require("../assets/rubbish.png")}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          marginLeft: 10,
          borderWidth: 3,
          borderBottomColor: "gray",
          borderColor: "white",
          width: 370,
          height: 50,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            marginLeft: 20,
            marginTop: 10,
          }}
        >
          Add note
        </Text>
        <Text
          style={{
            marginLeft: 250,
            fontSize: 30,
            marginBottom: 20,
            color: "#00AFF0",
          }}
        >
          +
        </Text>
      </View>
      <View style={{ marginTop: 20, marginLeft: 30, flexDirection: "row" }}>
        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#00AFF0" }}>
          Subtotal
        </Text>
        <Text style={{ fontSize: 17, fontWeight: "bold", marginLeft: 220 }}>
          $45.00
        </Text>
      </View>
      <View style={{ marginLeft: 30 }}>
        <Text style={{ color: "gray", fontSize: 16 }}>
          Taxes and shipping calculated at checkout
        </Text>
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
            Check out
          </Text>
        </Pressable>
        <Pressable
          onPress={() => handleLogin()}
          style={{
            width: 300,
            height: 50,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#7636FF",
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#FFF" }}>
            Shop Pay
          </Text>
        </Pressable>
        <Pressable
          onPress={() => handleLogin()}
          style={{
            width: 300,
            height: 50,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "orange",
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "blue" }}>
            PayPal
          </Text>
        </Pressable>
        <Pressable
          onPress={() => handleLogin()}
          style={{
            width: 300,
            height: 50,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#FFF" }}>
            Google Pay
          </Text>
        </Pressable>
      </View>
      <View>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            color: "#00AFF0",
            marginTop: 30,
            marginLeft: 20,
          }}
        >
          Don't forget these...
        </Text>
        <View style={{ flexDirection: "row", marginTop: 20, marginLeft: 20 }}>
          <View style={{ flexDirection: "column" }}>
            <Image
              style={{ height: 150, width: 150 }}
              source={require("../assets/aa.png")}
            />
            <Text style={{ color: "#00AFF0", fontSize: 16, marginTop: 10 }}>
              OnlyFans Bandana - Blue
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>$12.00</Text>
            <Pressable
              onPress={() => handleLogin()}
              style={{
                width: 150,
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
                Choose
              </Text>
            </Pressable>
          </View>
          <View style={{ marginLeft: 20 }}>
            <Image
              style={{ height: 150, width: 150 }}
              source={require("../assets/bb.png")}
            />
            <Text style={{ color: "#00AFF0", fontSize: 16, marginTop: 10 }}>
              OnlyFans Folding Hand <br></br> Fan
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>$5.00</Text>
            <Pressable
              onPress={() => handleLogin()}
              style={{
                width: 150,
                height: 50,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#00AFF0",
                flexDirection: "row",
                marginTop: 28,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "#FFF" }}>
                Choose
              </Text>
            </Pressable>
          </View>
        </View>
        <br></br>
        <br></br>
        <br></br>
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
