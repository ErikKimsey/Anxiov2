import React, { useContext } from 'react';
import { View, Text } from 'react-native';

const ErQuestionItemString = (props) => {
  // console.log(props);

  return (
    <View>
      <Text>{props.question.question}</Text>
    </View>
  );
};

export default ErQuestionItemString;
