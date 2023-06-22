import { SafeAreaView, View } from "react-native";
import { Title, FAB, Card, List, Text, Button } from 'react-native-paper';
import MapView from 'react-native-maps';
import { homeStyle } from './home.style';

import { FontAwesome } from '@expo/vector-icons';

import { FIREBASE_AUTH } from '../../config/firebase';

import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {

    const state: number = 2;
    const auth = FIREBASE_AUTH;

    const navigation = useNavigation();

    const handleSignOut = () => {
        auth.signOut()
            .then(() => {
               navigation.navigate('Login');
            }).catch(err => alert(err.message))
    }

    return(
        <SafeAreaView style={{backgroundColor: '#023'}}>
            <View>
                <View style={homeStyle.toolsContainer}>
                    <FontAwesome style={homeStyle.settingsButton} name="sign-out" onPress={handleSignOut}/>
                    <FontAwesome style={homeStyle.settingsButton} name="gear"/>
                </View>
                <View style={homeStyle.headerContainer}>
                    <Text style={homeStyle.headerUserWelcomeText}>Hi, {auth.currentUser.displayName ? auth.currentUser.displayName : 'Stranger'}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;