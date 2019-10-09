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
      setAnswers: ({ value }) => this.setState({ questions: value })
    };
  }

  componentDidMount() {
    this.setState({ questions: emergency_questions });
  }

  render() {
    // if (this.state.questions != null) {
    //   console.log(this.state.questions[0]);
    // }
    // console.log(this.state.questions);

    return (
      <Provider value={this.state}>
        <View style={styles.container}>
          <DrawerButton navigation={this.props.navigation} />
          <Text> textInComponent </Text>
          {this.state.questions != null && <QuestionList qObjects={this.state.questions} />}
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
