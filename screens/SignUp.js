import React, { useEffect, useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import Header from "./Header";
import Footer from "./Footer";

const url = "https://655683f184b36e3a431fd9be.mockapi.io/user";

export default SignUp = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        })
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
    // console.log(data);
    const handleSignUp = () => {
        const foundUser = data.find(
            (item) => item.userName === userName && item.password === password
        );
        if (foundUser) {
            console.log(foundUser);
            navigation.navigate("Home", { foundUser });
        } else {
            console.error("Invalid username or password");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />

            <ScrollView contentContainerStyle={[styles.container, { paddingBottom: 70 }]} showsVerticalScrollIndicator={false}>
                <Text style={{ fontSize: 30, fontWeight: "bold", color: "#00AFF0", marginTop: 30 }}>
                    Login
                </Text>
                <TextInput
                    onChangeText={setUserName}
                    style={styles.textField}
                    placeholder="Enter First Name..."
                />
                <TextInput
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    style={styles.textField}
                    placeholder="Enter Last Name..."
                />
                <TextInput
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    style={styles.textField}
                    placeholder="Enter Email..."
                />
                <TextInput
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    style={styles.textField}
                    placeholder="Enter Password..."
                />

                <TouchableOpacity
                    onPress={() => handleSignUp()}
                    style={{
                        width: '80%',
                        height: 50,
                        borderRadius: 20,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#00AFF0",
                        flexDirection: "row",
                        marginTop: 20,
                    }}
                >
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "#FFF" }}>
                        Create Account
                    </Text>
                </TouchableOpacity>

                <Footer navigation={{ navigation }} />

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    textField: {
        width: "80%",
        height: 60,
        borderWidth: 1.5,
        borderRadius: 20,
        paddingLeft: 20,
        fontSize: 20,
        color: "gray",
        marginTop: 15,
        borderColor: '#00aff0',
    }
})