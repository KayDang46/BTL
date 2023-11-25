import React, { useEffect, useState } from "react";
import { View, Image, Text, SafeAreaView, StyleSheet, FlatList, TouchableOpacity, ScrollView } from "react-native";

const Clothing = ({ navigation }) => {
    // const [clothing__data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     getListPhotos();
    // }, []);

    // const getListPhotos = () => {
    //     const url = "https://655683f184b36e3a431fd9be.mockapi.io/todo";
    //     fetch(url)
    //         .then((res) => res.json())
    //         .then((resJson) => {
    //             setData(resJson);
    //             setIsLoading(false);
    //         })
    //         .catch((error) => {
    //             console.log("Error: ", error);
    //             setIsLoading(false);
    //         });
    // };



    // useEffect(() => {
    //     fetch('https://6544ac375a0b4b04436cb3e4.mockapi.io/clothing/', {
    //         method: 'GET',
    //         headers: { 'content-type': 'application/json' },
    //     })
    //         .then(response => response.json())
    //         .then((json) => {
    //             clothing__data = json;
    //             setData(clothing__data);
    //         })
    //         .catch(error => console.error('Error fetching data:', error));
    // }, []);

    let footer__payment = [
        'https://res.cloudinary.com/dpigoorhc/image/upload/v1699298967/onlyfan/index/Icon/pvyv4ps7yf8picqfj0y3.png',
        'https://res.cloudinary.com/dpigoorhc/image/upload/v1699298967/onlyfan/index/Icon/abyftm5s7pimchn1h8q3.png',
        'https://res.cloudinary.com/dpigoorhc/image/upload/v1699298968/onlyfan/index/Icon/dx10zr87m07beixsiqt5.png',
        'https://res.cloudinary.com/dpigoorhc/image/upload/v1699298968/onlyfan/index/Icon/p0zgqzg3kesgjxxdwriy.png',
        'https://res.cloudinary.com/dpigoorhc/image/upload/v1699298968/onlyfan/index/Icon/ngjnwxkmboxlenz2pa8s.png',
        'https://res.cloudinary.com/dpigoorhc/image/upload/v1699298968/onlyfan/index/Icon/z6m8bzztfke92xtmxjyv.png',
        'https://res.cloudinary.com/dpigoorhc/image/upload/v1699298968/onlyfan/index/Icon/ghx4qha6iz87emc6no8c.png',
        'https://res.cloudinary.com/dpigoorhc/image/upload/v1699298968/onlyfan/index/Icon/nwcmpt0kmsxxpli3kuos.png',
        'https://res.cloudinary.com/dpigoorhc/image/upload/v1699298969/onlyfan/index/Icon/fqbin3vitaewleqririv.png',
        'https://res.cloudinary.com/dpigoorhc/image/upload/v1699298969/onlyfan/index/Icon/rohv9q4wjjjwdgw63wyy.png',
        'https://res.cloudinary.com/dpigoorhc/image/upload/v1699298969/onlyfan/index/Icon/cjcxah2gmwdkvzsqo9pw.png',
    ];

    let header__imgs = [
        'https://res.cloudinary.com/dpigoorhc/image/upload/v1699298966/onlyfan/index/Icon/esskl98l5b52i8rag9jq.png',
        'https://res.cloudinary.com/dpigoorhc/image/upload/v1699298966/onlyfan/index/Icon/klasfpxswxaglw2ujbtn.png',
        'https://res.cloudinary.com/dpigoorhc/image/upload/v1699300339/onlyfan/index/Icon/kliot9ffm7bupw2z7h0a.webp',
        'https://res.cloudinary.com/dpigoorhc/image/upload/v1699298966/onlyfan/index/Icon/coumb5pfsrrk5ncyljhy.png',
        'https://res.cloudinary.com/dpigoorhc/image/upload/f_auto,q_auto/v1/onlyfan/index/Icon/pyhiltqmgy54j36rwf3z',
    ];

    let clothing__data = [
        {
            name: "name 1",
            image: 'https://store.onlyfans.com/cdn/shop/files/OnlyFans-3906_b3a9c9b9-3747-4141-9c50-cc123a4b32d6.jpg?v=1700076876&width=300',
            price: 7,
            type: "pants",
            id: "1"
        },
        {
            name: "name 1",
            image: "https://store.onlyfans.com/cdn/shop/files/OnlyFans-3906_b3a9c9b9-3747-4141-9c50-cc123a4b32d6.jpg?v=1700076876&width=300",
            price: 7,
            type: "pants",
            id: "2"
        },
        {
            name: "name 1",
            image: "https://store.onlyfans.com/cdn/shop/files/OnlyFans-3906_b3a9c9b9-3747-4141-9c50-cc123a4b32d6.jpg?v=1700076876&width=300",
            price: 7,
            type: "pants",
            id: "3"
        },
        {
            name: "name 1",
            image: "https://store.onlyfans.com/cdn/shop/files/OnlyFans-3906_b3a9c9b9-3747-4141-9c50-cc123a4b32d6.jpg?v=1700076876&width=300",
            price: 7,
            type: "pants",
            id: "4"
        },
        {
            name: "name 1",
            image: "https://store.onlyfans.com/cdn/shop/files/OnlyFans-3906_b3a9c9b9-3747-4141-9c50-cc123a4b32d6.jpg?v=1700076876&width=300",
            price: 7,
            type: "pants",
            id: "5"
        },
    ];

    let clothing__item = ({ item }) => {
        return (
            <TouchableOpacity style
                onPress={() => navigation.navigate({ name: 'Product', params: { item } })}
            >
                <View style={{ width: 200, height: 200 }}>
                    <Image source={{ uri: item.image }} style={{ width: 200, height: 200 }}></Image>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ maxWidth: 150, textAlign: 'center', fontSize: 18, color: '#00aeef', fontWeight: 700 }}>{item.name}</Text>
                    <Text style={{ fontSize: 18, color: '#000', fontWeight: 700 }}>${item.price}.00</Text>
                </View>
            </TouchableOpacity>
        )
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.header, styles.f__center, styles.f__sb, styles.row]}>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.header__item} onPress={() => navigation.toggleDrawer()}>
                        <Image source={{ uri: header__imgs[0] }} style={styles.icon} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.header__item}>
                        <Image source={{ uri: header__imgs[1] }} style={styles.icon} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity>
                    <Image source={{ uri: header__imgs[2] }} style={styles.logo} />
                </TouchableOpacity>

                <View style={styles.row}>
                    <TouchableOpacity style={styles.header__item}>
                        <Image source={{ uri: header__imgs[3] }} style={styles.icon} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.header__item}>
                        <Image source={{ uri: header__imgs[4] }} style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>


            <ScrollView contentContainerStyle={{ paddingBottom: 80 }} showsVerticalScrollIndicator={false}>
                <Text style={{ color: "#00aeef", fontSize: 30, fontWeight: 700, textAlign: "center", marginTop: 30, }}>
                    Clothing
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
                        data={clothing__data}
                        renderItem={clothing__item}
                        contentContainerStyle={{ paddingBottom: 0 }}
                        keyExtractor={clothing__item => clothing__item.id}
                    />
                </View>
                <View style={styles.footer}>
                    <View style={{ flexDirection: 'column' }}>
                        <TouchableOpacity>
                            <Image style={styles.logo}
                                source={{ uri: "https://store.onlyfans.com/cdn/shop/files/OnlyFans_Logo_Full_Blue_2.png?v=1650912266&width=1100" }} />
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', marginTop: 50, gap: 30 }}>
                            <TouchableOpacity style={styles.icon}>
                                <Image style={styles.icon}
                                    source={{ uri: "https://res.cloudinary.com/dpigoorhc/image/upload/v1699298967/onlyfan/index/Icon/caepmnawkgrkukwrnhkt.png" }} />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.icon}>
                                <Image style={styles.icon}
                                    source={{ uri: "https://res.cloudinary.com/dpigoorhc/image/upload/v1699298967/onlyfan/index/Icon/izyvbohzs0oxgrmhisz7.png" }} />
                            </TouchableOpacity>

                            <TouchableOpacity style={{ width: 37.5, height: 25 }}>
                                <Image style={{ width: 37.5, height: 25 }}
                                    source={{ uri: "https://res.cloudinary.com/dpigoorhc/image/upload/v1699298967/onlyfan/index/Icon/dcko5ywhl9efxqic4xwm.png" }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 50, gap: 15 }}>
                            <TouchableOpacity><Text style={{ fontSize: 18 }}>Search</Text></TouchableOpacity>
                            <TouchableOpacity><Text style={{ fontSize: 18 }}>About</Text></TouchableOpacity>
                            <TouchableOpacity><Text style={{ fontSize: 18 }}>Return Policy</Text></TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 50 }}>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <TouchableOpacity><Text style={{ fontSize: 15 }}>© 2023, OnlyFans Store</Text></TouchableOpacity>
                            <TouchableOpacity><Text style={{ fontSize: 15 }}>Powered by Shopify</Text></TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <View style={{ flexWrap: 'wrap', flexDirection: 'row', gap: 10 }}>
                            <Image source={{ uri: footer__payment[0] }} style={styles.footer__card} />
                            <Image source={{ uri: footer__payment[1] }} style={styles.footer__card} />
                            <Image source={{ uri: footer__payment[2] }} style={styles.footer__card} />
                            <Image source={{ uri: footer__payment[3] }} style={styles.footer__card} />
                            <Image source={{ uri: footer__payment[4] }} style={styles.footer__card} />
                            <Image source={{ uri: footer__payment[5] }} style={styles.footer__card} />
                            <Image source={{ uri: footer__payment[6] }} style={styles.footer__card} />
                            <Image source={{ uri: footer__payment[7] }} style={styles.footer__card} />
                            <Image source={{ uri: footer__payment[8] }} style={styles.footer__card} />
                            <Image source={{ uri: footer__payment[9] }} style={styles.footer__card} />
                            <Image source={{ uri: footer__payment[10] }} style={styles.footer__card} />
                        </View>
                    </View>
                </View>
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
    header: {
        height: 85,
        color: 'hsl(0,0%,96.86%)',
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
        borderBottomWidth: 1,
        maxWidth: '95%',
        width: '100%'
    },
    logo: {
        width: 170,
        height: 35
    },
    icon: {
        width: 25,
        height: 25,
    },
    header__item: {
        marginHorizontal: 10,
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

export default Clothing;