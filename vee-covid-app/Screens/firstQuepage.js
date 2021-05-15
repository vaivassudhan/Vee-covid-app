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
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { color } from 'react-native-reanimated';
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
   marginLeft:'10%',
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
     shadowOpacity: 0.48,
     shadowRadius: 11.95,
     borderRadius:20,
     borderColor:'grey',
     elevation: 2,
   },
   buttontext:{
     color:'#00a000',
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
            <View style={{marginTop:30,marginLeft:10}}>       
            <Icon.Button name="chevron-back-sharp" size={40} backgroundColor={colors.backcard} color={colors.accent1}></Icon.Button> 
            </View>
            <StatusBar backgroundColor={colors.accent1} barStyle="light-content"/>
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
              <Text style={[styles.question]} >Question 1/4</Text>
            <View >
              <Progress.Bar progress={0.3} width={250} borderColor={colors.accent1} color={colors.accent2} backgroundColor={'rgb(90,95,190)'}  height={5} marginLeft={'10%'} marginTop={'5%'} />
              <Divider/>
              <Card style={[styles.next]}>
              <Icon.Button name="chevron-forward-sharp" size={15}  backgroundColor={colors.accent2} color={colors.accent1} borderRadius={15}></Icon.Button> 
              </Card>
            </View>
            
            </SafeAreaView>
            </View>
        )
    }

export default firstQuepage

