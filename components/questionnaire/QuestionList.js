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
    this.setState({ questions: this.props.qObjects });
  }

  getQuestionTypeComponent = (q) => {
    const { answerType } = q.item;
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
      <View style={styles.container}>
        {this.state.questions != null && (
          <FlatList
            data={this.state.questions}
            renderItem={this.getQuestionTypeComponent}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 80
  }
});
