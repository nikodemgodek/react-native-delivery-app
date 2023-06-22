import { StyleSheet, SafeAreaView, View } from "react-native";
import { Title, FAB, Card, List, Text, Button } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';


const ActivationScreen = () => {

    const navigation = useNavigation();

    const goToLoginPage = () => {
        navigation.navigate("Login");
    }

    return(
        <SafeAreaView style={styles.container}>
            <FontAwesome style={styles.icon} name="check" />
            <Text style={styles.text}>Thanks for registering your account!</Text>
            <Text style={styles.text}>We've sent activation link on your email.</Text>
            <Button style={styles.button} mode="contained" onPress={goToLoginPage}>Return</Button>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        alignSelf: "center",
        marginVertical: "50%",
        width: "80%"
    },
    icon: {
        fontSize: 80,
        textAlign: "center",
        marginBottom: "10%",
        color: "green"
    },
    text: {
        fontSize: 23,
        textAlign: "center"
    },
    button: {
        width: "100%",
        marginTop: 30,
        backgroundColor: "black",
    }
})

export default ActivationScreen;