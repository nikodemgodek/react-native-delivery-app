import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useState } from 'react';

export default function HeaderTabs(props) {

    return(
        <View style={{ flexDirection: "row", alignSelf: "center", width: "100%", justifyContent: "center", padding: 10}}>
            <HeaderButton text="Login" btnColor="black" textColor="white" activeHeaderButton={props.activeHeaderButton} setActiveHeaderButton={props.setActiveHeaderButton}/>
            <HeaderButton text="Register" btnColor="white" textColor="black" activeHeaderButton={props.activeHeaderButton} setActiveHeaderButton={props.setActiveHeaderButton}/>
        </View>
    )
}

const HeaderButton = (props) => 
    <View>
        <TouchableOpacity style={{backgroundColor: props.activeHeaderButton === props.text ? "black" : "transparent", paddingHorizontal: 16, paddingVertical: 6, borderRadius: 30}} onPress={() => props.setActiveHeaderButton(props.text)}>
            <Text style={{color: props.activeHeaderButton === props.text ? "white" : "black", fontSize: 15, fontWeight: "900"}}>{props.text}</Text>
        </TouchableOpacity>
    </View>