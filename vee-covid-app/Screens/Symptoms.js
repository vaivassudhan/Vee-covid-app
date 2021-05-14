import React, {Component ,useState , useEffect} from 'react';
import {Checkbox, Assets, Text, View, Colors, Spacings} from 'react-native-ui-lib'; //eslint-disable-line
import { Avatar, Button, Card, Title, Paragraph, Divider } from 'react-native-paper';
import { 
  StyleSheet ,
} from 'react-native';
import { set } from 'react-native-reanimated';
import CheckboxScreen from '../Components/CheckBox';

function Symptoms ({navigation}){


  useEffect(() => {
    var anyBoxesChecked = new Array(10).fill(false);
    setSelected(anyBoxesChecked)
  }, [])


    const dat = [ 'Fever' , 'Cold' , 'Loss of smell' , 'Loss of taste' , 'Headache' , 'Pain in chest with deep breaths' 
    , 'Shortness of breath' , 'Sore Throat' , 'Stomach ache' , 'Diarrhea']
 
    const [ Selected , setSelected] = useState([]) 


    const Next = () =>{
        console.log(Selected)
    }
    return ( 
      <View useSafeArea flex>
        <View flex padding-20>
          <View flex center>
                  <CheckboxScreen/>    
          </View>
        </View>
      </View>
    );
  }

export default Symptoms;

const styles = StyleSheet.create({
  card: {
      marginLeft:12,
          marginRight:12,
          width: '93%',
          marginTop:40,
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
  
    footer: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
    card_rej: {
      alignContent:'center',
      margin: 16,
      marginTop:15,
      backgroundColor:'#fff',
      borderRadius:12,
      marginBottom:15,
      width:'93%',
      elevation: 6,
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });