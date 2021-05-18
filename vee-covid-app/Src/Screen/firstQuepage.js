import React, { Component } from 'react'
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
//import { Avatar, Button, Card, Title, Paragraph, Divider } from 'react-native-paper';
 
import * as Progress from 'react-native-progress';
import { useTheme } from '@react-navigation/native';
import {FontAwesome,AntDesign} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';

const firstQuepage = (props,{navigation}) => {

  var UserName = props.route.params.UserName;

  const { colors } = useTheme();
  const styles = StyleSheet.create({
    title: {    
      color: '#4446AD', 
     marginLeft:30,
     marginTop:10,
     marginBottom:20,
     fontSize: 30,
     fontWeight: 'bold'
     
 },
 name_title: {    
  color: 'gray', 
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
     fontWeight: 'bold',
     justifyContent:'center',
     alignSelf:'center'
   },
   buttontext2:{
     color:'#000',
     fontSize:14,
     marginTop:12,
     fontWeight: 'bold',
     justifyContent:'center',
     alignSelf:'center'
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
     backgroundColor:'#4446AD',
},
innerbox:{
     width:"96%",
     height:"80%",
     borderRadius:30,
     marginHorizontal:"2%",
     marginTop:"2%",
     backgroundColor:"white"
},
btnHomeQuarantine:{
  backgroundColor:"#F4BC1C",
  borderRadius:30,
   width:250,
   height:40,
  padding:5,
  
  alignItems:"center",
  fontSize: 18,
},
buttontext:{
  color:"#292929",
  fontWeight:'bold',
  fontSize:17,
  fontFamily:"Montserrat-BoldItalic",
}
 });
        return (
            <View style={styles.home}>
{/* 
<View style={{height:55, borderRadius:0,alignContent:'center',
  backgroundColor:'#093660', margin:0, alignItems:"center", justifyContent:'center'}}>

<TouchableOpacity  style={{ position:'absolute', left:0}} onPress={() => { navigation.goBack() }}>
              <Image source={require("../Images/backarrow.png")}
               style={{ marginLeft: 22, width: 18, height: 18,

               }} resizeMode='contain' />
            </TouchableOpacity>

 

 <Text style={{alignSelf:'center',color:'#ffffff',fontWeight: 'bold',fontSize:18}}>test</Text>
 </View> */}

              <SafeAreaView>
            <View style={styles.innerbox}>
            
         
            <Text style={[styles.name_title]}>Hi {UserName},</Text>
                    
        
                    <Text style={[styles.title]}>Are you feeling good today?</Text>
                    
                    <View  style={{flexDirection:'row', alignItems:'center',alignContent:'center'}}>


                    <View style={{   shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,    flex:1, backgroundColor:'#fff', borderRadius:10, margin:10, padding:10}}>
                        <TouchableOpacity onPress={() =>{alert("Please Wear Mask!!!")}} >
                            <View>
                            <Image style={{width:50,height:50,alignSelf:'center'}} source={require('../Images/smile.png')}/>
                            <Text style={styles.buttontext2}>Yes, I am Good! </Text>
</View>
                        
                        </TouchableOpacity>
                    </View>


                    <View style={{  shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,    flex:1, backgroundColor:'#fff',flex:1,   borderRadius:10, margin:10, padding:10}}>
                    <TouchableOpacity onPress={() =>{props.navigation.navigate('LoadSymptoms')}} >
                    <View>
                              <Image style={{width:50,height:50,alignSelf:'center'}} source={require('../Images/revsmile2.png')}/>
                              <Text style={styles.buttontext2}> Not Well </Text>
                              </View>
                    </TouchableOpacity>
                    </View>  


                    </View>

{/* 

                    <View  style={{flexDirection:'row', alignItems:'center',alignContent:'center'}}>


<View style={{  shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,    flex:1, backgroundColor:'#fff',flex:1,  borderRadius:10, margin:10, padding:10}}>
    <TouchableOpacity onPress={() =>{navigation.navigate('DayWiseActivities')}} >
        <View>
        <Image style={{width:50,height:50,alignSelf:'center'}} source={require('../Images/415.jpg')}/>
        <Text style={styles.buttontext}> Self Quarantine </Text>
</View>
    
    </TouchableOpacity>
</View>


<View style={{flex:1,   borderRadius:10, margin:10, padding:10}}>
 
</View>  


</View> */}
 


<TouchableOpacity style={[styles.btnHomeQuarantine,{margin:10,
 justifyContent:'center', position:'absolute', bottom:10, alignSelf:'center'}]} 
    onPress={() => props.navigation.navigate("DayWiseActivities")}>
          <Text style={styles.buttontext}>Self Quarantine</Text>
        </TouchableOpacity>


            </View>
             <View style={{}}>
              <Text style={[styles.question]} >Step 1/3</Text>
              <View style={{flexDirection:'row'}}>
               
               
               
                 <View style={{marginTop:'1%'}}>
                  <Progress.Bar progress={0.333} width={250} borderColor='#4446AD' color='#F4BC1C' backgroundColor={'rgb(90,95,190)'}  height={5} marginLeft={'10%'} marginTop={'7%'} />
                </View>  



                <TouchableOpacity 
                
                onPress={() => props.navigation.navigate('LoadSymptoms')}
                
                style={{marginLeft:'5%',backgroundColor:'#F4BC1C',height:35,borderRadius:20,width:'15%',marginTop:'2%'}}>
                    <Text style={{alignContent:'center',justifyContent:'center',alignSelf:'center',marginTop:'10%'}}>
                   
                  <Icon
          name="md-arrow-forward-sharp"
          color='#000'
          size={24}
        /> 
                    </Text>
                </TouchableOpacity>


              </View>
            </View>  
            </SafeAreaView>
            </View>
        )
    }

export default firstQuepage

