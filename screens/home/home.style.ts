import { StyleSheet } from 'react-native';

export const homeStyle = StyleSheet.create({
    flex: {
        flex: 1,
        marginHorizontal: 15
    },
    toolsContainer: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center"
    },
    headerContainer: {
        display: "flex",
        justifyContent: "center",
    },
    headerUserWelcomeText : {
        fontSize: 30,
        letterSpacing: 1
    },
    settingsButton: {
        marginHorizontal: 10,
        fontSize: 35,
        color: "#00ccaa"
    },
    signOutContainer: {
        flex: 1,
        justifyContent: "flex-start",
        marginTop: 20
    },
    fab: {
        position: "absolute",
        bottom: 0,
        right: 0,
        margin: 25
    }
})