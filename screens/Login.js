import React, { useEffect, useState } from "react";
import { View, Text, Image, TextInput, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const url = "https://655683f184b36e3a431fd9be.mockapi.io/user";
const Login = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(data);
  const handleLogin = () => {
    const foundUser = data.find(
      (item) => item.userName === userName && item.password === password
    );
    if (foundUser) {
      console.log(foundUser);
      navigation.navigate("Index", { foundUser });
    } else {
      console.error("Invalid username or password");
    }
  };
  return (
    <View
      style={{
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 50,
      }}
    >
      <Image
        style={{ height: 50, width: 250 }}
        source={{
          uri: "https://store.onlyfans.com/cdn/shop/files/OnlyFans_Logo_Full_Blue_2.png?v=1650912266&width=750",
        }}
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "#00AFF0" }}>
          Login
        </Text>
      </View>
      <TextInput
        onChangeText={setUserName}
        style={{
          width: "80%",
          height: 60,
          borderWidth: 1,
          borderRadius: 20,
          paddingLeft: 20,
          fontSize: 20,
          color: "gray",
          marginTop: 30,
        }}
        placeholder="Enter User name..."
      />
      <TextInput
        secureTextEntry={true}
        onChangeText={setPassword}
        style={{
          width: "80%",
          height: 60,
          borderWidth: 1,
          borderRadius: 20,
          paddingLeft: 20,
          fontSize: 20,
          color: "gray",
          marginTop: 10,
        }}
        placeholder="Enter Password..."
      />
      <Pressable
        onPress={() => handleLogin()}
        style={{
          width: 200,
          height: 50,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#00AFF0",
          flexDirection: "row",
          marginTop: 50,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#FFF" }}>
          Sign in
        </Text>
        <AntDesign name="arrowright" size={24} color="white" />
      </Pressable>
      <Pressable
        style={{
          width: 200,
          height: 40,
          marginTop: 20,
          borderWidth: 1,
          borderRadius: 10,
        }}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={{ fontSize: 18, textAlign: "center", marginTop: 5 }}>
          Sign up
        </Text>
      </Pressable>
    </View>
  );
};

export default Login;
