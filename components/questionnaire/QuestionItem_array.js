import React, { useContext } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import generalQItemStyles from '../questionnaire/styles/questionItem_styles';
console.log(generalQItemStyles);

const QuestionItemArray = (props) => {
  // console.log('props in ARRAY componet');
  // console.log(props);

  return (
    <View style={[ styles.container ]}>
      <Text>ARRAY</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a0a'
  }
});

export default QuestionItemArray;
