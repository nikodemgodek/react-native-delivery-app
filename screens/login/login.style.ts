import { StyleSheet } from 'react-native';

export const loginStyle = StyleSheet.create({
    flex: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 30,
    },
    textInput: {
        width: '100%',
        backgroundColor: "#fff",
        marginVertical: 10,
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        margin: 15,
    },
    button: {
        marginHorizontal: 5,
        backgroundColor: "#00aaff"
    },
    buttonRegister: {
        marginHorizontal: 5,
        backgroundColor: "#fff"
    },
    logo: {
        marginBottom: 30,
        fontSize: 80,
        color: "#00aaff"
    }
})

