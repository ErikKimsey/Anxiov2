import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ErQuestionList from '../components/emergency/ErQuestionList';
import emergency_questions from '../questionnaires/emergency_questions';

export default class EmergencyScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null
    };
  }

  componentDidMount() {
    this.setState({ questions: emergency_questions });
  }

  render() {
    // if (this.state.questions != null) {
    //   console.log(this.state.questions[0]);
    // }

    return (
      <View>
        {this.state.questions != null && <ErQuestionList questions={this.state.questions} />}
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
