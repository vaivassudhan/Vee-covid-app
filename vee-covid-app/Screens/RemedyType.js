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
import { Avatar, Button, Card, Title, Paragraph, Divider,useTheme } from 'react-native-paper';
import {Checkbox, Assets, Text, View, Colors, Spacings} from 'react-native-ui-lib'; 
import Icon from 'react-native-vector-icons/Ionicons';
import { TagSelect } from 'react-native-tag-select';

export default class Sympto extends React.Component{
    render() {
      
      const data = [
        { id: 1, label: 'Allopathy' },
        { id: 2, label: 'Homeopathy' },
        { id: 3, label: 'Ayurvedha' },
      ];
        return (
            <View style={styles.home}>
            <View style={styles.innerbox}>
            <View style={{marginTop:30,marginLeft:10}}>       
            <Icon.Button name="chevron-back-sharp" size={40} backgroundColor="#FFFFFF" color="#4446AD"></Icon.Button> 
            </View>
            <StatusBar backgroundColor='#4446AD' barStyle="light-content"/>
              
            <Text style={[styles.title]}>Choose your Remedy Type?</Text>
            <View style={{marginTop:"15%",marginLeft:'10%'}}>
                    <TagSelect
                      theme="info"
                        data={data}
                        itemStyle={styles.customItem} 
                        ref={(tag) => {
                              this.tag = tag;
                        }}
                      />   
            </View>
            <View style={{alignSelf:'flex-end'}}>
                <Button style={[styles.nextbutton,{backgroundColor:'rgb(51,124,247)', marginRight:20}]} mode="contained" onPress={() => this.props.navigation.navigate('Remedy',{RemedyType:JSON.stringify(this.tag.itemsSelected),selected:JSON.stringify(this.props.route.params.selected)})}>
                        Next
                </Button>
                </View>
            </View>
            </View>
        )
    }
}

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
