import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, Button, TextInput, Alert } from "react-native";
// import { TextInput } from "react-native-web";
import { Component } from "react/cjs/react.production.min";
import SearchButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

// building the home screen
const SignUpScreen = () => {
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);
    const Separator = () => (
        <View style={styles.separator} />
    );
    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={{ fontSize: 30, alignSelf: 'center' }}>This is the Sign Up Page</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Some data there"
                    keyboardType="numeric"
                    backgroundColor="white"
                />

                <Button
                    title="Add"
                    onPress={() => Alert.alert('Add Button with adjusted color pressed')}
                />
                <Separator />
                <Button
                    title="Get"
                    color="#f194ff"
                    onPress={() => Alert.alert('Get Button with adjusted color pressed')}

                />
            </View>
        </ScrollView>
    );
}

// making it look pretty
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 40,
        backgroundColor: '#3b5998',
    },
    input: {
        height: 40,
        margin: 30,
        width: 300,
        borderWidth: 1,
        padding: 10,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
})

// exporting the home screen to be used in the app (so it can be used in other screens)
export default SignUpScreen;