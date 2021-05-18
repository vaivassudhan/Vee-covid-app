import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity,FlatList ,StatusBar} from 'react-native';

const DATA = [
  { id: '1', title: 'Fever', },
  { id: '2', title: 'Cold', },
  { id: '3', title: 'Headache', },
  { id: '4', title: 'Loss of Smell', },
  { id: '5', title: 'Loss of Taste', },
  { id: '6', title: 'Sore Throat', },
  { id: '7', title: 'Stomachache', },
  { id: '8', title: 'Shortness of Breath', },
  { id: '9', title: 'Pain in Chest', },
];
const Item = ({ title }) => (
  <View style={localstyles.item}>
    <Text style={localstyles.title}>{title}</Text>
  </View>
);
const Symptoms = ({navigation}) => {
  const renderItem = ({ item }) => (
   
    <Item title={item.title} />
  );
  return (
    <View style={localstyles.container}>

<StatusBar backgroundColor='#4446AD' />
    <View style={{ flex: 1 }}>
      <Text style={localstyles.heading}>Symptoms</Text>
      <Text style={localstyles.subtitle}>Please select your Symptoms</Text>  
      <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}  
                      
        />   
    </View>
    <View style={localstyles.bottomview}>
      <TouchableOpacity style={localstyles.custombutton} onPress={() => navigation.navigate("Medicine")}>
        <Text style={localstyles.custombuttonstyle}>Proceed</Text>
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
  heading:{
    marginTop:20,
    fontSize: 25,
    fontFamily:"Montserrat-BoldItalic",
    color: "#1A1A1A",
    textAlign: "center",
    
  },
  subtitle: {
    marginVertical:60,
    fontSize: 20,
    fontFamily: "Montserrat-Regular",
    color: "#1A1A1A",
    textAlign: "center",
    justifyContent: 'center', 
  },
  item: {
    backgroundColor: "pink",
    borderRadius:20,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 17,
    color: "black",
    textAlign:"center",
    fontFamily: "Montserrat-Regular",
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

export default Symptoms;