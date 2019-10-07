import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import QuestionItemArray from '../questionnaire/QuestionItem_array';
import QuestionItemBool from '../questionnaire/QuestionItem_bool';
import QuestionItemString from '../questionnaire/QuestionItem_string';
import QuestionItemMultiChoice from '../questionnaire/QuestionItem_multChoice';

export default class QuestionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null
    };
  }

  componentDidMount() {
    if (this.props.qObjects != null) {
      this.props.qObjects.forEach((e, i) => {
        console.log(e.answerType);
      });
    }
    this.setState({ questions: this.props.qObjects });
  }

  getQuestionTypeComponent = (q) => {
    console.log('question');
    console.log('question');
    console.log('question');
    console.log(q);
    const [ answer, answerType, question, id ] = q;
    if (answerType === 'bool') {
      return <QuestionItemBool qObj={q} />;
    }
    if (answerType === 'string') {
      return <QuestionItemString qObj={q} />;
    }
    if (answerType === 'array') {
      return <QuestionItemArray qObj={q} />;
    }
    if (answerType === 'array') {
      return <QuestionItemMultiChoice qObj={q} />;
    }
  };

  render() {
    return (
      <View>
        <Text>YOYOYO</Text>
        {this.state.questions && (
          <FlatList
            data={this.state.questions}
            renderItem={({ item }) => {
              this.getQuestionTypeComponent(item);
            }}
            keyExtractor={(item) => item.id}
          />
        )}
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
