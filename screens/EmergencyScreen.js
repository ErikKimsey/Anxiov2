import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ErQuestions from '../components/emergency/er_questions_list';
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
    console.log(this.state.questions);

    return (
      <View>
        <ErQuestions questions={this.state.questions} />
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
