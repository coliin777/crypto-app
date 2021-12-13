import React from 'react'
import { StyleSheet, View, Button } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
function LoginScreen({ navigation }) {

    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '1080551527879-asqdup3n1627j94b8tv1tkj15d3emqld.apps.googleusercontent.com',
    });

    React.useEffect(() => {
        if (response?.type === 'success') {
            console.log(response);
            navigation.navigate("Home", { auth: response.authentication })
        }
    }, [response]);

    return (
        <View style={styles.container}>
            <Button
                disabled={!request}
                title="Login"
                onPress={() => { promptAsync(); }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        borderColor: "#CCC",
        paddingTop: 7,
        paddingBottom: 7,
    },

});

export default LoginScreen;