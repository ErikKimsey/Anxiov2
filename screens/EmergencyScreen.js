import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import QuestionList from '../components/questionnaire/QuestionList';
import emergency_questions from '../questionnaires/emergency_questions';
import DrawerButton from '../navigation/components/DrawerButton';
import { Provider } from '../store/EmergencyStore/Context';

export default class EmergencyScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null,
      setAnswers: (e) => this.handleSetAnswer(e),
      index: 0
    };
  }

  componentDidMount() {
    this.setState({ questions: emergency_questions });
  }

  handleSetAnswer = (value) => {
    let copy = this.findQuestion(value);
    this.setState({ questions: [ ...copy ], index: this.state.index + 1 });
  };

  findQuestion = (value) => {
    const copy = this.state.questions.slice();
    let nuArr = copy.map((e) => {
      if (e.id === value.id) {
        e.answer = value.answer;
        e.complete = this.toggleComplete(e);
      }
      return e;
    });
    return nuArr;
  };

  toggleComplete = (item) => {
    return !item.complete;
  };

  render() {
    return (
      <Provider value={this.state}>
        <View style={styles.container}>
          {/* <DrawerButton navigation={this.props.navigation} /> */}
          {this.state.questions != null && (
            <QuestionList
              questions={this.state.questions}
              setAnswers={this.state.setAnswers}
              index={this.state.index}
            />
          )}
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
