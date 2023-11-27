import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

export default Footer = ({ navigation }) => {
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
    return (
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

            <View style={{ marginTop: 40 }}>
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
    )
}

const styles = StyleSheet.create({
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
    footer: {
        marginTop: 35,
        marginHorizontal: 20
    },
    footer__card: {
        width: 40,
        height: 25,
    },
});