import React, { useContext } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import generalQItemStyles from '../questionnaire/styles/questionItem_styles';

const QuestionItemMultiChoice = (props) => {
  const { question, answerOptions, id } = props.qObj;

  return (
    <View style={[ styles.container ]}>
      <Text>{question}</Text>
      {answerOptions.map((e) => {
        return (
          <TouchableOpacity
            key={e}
            onPress={() => {
              props.setAnswer({ id: id, answer: e });
            }}
          >
            <Text>{e}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a0a',
    // width: null,
    // height: null,
    marginLeft: 20,
    marginRight: 20
  }
});

export default QuestionItemMultiChoice;
