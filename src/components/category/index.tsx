import { Text,Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {styles} from "./styles"
import { colors } from "@/styles/colors";

type Props = {
    name: string
    icon: keyof typeof MaterialIcons.glyphMap
}

export default function Category(props:Props){
    return(
        <Pressable style={styles.constainer}>
            <MaterialIcons name={props.icon} size={16} color={colors.gray[400]}/>
<Text style={styles.name}>{props.name}</Text>
        </Pressable>
    )
}