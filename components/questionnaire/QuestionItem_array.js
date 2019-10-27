import React, { Component, useContext } from 'react';
import { View, Alert, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from '../../utility/modal';

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
    this.setState({ question: this.props.qObj.question });
  }

  handleSaveAnswer = () => {
    let answerArr = this.createArrayFromString();

    if (answerArr != null) {
      this.props.setAnswer({ id: this.props.qObj.id, answer: answerArr });
    } else {
      return;
    }
  };

  createArrayFromString = () => {
    const dirtyAnswerArr = this.state.answer.replace(/[^\w\s]/gi, ' ').split(' ');
    const answerArr = this.cleanEmptyArrayElems(dirtyAnswerArr);

    if (this.checkArrayLength(answerArr) === true) {
      return answerArr;
    } else {
      this.callAlert();
      return null;
    }
  };

  cleanEmptyArrayElems = (arr) => {
    return arr.filter((e, i) => {
      return e != '';
    });
  };

  checkArrayLength = (arr) => {
    let allGood = arr.length === 3 ? true : false;
    arr.forEach((e, i) => {
      if (e === '') return (allGood = false);
    });
    return allGood;
  };

  callAlert = () => {
    Alert.alert(
      'Hold on!',
      'Try three words to describe your anxiety',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: true }
    );
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
    height: null
  },
  saveBtn: {
    width: 50,
    height: 22,
    backgroundColor: '#053'
  }
});
