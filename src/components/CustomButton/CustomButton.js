import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

const CustomButton = ({ onPress, text, type = "PRIMARY", backgroundColor, foregroundColor }) => {
    return (
        <Pressable
            onPress={onPress}
            style={[
                styles.container,
                styles[`container_${type}`],
                backgroundColor ? { backgroundColor: backgroundColor } : {},
            ]}>
            <Text
                style={[
                    styles.text,
                    styles[`text_${type}`],
                    foregroundColor ? { color: foregroundColor } : {},
                ]}>
                {text}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        marginVertical: 10,

        alignItems: 'center',
        borderRadius: 5,
    },

    container_PRIMARY: {
        backgroundColor: '#F3A747',
    },

    container_SECONDARY: {
        borderColor: '#5873AA',
        borderWidth: 2,
    },

    container_TERTIARY: {

    },

    container_SEARCH: {
        borderColor: 'white',
        backgroundColor: '#F3A747',
        borderWidth: 2,
        width: 55,
        height: 40,
        marginLeft: -5,
        marginRight: 10,
    },

    text: {
        fontWeight: 'bold',
    },
    text_PRIMARY: {
        color: 'white',
    },

    text_SECONDARY: {
        color: 'white',
    },

    text_TERTIARY: {
        color: 'white',
        fontWeight: 'normal',
    },
})

export default CustomButton