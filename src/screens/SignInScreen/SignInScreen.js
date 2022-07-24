import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput, Pressable } from 'react-native'
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
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>

                <Text style={styles.headerText}>
                    Logo
                </Text>
                <View style={styles.container}>
                    <Pressable
                        style={styles.button}
                        onPress={onGoSignInPressed}
                    />
                    <Pressable
                        style={styles.button}
                        onPress={onSignUpPressed}
                    />

                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    root: {
        alignItems: 'center',
        padding: 40,
        backgroundColor: '#3b5998',
    },

    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },

    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 5,
        color: 'white',

    },

    container: {
        flex: 1,
        marginTop: 450,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'white',
    },

})

export default SignInScreen