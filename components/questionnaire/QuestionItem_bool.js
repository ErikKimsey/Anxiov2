import React, { useContext } from 'react';
import { View, Text, TextInput, Image } from 'react-native';

const QuestionItemBool = (props) => {
  console.log('props in BOOL componet');
  console.log(props);
  const { answer, question } = props.qObj;

  return (
    <View>
      <Text>{question}</Text>
      {/* <Text>{props.question}</Text> */}
    </View>
  );
};

export default QuestionItemBool;
