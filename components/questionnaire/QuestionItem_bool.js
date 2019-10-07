import React, { useContext } from 'react';
import { View, Text, TextInput, Image } from 'react-native';

const QuestionItemBool = (props) => {
  // console.log(props);

  return (
    <View>
      <Text>{props.question.question}</Text>
    </View>
  );
};

export default QuestionItemBool;
