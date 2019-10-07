import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import QuestionList from '../components/questionnaire/QuestionList';
import emergency_questions from '../questionnaires/emergency_questions';
import DrawerButton from '../navigation/components/DrawerButton';
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
    console.log(this.state.questions);

    return (
      <View style={styles.container}>
        <DrawerButton navigation={this.props.navigation} />
        {this.state.questions != null && <QuestionList qObjects={this.state.questions} />}
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
