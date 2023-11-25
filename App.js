// import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from "./screens/Index"
import Clothing from "./screens/Clothing"
import Product from "./screens/Product"
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
      {/* <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name='Index' component={Index} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='Product' component={Product} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='Clothing' component={Clothing} options={{ headerShown: false }}></Stack.Screen>
      </Stack.Navigator> */}
      {/* <Drawer.Navigator initialRouteName="Index"> */}
      <Drawer.Navigator initialRouteName="Clothing">
        <Drawer.Screen name='Index' component={Index} options={{ headerShown: false }}></Drawer.Screen>
        <Drawer.Screen name='Product' component={Product} options={{ headerShown: false, drawerItemStyle: { display: 'none' } }}></Drawer.Screen>
        <Drawer.Screen name='Clothing' component={Clothing} options={{ headerShown: false }}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}