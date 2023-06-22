import { SafeAreaView, View } from "react-native";
import { Text, TextInput, Button, Snackbar } from 'react-native-paper';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';

import { loginStyle } from "./login.style";
import { FontAwesome } from '@expo/vector-icons';

import { FIREBASE_AUTH } from '../../config/firebase';

import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, getAuth } from "firebase/auth";

import { doc, setDoc } from 'firebase/firestore';

import HeaderTabs from './header/header';


const LoginScreen = () => {

    const auth = FIREBASE_AUTH;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState(null);

    const [activeHeaderButton, setActiveHeaderButton] = useState("Login");
    const [errorMessage, setErrorMessage] = useState("");

    const navigation = useNavigation();

    const handleScreenPress = () => {
        Keyboard.dismiss();
    }

    const handleSignUp = async () => {

        if(name === null) {
            setErrorMessage("You must provide your name");
            return;
        }

        await createUserWithEmailAndPassword(auth, email, password)
        .then(async () => {
            navigation.navigate("Activation");
            alert("Login complete");
            await updateProfile(auth.currentUser, {displayName: name});
            
        })
        .catch(error => {
            
            if (error.code === 'auth/email-already-in-use') {
                setErrorMessage('The email address provided is already in use by another user.');
            } else if (error.code === 'auth/invalid-email') {
                setErrorMessage('Invalid e-mail format.');
            } else if (error.code === 'auth/weak-password') {
                setErrorMessage('Your password is too weak. You have to use at least 6 characters.');
            } else if (error.code === 'auth/missing-password') {
                setErrorMessage('You need to provide password.')
            } else {
                setErrorMessage('Wystąpił błąd rejestracji: ' + error.code);
            }
        });
    }

    const handleSignIn = () => {

        signInWithEmailAndPassword(auth, email, password)
            .then( (res) => {
                console.log(res);
                setErrorMessage("");
                navigation.navigate('Home');
            }).catch(error => {

                if (error.code === 'auth/user-not-found') {
                    setErrorMessage('The email address you entered is not associated with an account.');
                } else if (error.code === 'auth/wrong-password') {
                    setErrorMessage('You have entered wrong password.');
                } else {
                    setErrorMessage('Unable to proceed request.');
                    alert(error.message);
                }
            }
        )
    }

    return(
        <SafeAreaView>
            <SafeAreaView style={{paddingTop: 60}}>
                <HeaderTabs activeHeaderButton={activeHeaderButton} setActiveHeaderButton={setActiveHeaderButton} />
            </SafeAreaView>
            <TouchableWithoutFeedback onPress={handleScreenPress}>
                <SafeAreaView style={loginStyle.flex}>

                    <FontAwesome style={loginStyle.logo} name="rocket" />
                        {activeHeaderButton === "Login" && 
                            <View style={{width: "80%"}}>
                                <TextInput
                                    style={loginStyle.textInput}
                                    mode="flat"
                                    label="Login"
                                    onChangeText={ (text) => setEmail(text) }
                                    outlineColor="#ccc"
                                    activeOutlineColor="#000"
                                />
                                
                                <TextInput
                                    style={loginStyle.textInput}
                                    mode="flat"
                                    label="Password"
                                    onChangeText={ (text) => setPassword(text) }
                                    secureTextEntry
                                    outlineColor="#ccc"
                                    activeOutlineColor="#000"
                                />
                                {errorMessage && <Text style={{color: "red"}}><FontAwesome name="warning" /> {errorMessage}</Text> }
                            </View>
                        }

                        {activeHeaderButton === "Register" &&
                            <View style={{width: "80%"}}>
                                <TextInput 
                                    style={loginStyle.textInput}
                                    mode="flat"
                                    label="Email address"
                                    onChangeText={ (text) => setEmail(text) }
                                    outlineColor="#ccc"
                                    activeOutlineColor="#000"
                                />
                                <TextInput 
                                    style={loginStyle.textInput}
                                    mode="flat"
                                    label="Enter a password"
                                    onChangeText={ (text) => setPassword(text) }
                                    secureTextEntry
                                    outlineColor="#ccc"
                                    activeOutlineColor="#000"
                                />
                                <TextInput
                                    style={loginStyle.textInput}
                                    mode="flat"
                                    label="Your name"
                                    onChangeText={ (text) => setName(text)}
                                    outlineColor="#ccc"
                                    activeOutlineColor="#000"
                                />
                                {errorMessage && <Text style={{color: "red"}}><FontAwesome name="warning" /> {errorMessage}</Text> }
                            </View>
                        }
                    <View style={loginStyle.buttonsContainer}>
                        {activeHeaderButton === "Login" &&
                        <Button style={loginStyle.button} 
                                mode="contained"
                                onPress={handleSignIn}>
                            Sign In
                        </Button>}
                        {activeHeaderButton === "Register" &&
                        <Button style={loginStyle.button} 
                                mode="contained"
                                onPress={handleSignUp}>
                            Sign Up
                        </Button>}
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

export default LoginScreen;