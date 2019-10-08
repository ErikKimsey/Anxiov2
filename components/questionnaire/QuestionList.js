import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet } from 'react-native';
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
    const { answerType } = q;
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
          <ScrollView scrollEventThrottle={16}>
            <View>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
                {this.state.questions.map((e) => {
                  console.log('====================================');
                  console.log(e);
                  console.log('====================================');
                  return this.getQuestionTypeComponent(e);
                })}
              </ScrollView>
            </View>
          </ScrollView>
        )}
      </View>
    );
  }
}
{
  /* <FlatList
  data={this.state.questions}
  renderItem={this.getQuestionTypeComponent}
  keyExtractor={(item) => item.id}
  horizontal={true}
/> */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    top: 80
  }
});
