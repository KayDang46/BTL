import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default Index = ({ navigation }) => {
    //Set State for reload items
    var [data, setData] = useState([]);

    //Set Active state for buttons
    let [active, setActive] = useState(0);

    // useEffect(() => {
    //     fetch('https://6544ac375a0b4b04436cb3e4.mockapi.io/item/', {
    //         method: 'GET',
    //         headers: {'content-type':'application/json'},
    //     })
    //         .then(response => response.json())
    //         .then((json) => {
    //             data = json;
    //             setData(data);
    //         })
    //         .catch(error => console.error('Error fetching data:', error));
    // },[]);

    let newArrivals_data = [
        {
            id: 1,
            image: 'https://store.onlyfans.com/cdn/shop/files/OnoyFans-Jun26_Square-3930.jpg?v=1691082127&width=300',
        },
        {
            id: 2,
            image: 'https://store.onlyfans.com/cdn/shop/files/OnoyFans-Jun26_Square-3930.jpg?v=1691082127&width=300',
        }
    ];

    let newArrivals_item = ({ item }) => {
        return (
            <TouchableOpacity style={styles.product__item}
                // onPress={() => navigation.navigate({name: 'Product', params: {item}})}
            >
                <Image source={item.image}></Image>
            </TouchableOpacity>
        )
    };

    let header__imgs = [
        'https://res.cloudinary.com/dpigoorhc/image/upload/v1699298966/onlyfan/index/Icon/esskl98l5b52i8rag9jq.png',
        'https://res.cloudinary.com/dpigoorhc/image/upload/v1699298966/onlyfan/index/Icon/klasfpxswxaglw2ujbtn.png',
        'https://res.cloudinary.com/dpigoorhc/image/upload/v1699300339/onlyfan/index/Icon/kliot9ffm7bupw2z7h0a.webp',
        'https://res.cloudinary.com/dpigoorhc/image/upload/v1699298966/onlyfan/index/Icon/coumb5pfsrrk5ncyljhy.png',
        'https://res.cloudinary.com/dpigoorhc/image/upload/f_auto,q_auto/v1/onlyfan/index/Icon/pyhiltqmgy54j36rwf3z',
    ];

    let feature__imgs = [
        'https://res.cloudinary.com/dpigoorhc/image/upload/v1699298787/onlyfan/index/ImgTop/c0u8vwzjwwijstamimcf.webp',
        'https://res.cloudinary.com/dpigoorhc/image/upload/v1699298787/onlyfan/index/ImgTop/xaovebioqsh8g0xxy2yj.webp',
        'https://res.cloudinary.com/dpigoorhc/image/upload/v1699298787/onlyfan/index/ImgTop/obiv1jtocmbhigyuuow3.webp',
        'https://res.cloudinary.com/dpigoorhc/image/upload/v1699298788/onlyfan/index/ImgTop/jkm2icvluxl26ueytliq.webp',
        'https://res.cloudinary.com/dpigoorhc/image/upload/v1699298788/onlyfan/index/ImgTop/io9eskaqwemuljsoxsf2.webp',
        'https://res.cloudinary.com/dpigoorhc/image/upload/v1699298789/onlyfan/index/ImgTop/acgn6bu433dktikibxl5.webp',
        'https://res.cloudinary.com/dpigoorhc/image/upload/v1699298788/onlyfan/index/ImgTop/kvuz2junz29gqmss2inm.webp',
        'https://res.cloudinary.com/dpigoorhc/image/upload/v1699298788/onlyfan/index/ImgTop/squdajwusup4kqo2wlej.webp',
        'https://res.cloudinary.com/dpigoorhc/image/upload/v1699298789/onlyfan/index/ImgTop/ep7iwfsbng3scvyrug38.webp'
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.header, styles.f__center, styles.f__sb, styles.row]}>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.header__item}>
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
                <View style={styles.content}>
                    <View style={[styles.feature, styles.f__center]}>
                        <View style={[styles.f__sb]}>
                            <View style={styles.col}>
                                <TouchableOpacity style={styles.feature__item}>
                                    <Image source={{ uri: feature__imgs[0] }} style={[styles.feature__image, styles.feature__image__Vrectangle]} />
                                </TouchableOpacity>
                            </View>

                            <View style={[styles.f__sb, styles.row]}>
                                <TouchableOpacity style={styles.feature__item}>
                                    <Image source={{ uri: feature__imgs[1] }} style={[styles.feature__image, styles.feature__image__square]} />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.feature__item}>
                                    <Image source={{ uri: feature__imgs[2] }} style={[styles.feature__image, styles.feature__image__square]} />
                                </TouchableOpacity>
                            </View>

                            <View>
                                <TouchableOpacity style={styles.feature__item}>
                                    <Image source={{ uri: feature__imgs[3] }} style={[styles.feature__image, styles.feature__image__Vrectangle]} />
                                </TouchableOpacity>
                            </View>

                            <View style={[styles.f__sb, styles.row]}>
                                <View style={[styles.f_sb, styles.col]}>
                                    <TouchableOpacity style={styles.feature__item}>
                                        <Image source={{ uri: feature__imgs[4] }} style={[styles.feature__image, styles.feature__image__square]} />
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.feature__item}>
                                        <Image source={{ uri: feature__imgs[5] }} style={[styles.feature__image, styles.feature__image__square]} />
                                    </TouchableOpacity>
                                </View>

                                <TouchableOpacity style={styles.feature__item}>
                                    <Image source={{ uri: feature__imgs[6] }} style={[styles.feature__image, styles.feature__image__Hrectangle]} />
                                </TouchableOpacity>
                            </View>

                            <View style={[styles.f__sb, styles.row]}>
                                <TouchableOpacity style={styles.feature__item}>
                                    <Image source={{ uri: feature__imgs[7] }} style={[styles.feature__image, styles.feature__image__square]} />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.feature__item}>
                                    <Image source={{ uri: feature__imgs[8] }} style={[styles.feature__image, styles.feature__image__square]} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.title}>
                    <View style={styles.title__line} />
                    <View>
                        <Text style={styles.title__text}>New Arrivals</Text>
                    </View>
                    <View style={styles.title__line} />
                </View>
                <View style={styles.newArrivals}>
                    <FlatList
                        horizontal
                        data={newArrivals_data}
                        showsVerticalScrollIndicator={false}
                        renderItem={newArrivals_item}
                        contentContainerStyle={{ paddingBottom: 100 }}
                        keyExtractor={newArrivals_item => newArrivals_item.id}
                    />
                </View>
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
        alignItems: 'center'
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
        color: 'rgb(0,175,240)'
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
});