import React from 'react';
import { StyleSheet, TextInput, View, } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const InputBox = (props) => {
  return (
    <View style={styles.sectionstyle}>
      <Icon name={props.icon} color="gray" size={25} />
      <TextInput style={styles.input} {...props} />
    </View>

  );
};

const styles = StyleSheet.create({
  sectionstyle: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#BDBDBD",
    borderBottomWidth: 1,
    marginHorizontal: 5,
    marginBottom: 7,
  },

  input: {
    flex: 1,
    marginLeft: 5,
    color: "#000",
    fontSize: 14,
  },
  // textinputinvalid: {
  //   borderBottomColor: "red",
  // },

});

export default InputBox;