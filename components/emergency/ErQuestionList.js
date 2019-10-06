import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import ErQuestionItemArray from './ErQuestionItem';
import ErQuestionItemBool from './ErQuestionItem';
import ErQuestionItemString from './ErQuestionItem';

const ErQuestionList = (props) => {
  // console.log(props.questions[0]);

  const [ index, incrIndex ] = useState(0);
  let questionItem = null;

  if (props.qObjects != null) {
    props.qObjects.forEach((e, i) => {
      console.log(e.answerType);
    });
  }

  /**
   * onload...
   * - load first question,
   * -- determine q type
   * ---- on answer...
   * ------- load subsequent question
   * --------- determine q type
   * ----------- load subsequent question
   */

  return (
    <View>
      <Text>YOYOYO</Text>
      {/* <ErQuestionItem question={e} />; */}
    </View>
  );
};

const reQuestionTypeComponent = (type) => {
  if (type === 'bool') {
    return <ErQuestionItemBool />;
  }
  if (type === 'string') {
    return <ErQuestionItemString />;
  }
  if (type === 'array') {
    return <ErQuestionItemArray />;
  }
};

const destructureObject = (obj) => {
  return ({ answerType, answer, question } = obj);
};

export default ErQuestionList;
