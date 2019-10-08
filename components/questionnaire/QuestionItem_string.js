import React, { useContext } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import generalQItemStyles from '../questionnaire/styles/questionItem_styles';

const QuestionItemString = (props) => {
  // console.log('props in STRING componet');
  // console.log(props);
  return (
    <View style={[ styles.container ]}>
      <Text>STRING</Text>
      {/* <TextInput
        // style={styles.textInput}
        placeholder="Your name"
        onBlur={Keyboard.dismiss}
        // value={this.state.name}
        // onChangeText={this.handleNameChange}
      /> */}
      <View>{/* <Image /> */}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0d'
  }
});

export default QuestionItemString;
