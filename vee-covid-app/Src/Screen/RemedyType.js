import React, { Component } from 'react'
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  Image, View, Text,
  ImageBackground,
  ActivityIndicator
} from 'react-native';
//import { Avatar, Button, Card, Title, Paragraph, Divider,useTheme } from 'react-native-paper';
//import {Checkbox, Assets, Text, View, Colors, Spacings} from 'react-native-ui-lib'; 
import Icon from 'react-native-vector-icons/Ionicons';
import { FontAwesome, AntDesign } from 'react-native-vector-icons';
import { TagSelect } from 'react-native-tag-select';
import * as Progress from 'react-native-progress';
import API_Base from '../Constant/API_Base';
import { callGetMethod } from '../Helpers/Utility';
const accent1 = '#4446AD';
const accent2 = '#F4BC1C';
const lightText = '#151410';
const border = 'rgb(90,95,190)';
const data = [
  { id: 1, label: 'Allopathy' },
  { id: 2, label: 'Homeopathy' },
  { id: 3, label: 'Ayurvedha' },
];
export default class RemedyType extends Component {

  //#region  Constructor
  constructor(props) {
    super(props);
    this.state = {
      //Selecteditems: props.navigation.state.params.selected,
      Selecteditems: props.route.params.selected,
      CategoryList: [],
      IsNoRecord: false,
      isLoading: false
    };
    this.GetCategoryApi();
  }
  //#endregion
  // const [Selecteditems, SetSelecteditems] = useState(navigation.state.params.selected);
  // const [CategoryList, SetCategoryList] = useState([]);
  // const [IsNoRecord, SetIsNoRecord] = useState(true);
  // const [isLoading, SetisLoading] = useState(false);
  // const tag = useRef(null);
  
  Navigation = () => {
    if (this.tag.itemsSelected.length > 0) {
      const value = {};
      this.tag.setState({ value });
      const catgoryid = this.tag.itemsSelected[0];
      this.props.navigation.navigate('Description', { CategoryID: catgoryid, symptomsid: this.state.Selecteditems });
      // this.props.navigation.navigate('RemedyType', { selected: JSON.stringify(this.tag.itemsSelected) });
    }
    else {
      alert("Select any remedy type");
    }
  }

  GetCategoryApi = async () => {
    let object = {};
    try {
      this.state.isLoading = true;
      var url = API_Base.GETCATEGORY;
      //console.log("Response------" + url);
      let responseJson = await callGetMethod(url);
      //console.log("Response------" + url + "=====" + JSON.stringify(responseJson));
      this.state.isLoading = false;
      if (responseJson != null && responseJson != '') {
        if (responseJson.code == 200) {
          if (responseJson.responseText.length > 0) {
            var category = [];
            for (var i = 0; i < responseJson.responseText.length; i++) {
              object = {
                id: responseJson.responseText[i].id,
                label: responseJson.responseText[i].category_name
              }
              category.push(object);
            }
            this.state.IsNoRecord = false;
            this.setState({ CategoryList: category })

          } else {
            this.state.IsNoRecord = true;

          }
        } else {
          this.state.IsNoRecord = true;
          alert(responseJson.message);
        }
      } else {
        this.state.IsNoRecord = true;
        alert(responseJson.message);
      }
    } catch (Exception) {
      console.log(Exception);
      this.state.IsNoRecord = true;
 
    }
  };

  render() {
    return (
      <View style={styles.home} >
        <SafeAreaView >
          <View style={styles.innerbox}>
            <View style={{ marginTop: 30, marginLeft: "7%" }}>

            </View>
            <StatusBar backgroundColor='#4446AD' barStyle="light-content" />
            {
              !this.state.IsNoRecord ?
                <Text style={styles.title}>Choose your Remedy Type?</Text>
                : null
            }

            {
              this.state.IsNoRecord ?
                <Text style={{ color: '#4446AD', fontWeight: 'bold', fontSize: 23, alignSelf: "center", justifyContent: "flex-end" }}>No Records</Text>
                :
                <View style={{ marginTop: "15%", alignSelf: "center", }}>
                  <TagSelect
                    data={this.state.CategoryList}
                    max={1}
                    itemStyle={styles.item}
                    itemLabelStyle={styles.label}
                    itemStyleSelected={styles.itemSelected}
                    itemLabelStyleSelected={styles.labelSelected}
                    ref={(tag) => { this.tag = tag; }}
                    onMaxError={() => {
                      alert('Max remedy selected');
                    }}
                  />
                </View>
            }
            {
              this.state.isLoading ?
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                  <ActivityIndicator color="#4446AD" size="large" />
                </View>
                : null
            }


          </View>


          <View style={{}}>
            <Text style={[styles.question]} >Step 3/3</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ marginTop: '1%' }}>
                <Progress.Bar progress={1} width={250} borderColor={accent1} color={accent2} backgroundColor={'rgb(90,95,190)'} height={5} marginLeft={'10%'} marginTop={'7%'} />
              </View>
              <TouchableOpacity
                style={{ marginLeft: '5%', backgroundColor: accent2, height: 35, borderRadius: 20, width: '15%', marginTop: '2%' }}
                onPress={() => this.Navigation()}
              >
                <Text style={{ alignContent: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: '10%' }}>

                  {/* <FontAwesome name="angle-double-right" size={20} color={lightText}/>
                       */}
                  <Icon
                    name="md-arrow-forward-sharp"
                    color='#000'
                    size={24}
                  />

                </Text>
              </TouchableOpacity>
            </View>
          </View>

        </SafeAreaView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    //color: '#05375a',
    color: '#4446AD',
    alignSelf: "center",
    //marginLeft: 30,
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold'
  },
  cardbutton: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: '50%',
    width: '35%',
    marginTop: '5%',
    margin: 25,
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    borderRadius: 20,
    borderColor: 'grey',
    elevation: 2,
  },
  buttontext: {
    color: '#008000',
    fontSize: 18,
    marginTop: 12,
    fontWeight: 'bold'
  },
  buttontext2: {
    color: '#dd3c3c',
    fontSize: 18,
    marginTop: 12,
    fontWeight: 'bold'
  },
  home: {
    width: "100%",
    height: "100%",
    // flex: 1,
    backgroundColor: "#4446AD",
  },
  question: {
    color: 'white',
    marginLeft: '7%',
    marginTop: '10%',
    fontSize: 16,
    fontWeight: '400'
  },
  progressbar: {
    marginLeft: '5%',

  },
  innerbox: {
    width: "96%",
    height: "77%",
    borderRadius: 30,
    marginHorizontal: "2%",
    marginTop: "2%",
    backgroundColor: "white"
  },
  item: {
    borderWidth: 1,
    borderColor: border,
    borderRadius: 15,
    backgroundColor: 'white'
  },
  label: {
    color: accent1
  },
  itemSelected: {
    backgroundColor: accent1,
    borderColor: accent1
  },
  labelSelected: {
    color: 'white',
  },
});
