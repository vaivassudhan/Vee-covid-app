/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import type { Node } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  View, Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import day1 from '../Constant/day1';
import day2 from '../Constant/day2';
import day3 from '../Constant/day3';
import day4 from '../Constant/day4';
import day5 from '../Constant/day5';
import day6 from '../Constant/day6';

import day7 from '../Constant/day7';
import day8 from '../Constant/day8';
import day9 from '../Constant/day9';
import day10 from '../Constant/day10';
import day11 from '../Constant/day11';
import day12 from '../Constant/day12';

import day13 from '../Constant/day13';
import day14 from '../Constant/day14';


import RadioButton from '../Screen/RadioButton';

const options = [
  { key: 'Low', text: 'Low', },
  { key: 'Normal;', text: 'Normal', },
  { key: 'High', text: 'High', },
];

const DynamicConente = (props, { navigation },) => {


  var pageName = props.route.params.key
  //var pageName = "1";

  const [selectFever, setSelectFever] = React.useState(null);
  const [selectCough, setSelecteCough] = React.useState(null);
  const [selectFatigue, setSelectFatigue] = React.useState(null);



  const [Day, setDay] = useState(false);
  const [PageTitle, setPageTitle] = useState(false);

  const [part1Title, setpart1Title] = useState(false);
  const [part1SubTitle, setpart1SubTitle] = useState(false);
  const [part1Content, setpart1Content] = useState(false);


  const [part2Title, setpart2Title] = useState(false);
  const [part2SubTitle, setpart2SubTitle] = useState(false);
  const [part2Content, setpart2Content] = useState(false);

  const [part3Title, setpart3Title] = useState(false);
  const [part3SubTitle, setpart3SubTitle] = useState(false);
  const [part3Content, setpart3Content] = useState(false);

  const [part5Title, setpart5Title] = useState(false);
  const [part5SubTitle, setpart5SubTitle] = useState(false);
  const [part5Content, setpart5Content] = useState(false);


  const [imgOne, setimgOne] = useState("");
  const [imgTwo, setimgTwo] = useState("");
  const [imgThree, setimgThree] = useState("");
  const [imgFour, setimgFour] = useState("");


  const isDarkMode = useColorScheme() === 'dark';


  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  const onSelectFever = (item) => {
    if (selectFever && selectFever.key === item.key) {
      setSelectFever(null);
    } else {
      setSelectFever(item);
    }
  };
  const onSelectCough = (item) => {
    if (selectCough && selectCough.key === item.key) {
      setSelecteCough(null);
    } else {
      setSelecteCough(item);
    }
  };
  const onSelectFatigue = (item) => {
    if (selectFatigue && selectFatigue.key === item.key) {
      setSelectFatigue(null);
    } else {
      setSelectFatigue(item);
    }
  };

  useEffect(() => {


    var fileName = day1;
    // var pageName = "1";

    //alert(pageName);

    if (pageName == "1") {
      fileName = day1;
      setimgOne(require("../Images/day11.jpg"));
      setimgTwo(require("../Images/day12.png"));
      setimgThree(require("../Images/day13.jpg"));
      setimgFour(require("../Images/common.jpeg"));
    }
    else if (pageName == "2") {
      fileName = day2;
      setimgOne(require("../Images/day21.jpg"));
      setimgTwo(require("../Images/day21.jpg"));
      setimgThree(require("../Images/day21.jpg"));
      setimgFour(require("../Images/common.jpeg"));
    }
    else if (pageName == "3") {
      fileName = day3;
      setimgOne(require("../Images/day31.jpg"));
      setimgTwo(require("../Images/day32.jpg"));
      setimgThree(require("../Images/day33.jpg"));
      setimgFour(require("../Images/common.jpeg"));
    } else if (pageName == "4") {
      fileName = day4;
      setimgOne(require("../Images/day41.jpg"));
      setimgTwo(require("../Images/day42.png"));
      setimgThree(require("../Images/day43.jpg"));
      setimgFour(require("../Images/common.jpeg"));
    } else if (pageName == "5") {
      fileName = day5;
      setimgOne(require("../Images/day51.jpg"));
      setimgTwo(require("../Images/day52.jpg"));
      setimgThree(require("../Images/day53.jpg"));
      setimgFour(require("../Images/common.jpeg"));
    } else if (pageName == "6") {
      fileName = day6;
      setimgOne(require("../Images/day61.jpg"));
      setimgTwo(require("../Images/day62.jpg"));
      setimgThree(require("../Images/day63.jpg"));
      setimgFour(require("../Images/common.jpeg"));
    } else if (pageName == "7") {
      fileName = day7;
      setimgOne(require("../Images/day71.jpg"));
      setimgTwo(require("../Images/day72.png"));
      setimgThree(require("../Images/day73.jpg"));
      setimgFour(require("../Images/common.jpeg"));
    } else if (pageName == "8") {
      fileName = day8;
      setimgOne(require("../Images/day81.jpg"));
      setimgTwo(require("../Images/day82.jpg"));
      setimgThree(require("../Images/day83.jpg"));
      setimgFour(require("../Images/common.jpeg"));
    } else if (pageName == "9") {
      fileName = day9;
      setimgOne(require("../Images/day91.jpg"));
      setimgTwo(require("../Images/day92.png"));
      setimgThree(require("../Images/day93.jpg"));
      setimgFour(require("../Images/common.jpeg"));
    } else if (pageName == "10") {
      fileName = day10;
      setimgOne(require("../Images/day101.jpg"));
      setimgTwo(require("../Images/day102.jpg"));
      setimgThree(require("../Images/day103.jpg"));
      setimgFour(require("../Images/common.jpeg"));
    } else if (pageName == "11") {
      fileName = day11;
      setimgOne(require("../Images/day111.jpg"));
      setimgTwo(require("../Images/day112.jpg"));
      setimgThree(require("../Images/day113.jpg"));
      setimgFour(require("../Images/common.jpeg"));
    } else if (pageName == "12") {
      fileName = day12;
      setimgOne(require("../Images/day121.jpg"));
      setimgTwo(require("../Images/day122.jpg"));
      setimgThree(require("../Images/day123.jpg"));
      setimgFour(require("../Images/common.jpeg"));
    } else if (pageName == "13") {
      fileName = day13;
      setimgOne(require("../Images/day131.jpg"));
      setimgTwo(require("../Images/day132.png"));
      setimgThree(require("../Images/day133.jpg"));
      setimgFour(require("../Images/common.jpeg"));
    } else if (pageName == "14") {
      fileName = day14;
      setimgOne(require("../Images/day141.png"));
      setimgTwo(require("../Images/day142.png"));
      setimgThree(require("../Images/day143.jpg"));
      setimgFour(require("../Images/common.jpeg"));
    }

    setDay(fileName.Day)
    setPageTitle(fileName.PageTitle)

    setpart1Title(fileName.part1Title)
    setpart1SubTitle(fileName.part1SubTitle)
    setpart1Content(fileName.part1Content)

    setpart2Title(fileName.part2Title);

    setpart3Title(fileName.part3Title)
    setpart3SubTitle(fileName.part3SubTitle)
    setpart3Content(fileName.part3Content)

    setpart5Title(fileName.part5Title)
    setpart5SubTitle(fileName.part5SubTitle)
    setpart5Content(fileName.part5Content)

  }, []);



  return (
    <View style={styles.home}>
      <StatusBar backgroundColor='#4446AD' />
      <View style={{ flex: 1 }}>



        <View style={{}}>
          {/* <View style={{height:55, borderRadius:0,alignContent:'center',
  backgroundColor:'#093660', margin:0, alignItems:"center", justifyContent:'center'}}>

<TouchableOpacity  style={{ position:'absolute', left:0}} onPress={() => { props.navigation.goBack() }}>
              <Image source={require("../Images/backarrow.png")}
               style={{ marginLeft: 22, width: 18, height: 18,

               }} resizeMode='contain' />
            </TouchableOpacity>

 

 <Text style={{alignSelf:'center',color:'#ffffff',fontWeight: 'bold',fontSize:18}}>{Day}</Text>
 </View> */}

          <Text style={styles.title}>{PageTitle}</Text>
        </View>





        <View style={styles.innerbox}>

          <ScrollView style={{}}>

            <View style={{ margin: 10, marginBottom: 50 }}>

              <Text style={{ color: '#484848', fontWeight: 'bold', marginLeft: 10 }}>{part1Title}</Text>
              <View style={{ backgroundColor: '#e8e8e8', margin: 10, borderRadius: 10, padding: 10 }}>
                <Text style={{
                  color: '#000', fontWeight: 'bold',
                  alignSelf: 'center', margin: 1,
                  justifyContent: 'center'
                }}>{part1SubTitle}</Text>
                <Text style={{ lineHeight: 23, color: '#000',  }}>{part1Content}</Text>
              </View>


              <Text style={{ color: '#484848', fontWeight: 'bold', marginTop: 10, marginLeft: 10 }}>{part2Title}</Text>
              <View style={{ padding: 10, margin: 5, borderRadius: 10, backgroundColor: '#e8e8e8' }}>


                <ScrollView horizontal={true}>
                  <View style={{ height: 100, flexDirection: 'row', flex: 1 }}>

                    <Image style={{ resizeMode: 'contain', height: 100, width: 150, margin: 2 }} source={imgOne} />

                    <Image style={{ resizeMode: 'contain', height: 100, width: 150, margin: 2 }} source={imgTwo} />
                    <Image style={{ resizeMode: 'contain', height: 100, width: 150, margin: 2 }} source={imgThree} />
                    <Image style={{ resizeMode: 'contain', height: 100, width: 150, margin: 2 }} source={imgFour} />

                  </View>

                </ScrollView>
              </View>





              <Text style={{ color: '#484848', fontWeight: 'bold', marginLeft: 10, marginTop: 10 }}>{part3Title}</Text>

              <View style={{ backgroundColor: '#e8e8e8', margin: 5, borderRadius: 10, padding: 10 }}>
                <Text style={{
                  color: '#093660', fontWeight: 'bold',
                  alignSelf: 'center',
                  justifyContent: 'center', fontSize: 0
                }}>{part3SubTitle}</Text>
                <Text style={{ lineHeight: 23, color: '#000' }}>{part3Content}</Text>
              </View>




              <Text style={{ color: '#484848', fontWeight: 'bold', marginLeft: 10, marginTop: 10 }}>Self Check</Text>

              <View style={{ backgroundColor: '#e8e8e8', margin: 5, borderRadius: 10, padding: 10, marginTop: 5 }}>

                <View style={{ marginTop: 10 }}>
                  <Text style={styles.subtitle}>1. Fever</Text>
                  <RadioButton
                    selectedOption={selectFever}
                    onSelect={onSelectFever}
                    options={options}
                  />
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text style={styles.subtitle}>2. Cough</Text>
                  <RadioButton
                    selectedOption={selectCough}
                    onSelect={onSelectCough}
                    options={options}
                  />
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text style={styles.subtitle}>3. Fatigue</Text>
                  <RadioButton
                    selectedOption={selectFatigue}
                    onSelect={onSelectFatigue}
                    options={options}
                  />
                </View>
              </View>








              <Text style={{ color: '#484848', fontWeight: 'bold', marginTop: 10, marginLeft: 10 }}>{part5Title}</Text>
              <View style={{ backgroundColor: '#e8e8e8', margin: 10, borderRadius: 10, padding: 10 }}>
                <Text style={{
                  color: '#093660', fontWeight: 'bold',
                  alignSelf: 'center',
                  justifyContent: 'center', fontSize: 0
                }}>{part5SubTitle}</Text>
                <Text style={{ lineHeight: 23, color: '#000' }}>{part5Content}</Text>
              </View>


            </View>

          </ScrollView>


        </View>



        <View style={{
          borderWidth: 1,
          borderColor: 'rgba(0,0,0,0.2)',

          width: 150,
          height: 45,
          backgroundColor: '#F4BC1C',
          color: '#4446AD',
          borderRadius: 25,
          position: 'absolute',
          bottom: 10,
          justifyContent: 'center',
          alignContent: 'center',
          alignSelf: 'center'
        }}>
          <TouchableOpacity

          >
            <Text textBreakStrategy='simple' style={{ alignSelf: 'center', color: '#000', fontWeight: 'bold' }}>{"I Did "}{Day}</Text>
          </TouchableOpacity>
        </View>



      </View>




    </View>
  );
};


const styles = StyleSheet.create({
  title: {
    color: '#fff',
    marginLeft: 30,
    marginTop: 20,
    marginBottom: 5,
    fontSize: 30,
    fontWeight: 'bold'

  },
  home: {
    width: "100%",
    height: "100%",
    backgroundColor: '#4446AD',
  },
  innerbox: {
    flex: 1,
    borderRadius: 10,
    margin: 5,
    backgroundColor: "white"
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20
  },

  subtitle: {
    fontSize: 14,
    color: "#000",
    textAlign: "left",
    fontWeight: "bold"
  },

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default DynamicConente;
