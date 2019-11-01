import React, { useContext, useState, Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import questionItemStyles from '../questionnaire/styles/questionItem_styles';
import COLORS, { COLORS_2 } from '../../styles/colors';
import setAnimatedArray, { getAnimatedArray } from '../../utility/textTransition';

export default class QuestionItemBool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: null,
      answer: null,
      qToBuild: [],
      animQ: '',
      questionDisplayed: false
    };
  }

  componentDidMount() {
    let { question, answer } = this.props.qObj;
    this.setState({ question: question, answer: answer });
    this.textTransition(question);
  }

  textTransition = (str) => {
    const questArr = str.split(' ');
    this.loop(questArr);
  };

  loop = (arr, i = 0) => {
    let _i = i;
    let word = arr[_i];
    setTimeout(() => {
      _i++;
      if (_i < arr.length) {
        this.loop(arr, _i);
      } else {
        this.setState({ questionDisplayed: true });
      }
      this.setAnimatedArray(word);
    }, 122);
  };

  setAnimatedArray = (str) => {
    let copy = [ ...this.state.qToBuild ];
    copy.push(str);
    let updatedBuild = copy.join(' ');
    this.setState({ qToBuild: copy, animQ: updatedBuild });
  };

  getAnimatedArray = () => {
    return animatedAray;
  };

  render() {
    return (
      <View style={[ styles.container ]}>
        <Text style={styles.questionText}>{this.state.animQ}</Text>
        {this.state.questionDisplayed && (
          <View style={styles.answerButtonsContainer}>
            <TouchableOpacity
              // style={[ styles.answerButtons ]}
              onPress={() => {
                this.props.setAnswers({ id: this.props.qObj.id, answer: true });
              }}
            >
              <Text style={styles.answerButtonsText}>Yep</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.setAnswers({ id: this.props.qObj.id, answer: false });
              }}
            >
              <Text style={styles.answerButtonsText}>Nope</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}
styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS_2.gray,
    width: null,
    height: null
  },
  questionText: {
    // color: questionItemStyles.color
    marginLeft: 5,
    marginRight: 5,
    color: COLORS.creme,
    fontSize: 30
  },
  answerButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  answerButtons: {
    fontSize: 30,
    color: COLORS.creme
  },
  answerButtonsText: {
    flexDirection: 'row',
    fontSize: 30,
    color: COLORS.creme
  }
});
