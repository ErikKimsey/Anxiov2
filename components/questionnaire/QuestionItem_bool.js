import React, { useContext } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import generalQItemStyles from '../questionnaire/styles/questionItem_styles';

const QuestionItemBool = (props) => {
  // console.log('props in BOOL componet');
  // console.log(props);
  const { question, answer } = props.qObj;

  return (
    <View style={[ styles.container ]}>
      <Text>{question}</Text>
      {/* <Text>{props.question}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0d',
    width:null,
    height:null,
    marginLeft:20,
    marginRight:20
  }
});

export default QuestionItemBool;
