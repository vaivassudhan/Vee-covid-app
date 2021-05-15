import React, { Component } from 'react'
import CheckBoxes from '../Components/checkboxes';
import { 
    SafeAreaView, 
    ScrollView ,
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    Image,
    ImageBackground
} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Divider } from 'react-native-paper';
import {Checkbox, Assets, Text, View, Colors, Spacings} from 'react-native-ui-lib'; 
import Icon from 'react-native-vector-icons/Ionicons';
import { TagSelect } from 'react-native-tag-select';
export default class Sympto extends React.Component{
    render() {
        const data = [
          { id: 1, label: 'Fever' },
          { id: 2, label: 'Cold' },
          { id: 3, label: 'Loss of smell' },
          { id: 4, label: 'Loss of taste' },
          { id: 5, label: 'Headache' },
          { id: 6, label: 'Pain in chest with deep breaths' },
          { id: 7, label: 'Shortness of breath' },
          { id: 8, label: 'Sore Throat' },
          { id: 9, label: 'Stomach ache' },
          { id: 10, label: 'Diarrhea' },
        ];
        return (
            <View style={styles.home}>
            <View style={styles.innerbox}>
            <View style={{marginTop:30,marginLeft:10}}>       
            <Icon.Button name="chevron-back-sharp" size={40} backgroundColor="#FFFFFF" color="#4446AD"></Icon.Button> 
            </View>
            <StatusBar backgroundColor='#4446AD' barStyle="light-content"/>
              
            <Text style={[styles.title]}>Do you have any of these?</Text>
            <View>
                    <TagSelect
                      theme="info"
                        data={data}
                        itemStyle={styles.customItem}
                    
                        ref={(tag) => {
                              this.tag = tag;
                        }}
                      />   
            </View>
            </View>
            <Text>Progress Bar</Text>
            </View>
        )
    }
}
export default Sympto

const styles = StyleSheet.create({
     title: {    
      //color: '#05375a',
      color: '#4446AD',
      marginLeft:30,
      marginTop:20,
      fontSize: 25,
      fontWeight: 'bold'
  },
    cardbutton:{
      alignItems:'center',
      backgroundColor:'white',
      height:'50%',
      width:'35%',
      marginTop:'5%',
      margin:25,
      justifyContent:'center',
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 9,
      },
      shadowOpacity: 0.48,
      shadowRadius: 11.95,
      borderRadius:20,
      borderColor:'grey',
      elevation: 2,
    },
    buttontext:{
      color:'#008000',
      fontSize:18,
      marginTop:12,
      fontWeight: 'bold'
    },
    buttontext2:{
      color:'#dd3c3c',
      fontSize:18,
      marginTop:12,
      fontWeight: 'bold'
    },
    home:{
      width:"100%",
      height:"100%",
      backgroundColor:"#4446AD",
},
innerbox:{
      width:"96%",
      height:"70%",
      borderRadius:30,
      marginHorizontal:"2%",
      marginTop:"2%",
      backgroundColor:"white"
},
  });
