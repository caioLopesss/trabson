import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    constainer:{
        flexDirection:'row',
        alignItems:'center',
        gap:5
    },
    name:{
        fontSize:15,
        fontWeight:'600',
        color:colors.gray[400]
    }
})