import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from "./screens/Index";
import Clothing from "./screens/Clothing";
import Product from "./screens/Product";
import Header from "./screens/Header";
import Footer from './screens/Footer';
import Accessories from './screens/Accessories'
import Accessories from './screens/Accessories'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

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
      <Drawer.Navigator initialRouteName="Clothing"
        screenOptions={({ navigation, route }) => ({
          headerShown: false,
          drawerStyle: { color: '#00aff0',  }})
        }
      >
      <Drawer.Screen name='Index' component={Index}></Drawer.Screen>
      <Drawer.Screen name='Clothing' component={Clothing}></Drawer.Screen>
      <Drawer.Screen name='Product' component={Product} options={{ drawerItemStyle: { display: 'none' } }}></Drawer.Screen>
      <Drawer.Screen name='Header' component={Header} options={{ drawerItemStyle: { display: 'none' } }}></Drawer.Screen>
      <Drawer.Screen name='Footer' component={Footer} options={{ drawerItemStyle: { display: 'none' } }}></Drawer.Screen>
    </Drawer.Navigator>
    </NavigationContainer >
  )
}