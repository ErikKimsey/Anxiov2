import React, { useContext, useState, Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import questionItemStyles from '../questionnaire/styles/questionItem_styles';
import COLORS, { COLORS_2 } from '../../styles/colors';
// import textTransition, { Q, getChars } from '../../utility/textTransition';

export default class QuestionItemBool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: null,
      answer: null,
      qToBuild: ''
    };
  }

  componentDidMount() {
    let { question, answer } = this.props.qObj;

    this.setState({ question: question, answer: answer });
    // let testQ = this.props.qObj.question;
    this.textTransition(question);
  }

  textTransition = (str) => {
    STR_LEN = str.length;
    this.loop(str, STR_LEN);
  };

  loop = (str, len, i = 0) => {
    let _i = i;
    let char = str.charAt(_i);
    this.setChars(char);
    setTimeout(() => {
      _i++;
      if (_i < len) {
        this.loop(str, len, _i);
      }
    }, 20);
  };

  setChars = (char) => {
    // console.log(char);
    // let nuQ;
    console.log('state');

    console.log(this.state.qToBuild);
    console.log('char');
    console.log(char);

    if (this.state.qToBuild === '') {
      this.setState({ qToBuild: char });
    } else {
      let nuQ = this.state.qToBuild.slice();
      console.log(nuQ);
      this.state.qToBuild.concat(char);
      this.setState({ qToBuild: this.state.qToBuild.concat(char) });
    }
  };

  render() {
    return (
      <View style={[ styles.container ]}>
        <Text style={styles.questionText}>{this.state.qToBuild}</Text>
        <View style={styles.answerButtonsContainer}>
          <TouchableOpacity
            // style={[ styles.answerButtons ]}
            onPress={() => {
              this.props.setAnswers({ id: this.props.qObj.id, answer: true });
            }}
          >
            <Text style={styles.answerButtonsText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.setAnswers({ id: this.props.qObj.id, answer: false });
            }}
          >
            <Text style={styles.answerButtonsText}>Nope</Text>
          </TouchableOpacity>
        </View>
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
