import React from "react";
import {
    View, Text, StyleSheet, ScrollView, Image, Pressable, TextInput
} from "react-native";
import { Component } from "react/cjs/react.production.min";
import SearchButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { User, Vehicle } from "./realm/allSchemas";
const Realm = require('realm');

const SignInScreen = () => {
    const navigation = useNavigation()
    const [text, onChangeText] = React.useState(null);
    // const onHomePressed = () => {
    //     console.warn('Sign Up pressed')
    //     navigation.navigate('Home')
    // }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.headerText}>
                    KPark
                </Text>
                <Image source={require('../../../assets/Logo.jpg')}
                    style={{ width: 700, height: 450 }} />
                <Text style={styles.SomeText}>Username: </Text>
                <TextInput
                    style={{ fontSize: 40 }}
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Enter your your username: "
                    backgroundColor="white"
                />
                <TextInput
                    style={{ fontSize: 40 }}
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Enter your password: "
                    backgroundColor="white"
                />
                <Pressable
                    style={styles.button}
                // onPress={onGoSignInPressed}
                >
                    <Text style={styles.ButtonText}>Sign In Now</Text>
                </Pressable>

            </View>

        </ScrollView>
    );
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
    SomeText: {
        fontSize: 20,
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
    input: {
        height: 50,
        margin: 25,
        width: 250,
        borderWidth: 1,
        padding: 10,
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