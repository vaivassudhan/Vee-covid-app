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
import { Avatar, Button, Card, Title, Paragraph, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Progress from 'react-native-progress';
import { useTheme } from '@react-navigation/native';
import {FontAwesome,AntDesign} from 'react-native-vector-icons';
export function firstQuepage({navigation}){
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
     height:"80%",
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
                    <Text style={[styles.title]}>Are you feeling good today?</Text>
                    
                   <Card.Actions style={{paddingHorizontal:30}}>
                   <Card style={[styles.cardbutton]}>
                        <TouchableOpacity onPress={() =>{alert("Please Wear Mask!!!")}} >
                        <Card.Content style={{marginTop:20}}>
                            <Image style={{width:50,height:50,alignSelf:'center'}} source={require('../assets/smile.png')}/>
                            <Text style={styles.buttontext}> Good! </Text>
                        </Card.Content>
                        </TouchableOpacity>
                    </Card>
                    <Card style={[styles.cardbutton]}>
                    <TouchableOpacity onPress={() =>{navigation.navigate('Symptoms')}} >
                        <Card.Content style={{marginTop:20}}>
                            <Image style={{width:50,height:50,alignSelf:'center'}} source={require('../assets/revsmile2.png')}/>
                            <Text style={styles.buttontext2}> Not Well </Text>
                        </Card.Content>
                    </TouchableOpacity>
                    </Card>
                   </Card.Actions>
            </View>
            <View style={{}}>
              <Text style={[styles.question]} >Question 1/3</Text>
              <View style={{flexDirection:'row'}}>
                <View style={{marginTop:'1%'}}>
                  <Progress.Bar progress={0.333} width={250} borderColor={colors.accent1} color={colors.accent2} backgroundColor={'rgb(90,95,190)'}  height={5} marginLeft={'10%'} marginTop={'7%'} />
                </View>
                <TouchableOpacity style={{marginLeft:'5%',backgroundColor:colors.accent2,height:35,borderRadius:20,width:'15%',marginTop:'2%'}}
                onPress={() => this.props.navigation.navigate('SearchPage')}>
                  <Text style={{alignContent:'center',justifyContent:'center',alignSelf:'center',marginTop:'10%'}}><FontAwesome name="angle-double-right" size={20} color={colors.lightText}/></Text>
                </TouchableOpacity>
              </View>
            </View>
            </SafeAreaView>
            </View>
        )
    }

export default firstQuepage

