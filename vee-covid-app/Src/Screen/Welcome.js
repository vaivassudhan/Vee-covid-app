import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import styles  from '../styles/authenticationstyles'
 
const Welcome = ({ navigation }) => {
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

        <Text style={localstyles.welcomestyle}>Welcome{"\n"}to{"\n"}HomeQuarantine</Text>


      </View>

      <View style={localstyles.bottomview}>
        <TouchableOpacity style={localstyles.custombutton} onPress={() => navigation.navigate("StaySafe")}>
          <Text style={localstyles.custombuttonstyle}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
};

const localstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE9D8",
  },
  logoimage: {
    width: '100%',
    height: '50%',
  },
  lightText: {
    flex: 1,
    color: "snow",
    fontSize: 18,
    backgroundColor: "#00000060",
    alignSelf: "center",
    width: Dimensions.get("window").width / 5,
    height: Dimensions.get("window").height / 11,
    justifyContent:'center'
},
  welcomestyle: {
    marginVertical:80,
    fontSize: 30,
    fontFamily:"Montserrat-BoldItalic",
    color: "#1A1A1A",
    textAlign: "center",
    justifyContent: 'center',
    alignSelf: "center",
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
  }
});

export default Welcome;

