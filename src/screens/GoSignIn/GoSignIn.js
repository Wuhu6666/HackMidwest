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
import RadioButtonRN from 'radio-buttons-react-native';
const Realm = require('realm');

const SignInScreen = () => {
    const data = [
        {
            label: 'Student'
        },
        {
            label: 'Staff'
        },
    ];
    const navigation = useNavigation()
    const [username, onChangeEmail] = React.useState(null);
    const [password, onChangePass] = React.useState(null);

    const Separator = () => (
        <View style={styles.separator} />
    );

    const onHomePressed = () => {
        console.warn('Sign Up pressed')
        navigation.navigate('Home')
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.headerText}>
                    KPark
                </Text>
                <Separator />
                <Separator />
                <RadioButtonRN
                    data={data}
                    selectedBtn={(e) => console.log(e)}
                    style={{ width: 200 }}
                    textColor={'white'}
                    boxDeactiveBgColor={'grey'}
                />
                <Separator />
                <Separator />
                <Text style={styles.SomeText}>Email: </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeEmail}
                    value={username}
                    placeholder="Enter your your username: "
                    backgroundColor="white"
                />
                <Text style={styles.SomeText}>Password: </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangePass}
                    value={password}
                    placeholder="Enter your password: "
                    backgroundColor="white"
                />
                <Separator />
                <Separator />
                <Pressable
                    style={styles.button}
                    onPress={onHomePressed}
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
        padding: 88,
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
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
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