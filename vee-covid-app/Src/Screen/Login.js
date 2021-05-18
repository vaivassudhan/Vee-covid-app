import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Image, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import InputBox from '../Screen//InputBox';
const vch = require("../Images/vch.png");

const Login = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  


  const saveData = () => {
    try {
      if (!userName.trim()) {
        Alert.alert("",'Enter username');
        return;
      }else  if (!phoneNo.trim() || phoneNo.length<10) {
        Alert.alert('','Enter phone number');
        return;
      }  
      else
      {
        if(phoneNo == "9789398231" || phoneNo == "9092444903")
        {

          //navigation.navigate('DoctorDashboard',{UserName : userName});
          navigation.navigate('DoctorDashboard');
        }else
        {
          navigation.navigate('firstQuepage',{UserName : userName});
        }
      }
  
    }
    catch(error) {
      console.log("Failed");
     // Alert.alert(""+JSON.stringify(error));
    }
  }
  return (
    <View style={localstyles.home}>
     
        <StatusBar backgroundColor='#4446AD' />

        <ScrollView>
        <View style={{ flex: 1 , backgroundColor:'#4446AD'}}>
            <View style={localstyles.heading}>
              <Text style={localstyles.title}>Login</Text>
            </View>
            <View style={localstyles.image}>
              <Image
                resizeMethod={"resize"}
                resizeMode={"contain"}
                source={vch}
                style={localstyles.imagestyle}
              />
            </View>
            <Text style={localstyles.innertext}>Video consult top doctors from the{"\n"}comfort of your home</Text>
          <View style={{ flex:1,backgroundColor:'#fff', borderTopEndRadius:20, borderTopLeftRadius:20}}>
            <Text style={localstyles.start}>Let's get Started!</Text>
           
            <View style={[localstyles.inputcontainer]}>
              <View style={localstyles.space}>
                <Text style={localstyles.titletext}>Username</Text>

                <InputBox
                  icon={"account-outline"}
                  placeholder="Enter username"
                  keyboardType={"default"}
                  returnKeyType="next"
                  autofocus={true}
                  value={userName}
                  onChangeText={(value) => setUserName(value)}


                />
              </View>
              <View style={localstyles.space}>
                <Text style={localstyles.titletext}>Phone Number</Text>
                <InputBox
                  icon={"cellphone"}
                  maxLength={10}
                  autofocus={true}
                  placeholder="Enter phonenumber"
                  keyboardType={"phone-pad"}
                  value={phoneNo}
                  returnKeyType="next"
                  onChangeText={(value) => setPhoneNo(value)}

                />
              </View>
            </View>
              
      <View style={localstyles.bottomview}>
        <TouchableOpacity style={localstyles.custombutton} onPress={saveData}>
          <Text style={localstyles.custombuttonstyle}>Submit</Text>
        </TouchableOpacity>
      </View>
      </View>
      </View>
      </ScrollView>
    </View>

  );
};
const localstyles = StyleSheet.create({
  home: {
    flex: 1,      
    width: "100%",
    height: "100%",
    backgroundColor: "#fff"
  },
  image: {
    alignSelf: "flex-start",
    marginLeft: 40,
    marginTop: 20,
  },
  imagestyle: {
    height: 150,
    width: 150,
  },
  heading: {
    marginTop: 10
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 30,
    marginLeft: 50,
    color: "#FFF",
  },
  innertext: {
    color: "#FFF",
    fontSize: 15,
    textAlign: "left",
    marginTop: 40,
    marginLeft: 20,
    marginBottom:40,
    fontWeight: "bold",
  },
  start: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#212121",
    marginTop:20,
    marginLeft: 15,
  },
  titletext: {
    fontSize: 16,
    color: "#212121",
  },
  inputcontainer: {
    flexDirection: "column",
    justifyContent: "center",
    marginHorizontal: 20,
  },
  space: {
    marginTop: 20,
  },
  bottomview: {
    // position: "absolute",
    // bottom: 15,
    marginTop:30,
    justifyContent: "center",
    width: "90%",
    paddingBottom: 25,
    alignItems: "center",
    alignSelf: "center",
  },
  custombutton: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    backgroundColor: "#4446AD",
    borderRadius: 30,
    borderColor: "#0000",
    elevation: 5,
    shadowRadius: 50,
    alignItems: "center",
    justifyContent: "center",

  },
  custombuttonstyle: {
    fontSize: 18,
    color: "#FFFFFF",
  },

});

export default Login;