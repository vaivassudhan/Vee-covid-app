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
     //color: '#05375a',
     color: colors.accent1,
     marginLeft:20,
     marginTop:20,
     fontSize: 30,
     fontWeight: 'bold',
     alignSelf:'center'
    },
    card: {
        marginLeft:20,
        marginRight:20,
        width: '90%',
        marginTop:5,
        marginBottom:25,
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
   cardbutton:{
     alignItems:'center',
    //  backgroundColor:colors.accent3,
     height:'50%',
     width:'35%',
     marginTop:'5%',
     margin:25,
     justifyContent:'center',
     shadowColor: colors.text,
     shadowOffset: {
         width: 0,
         height: 9,
     },
     shadowOpacity: 0.80,
     shadowRadius: 11.95,
     borderRadius:20,
     borderColor:'grey',
     elevation: 2,
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
}
 });
  return (
      <View style={styles.home}>
        <SafeAreaView>
            <View style={styles.innerbox}>
              <Title style={styles.title}>Hospital List</Title>
              <Button onPress={() =>{navigation.navigate('SearchPage')}}>search</Button>
              <ScrollView style={{margin:5}}>
              <View style={{marginTop:18}}>       
                <Card style={[styles.card]}>
                  <Card.Content style={{marginTop:20}}>
                    <Text style={styles.hospitalname}>GH Shevapet</Text>
                    <Text style={styles.hospitaladdress}>Salem</Text>
                    <Text style={styles.hospitaladdress}>Tamil Nadu</Text>
                    <Text style={styles.hospitaladdress}>India</Text>
                  </Card.Content>
                </Card>
                <Card style={[styles.card]}>
                  <Card.Content style={{marginTop:20}}>
                    <Text style={styles.hospitalname}>GH Shevapet</Text>
                    <Text style={styles.hospitaladdress}>Salem</Text>
                    <Text style={styles.hospitaladdress}>Tamil Nadu</Text>
                    <Text style={styles.hospitaladdress}>India</Text>
                  </Card.Content>
                </Card>
                <Card style={[styles.card]}>
                  <Card.Content style={{marginTop:20}}>
                    <Text style={styles.hospitalname}>GH Shevapet</Text>
                    <Text style={styles.hospitaladdress}>Salem</Text>
                    <Text style={styles.hospitaladdress}>Tamil Nadu</Text>
                    <Text style={styles.hospitaladdress}>India</Text>
                  </Card.Content>
                </Card>
                <Card style={[styles.card]}>
                  <Card.Content style={{marginTop:20}}>
                    <Text style={styles.hospitalname}>GH Shevapet</Text>
                    <Text style={styles.hospitaladdress}>Salem</Text>
                    <Text style={styles.hospitaladdress}>Tamil Nadu</Text>
                    <Text style={styles.hospitaladdress}>India</Text>
                  </Card.Content>
                </Card>
                <Card style={[styles.card]}>
                  <Card.Content style={{marginTop:20}}>
                    <Text style={styles.hospitalname}>GH Shevapet</Text>
                    <Text style={styles.hospitaladdress}>Salem</Text>
                    <Text style={styles.hospitaladdress}>Tamil Nadu</Text>
                    <Text style={styles.hospitaladdress}>India</Text>
                  </Card.Content>
                </Card>
               </View>
              </ScrollView>
            </View>
        </SafeAreaView>
      </View>
  )
}