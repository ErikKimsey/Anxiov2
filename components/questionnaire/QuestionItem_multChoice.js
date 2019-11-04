import React, { useContext } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS_2 } from '../../styles/colors';
import generalQItemStyles from '../questionnaire/styles/questionItem_styles';

const QuestionItemMultiChoice = (props) => {
  const { question, answerOptions, id } = props.qObj;

  return (
    <View style={[ styles.container ]}>
      <Text style={[ styles.questionText ]}>{question}</Text>
      <View style={[ styles.answerButtonsContainer ]}>
        {answerOptions.map((e) => {
          return (
            <TouchableOpacity
              style={[ styles.answerButtons ]}
              key={e}
              onPress={() => {
                props.setAnswer({ id: id, answer: e });
              }}
            >
              <Text style={[ styles.answerButtonsText ]}>{e}</Text>
            </TouchableOpacity>
          );
        })}
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
  answerButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
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

export default QuestionItemMultiChoice;
