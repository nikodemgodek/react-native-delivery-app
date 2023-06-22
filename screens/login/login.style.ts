import { StyleSheet } from 'react-native';

export const loginStyle = StyleSheet.create({
    flex: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        marginTop: 50,
    },
    textInput: {
        width: '100%',
        backgroundColor: "#fff",
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.23,
        shadowRadius: 9.51,
        elevation: 15,
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        margin: 10
    },
    button: {
        backgroundColor: "#000",
        width: 100
    },
    logo: {
        marginVertical: 100,
        fontSize: 80,
        color: "#00aaff",
    }
})

