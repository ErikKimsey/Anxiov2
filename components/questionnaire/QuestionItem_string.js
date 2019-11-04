import React, { Component, useContext } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS_2 } from '../../styles/colors';
import generalQItemStyles from '../questionnaire/styles/questionItem_styles';

export default class QuestionItem_string extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: ''
    };
  }

  componentDidMount() {
    /**
     * if "where are you right now", give GPS location option
     */
    this.setState({ question: this.props.qObj.question });
  }

  handleSaveAnswer = () => {
    this.props.setAnswer({ id: this.props.qObj.id, answer: this.state.answer });
  };

  render() {
    return (
      <View style={[ styles.container ]}>
        <Text style={[ styles.questionText ]}>{this.state.question}</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          onChangeText={(answer) => this.setState({ answer })}
          value={this.state.answer}
        />
        <TouchableOpacity style={[ styles.saveBtn ]} onPress={this.handleSaveAnswer}>
          <Text style={[ styles.answerButtonsText ]}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: null,
    height: null
  },
  questionText: {
    marginLeft: 5,
    marginRight: 5,
    color: COLORS_2.gray,
    fontSize: 30
  },
  saveBtn: {
    fontSize: 30,
    color: COLORS_2.gray
  },
  answerButtonsText: {
    flexDirection: 'row',
    fontSize: 30,
    color: COLORS_2.gray
  }
});
