import React, { useState } from 'react';
import { View, Text } from 'react-native';
import ErQuestionItem from './ErQuestionItem';

const ErQuestionList = (props) => {
  // console.log('props');
  // console.log('props');
  // console.log('props');
  // console.log( props.questions);
  if (props.questions != null) {
    console.log(props.questions[0]);
  }
  // const [ question, setQuestion ] = useState(props);

  return (
    <View>
      <ErQuestionItem />
    </View>
  );
};

export default ErQuestionList;
