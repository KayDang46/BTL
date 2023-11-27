import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from "./screens/Index";
import Clothing from "./screens/Clothing";
import Product from "./screens/Product";
import Header from "./screens/Header";
import Footer from './screens/Footer';
import Accessories from './screens/Accessories';
import HomeLiving from './screens/HomeLiving';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { faHouse, faMugHot, faShirt, faSocks, faStar } from '@fortawesome/free-solid-svg-icons/';

export default App = () => {
  // const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white'
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator initialRouteName="SignIn"
        screenOptions={({ navigation, route }) => ({
          headerShown: false,
          drawerLabelStyle: {
            fontSize: 20,
            fontWeight: 'bold'
          },

        })}
      // drawerContent={props => {
      //   return (
      //     <DrawerContentScrollView {...props}>
      //       <DrawerItemList {...props}/>
      //     </DrawerContentScrollView>
      //   )
      // }}
      >
        <Drawer.Screen name='Home' component={Index} options={{
          drawerIcon: ({ focused, size }) => (
            <FontAwesomeIcon icon={faHouse} size={25} color={focused ? '#00aff0' : 'grey'} />
          )
        }} />
        <Drawer.Screen name='Clothing' component={Clothing} options={{
          drawerIcon: ({ focused, size }) => (
            <FontAwesomeIcon icon={faShirt} size={25} color={focused ? '#00aff0' : 'grey'} />
          )
        }} />
        <Drawer.Screen name='Accessories' component={Accessories} options={{
          drawerIcon: ({ focused, size }) => (
            <FontAwesomeIcon icon={faSocks} size={25} color={focused ? '#00aff0' : 'grey'} />
          )
        }} />
        <Drawer.Screen name='Home Living' component={HomeLiving} options={{
          drawerIcon: ({ focused, size }) => (
            <FontAwesomeIcon icon={faStar} size={25} color={focused ? '#00aff0' : 'grey'} />
          )
        }} />
        <Drawer.Screen name='Sign In' component={SignIn} />
        <Drawer.Screen name='Sign Up' component={SignUp} />
        <Drawer.Screen name='Product' component={Product} options={{ drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name='Header' component={Header} options={{ drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name='Footer' component={Footer} options={{ drawerItemStyle: { display: 'none' } }} />
      </Drawer.Navigator>
    </NavigationContainer >
  )
}