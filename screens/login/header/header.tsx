import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function HeaderTabs() {

    return(
        <View style={{ flexDirection: "row", alignSelf: "center"}}>
            <HeaderButton text="Login" />
            <HeaderButton text="Register" />
        </View>
    )
}

const HeaderButton = (props) => <View><TouchableOpacity><Text>{props.text}</Text></TouchableOpacity></View>