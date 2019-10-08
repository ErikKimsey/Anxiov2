import React, { useContext } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import generalQItemStyles from '../questionnaire/styles/questionItem_styles';

const QuestionItemMultiChoice = (props) => {
  return (
    <View style={[ styles.container ]}>
      <Text>MULTI</Text>
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
    backgroundColor: '#a0a'
  }
});

export default QuestionItemMultiChoice;
