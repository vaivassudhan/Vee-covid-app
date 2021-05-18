import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity,Image } from 'react-native';
import styles from '../styles/authenticationstyles';
 
const StaySafe = ({navigation}) => {
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
      <Text style={localstyles.title}>Stay Safe</Text>
      <Text style={localstyles.details}>Get all your COVID information in one place and spread awareness to your loved ones</Text>     
    </View>
    <View style={localstyles.bottomview}>
      <TouchableOpacity style={localstyles.custombutton} onPress={() => navigation.navigate("Conformation")}>
        <Text style={localstyles.custombuttonstyle}>Next</Text>
      </TouchableOpacity>
    </View>
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
  title:{
    marginTop:20,
    fontSize: 25,
    fontFamily:"Montserrat-BoldItalic",
    color: "#1A1A1A",
    textAlign: "center",
    justifyContent: 'center',
    alignSelf: "center",
    alignItems:"center",
    alignContent:"center",
  },
  details: {
    marginVertical:60,
    fontSize: 20,
    fontFamily: "Montserrat-Regular",
    color: "#1A1A1A",
    textAlign: "center",
    justifyContent: 'center',
    alignSelf: "center",
    alignItems:"center",
    alignContent:"center",
  
  },
  bottomview: {
    position: "absolute",
    bottom: 15,
    justifyContent: "center",
    width: "80%",
    paddingBottom: 25,
    alignItems: "center",
    alignSelf: "center",
  },
  custombutton: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    backgroundColor: "#FF5722",
    borderRadius: 8,
    borderColor: "#0000",
    elevation: 5,
    shadowRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  custombuttonstyle: {
    fontSize: 18,
    fontFamily:"Montserrat-BoldItalic",
    color: "#FFFFFF",
    // textAlign: "center",
  },

});

export default StaySafe;