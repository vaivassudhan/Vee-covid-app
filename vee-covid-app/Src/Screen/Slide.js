import React,{useState , createRef,useEffect ,Component} from 'react';
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
import Ion from 'react-native-vector-icons/Ionicons';
import AppIntroSlider from 'react-native-app-intro-slider';
//import { LinearGradient } from 'expo-linear-gradient';
const accent1='#4446AD';
const accent2='#F4BC1C';
const lightText='#151410';
const border='rgb(90,95,190)';
const slides = [
    {
      key: 'one',
      title: 'Welcome to Vee+Covid@Home ',
      text: 'Your Self Quarantine Assistant',
      image: require('../Images/415.jpg'),
      backgroundColor: accent1,
      backgroundColor1: accent1,
      
    },
    {
      key: 'two',
      title: 'Symptoms ',
      text: 'Remedies for your symptoms at one place',
      image: require('../Images/report.jpg'),
      backgroundColor: accent1,
      backgroundColor1: accent1,
    },
    {
      key: 'three',
      title: 'Remedy',
      text: 'Get remedy of your choice ',
      image: require('../Images/7882.jpg'),
      backgroundColor: accent1,
      backgroundColor1: accent1,
    }
  ];

export class Slide extends Component {
  constructor(props){
    super(props);
    this.state = {
      showRealApp: false
    }
  }
  _renderItem = ({ item }) => {
    return (
      
      <SafeAreaView style={[
        styles.slide, {backgroundColor:'#4446AD'}]}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </SafeAreaView>
       
    );
  }


  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ion
          name="md-arrow-forward-sharp"
          color={lightText}
          size={24}
        />  

{/* <Image source={require("../Images/backarrow.png")}
               style={{  width: 18, height: 18,
              

               }} resizeMode='contain' /> */}

      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ion
          name="md-checkmark"
          color={lightText}
          size={24}
        />
      </View>
    );
  };
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    // this.setState({ showRealApp: true });
  //  this.props.navigation.navigate('firstQuepage')

    this.props.navigation.navigate('Login')
    
  }
  render() {
    if (this.state.showRealApp) {
      return <App />;
    } else {
      return <AppIntroSlider
       renderItem={this._renderItem
      } data={slides} 
       onDone={this._onDone}
       renderDoneButton={this._renderDoneButton}
       renderNextButton={this._renderNextButton}/>;
    }
  }
}

export default Slide

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: accent2,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'blue',
  },
  image: {
    width: 390,
    height: 300,
    // marginVertical: 32,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
});
 