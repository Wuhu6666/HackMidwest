import React, { useState } from 'react'
import { View, Text, StyleSheet, useWindowDimensions, ScrollView, TextInput, Pressable, Image } from 'react-native'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'
import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
Parse.initialize('XwnlQIY0f0GyOzt5DftAZEYLOy9YZmT26ZIktF94', 'L4fRRElgmLuKvanPenznzblgXwqDJGtxIKG0dB8j');
Parse.serverURL = 'https://parseapi.back4app.com/';

const SignInScreen = () => {
    const navigation = useNavigation()

    const onSignUpPressed = () => {
        console.warn('Sign Up pressed')
        navigation.navigate('Sign Up')
    }
    const onGoSignInPressed = () => {
        console.warn('Go Sign In pressed')
        navigation.navigate('Go Sign In')
    }

    return (
        <ScrollView style={styles.backgroundColor}>

            <View style={styles.root}>
                <Text style={styles.headerText}>
                    KPark
                </Text>
                <Image source={require('../../../assets/Logo.jpg')}
                    style={{ width: 700, height: 450 }} />
                <View style={styles.container}>
                    <Pressable
                        style={styles.button}
                        onPress={onGoSignInPressed}

                    >
                        <Text style={styles.ButtonText}>Sign In</Text>
                    </Pressable>
                    <Pressable
                        style={styles.button}
                        onPress={onSignUpPressed}
                    ><Text style={styles.ButtonText}>
                            Sign Up
                        </Text>
                    </Pressable>

                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 40,
        backgroundColor: 'black',
    },
    headerText: {
        fontSize: 60,
        fontWeight: 'bold',
        marginVertical: 5,
        color: 'white',
    },
    ButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 5,
        color: 'black',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 70,
        borderRadius: 5,
        backgroundColor: 'white',
        borderWidth: 2
    },

})

export default SignInScreen