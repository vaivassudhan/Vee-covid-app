import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity,Image } from 'react-native';
import styles from '../styles/authenticationstyles';
 
const Conformation = ({navigation}) => {
  return (
    <View style={localstyles.container}>
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 50 }}>
        <Image
          resizeMode={"contain"}
          source={require("../Images/covid.png")}
          style={styles.imagestyle}
        />
      </View>
     <View style={{marginVertical:50}}>
     <View style={{marginTop:10}}>
        <Text style={localstyles.conform}>Are you feeling good?</Text>
        </View>
      
      <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
      <TouchableOpacity style={localstyles.yes} >
          <Text style={localstyles.buttontext}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={localstyles.cancel} onPress={() => navigation.navigate("Symptoms")}>
          <Text style={localstyles.buttontext}>No</Text>
        </TouchableOpacity>


      
      </View>
     </View>    
    </View>
    

    <TouchableOpacity style={[localstyles.btnHomeQuarantine,{margin:10, justifyContent:'center'}]} 
    onPress={() => navigation.navigate("DayWiseActivities")}>
          <Text style={localstyles.buttontext}>Home Quarantine</Text>
        </TouchableOpacity>
  </View>
    

  );
};

const localstyles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#FFE9D8",    
    },
    logoimage: {
      width: '50%',
      height: '100%',
    },
    conform:{
      marginVertical:40,
      marginTop:18,
      fontSize: 23,
      fontFamily:"Montserrat-Regular",
      color: "#1A1A1A",
      textAlign: "center",

    },
    yes:{
      backgroundColor:"#934fa8",
      borderRadius:5,
      borderWidth:1,
      borderColor:"#934fa8",
      padding:5,
      width:75,
      alignItems:"center",
      fontSize: 18,
    },
    cancel:{
      backgroundColor:"#0072bc",
      borderRadius:5,
      borderWidth:1,
      borderColor:"#0072bc",
      padding:5,
      width:75,
      alignItems:"center",
      fontSize: 18,
    },

    btnHomeQuarantine:{
      backgroundColor:"#0072bc",
      borderRadius:5,
      borderWidth:1,
      borderColor:"#0072bc",
      padding:5,
      
      alignItems:"center",
      fontSize: 18,
    },
    buttontext:{
      color:"#ffffff",
      fontSize:18,
      fontFamily:"Montserrat-BoldItalic",
    }
  });
  export default Conformation;