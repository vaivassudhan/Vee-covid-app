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
                   </View>
            <StatusBar backgroundColor='#4446AD' barStyle="light-content"/>
                    <Text style={[styles.title]}>Remedies:</Text>
                   



            </View>
            </SafeAreaView>
            </View>
        )
    }

export default firstQuepage

