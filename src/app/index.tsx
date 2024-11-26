import React from "react";
import {Text,TouchableOpacity,View,FlatList,Modal} from "react-native" 
import styles from "./styles";
import{MaterialIcons} from '@expo/vector-icons'
import {colors} from "@/styles/colors"
import { Categories } from "@/components/categories";
import { Link } from "@/components/link";
import { Option } from "@/components/option";

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
         <Modal transparent visible={true}>
            <View style={styles.modal}>
                <View style={styles.modalContent}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalCategory}>Curso</Text>
                        <TouchableOpacity>
                        <MaterialIcons name="close" size={20} color={colors.gray[400]}/>
                        </TouchableOpacity>
                        
                    </View>
                    <Text style={styles.modalLinkName}></Text>
                    <Text style={styles.modalUrl}>https://rocketseat.com.br/</Text>
                    <View style={styles.modalFooter}>
                       <Option name='Excluir' icon='delete' variant='secondary'/>
                       <Option name="Abrir" icon="language"/>
                    </View>
                </View>
            </View>
         </Modal>
        </View>
    )
}


