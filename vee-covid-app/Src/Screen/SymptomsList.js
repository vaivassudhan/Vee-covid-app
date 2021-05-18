import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image ,StatusBar} from "react-native";

const SymptomLists = ({navigation}) => {

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#4446AD' />
            <View style = {styles.imageView}>
            <TouchableOpacity style={styles.btn} activeOpacity = {0.8} onPress = {()=> navigation.navigate('DayWiseActivities')}>
              
                <Image source={require("../Images/homeorange.png")} style={{height : 35, width : 35}}>

                </Image>
                <Text style = {styles.heading}>
                    Self Quarantine
                </Text>
          
            </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "snow",
        alignItems: "center",
        justifyContent: "center",
        
    },
    imageView : {
        alignItems : "center",
        justifyContent : "center",
        alignContent : "center",
        backgroundColor:'#093660'
    },
    btn : {
        flexDirection: "row",
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: "#093660",
        borderRadius: 18, 
        elevation: 8,
        padding : 17,
       // alignContent : "center"
    },
    heading : {
        fontSize  :28,
        color : "snow",
        marginLeft : 15
        //fontWeight : "bold"
    },
})
export default SymptomLists;