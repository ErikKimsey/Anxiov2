import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import generalQItemStyles from '../questionnaire/styles/questionItem_styles';

const toggleComplete = () => {};

const setAnswer = (answer) => {};

const QuestionItemBool = (props) => {
  console.log('props in BOOL componet');
  console.log(props.setAnswers);

  let { question, answer } = props.qObj;
  const [ complete, setComplete ] = useState(props.complete);
  return (
    <View style={[ styles.container ]}>
      <Text>{question}</Text>
      <View>
        <TouchableOpacity
          // style={[ styles.answerButtons ]}
          onPress={() => {
            props.setAnswers(true);
          }}
        >
          <Text>True</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.setAnswers(false);
          }}
        >
          <Text>False</Text>
        </TouchableOpacity>
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
  },
  answerButtons: {
    flexDirection: 'row',
    fontSize: 20,
    color: '#000'
  }
});

export default QuestionItemBool;
