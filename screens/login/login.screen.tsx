import { SafeAreaView, View } from "react-native";
import { Text, TextInput, Button, Snackbar } from 'react-native-paper';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { loginStyle } from "./login.style";
import { FontAwesome } from '@expo/vector-icons';

import { FIREBASE_AUTH } from '../../config/firebase';

import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

import { doc, setDoc } from 'firebase/firestore';

import HeaderTabs from './header/header';

const LoginScreen = () => {

    const auth = FIREBASE_AUTH;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();

    const handleScreenPress = () => {
        Keyboard.dismiss();
    }

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .catch(err => alert(err.message));
        
    }

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then( (res) => {
                console.log(res);
                navigation.navigate('Home');
            }).catch(err => alert(err.message))
    }

    return(
        <TouchableWithoutFeedback onPress={handleScreenPress}>
            <SafeAreaView style={loginStyle.flex}>
                <HeaderTabs />
                <FontAwesome style={loginStyle.logo} name="rocket" />
                <TextInput 
                    style={loginStyle.textInput}
                    mode="outlined"
                    label="Login"
                    onChangeText={ (text) => setEmail(text) }
                />
                <TextInput 
                    style={loginStyle.textInput}
                    mode="outlined"
                    label="Password"
                    onChangeText={ (text) => setPassword(text) }
                    secureTextEntry
                />
                <View style={loginStyle.buttonsContainer}>
                    <Button style={loginStyle.button} 
                            mode="contained"
                            onPress={handleSignIn}>
                        Sign In
                    </Button>
                    <Button style={loginStyle.buttonRegister} 
                            mode="outlined"
                            onPress={handleSignUp}>
                        Sign Up
                    </Button>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default LoginScreen;