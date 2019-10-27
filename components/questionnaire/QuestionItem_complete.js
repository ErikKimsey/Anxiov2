import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import generalQItemStyles from './styles/questionItem_styles';

const QuestionItemComplete = (props) => {
  let { question, answer } = props.qObj;
  return (
    <View style={[ styles.container ]}>
      <Text>{question}</Text>
      <View>
        {/* 
        -- Route to ER activities if question-complete is "ER_7"
        -- Otherwise, route to ...?
       */}
        <TouchableOpacity
          // style={[ styles.answerButtons ]}
          onPress={() => {
            props.setAnswer({ id: props.qObj.id, answer: true });
          }}
        >
          <Text>Continue...</Text>
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

export default QuestionItemComplete;
