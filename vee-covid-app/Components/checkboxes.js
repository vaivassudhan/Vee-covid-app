import React, {Component} from 'react';
import {Checkbox, Assets, Text, View, Colors, Spacings} from 'react-native-ui-lib'; //eslint-disable-line
import { Avatar, Button, Card, Title, Paragraph, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../Screens/Styles';

class CheckboxScreen extends Component {
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

  render() {
    const dat = [ 'Fever' , 'Cold' , 'Loss of smell' , 'Loss of taste' , 'Headache' , 'Pain in chest with deep breaths' 
    , 'Shortness of breath' , 'Sore Throat' , 'Stomach ache' , 'Diarrhea']
    return (
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
    );
  }
}

export default CheckboxScreen;

