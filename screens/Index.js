import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default Index = ({ navigation }) => {
    //Set State for reload items
    var [newArrivals__data, setData] = useState([]);

    //Set Active state for buttons
    let [active, setActive] = useState(0);

    useEffect(() => {
        fetch('https://6544ac375a0b4b04436cb3e4.mockapi.io/new__arrivals/', {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        })
            .then(response => response.json())
            .then((json) => {
                newArrivals__data = json;
                setData(newArrivals__data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // useEffect(() => {
    //     fetch('https://6544ac375a0b4b04436cb3e4.mockapi.io/instagram/', {
    //         method: 'GET',
    //         headers: {'content-type':'application/json'},
    //     })
    //         .then(response => response.json())
    //         .then((json) => {
    //             instagram__data = json;
    //             setData(instagram__data);
    //         })
    //         .catch(error => console.error('Error fetching data:', error));
    // },[]);

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

    //// Items of New Arrivals Section
    let newArrivals__item = ({ item }) => {
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
    ]

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
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
            {/* Overlay */}
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
                                <TouchableOpacity style={styles.feature__item}
                                    onPress={() => navigation.navigate({name: 'Clothing'})}
                                >
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
                                <View style={[styles.f__sb, styles.col]}>
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
                        <Text style={[styles.title__text, { fontWeight: 700 }]}>New Arrivals</Text>
                    </View>
                    <View style={styles.title__line} />
                </View>
                <View style={[styles.newArrivals, { alignItems: 'center', justifyContent: 'center' }]}>
                    <FlatList
                        horizontal
                        data={newArrivals__data}
                        // showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        renderItem={newArrivals__item}
                        contentContainerStyle={{ paddingBottom: 0 }}
                        keyExtractor={newArrivals__item => newArrivals__item.id}
                    />
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
                {/* Footer */}
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