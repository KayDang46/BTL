import React, { useEffect, useState } from "react";
import { View, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { FlatList } from 'react-native-gesture-handler';
import Header from "./Header";
import Footer from './Footer';

const Accessories = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(true);
    var [accessories__data, setData] = useState([]);

    useEffect(() => {
        fetch('https://6560123f83aba11d99d02b3b.mockapi.io/Accessories', {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        })
            .then(response => response.json())
            .then((json) => {
                accessories__data = json;
                setData(accessories__data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    

    let accessories__item = ({ item }) => {
        return (
            <TouchableOpacity style={{ marginTop: 30}}
                onPress={() => navigation.navigate({ name: 'Product', params: { item } })}
            >
                <View style={{ width: 200, height: 200 }}>
                    <Image source={{ uri: item.url }} style={{ width: 200, height: 200 }}></Image>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'flex-start', margin: 10 }}>
                    <Text style={{ maxWidth: 150, textAlign: 'left', fontSize: 18, color: '#00aeef', fontWeight: 700 }}>{item.name}</Text>
                    <Text style={{ fontSize: 25, textAlign: 'left', color: '#000', fontWeight: 700 }}>${item.price}.00</Text>
                </View>
            </TouchableOpacity>
        )
    };
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation}/>

            <ScrollView contentContainerStyle={{ paddingBottom: 70 }} showsVerticalScrollIndicator={false}>
                <Text style={{ color: "#00aeef", fontSize: 30, fontWeight: 700, textAlign: "center", marginTop: 30, }}>
                    Accessories
                </Text>
                <View style={{ flexDirection: "row", marginTop: 30, justifyContent: 'center', gap: 10 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", borderBottomColor: 'grey', borderBottomWidth: 1, paddingHorizontal: 50 }}>
                        <TouchableOpacity style={{ flexDirection: "row", gap: 5, alignitem: 'center' }}>
                            <Image style={{ height: 20, width: 20 }}
                                source={require("../assets/iconoir_filter.png")}
                            />
                            <Text style={{ fontSize: 18, fontWeight: 700 }}>Filter</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", borderBottomColor: 'grey', borderBottomWidth: 1, paddingHorizontal: 50 }}>
                        <TouchableOpacity style={{ flexDirection: "row", gap: 5, alignitem: 'center' }}>
                            <Image style={{ height: 25, width: 25 }}
                                source={require("../assets/lets-icons_sort.png")}
                            />
                            <Text style={{ fontSize: 18, fontWeight: 700 }}>Sort by</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.content}>
                    <FlatList
                        numColumns={2}
                        data={accessories__data}
                        renderItem={accessories__item}
                        contentContainerStyle={{ paddingBottom: 0 }}
                        keyExtractor={accessories__item => accessories__item.id}
                    />
                </View>
                <Footer navigation={navigation}/>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        margintop: 20,
    },
    title__line: {
        flex: 1,
        height: 3,
        backgroundColor: 'rgb(0,175,240)'
    },
    title__text: {
        width: 180,
        textAlign: 'center',
        fontSize: 28,
        color: 'rgb(0,175,240)',
    },
    f__sb: {
        justifyContent: 'space-between',
    },
    f__center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrap: {
        flexWrap: 'wrap'
    },
    row: {
        flexDirection: 'row'
    },
    col: {
        flexDirection: 'column'
    },
    feature: {
        marginVertical: 20,
    },
    feature__item: {
        marginBottom: 15,
    },
    feature__image: {
        borderColor: '#00aff0',
        borderWidth: 2,
        borderRadius: 21.5,
    },
    feature__image__Vrectangle: {
        width: 380,
        height: 180,
    },
    feature__image__square: {
        width: 180,
        height: 180,
    },
    feature__image__Hrectangle: {
        width: 180,
        height: 380,
    },
    footer: {
        marginTop: 35,
        marginHorizontal: 20
    },
    footer__card: {
        width: 40,
        height: 25,
    },
});

export default Accessories;