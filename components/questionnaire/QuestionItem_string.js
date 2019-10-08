import React, { useContext } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import generalQItemStyles from '../questionnaire/styles/questionItem_styles';

const QuestionItemString = (props) => {
  // console.log('props in STRING componet');
  // console.log(props);v
  const { question, answer } = props.qObj;
  return (
    <View style={[ styles.container ]}>
      {/* <TextInput
        // style={styles.textInput}
        placeholder="Your name"
        onBlur={Keyboard.dismiss}
        // value={this.state.name}
        // onChangeText={this.handleNameChange}
      /> */}
      <Text>{question}</Text>
      <View>{/* <Image /> */}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0d',
    width:null,
    height:null,
    marginLeft:20,
    marginRight:20
  }
});

export default QuestionItemString;
