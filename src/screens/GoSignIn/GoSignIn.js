import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { TextInput } from "react-native-web";
import { Component } from "react/cjs/react.production.min";
import SearchButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

import { User, Vehicle } from "./realm/allSchemas";
const Realm = require('realm');



const SignInScreen = () => {
    const navigation = useNavigation()

    // const onHomePressed = () => {
    //     console.warn('Sign Up pressed')
    //     navigation.navigate('Home')
    // }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={{ fontSize: 30, alignSelf: 'center' }}>This is the Sign In Page</Text>
                <CustomButton
                    text="Sign In Now"
                // onPress={() => addUser('Derek', 'Heimes', '4026403466', 'derekheimes@gmail.com', 'student')}
                // onPress={onHomePressed}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 40,
        backgroundColor: '#3b5998',
    },
})

export default SignInScreen;

// async function addUser(first, last, number, email, role) {
//     let user;
//     const realm = await Realm.open({ schema: [User, Vehicle] })
//     console.log(`Adding user with email ${email}`);
//     realm.write(() => {
//         user = realm.create("User", {
//             _id: ObjectId(),
//             firstName: first,
//             lastName: last,
//             phoneNumber: number,
//             email: email,
//             role: role
//         })
//     })
// }

// function getUser(email) {
//     const user = realm.objects("User").filtered(`email = ${email}`)[0];
//     console.log(`The user: ${user}`)
// }