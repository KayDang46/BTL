import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'

export default Header = ({ navigation }) => {
    let header__imgs = [
        'https://res.cloudinary.com/dpigoorhc/image/upload/v1699298966/onlyfan/index/Icon/esskl98l5b52i8rag9jq.png',
        'https://res.cloudinary.com/dpigoorhc/image/upload/v1699298966/onlyfan/index/Icon/klasfpxswxaglw2ujbtn.png',
        'https://res.cloudinary.com/dpigoorhc/image/upload/v1699300339/onlyfan/index/Icon/kliot9ffm7bupw2z7h0a.webp',
        'https://res.cloudinary.com/dpigoorhc/image/upload/v1699298966/onlyfan/index/Icon/coumb5pfsrrk5ncyljhy.png',
        'https://res.cloudinary.com/dpigoorhc/image/upload/f_auto,q_auto/v1/onlyfan/index/Icon/pyhiltqmgy54j36rwf3z',
    ];

    return (
        <View style={[styles.header, styles.f__center, styles.f__sb, styles.row]}>
            <View style={styles.row}>
                <TouchableOpacity style={styles.header__item} onPress={() => navigation.toggleDrawer()}>
                    <Image source={{ uri: header__imgs[0] }} style={styles.icon} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.header__item}>
                    <Image source={{ uri: header__imgs[1] }} style={styles.icon} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate({ name: 'Home' })}>
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
    header: {
        height: 85,
        color: 'hsl(0,0%,96.86%)',
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
        borderBottomWidth: 1,
        maxWidth: '95%',
        width: '100%'
    },
    header__item: {
        marginHorizontal: 10,
    },
    logo: {
        width: 170,
        height: 35
    },
    icon: {
        width: 25,
        height: 25,
    },
});