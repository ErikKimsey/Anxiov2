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
      setAnswers: (e) => this.handleSetAnswer(e)
    };
  }

  componentDidMount() {
    console.log('1');

    this.setState({ questions: emergency_questions });
  }

  shouldComponentUpdate(state, props){
    
  }

  handleSetAnswer = (value) => {
    console.log('2');

    let copy = this.findQuestion(value);
    this.setState({ questions: [ ...copy ] });
  };

  findQuestion = (value) => {
    console.log('3');
    const copy = this.state.questions.slice(0);
    copy.forEach((e) => {
      if (e.id === value.id) {
        e.answer = value.answer;
        e.complete = this.toggleComplete(e);
      }
    });
    return copy;
  };

  toggleComplete = (item) => {
    console.log('4');
    return !item.complete;
  };

  render() {
    return (
      <Provider value={this.state}>
        <View style={styles.container}>
          <DrawerButton navigation={this.props.navigation} />
          <Text> textInComponent </Text>
          {this.state.questions != null && (
            <QuestionList questions={this.state.questions} setAnswers={this.state.setAnswers} />
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
