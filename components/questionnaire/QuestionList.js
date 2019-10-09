import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet } from 'react-native';
import QuestionItemArray from '../questionnaire/QuestionItem_array';
import QuestionItemBool from '../questionnaire/QuestionItem_bool';
import QuestionItemString from '../questionnaire/QuestionItem_string';
import QuestionItemMultiChoice from '../questionnaire/QuestionItem_multChoice';
import { Consumer } from '../../store/EmergencyStore/Context';

export default class QuestionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null,
      itemArray: [],
      itemArrayIndex: 0
    };
  }

  componentDidMount() {
    this.setItemArray();
  }

  iterateItemArray = () => {
    if (this.state.itemArrayIndex < this.state.questions.length) {
      this.setState({ itemArrayIndex: this.state.itemArrayIndex + 1 });
    } else {
    }
  };

  questionsComplete = () => {};

  getQuestionTypeComponent = (q) => {
    const { answerType } = q;
    if (answerType === 'bool') {
      return <QuestionItemBool key={q.id} qObj={q} />;
    }
    if (answerType === 'string') {
      return <QuestionItemString key={q.id} qObj={q} />;
    }
    if (answerType === 'array') {
      return <QuestionItemArray key={q.id} qObj={q} />;
    }
    if (answerType === 'array') {
      return <QuestionItemMultiChoice key={q.id} qObj={q} />;
    }
  };

  setItemArray = () => {
    const qArr = this.props.questions.map((e) => {
      return this.getQuestionTypeComponent(e);
    });
    this.setState({ itemArray: [ ...qArr ] });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.itemArray.length > 0 && this.state.itemArray[this.state.itemArrayIndex]}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: null,
    width: null,
    marginLeft: 20,
    marginLeft: 20,
    top: 80
  }
});
