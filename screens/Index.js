import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import Header from './Header';
import Footer from './Footer';

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
            image: 'https://scontent.cdninstagram.com/v/t51.29350-15/397276287_1791501667952124_5715052274080549424_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=F8WLxa3IEAIAX8RZ6nW&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDMrrN2vLJv_dTeyg5THAcMLovKwFqW0jgKN69w3N3fcw&oe=6569FE72',
        },
        {
            id: 4,
            image: 'https://scontent.cdninstagram.com/v/t51.29350-15/396231813_870116821308560_4238164965477424201_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=tYapp4w6glwAX95R2z_&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDe0DMVQh8qSSA2K1VuwHB-JNJ_Sr5Qe2T94izH-yWFMw&oe=6568EF9C',
        },
        {
            id: 5,
            image: 'https://scontent.cdninstagram.com/v/t51.29350-15/393559510_610065917784619_816463821206577283_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=RDuAjzXrgmwAX9aHXNc&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAbN-MWqgE1tiYl2haPVp6WrodSx3XYP-RC7_c_d-o3gw&oe=6569925E',
        },
        {
            id: 6,
            image: 'https://scontent.cdninstagram.com/v/t39.30808-6/398975981_18003320087486312_1469498415018811235_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=6mY9eFPyd9QAX8UmDp1&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfC4MuWJLQUZ0oZCxX2txe_3RSCLu2QXPqwj0YaBUlrdog&oe=6568E004',
        },
        {
            id: 7,
            image: 'https://scontent.cdninstagram.com/v/t39.30808-6/399014897_18003038366486312_6881284467806146932_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=Rv-u5mMN8kQAX-SK6qz&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCaSss16VjP2WqusRxgdlfqwvFfdX_p2axwUGHSRZjQ3Q&oe=656A135D',
        },
        {
            id: 8,
            image: 'https://scontent.cdninstagram.com/v/t39.30808-6/396727663_18002558723486312_898888665031614498_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=VV0l330dAyQAX82A12q&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDtkIfaK_Jh4PThs65ACdWSpbUFIv7Pgusi4HPDvHOVzg&oe=656967F0',
        },
        {
            id: 9,
            image: 'https://scontent.cdninstagram.com/v/t39.30808-6/405273581_18005325281486312_2412294890856777446_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=q018BvVwfocAX8cVi4v&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDcpYO0LpUopZoeYEgs-t5XijQLWG9OfEL--ycVCNUpVQ&oe=6568F0CF',
        },
        {
            id: 10,
            image: 'https://scontent.cdninstagram.com/v/t39.30808-6/402054055_18004359272486312_3659193928957533509_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=PmVIMqF2aAwAX-yRGR_&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCp6ZX1JeU7Rzr2gfo_4oH2mGOcYuwretnLJLDAi-O7zA&oe=6568375F',
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
            <Header navigation={navigation} />
            {/* Body */}
            <ScrollView contentContainerStyle={{ paddingBottom: 70 }} showsVerticalScrollIndicator={false}>
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
                                    onPress={() => navigation.navigate({ name: 'Clothing' })}
                                >
                                    <Image source={{ uri: feature__imgs[1] }} style={[styles.feature__image, styles.feature__image__square]} />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.feature__item}
                                    onPress={() => navigation.navigate({ name: 'Home Living' })}
                                >
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

                                <TouchableOpacity style={styles.feature__item}
                                    onPress={() => navigation.navigate({ name: 'Accessories' })}
                                >
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
                <Footer navigation={navigation}/>
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
    logo: {
        width: 170,
        height: 35
    },
    icon: {
        width: 25,
        height: 25,
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