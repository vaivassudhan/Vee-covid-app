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
export function firstQuepage(props){
  const [Details ,setDetails] =useState('')
  useEffect(() => {
    console.log(props.route.params.HospitalDetail)
    setDetails(Details)

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
 });
        return (
            <View style={styles.home}>
              <SafeAreaView>
            <View style={styles.innerbox}>
            
            <View style={{marginTop:30,marginLeft:"7%"}}>       
            {/* <Icon.Button name="chevron-with-circle-left" size={40} backgroundColor={colors.backcard} color={colors.accent1}></Icon.Button>  */}
            <TouchableOpacity onPress={() =>{navigation.goBack()}} >
            <FontAwesome name = 'angle-left' size ={40} backgroundColor={colors.backcard} color={colors.accent1}/>
            </TouchableOpacity>
            </View>
            <StatusBar backgroundColor={colors.accent1} barStyle="light-content"/>
                    <Text style={[styles.title]}>Details Page</Text>
                    
                   
            </View>
            </SafeAreaView>
            </View>
        )
    }

export default firstQuepage

