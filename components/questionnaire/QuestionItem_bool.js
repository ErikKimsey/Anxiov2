import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import generalQItemStyles from '../questionnaire/styles/questionItem_styles';

const QuestionItemBool = (props) => {
  let { question, answer } = props.qObj;
  return (
    <View style={[ styles.container ]}>
      <Text>{question}</Text>
      <View>
        <TouchableOpacity
          // style={[ styles.answerButtons ]}
          onPress={() => {
            props.setAnswers({ id: props.qObj.id, answer: true });
          }}
        >
          <Text>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.setAnswers({ id: props.qObj.id, answer: false });
          }}
        >
          <Text>Nope</Text>
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
  },
  answerButtons: {
    flexDirection: 'row',
    fontSize: 20,
    color: '#000'
  }
});

export default QuestionItemBool;
