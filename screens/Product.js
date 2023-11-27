import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, ScrollView, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './Header';
import Footer from './Footer';

export default Product = ({ navigation, route }) => {
    const [item, setItem] = useState(route.params.item);
    let [active, setActive] = useState(0);
    const [amount, setAmount] = useState(1);

    let instagram__data = [
        {
            id: 1,
            image: 'https://scontent.cdninstagram.com/v/t51.29350-15/403829897_844190220820463_5054741137157014079_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=SKzOzWULskYAX8WcX2L&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfA1oyn9Jz2wuAPDMrZp1QAvtyEVBA1a9OLeg0t0qDfCpA&oe=656462F8',
        },
        {
            id: 2,
            image: 'https://scontent.cdninstagram.com/v/t39.30808-6/402610771_18004631525486312_3296895236190517897_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=IX9uBwy57wsAX9c2IAH&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAbMeHhxy3lkG5wrfTnAvasZjkDF0CWoCBhdIjnpnRF8g&oe=6564509F',
        },
        {
            id: 3,
            image: 'https://store.onlyfans.com/cdn/shop/files/OnoyFans-Jun26_Square-3930.jpg?v=1691082127&width=1100',
        },
        {
            id: 4,
            image: 'https://store.onlyfans.com/cdn/shop/files/OnoyFans-Jun26_Square-3930.jpg?v=1691082127&width=1100',
        },
        {
            id: 5,
            image: 'https://store.onlyfans.com/cdn/shop/files/OnoyFans-Jun26_Square-3930.jpg?v=1691082127&width=1100',
        },
        {
            id: 6,
            image: 'https://store.onlyfans.com/cdn/shop/files/OnoyFans-Jun26_Square-3930.jpg?v=1691082127&width=1100',
        },
        {
            id: 7,
            image: 'https://store.onlyfans.com/cdn/shop/files/OnoyFans-Jun26_Square-3930.jpg?v=1691082127&width=1100',
        },
        {
            id: 8,
            image: 'https://store.onlyfans.com/cdn/shop/files/OnoyFans-Jun26_Square-3930.jpg?v=1691082127&width=1100',
        },
        {
            id: 9,
            image: 'https://store.onlyfans.com/cdn/shop/files/OnoyFans-Jun26_Square-3930.jpg?v=1691082127&width=1100',
        },
        {
            id: 10,
            image: 'https://store.onlyfans.com/cdn/shop/files/OnoyFans-Jun26_Square-3930.jpg?v=1691082127&width=1100',
        },
    ];

    //// Items of As Seen on Instagram Section
    let instagram__item = ({ item }) => {
        return (
            <TouchableOpacity style={{ margin: 3 }}>
                <View style={{ width: 75, height: 75 }}>
                    <Image source={{ uri: item.image }} style={{ width: 75, height: 75, borderRadius: 10 }}></Image>
                </View>
            </TouchableOpacity>
        )
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />

            <ScrollView contentContainerStyle={{ paddingBottom: 80 }} showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <View style={{ width: 400, height: 400 }}>
                        <Image source={{ uri: item.image }} style={{ width: 400, height: 400 }}></Image>
                    </View>
                    <View style={{ marginHorizontal: 20, justifyContent: 'space-evenly', marginBottom: 30 }}>
                        <Text style={{ fontSize: 18, color: '#00aeef', fontWeight: 700 }}>{item.name}</Text>
                        <Text style={{ fontSize: 30, color: '#000', fontWeight: 700 }}>${item.price}.00</Text>

                        <Text style={{ fontSize: 18, color: '#000', fontWeight: 700 }}>Size</Text>
                        <View style={{ marginTop: 10, gap: 5, flexDirection: 'row' }}>
                            <TouchableOpacity style={active === 0 ? styles.btnAct : styles.btnNotAct}
                                onPress={() => { setActive(0) }}>
                                <Text style={{ fontSize: 18, fontWeight: 700, }}>XS</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={active === 1 ? styles.btnAct : styles.btnNotAct}
                                onPress={() => { setActive(1) }}>
                                <Text style={{ fontSize: 18, fontWeight: 700, }}>S</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={active === 2 ? styles.btnAct : styles.btnNotAct}
                                onPress={() => { setActive(2) }}>
                                <Text style={{ fontSize: 18, fontWeight: 700, }}>M</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={active === 3 ? styles.btnAct : styles.btnNotAct}
                                onPress={() => { setActive(3) }}>
                                <Text style={{ fontSize: 18, fontWeight: 700, }}>L</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={active === 4 ? styles.btnAct : styles.btnNotAct}
                                onPress={() => { setActive(4) }}>
                                <Text style={{ fontSize: 18, fontWeight: 700, }}>XL</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[active === 5 ? styles.btnAct : styles.btnNotAct, { width: 70 }]}
                                onPress={() => { setActive(5) }}>
                                <Text style={{ fontSize: 18, fontWeight: 700, }}>2XL</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 18, color: '#000', fontWeight: 700, marginTop: 10 }}>Quantity</Text>
                        <View style={{ width: 250, height: 70, borderColor: '#000', borderRadius: 50, borderWidth: 2, flexDirection: 'row', marginTop: 10, justifyContent: 'space-between', alignItems: 'center' }}>
                            <TouchableOpacity style={{ paddingLeft: 25 }} onPress={() => setAmount(amount - 1)}><Text style={{ fontSize: 50 }}>-</Text></TouchableOpacity>
                            <Text style={{ fontSize: 30 }}>{amount}</Text>
                            <TouchableOpacity style={{ paddingRight: 25 }} onPress={() => setAmount(amount + 1)}><Text style={{ fontSize: 45 }}>+</Text></TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{ marginTop: 20, alignItems: 'center', backgroundColor: '#00aeef', padding: 10, borderRadius: 25 }}><Text style={{ color: '#fff', fontSize: 18 }}>Add to cart</Text></TouchableOpacity>
                    </View>

                    <View style={styles.title}>
                        <View style={styles.title__line} />
                        <View>
                            <Text style={[styles.title__text, { width: 300, fontWeight: 700 }]}>As Seen on Instagram</Text>
                        </View>
                        <View style={styles.title__line} />
                    </View>

                    <View style={[styles.instagram]}>
                        <FlatList
                            numColumns={5}
                            data={instagram__data}
                            renderItem={instagram__item}
                            keyExtractor={instagram__item => instagram__item.id}
                        />
                    </View>
                </View>

                <Footer navigation={navigation} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
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
    btnAct: {
        borderColor: '#00aff0',
        borderWidth: 0.5,
        borderRadius: 25,
        padding: 10,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    btnNotAct: {
        borderRadius: 25,
        padding: 10,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00aeef',
    }
});