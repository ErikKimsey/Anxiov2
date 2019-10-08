import React, { useContext } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import generalQItemStyles from '../questionnaire/styles/questionItem_styles';

const QuestionItemMultiChoice = (props) => {
  const { question, answer } = props.qObj;
  return (
    <View style={[ styles.container ]}>
      <Text>{question}</Text>
      {/* <TextInput
        // style={styles.textInput}
        placeholder="Your name"
        onBlur={Keyboard.dismiss}
        // value={this.state.name}
        // onChangeText={this.handleNameChange}
      />
      <View>
        <Image />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a0a',
    // width: null,
    // height: null,
    marginLeft: 20,
    marginRight: 20
  }
});

export default QuestionItemMultiChoice;
