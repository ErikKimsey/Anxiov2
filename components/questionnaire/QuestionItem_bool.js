import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import questionItemStyles from '../questionnaire/styles/questionItem_styles';
import COLORS, { COLORS_2 } from '../../styles/colors';
// import textTransition, { Q, getChars } from '../../utility/textTransition';

const textTransition = (str, setStr, Q, i) => {
  const STR_LEN = str.length;
  loop(str, STR_LEN, setStr, Q);
};

const loop = (str, len, i = 0, setStr, Q) => {
  let _i = i;
  let char = str.charAt(_i);
  setTimeout(() => {
    _i++;
    if (_i < len) {
      loop(str, len, _i);
    }
    // console.log(char);
    Q += char;
    setStr(Q);
  }, 300);
};

const getChars = (char) => {
  return Q;
};

const QuestionItemBool = (props) => {
  let { question, answer } = props.qObj;
  let { str, setStr } = useState('');
  console.log(str);

  const testQ = props.qObj.question;
  textTransition(testQ);

  return (
    <View style={[ styles.container ]}>
      <Text style={styles.questionText}>{question}</Text>
      <View style={styles.answerButtonsContainer}>
        <TouchableOpacity
          // style={[ styles.answerButtons ]}
          onPress={() => {
            props.setAnswers({ id: props.qObj.id, answer: true });
          }}
        >
          <Text style={styles.answerButtonsText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.setAnswers({ id: props.qObj.id, answer: false });
          }}
        >
          <Text style={styles.answerButtonsText}>Nope</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS_2.gray,
    width: null,
    height: null
  },
  questionText: {
    // color: questionItemStyles.color
    marginLeft: 5,
    marginRight: 5,
    color: COLORS.creme,
    fontSize: 30
  },
  answerButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  answerButtons: {
    fontSize: 30,
    color: COLORS.creme
  },
  answerButtonsText: {
    flexDirection: 'row',
    fontSize: 30,
    color: COLORS.creme
  }
});

export default QuestionItemBool;
