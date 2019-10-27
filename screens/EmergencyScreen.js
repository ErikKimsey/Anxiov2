import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import QuestionList from '../components/questionnaire/QuestionList';
import emergency_questions from '../questionnaires/emergency_questions';
import { Provider } from '../store/EmergencyStore/Context';
import DrawerButton from '../navigation/components/DrawerButton';
import COLORS, { COLORS_2 } from '../styles/colors';

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
    console.log(this.props);
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
        this.handleQuestionComplete();
      }
      return e;
    });
    return nuArr;
  };

  toggleComplete = (item) => {
    return !item.complete;
  };

  handleQuestionComplete = () => {
    let count = 0;
    this.state.questions.forEach((e, i) => {
      if (e.complete === true) {
        count++;
      }
    });
    if (count === this.state.questions.length) {
      this.props.navigation.navigate('Home');
    }
  };

  render() {
    return (
      <Provider value={this.state}>
        <View style={styles.container}>
          <DrawerButton navigation={this.props.navigation} />
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS_2.gray,
    width: '100%'
  }
});
