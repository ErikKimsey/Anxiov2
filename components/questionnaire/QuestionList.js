import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import QuestionItemArray from '../questionnaire/QuestionItem_array';
import QuestionItemBool from '../questionnaire/QuestionItem_bool';
import QuestionItemString from '../questionnaire/QuestionItem_string';

const QuestionList = (props) => {
  // console.log(props.questions[0]);

  const [ index, incrIndex ] = useState(0);
  let questionItem = null;

  if (props.qObjects != null) {
    props.qObjects.forEach((e, i) => {
      console.log(e.answerType);
    });
  }

  return (
    <View>
      <Text>YOYOYO</Text>
      {/* ./questionnaire/QuestionItem_array question={e} />; */}
    </View>
  );
};

const getQuestionTypeComponent = (type) => {
  if (type === 'bool') {
    return <QuestionItemBool />;
  }
  if (type === 'string') {
    return <QuestionItemString />;
  }
  if (type === 'array') {
    return <QuestionItemArray />;
  }
};

const destructureObject = (obj) => {
  return ({ answerType, answer, question } = obj);
};

export default QuestionList;
