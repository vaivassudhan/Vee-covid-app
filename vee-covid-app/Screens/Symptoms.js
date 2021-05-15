import React, { Component } from 'react'
import CheckBoxes from '../Components/checkboxes';
import { 
    SafeAreaView, 
    ScrollView ,
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
import {Checkbox, Assets, Text, View, Colors, Spacings} from 'react-native-ui-lib'; 
import Icon from 'react-native-vector-icons/Ionicons';
class Symptoms extends Component {
  state = {
    value1: false,
    value2: false,
    value3: false,
    value4: false,
    value5: false,
    value6: false,
    value7: false,
    value8: false,
    value9: false,
    value10: false,
  };
  find(){
    
    let arr =[]
    const dat = [ 'Fever' , 'Cold' , 'Loss of smell' , 'Loss of taste' , 'Headache' , 'Pain in chest with deep breaths' 
    , 'Shortness of breath' , 'Sore Throat' , 'Stomach ache' , 'Diarrhea']
    if(this.state.value1){arr.push(dat[0])}
    if(this.state.value2){arr.push(dat[1])}
    if(this.state.value3){arr.push(dat[2])}
    if(this.state.value4){arr.push(dat[3])}
    if(this.state.value5){arr.push(dat[4])}
    if(this.state.value6){arr.push(dat[5])}
    if(this.state.value7){arr.push(dat[6])}
    if(this.state.value8){arr.push(dat[7])}
    if(this.state.value9){arr.push(dat[8])}
    if(this.state.value10){arr.push(dat[9])}
    alert(arr)

    this.props.navigation.navigate('Remedeselect')
  }
  render (){
    const dat = [ 'Fever' , 'Cold' , 'Loss of smell' , 'Loss of taste' , 'Headache' , 'Pain in chest with deep breaths' 
    , 'Shortness of breath' , 'Sore Throat' , 'Stomach ache' , 'Diarrhea']
        return (
            <View style={styles.home}>
            <View style={styles.innerbox}>
            <View style={{marginTop:30,marginLeft:10}}>       
            <Icon.Button name="chevron-back-sharp" size={40} backgroundColor="#FFFFFF" color="#4446AD"></Icon.Button> 
            </View>
            <StatusBar backgroundColor='#4446AD' barStyle="light-content"/>
            <Button onPress = {()=>{this.find()}} />
            <Text style={[styles.title]}>Do you have any of these?</Text>
            <View>
            <View useSafeArea flex>
        <View flex padding-20>
          <View flex center>
        <View>
            <View style={{marginTop:30}} flex row>
            <Checkbox
              value={this.state.value1}
              size={30}
              label={dat[0]}
              color={Colors.blue10}
              onValueChange={value1 => this.setState({value1})}
              containerStyle={{marginBottom: 20, marginLeft:30}}
            />
            <Checkbox
              value={this.state.value2}
              size={30}
              label={dat[1]}
              color={Colors.blue10}
              onValueChange={value2 => this.setState({value2})}
              containerStyle={{marginBottom: 20 , marginLeft:'30%'}}
            />
            </View>
            <View style={{marginTop:50}} flex row>
            <Checkbox
              value={this.state.value3}
              size={30}
              label={dat[2]}
              color={Colors.blue10}
              onValueChange={value3 => this.setState({value3})}
              containerStyle={{marginBottom: 20, marginLeft:30}}
            />
            <Checkbox
              value={this.state.value4}
              size={30}
              label={dat[3]}
              color={Colors.blue10}
              onValueChange={value4 => this.setState({value4})}
              containerStyle={{marginBottom: 20 , marginLeft:'15%'}}
            />
            </View>
            <View style={{marginTop:50}}>
            <Checkbox
              value={this.state.value5}
              size={30}
              label={dat[4]}
              color={Colors.blue10}
              onValueChange={value5 => this.setState({value5})}
              containerStyle={{marginBottom: 20, marginLeft:30}}
            />
            </View>
            <View style={{marginTop:50}}>
            <Checkbox
              value={this.state.value6}
              size={30}
              label={dat[5]}
              color={Colors.blue10}
              onValueChange={value6 => this.setState({value6})}
              containerStyle={{marginBottom: 20 , marginLeft:30}}
            />
            </View>

            <View style={{marginTop:50}}>
            <Checkbox
              value={this.state.value7}
              size={30}
              label={dat[6]}
              color={Colors.blue10}
              onValueChange={value7 => this.setState({value7})}
              containerStyle={{marginBottom: 20, marginLeft:30}}
            />
            </View>
            <View style={{marginTop:50}}>
            <Checkbox
              value={this.state.value8}
              size={30}
              label={dat[7]}
              color={Colors.blue10}
              onValueChange={value8 => this.setState({value8})}
              containerStyle={{marginBottom: 20 , marginLeft:30}}
            />
            </View>

            <View style={{marginTop:50}} flex row>
            <Checkbox
              value={this.state.value9}
              size={30}
              label={dat[8]}
              color={Colors.blue10}
              onValueChange={value9 => this.setState({value9})}
              containerStyle={{marginBottom: 20, marginLeft:30}}
            />
            
            <Checkbox
              value={this.state.value10}
              size={30}
              label={dat[9]}
              color={Colors.blue10}
              onValueChange={value10 => this.setState({value10})}
              containerStyle={{marginBottom: 20 , marginLeft:'12%'}}
            />
            
            </View>
          </View>
          
          </View>
        </View>
      </View>
      
            </View>
            </View>
            <TouchableOpacity onPress = {()=>{this.find()}}>  
            <View>     
            <Icon.Button name="chevron-back-sharp" size={40} backgroundColor="#4446AD" color="#ffffff"></Icon.Button> 
            </View>
            </TouchableOpacity>
            </View>
        )
    }
  }

export default Symptoms

const styles = StyleSheet.create({
     title: {    
      //color: '#05375a',
      color: '#4446AD',
      marginLeft:30,
      marginTop:20,
      fontSize: 25,
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
    home:{
      width:"100%",
      height:"100%",
      backgroundColor:"#4446AD",
},
innerbox:{
      width:"96%",
      height:"70%",
      borderRadius:30,
      marginHorizontal:"2%",
      marginTop:"2%",
      backgroundColor:"white"
},
  });
