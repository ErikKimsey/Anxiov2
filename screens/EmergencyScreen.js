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
    console.log('1');
    this.setState({ questions: emergency_questions });
  }

  // shouldComponentUpdate(state, props) {
  //   return state.questions != props.questions ? true : false;
  // }

  handleSetAnswer = (value) => {
    console.log('2');
    console.log('value');
    console.log(value);

    let copy = this.findQuestion(value);
    this.setState({ questions: [ ...copy ], index: this.state.index + 1 });
  };

  findQuestion = (value) => {
    console.log('3');
    // console.log('value in findQ');
    // // console.log(value.id);

    const copy = this.state.questions.slice();
    // console.log(copy);

    let nuArr = copy.map((e) => {
      // console.log(value.answer);

      if (e.id === value.id) {
        e.answer = value.answer;
        e.complete = this.toggleComplete(e);
      }
      return e;
    });
    return nuArr;
  };

  toggleComplete = (item) => {
    console.log('4');
    return !item.complete;
  };

  render() {
    console.log(this.state.questions);

    return (
      <Provider value={this.state}>
        <View style={styles.container}>
          <DrawerButton navigation={this.props.navigation} />
          <Text> textInComponent </Text>
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
