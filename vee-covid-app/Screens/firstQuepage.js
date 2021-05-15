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
export function firstQuepage({navigation}){
        return (
            // <View style={styles.centeredView}>
            // <StatusBar backgroundColor='#fff' barStyle="light-content"/>
            // <Card style={styles.card_rej}>
            //    <Card.Content>
            //        <Text style={[styles.title]}>Are You Feeling Good Today?</Text>
            //    </Card.Content>
            //    <Divider/>
            //        <Card.Actions >
            //        <Card style={[styles.cardbutton]}>
            //             <TouchableOpacity onPress={() =>{alert("Please Wear Mask!!!")}} >
            //             <Card.Content style={styles.buttoncardcontent}>
            //                 <Image style={{width:50,height:50,alignSelf:'center'}} source={require('../assets/smile2.png')}/>
            //                 <Text style={styles.buttontext}> Good! </Text>
            //             </Card.Content>
            //             </TouchableOpacity>
            //         </Card>
            //         <Card style={[styles.cardbutton]}>
            //         <TouchableOpacity onPress={() =>{alert("Please Wear Mask!!!")}} >
            //             <Card.Content style={styles.buttoncardcontent}>
            //                 <Image style={{width:50,height:50,alignSelf:'center'}} source={require('../assets/revsmile.png')}/>
            //                 <Text style={styles.buttontext2}> Not Well </Text>
            //             </Card.Content>
            //         </TouchableOpacity>
            //         </Card>
            //        </Card.Actions>
            //        <View style={[styles.innerbox]}/>
            //      </Card>
            // </View>
            <View style={styles.home}>
            <View style={styles.innerbox}>
            <View style={{marginTop:30,marginLeft:10}}>       
            <Icon.Button name="chevron-back-sharp" size={40} backgroundColor="#FFFFFF" color="#4446AD"></Icon.Button> 
            </View>
            <StatusBar backgroundColor='#4446AD' barStyle="light-content"/>
              
                    <Text style={[styles.title]}>Are You Feeling Good Today?</Text>
                    
                   <Card.Actions >
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
            <Text style={[styles.questions]} >Progress:</Text>
              <Progress.Bar progress={0.3} width={250} color='#f4bc1c' borderColor='white' height={10} marginLeft={30} marginTop={10} />
            <Divider/>
            <Card style={[styles.next]}>
            <Icon.Button name="chevron-forward-sharp" size={35} backgroundColor="#f4bc1c" color="#4446AD" borderRadius={15}>Next</Icon.Button> 
            </Card>
            </View>
        )
    }

export default firstQuepage

const styles = StyleSheet.create({
     title: {    
      //color: '#05375a',
      color: '#4446AD',
      marginLeft:30,
      marginTop:20,
      fontSize: 30,
      fontWeight: 'bold'
  },
  questions: {    
    //color: '#05375a',
    color: '#ffffff',
    marginLeft:90,
    marginTop:30,
    fontSize: 20,
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
    next:{
      marginLeft:300,
      width:100,
      borderRadius:15,
    },
    home:{
      width:"100%",
      height:"100%",
      backgroundColor:"#4446AD",
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