import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from "./screens/Index";
import Clothing from "./screens/Clothing";
import Product from "./screens/Product";
import Header from "./screens/Header";
import Footer from './screens/Footer';
import Accessories from './screens/Accessories'
import HomeLiving from './screens/HomeLiving'
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp'

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
      <Drawer.Navigator initialRouteName="SignIn"
        screenOptions={({ navigation, route }) => ({
          headerShown: false,
          drawerLabelStyle:{
            fontSize: 20,
            fontWeight: 'bold'
          }
        })}
        drawerContent={props => {
          return (
            <DrawerContentScrollView {...props}>
              <DrawerItemList {...props}/>
              {/* <DrawerItem label="Sign In" onPress={() => props.navigation.navigate("SignIn")} />
              <DrawerItem label="Sign Up" onPress={() => props.navigation.navigate("SignUp")} /> */}
            </DrawerContentScrollView>
          )
        }}
      >
      <Drawer.Screen name='Home' component={Index}></Drawer.Screen>
      <Drawer.Screen name='Clothing' component={Clothing}></Drawer.Screen>
      <Drawer.Screen name='Accessories' component={Accessories}></Drawer.Screen>
      <Drawer.Screen name='Home Living' component={HomeLiving}></Drawer.Screen>
      <Drawer.Screen name='Product' component={Product} options={{ drawerItemStyle: { display: 'none' } }}></Drawer.Screen>
      <Drawer.Screen name='Header' component={Header} options={{ drawerItemStyle: { display: 'none' } }}></Drawer.Screen>
      <Drawer.Screen name='Footer' component={Footer} options={{ drawerItemStyle: { display: 'none' } }}></Drawer.Screen>
      <Drawer.Screen name='Sign In' component={SignIn} options={{   }}></Drawer.Screen>
      <Drawer.Screen name='Sign Up' component={SignUp} options={{   }}></Drawer.Screen>
      {/* <Drawer.Screen name='SignIn' component={SignIn} options={{ drawerItemStyle: { display: 'none' } }}></Drawer.Screen>
      <Drawer.Screen name='SignUp' component={SignUp} options={{ drawerItemStyle: { display: 'none' } }}></Drawer.Screen> */}
      
    </Drawer.Navigator>
    </NavigationContainer >
  )
}