import React from "react";
import {Image,TouchableOpacity,View,FlatList} from "react-native" 
import styles from "./styles";
import{MaterialIcons} from '@expo/vector-icons'
import {colors} from "@/styles/colors"
import { Categories } from "@/components/categories";
import { Link } from "@/components/link";

export default function Index (){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            </View>
        <Categories/>
        
        <FlatList
         data={['1','2','3','4','5']}
         keyExtractor={(item)=>item}
         renderItem={()=>(
            <Link 
        name='rocketseat'
        url="https://rocketseat.com.br/"
        onDetails={()=> console.log('clicou!')}/>
         )}
         style={styles.links}
         contentContainerStyle={styles.linkContent}
         showsVerticalScrollIndicator={false}
         />
        </View>
    )
}


