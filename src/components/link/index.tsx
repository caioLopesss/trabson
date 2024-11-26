import {Text,View,TouchableOpacity} from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { colors } from "@/styles/colors"
import {styles} from './styles'

type Props ={
   name: string,
   url: string,
   onDetails:() => void
}


export function Link ({name,url,onDetails}:Props){
   return(
      <View style={styles.container}>
         <View style={styles.details}>
           <Text style={styles.name} numberOfLines={1}>{name}</Text>
           <Text style={styles.url}>{url}</Text>
         </View>
         <TouchableOpacity onPress={onDetails}>
          <MaterialIcons name="more-horiz" size={20} color={colors.gray[400]}/>
         </TouchableOpacity>
         
      </View>
   )
}