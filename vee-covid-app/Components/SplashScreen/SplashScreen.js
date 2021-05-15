import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Linking,
     Image, ImageBackground
} from 'react-native';
import { Button } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const SplashScreen = ({navigation}) => {
    const { colors } = useTheme();
    const bg= colors.accent1
    const bg2=colors.backcard
    const accent=colors.accent2
    console.log(colors)
    
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      // backgroundColor: '#a6ddff'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: bg,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: accent,
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: accent,
        marginTop:5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color:bg,
        fontWeight: 'bold'
    }
  });
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor={bg} barStyle="light-content"/>
        <View style={styles.header}>
            <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
            source={require('../../assets/vch.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
        </View>
        <Animatable.View 
            style={[styles.footer, {
                backgroundColor: bg
            }]}
            animation="fadeInUpBig"
        >
            <Text style={[styles.title]}>Home Quarantine Assistance</Text>
            <Text style={styles.text} >for a better tomorrow</Text>
            <View style={styles.button}>
            {/* <TouchableOpacity onPress={()=>navigation.navigate('Slide')}>
                <Button style={{backgroundColor:'rgb(34,88,163)'}} mode="contained">
                    Get Started
                </Button> */}
                
                {/* <LinearGradient
                    colors={['#c53d34', '#c53d34']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>Get Started</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    />
                </LinearGradient> */}
            {/* </TouchableOpacity> */}
            <TouchableOpacity
            style={{
                borderWidth:1,
                borderColor:'rgba(0,0,0,0.2)',
                alignItems:'center',
                justifyContent:'center',
                width:150,
                height:50,
                backgroundColor:accent,
                color:bg,
                borderRadius:25,
                }}
                onPress={()=>navigation.navigate('Slide')}
            >
             <Text style={styles.textSign}>Get Started<Icon name="chevron-forward-sharp" color={bg}></Icon> </Text>
            
            </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;
