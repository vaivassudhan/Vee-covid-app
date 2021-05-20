import React, { Component ,useEffect } from 'react'
import { 
    SafeAreaView,
    View, 
    ScrollView ,
    Text, 
    TouchableOpacity, 
    TouchableNativeFeedback,
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    Image,
    ImageBackground
} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Progress from 'react-native-progress';
import { useTheme } from '@react-navigation/native';
import {FontAwesome,AntDesign} from 'react-native-vector-icons';
export default function HospitalList({navigation}) {
  const {colors}= useTheme();
  const hospitalList=[]
  const styles = StyleSheet.create({
    title: {    
     color: colors.accent1,
     marginTop:40,
     marginLeft:8,
     marginBottom:10,
     fontSize: 30,
     fontWeight: 'bold',
     alignSelf:'center'
    },
    card: {
        marginLeft:20,
        marginRight:20,
        width: '90%',
        marginTop:25,
        marginBottom:5,
        flexDirection:'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 11.95,
        borderRadius:20,

        elevation: 8,
  },
   buttontext:{
     color:colors.accent1,
     fontSize:14,
     marginTop:12,
     fontWeight: 'bold'
   },
   buttontext2:{
     color:colors.accent1,
     fontSize:14,
     marginTop:12,
     fontWeight: 'bold'
   },
   next:{
     marginTop:'5%',
     marginLeft:'75%',
     width:'10%',
     borderRadius:15,
   },
   home:{
     width:"100%",
     height:"100%",
     backgroundColor:colors.accent1,
},
innerbox:{
     width:"96%",
     height:"98%",
     borderRadius:30,
     marginHorizontal:"2%",
     marginTop:"2%",
     backgroundColor:"white"
},
hospitalname:{
  color:colors.text ,
  fontWeight:'bold',
  fontSize:20 ,
  paddingBottom:10
},
hospitaladdress:{
  color:colors.menu ,
  fontSize:15
},
button:{
  backgroundColor:'#eee',
  width:'30%',
  alignSelf:'center'
}
 });

 const Data=[
  {
      name:"Hospital1",
      line1:"salem",
      line2:"salem",
      city:"Salem",
      state:"TN"
  },
  {
      name:"Hospital2",
      line1:"salem",
      line2:"salem",
      city:"Salem",
      state:"TN"
  },
  {
      name:"Hospital3",
      line1:"salem",
      line2:"salem",
      city:"Salem",
      state:"TN"
  },
  {
      name:"Hospital4",
      line1:"salem",
      line2:"salem",
      city:"Salem",
      state:"TN"
  },
  {
    name:"Hospital4",
    line1:"salem",
    line2:"salem",
    city:"Salem",
    state:"TN"
  },
]
  return (
      <View style={styles.home}>
        <SafeAreaView>
            <View style={styles.innerbox}>
              <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{marginTop:30,marginLeft:"7%",width:'20%'}} onPress={() =>{navigation.goBack()}} >
            <FontAwesome name = 'angle-left' size ={40} backgroundColor={colors.backcard} color={colors.accent1}/>
            </TouchableOpacity>
              <Title style={styles.title}>Hospital List</Title>
              </View>
              <Button style={styles.button} onPress={() =>{navigation.navigate('SearchPage')}}>
              <FontAwesome name = 'search' size ={15} backgroundColor={colors.backcard}/> search</Button>
              <ScrollView style={{margin:5}}>
              {
             Data.map((u,i) => {
               return(

                <View key={i}>
                   
                <TouchableOpacity onPress={()=>{navigation.navigate('DetailedPage',{HospitalDetail:u})}}>    
                <Card style={[styles.card]}>
                  <Card.Content style={{marginTop:5}}>
                    <Text style={styles.hospitalname}>{u.name}</Text>
                    <Text style={styles.hospitaladdress}>{u.line1}</Text>
                    <Text style={styles.hospitaladdress}>{u.line2}</Text>
                    <Text style={styles.hospitaladdress}>{u.city}</Text>
                    <Text style={styles.hospitaladdress}>{u.state}</Text>
                  </Card.Content>
                </Card>
                </TouchableOpacity>
                </View>
               )
             })}
              </ScrollView>
            </View>
        </SafeAreaView>
      </View>
  )
}