import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import  AppNavigation  from './navigation/appNavigation';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login, Signup, Welcome } from "./screens";

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <AppNavigation />
     //  <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName='Welcome'
    //   >
    //     <Stack.Screen
    //       name="Welcome"
    //       component={Welcome}
    //       options={{
    //         headerShown: false
    //       }}
    //     />
    //     <Stack.Screen
    //       name="Login"
    //       component={Login}
    //       options={{
    //         headerShown: false
    //       }}
    //     />
    //     <Stack.Screen
    //       name="Signup"
    //       component={Signup}
    //       options={{
    //         headerShown: false
    //       }}
    //     />
    //      <Stack.Screen
    //       name="AppNavigation"
    //       component={AppNavigation}
    //       options={{
    //         headerShown: false
    //       }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}