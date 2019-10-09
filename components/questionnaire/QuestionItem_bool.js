import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableHighlight } from 'react-native';
import generalQItemStyles from '../questionnaire/styles/questionItem_styles';

const toggleComplete = () => {};

const setAnswer = (answer) => {};

const QuestionItemBool = (props) => {
  console.log('props in BOOL componet');
  console.log(props);
  let { question, answer } = props.qObj;
  const [ complete, setComplete ] = useState(false);

  return (
    <View style={[ styles.container ]}>
      <Text>{question}</Text>
      <View>
        {/* <TouchableHighlight onPress={toggleComplete()} />
        <TouchableHighlight /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0d',
    width: null,
    height: null,
    marginLeft: 20,
    marginRight: 20
  }
});

export default QuestionItemBool;
