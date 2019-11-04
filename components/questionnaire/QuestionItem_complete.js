import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS_2 } from '../../styles/colors';
// import generalQItemStyles from './styles/questionItem_styles';

const QuestionItemComplete = (props) => {
  let { question, answer } = props.qObj;
  return (
    <View style={[ styles.container ]}>
      <Text style={[ styles.questionText ]}>{question}</Text>
      <View>
        {/* 
        -- Route to ER activities if question-complete is "ER_7"
        -- Otherwise, route to ...?
       */}
        <TouchableOpacity
          style={[ styles.answerButtons ]}
          onPress={() => {
            props.setAnswer({ id: props.qObj.id, answer: true });
          }}
        >
          <Text style={[ styles.answerButtonsText ]}>Continue...</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: null,
    height: null
  },
  questionText: {
    marginLeft: 5,
    marginRight: 5,
    color: COLORS_2.gray,
    fontSize: 30
  },
  answerButtons: {
    fontSize: 30,
    color: COLORS_2.gray
  },
  answerButtonsText: {
    flexDirection: 'row',
    fontSize: 30,
    color: COLORS_2.gray
  }
});

export default QuestionItemComplete;
