import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from "./screens/Index"
// import Clothing from "./screens/Clothing"

export default App = () => {
    const Stack = createNativeStackNavigator();
    const MyTheme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: 'white'
        },
      };

    return (
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator initialRouteName="Index">
              <Stack.Screen name = 'Index' component={Index} options={{ headerShown: false}}></Stack.Screen>
              {/* <Stack.Screen name = 'Clothing' component={Clothing} options={{ headerShown: false}}></Stack.Screen> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}