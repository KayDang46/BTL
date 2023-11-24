import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Pressable,
} from "react-native";

const Clothing = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const indexScreen = () => {
    navigation.navigate("Index");
  };
  const productScreenHL = () => {
    navigation.navigate("ProductHL");
  };
  //onPress={() => indexScreen()}
  useEffect(() => {
    getListPhotos();
  }, []);

  const getListPhotos = () => {
    const apiURL = "https://6560123f83aba11d99d02b3b.mockapi.io/HomeLiving";
    fetch(apiURL)
      .then((res) => res.json())
      .then((resJson) => {
        setData(resJson);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error: ", error);
        setIsLoading(false);
      });
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image
          style={styles.image}
          source={{ uri: item.url }}
          resizeMode="cover"
        />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row" }}>
        <Pressable onPress={() => indexScreen()}>
          <Image
            style={{ height: 24, width: 24, marginTop: 20, marginLeft: 10 }}
            source={require("../assets/back.png")}
          />
        </Pressable>
        <Text
          style={{
            color: "rgba(77, 199, 245, 1)",
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 10,
            marginLeft: 75,
          }}
        >
          Home Living
        </Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 30 }}>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 10,
            borderBottomColor: "gray",
            borderColor: "white",
            borderWidth: 1,
            width: 170,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ height: 15, width: 15, paddingTop: 20, marginRight: 5 }}
            source={require("../assets/iconoir_filter.png")}
          />
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Filter</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 0,
            borderBottomColor: "gray",
            borderColor: "white",
            borderWidth: 1,
            width: 170,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ height: 20, width: 20, marginRight: 5 }}
            source={require("../assets/lets-icons_sort.png")}
          />
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Sort by</Text>
        </View>
      </View>
      <Pressable onPress={() => productScreenHL()}>
        <SafeAreaView style={styles.container}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              style={styles.list}
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => `key-${item.id}`}
              numColumns={2}
            />
          )}
        </SafeAreaView>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  item: {
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    width: "45%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    color: "rgba(77, 199, 245, 1)",
  },
  price: {
    fontSize: 20,
    color: "#black",
    fontWeight: "bold",
  },
  list: {
    width: "100%",
  },
});

export default Clothing;
