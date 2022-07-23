import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>This is our icon</Text>
            <Button
                title="Sign in"

            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
