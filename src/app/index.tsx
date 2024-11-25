import React from "react";
import {Image,View,} from "react-native" 
import styles from "./styles";


export default function Index (){
    return (
        <View style={styles.container}>
       <Image source={require('@/assets/logo.png')}/>
        
        </View>
    )
}


