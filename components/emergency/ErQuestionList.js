import React, { useState } from 'react';
import { View, Text } from 'react-native';
import ErQuestionItem from './ErQuestionItem';

const ErQuestionList = (props) => {
  console.log(props.questions[0]);

  if (props.questions != null) {
    console.log(props.questions[0]);
  }
  // const [ question, setQuestion ] = useState(props);
  /**
   * onload...
   * - load first question,
   * - on answer...
   * -- load subsequent question
   */

  return (
    <View>
      {props.questions.map((e) => {
        return <ErQuestionItem question={e} />;
      })}
    </View>
  );
};

export default ErQuestionList;
