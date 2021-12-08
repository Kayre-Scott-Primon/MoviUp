import React from "react"; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// pages
import Splash from "./screens/splash";
import Home from "./screens/home";
import Details from "./screens/details";
import Info from "./screens/info";

// instanciando navegação
const Stack = createNativeStackNavigator();

const App = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Stack.Screen name="Details" component={Details} options={{headerShown: false}} />
            <Stack.Screen name="Info" component={Info} options={{headerShown: false}} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default App