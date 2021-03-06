import React, { Component ,useEffect , useState} from 'react'
import { 
    SafeAreaView,
    View, 
    ScrollView ,
    Text, 
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
import Icon from 'react-native-vector-icons/Ionicons';
import * as Progress from 'react-native-progress';
import { useTheme } from '@react-navigation/native';
import {FontAwesome,AntDesign} from 'react-native-vector-icons';
export function DetailedPage(props){
  const [Details ,setDetails] =useState('')
  useEffect(() => {
    setDetails(props.route.params.HospitalDetail)

  }, [])
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    title: {    
     //color: '#05375a',
     color: colors.accent1,
     marginLeft:30,
     marginTop:20,
     fontSize: 30,
     fontWeight: 'bold'
    },
    title2: {    
      //color: '#05375a',
      color: colors.accent1,
      marginLeft:30,
      marginTop:20,
      fontSize: 20,
      fontWeight: 'bold'
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
  fontSize:20,
  marginLeft:'10%',
  marginTop:2
},
 });
        return (
            <View style={styles.home}>
              <SafeAreaView>
            <View style={styles.innerbox}>
            
            <View style={{marginTop:30,marginLeft:"7%"}}>       
            {/* <Icon.Button name="chevron-with-circle-left" size={40} backgroundColor={colors.backcard} color={colors.accent1}></Icon.Button>  */}
            <TouchableOpacity onPress={() =>{props.navigation.goBack()}} >
            <FontAwesome name = 'angle-left' size ={40} backgroundColor={colors.backcard} color={colors.accent1}/>
            </TouchableOpacity>
            </View>
            <StatusBar backgroundColor={colors.accent1} barStyle="light-content"/>
                    <Text style={styles.title}>{Details.name}</Text>
                    <Text style={styles.title2}>Address</Text>
                    <Text style={styles.hospitaladdress}>{Details.line1}</Text>
                    <Text style={styles.hospitaladdress}>{Details.line2}</Text>
                    <Text style={styles.hospitaladdress}>{Details.city}</Text>
                    <Text style={styles.hospitaladdress}>{Details.state}</Text>
                   
            </View>
            </SafeAreaView>
            </View>
        )
    }

export default DetailedPage

