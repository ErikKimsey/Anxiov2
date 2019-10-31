import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet } from 'react-native';
import QuestionItemArray from '../questionnaire/QuestionItem_array';
import QuestionItemBool from '../questionnaire/QuestionItem_bool';
import QuestionItemString from '../questionnaire/QuestionItem_string';
import QuestionItemMultiChoice from '../questionnaire/QuestionItem_multChoice';
import QuestionItemComplete from '../questionnaire/QuestionItem_complete';
import { Consumer } from '../../store/EmergencyStore/Context';


export default class QuestionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null,
      itemArray: [],
      itemArrayIndex: 0,
      newQ:""
    };
  }

  componentDidMount() {
    this.setItemArray();
  }

  // shouldComponentUpdate(state, props) {
  //   console.log('state');
  //   // console.log(state);

  //   if (state.itemArray != props.questions) {
  //     this.iterateItemArray();
  //     this.setUpdatedArray();
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  iterateItemArray = () => {
    if (this.state.itemArrayIndex < this.state.questions.length) {
      this.setState({ itemArrayIndex: this.state.itemArrayIndex + 1 });
    } else {
    }
  };

  questionsCompleteArray = (arr) => {
    return arr.forEach((e) => {
      if (e.complete === false) {
        return e;
      }
    });
  };

  setUpdatedArray = () => {
    let copy = this.questionsCompleteArray(this.state.itemArray);
  };

  getQuestionTypeComponent = (q) => {
    const { answerType } = q;
    if (answerType === 'bool') {
      return <QuestionItemBool key={q.id} qObj={q} setAnswers={this.props.setAnswers} />;
    }
    if (answerType === 'string') {
      return <QuestionItemString key={q.id} qObj={q} setAnswer={this.props.setAnswers} />;
    }
    if (answerType === 'array') {
      return <QuestionItemArray key={q.id} qObj={q} setAnswer={this.props.setAnswers} />;
    }
    if (answerType === 'multi') {
      return <QuestionItemMultiChoice key={q.id} qObj={q} setAnswer={this.props.setAnswers} />;
    }
    if (answerType === 'completion') {
      return <QuestionItemComplete key={q.id} qObj={q} setAnswer={this.props.setAnswers} />;
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
      <View style={styles.container}>{this.state.itemArray.length > 0 && this.state.itemArray[this.props.index]}</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: null,
    marginLeft: 10,
    marginLeft: 10,
    top: 140
  }
});
