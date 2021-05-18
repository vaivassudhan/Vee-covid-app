import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';


const DATA = [
  { id: '1', title: 'Allopathy', },
  { id: '2', title: 'Homeopathy', },
  { id: '3', title: 'Ayurveda', },
];
const Item = ({ title}) => (
  <View style={localstyles.item}>
    <Text style={localstyles.title}>{title}</Text>
  </View>
);

const Medicine = ({navigation}) => {
  const renderItem = ({ item }) => (
    <Item title={item.title}  />
  );
  return (
    <View style={localstyles.container}>
      <View style={{ flex: 1 }}>
        <Text style={localstyles.heading}>Medicine</Text> 
        <Text style={localstyles.subtitle}>Choose the Category</Text>        
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}  
                      
        />
      </View>
    </View>

  );
};

const localstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE9D8",
  },
  heading:{
    marginTop:20,
    fontSize:25,
    fontFamily:"Montserrat-BoldItalic",
    color: "#1A1A1A",
    textAlign:"center"
  },
  subtitle:{
    marginVertical:60,
    fontSize:20,
    fontFamily:"Montserrat-Regular",
    color: "#1A1A1A",
    textAlign:"center",
    justifyContent: 'center',
  },
  item: {
    backgroundColor: "#FF5722",
    borderRadius:15,
    padding: 20,
    marginVertical: 20,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 23,
    color: "#FFFFFF",
    fontFamily: "Montserrat-Regular",
    textAlign:"center",
  },

});

export default Medicine;