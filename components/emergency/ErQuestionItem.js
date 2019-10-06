import React from 'react';
import { View, Text } from 'react-native';

const ErQuestionItem = (props) => {
  // console.log(props);

  return (
    <View>
      <Text>{props.question.question}</Text>
    </View>
  );
};

export default ErQuestionItem;
