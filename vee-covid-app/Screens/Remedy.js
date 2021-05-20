import React, { Component ,useEffect ,useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';
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
  const [symptoms ,setSymptoms] =useState([])
  const [Type , setType] = useState([])
  const [show ,setShow] = useState(false)
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    card: {
      marginLeft:12,
          marginRight:12,
          width: '93%',
          marginTop:50,
          marginBottom:2,
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
     height:"90%",
     borderRadius:30,
     marginHorizontal:"2%",
     marginTop:"2%",
     backgroundColor:"white"
},
 });

      useEffect(() => {
        global.a=[]
        global.b=[]
          global.symtomselected=JSON.parse(props.route.params.selected)
          global.temp = JSON.parse(symtomselected)
          global.remedyType=JSON.parse(props.route.params.RemedyType)
          for(var i=0;i<remedyType.length;i++){
            global.b.push(remedyType[i].label);
          }
          for(var j=0;j<temp.length;j++){
            global.a.push(temp[j].label);
          }

          setSymptoms(a)
          setType(b)



      }, [])


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
                    <Text style={[styles.title]}>Remedies:</Text>
                    <Card style={styles.card}>
                <Card.Title
                    title={<Title  style={styles.title}>  
                    <Feather
                    name="activity"
                    color='rgb(224,91,40)'
                    size={30}
                  /> Remedy</Title>}
                    right={()=>
                        <View style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress = {()=>{setShow(!show)}}>                            
                        <Feather
                          style={{marginRight:15}} 
                          name="chevron-down"
                          color="grey"
                          size={30}
                        />
                        </TouchableOpacity>
                        </View>
                        }
                
                    />
               <Card.Content>
                   <Divider/>
                   {
                       show && (
                           <View>
                             <Paragraph style={{fontWeight: 'bold'}}>Symtoms<Paragraph style={{color: '#34495e'}}> : {symptoms}</Paragraph></Paragraph>
                             <Paragraph style={{fontWeight: 'bold'}}>Type<Paragraph style={{color: '#34495e'}}> : {Type}</Paragraph></Paragraph>
                            </View>
                       )
                   }
                  
               </Card.Content>
               <Divider/>
            </Card>
            </View>
            <TouchableOpacity
                    style={{marginLeft:'5%',backgroundColor:colors.accent2,height:35,borderRadius:20,width:'15%',marginTop:'2%'}}
                    onPress={() => props.navigation.navigate('HospitalList')}>
                      <Text style={{alignContent:'center',justifyContent:'center',alignSelf:'center',marginTop:'10%'}}><FontAwesome name="angle-double-right" size={20} color={colors.lightText}/></Text>
                    </TouchableOpacity>
            </SafeAreaView>
            </View>
        )
    }

export default firstQuepage

