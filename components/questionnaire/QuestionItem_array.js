import React, { useContext } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import generalQItemStyles from '../questionnaire/styles/questionItem_styles';
console.log(generalQItemStyles);

const QuestionItemArray = (props) => {
  console.log('props in ARRAY componet');
  console.log(props);
  const { question, answer } = props.qObj;
  return (
    <View style={[ styles.container ]}>
      <Text>{question}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a0a',
    width: null,
    height: null,
    marginLeft: 20,
    marginRight: 20
  }
});

export default QuestionItemArray;
