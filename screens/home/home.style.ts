import { StyleSheet } from 'react-native';
import { Item } from 'react-native-paper/lib/typescript/src/components/Drawer/Drawer';

export const homeStyle = StyleSheet.create({
    flex: {
        flex: 1,
        marginHorizontal: 15,
        backgroundColor: 'red'
    },
    toolsContainer: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    headerContainer: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        marginVertical: 20,
        marginLeft: 20,
    },
    headerUserWelcomeText : {
        color: 'white',
        fontSize: 30,
        letterSpacing: 1
    },
    settingsButton: {
        marginHorizontal: 10,
        fontSize: 25,
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