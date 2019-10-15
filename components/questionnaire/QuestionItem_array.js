import React, { Component, useContext } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import generalQItemStyles from '../questionnaire/styles/questionItem_styles';

export default class QuestionItemArray extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: '',
      answerArray: []
    };
  }

  componentDidMount() {
    /**
     * if "where are you right now", give GPS location option
     */
    this.setState({ question: this.props.qObj.question });
  }

  handleSaveAnswer = () => {
    let answerArr = this.createArrayFromString();
    console.log('answerArr');
    console.log(answerArr);

    this.props.setAnswer({ id: this.props.qObj.id, answer: answerArr });
  };

  createArrayFromString = () => {
    let answerArr = this.state.answer.split(' ');
    return answerArr;
    // this.setState({ answerArray: [ ...answerArr ] });
  };

  render() {
    return (
      <View style={[ styles.container ]}>
        <Text>{this.state.question}</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          onChangeText={(answer) => this.setState({ answer })}
          value={this.state.answer}
        />
        <TouchableOpacity style={[ styles.saveBtn ]} onPress={this.handleSaveAnswer}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0d',
    width: null,
    height: null,
    marginLeft: 20,
    marginRight: 20
  },
  saveBtn: {
    width: 50,
    height: 22,
    backgroundColor: '#053'
  }
});
