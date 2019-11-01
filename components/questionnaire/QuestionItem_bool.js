import React, { useContext, useState, Component, useEffect } from 'react';
import { View, Text, TextInput, Image, Animated, TouchableOpacity, StyleSheet } from 'react-native';
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
      questionDisplayed: false,
      fade: new Animated.Value(0),
      fadeAnswerOpts: new Animated.Value(0)
    };
  }

  componentDidMount() {
    let { question, answer } = this.props.qObj;
    this.setState({ question: question, answer: answer });
    this.textTransition(question);
    // this.animateText();
    this.animatedAnswerOpts();
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
      this.animateText();
    }, 50);
  };
  // loop = (arr, i = 0) => {
  //   let _i = i;
  //   let word = arr[_i];
  //   setTimeout(() => {
  //     _i++;
  //     if (_i < arr.length) {
  //       this.loop(arr, _i);
  //     } else {
  //       this.setState({ questionDisplayed: true });
  //     }
  //     this.setAnimatedArray(word);
  //   }, 122);
  // };

  setAnimatedArray = (str) => {
    let copy = [ ...this.state.qToBuild ];
    copy.push(str);
    let updatedBuild = copy.join(' ');
    this.setState({ qToBuild: copy, animQ: updatedBuild });
  };

  getAnimatedArray = () => {
    return animatedAray;
  };

  animateText = () => {
    Animated.timing(this.state.fade, {
      toValue: 1,
      duration: 1000
    }).start();
  };

  animatedAnswerOpts = () => {
    Animated.timing(this.state.fadeAnswerOpts, {
      toValue: 1,
      duration: 300,
      delay: 1500
    }).start();
  };

  render() {
    return (
      <View style={[ styles.container ]}>
        <Animated.Text style={[ styles.questionText, { opacity: this.state.fade } ]}>{this.state.animQ}</Animated.Text>
        {this.state.questionDisplayed && (
          <Animated.View style={[ styles.answerButtonsContainer, { opacity: this.state.fadeAnswerOpts } ]}>
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
          </Animated.View>
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
