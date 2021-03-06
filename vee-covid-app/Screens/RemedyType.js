import React, { Component } from 'react'
// import CheckBoxes from '../Components/checkboxes';
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
import {FontAwesome,AntDesign} from 'react-native-vector-icons';
import { TagSelect } from 'react-native-tag-select';
import * as Progress from 'react-native-progress';
const accent1='#4446AD';
const accent2='#F4BC1C';
const lightText='#151410';
const border='rgb(90,95,190)';
export default class Sympto extends React.Component{
    render() {
      
      const data = [
        { id: 1, label: 'Allopathy' },
        { id: 2, label: 'Homeopathy' },
        { id: 3, label: 'Ayurvedha' },
      ];
        return (
            <View style={styles.home}>
              <SafeAreaView>
                <View style={styles.innerbox}>
                <View style={{marginTop:30,marginLeft:"7%"}}>       
            {/* <Icon.Button name="chevron-with-circle-left" size={40} backgroundColor={colors.backcard} color={colors.accent1}></Icon.Button>  */}
            <TouchableOpacity onPress={() =>{this.props.navigation.goBack()}} >
            <FontAwesome name = 'angle-left' size ={40} backgroundColor={'white'} color={accent1}/>
            </TouchableOpacity>
            </View>
                <StatusBar backgroundColor='#4446AD' barStyle="light-content"/>
                  
                <Text style={[styles.title]}>Choose your Remedy Type?</Text>
                <View style={{marginTop:"15%",marginLeft:'10%'}}>
                        <TagSelect
                        
                            data={data}
                            itemStyle={styles.item}
                            itemLabelStyle={styles.label}
                            itemStyleSelected={styles.itemSelected}
                            itemLabelStyleSelected={styles.labelSelected}
                            ref={(tag) => {
                                  this.tag = tag;
                            }}
                          />   
                </View>
                {/* <View style={{alignSelf:'flex-end'}}>
                    <Button style={[styles.nextbutton,{backgroundColor:'rgb(51,124,247)', marginRight:20}]} mode="contained" onPress={() => this.props.navigation.navigate('Remedy',{RemedyType:JSON.stringify(this.tag.itemsSelected),selected:JSON.stringify(this.props.route.params.selected)})}>
                            Next
                    </Button>
                    </View> */}
                </View>
                <View style={{}}>
                  <Text style={[styles.question]} >Question 3/3</Text>
                  <View style={{flexDirection:'row'}}>
                    <View style={{marginTop:'1%'}}>
                      <Progress.Bar progress={1} width={250} borderColor={accent1} color={accent2} backgroundColor={'rgb(90,95,190)'}  height={5} marginLeft={'10%'} marginTop={'7%'} />
                    </View>
                    <TouchableOpacity
                    style={{marginLeft:'5%',backgroundColor:accent2,height:35,borderRadius:20,width:'15%',marginTop:'2%'}}
                    onPress={() => this.props.navigation.navigate('Remedy',{RemedyType:JSON.stringify(this.tag.itemsSelected),selected:JSON.stringify(this.props.route.params.selected)})}>
                      <Text style={{alignContent:'center',justifyContent:'center',alignSelf:'center',marginTop:'10%'}}><FontAwesome name="angle-double-right" size={20} color={lightText}/></Text>
                    </TouchableOpacity>
                  </View>
              </View>
              </SafeAreaView>
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
question: {    
  color: 'white',
  marginLeft:'7%',
  marginTop:'10%',
  fontSize: 16,
  fontWeight: '400'
},
progressbar:{
  marginLeft:'5%',

},
innerbox:{
      width:"96%",
      height:"80%",
      borderRadius:30,
      marginHorizontal:"2%",
      marginTop:"2%",
      backgroundColor:"white"
},
item: {
  borderWidth: 1,
  borderColor: border,    
  borderRadius:15,
  backgroundColor:'white'
},
label: {
  color: accent1
},
itemSelected: {
  backgroundColor: accent1,
  borderColor:accent1
},
labelSelected: {
  color: 'white',
},
});
