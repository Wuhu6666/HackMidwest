import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import GoSignIn from '../screens/GoSignIn';
const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#3b5998',
    },
};

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer theme={MyTheme} >
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Sign In" component={SignInScreen} />
                <Stack.Screen name="Sign Up" component={SignUpScreen} />
                <Stack.Screen name="Go Sign In" component={GoSignIn} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;