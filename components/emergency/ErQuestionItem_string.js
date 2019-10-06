import React, { useContext } from 'react';
import { View, Text, TextInput, Image } from 'react-native';

const ErQuestionItemString = (props) => {
  return (
    <View>
      <Text>{props.question.question}</Text>
      <TextInput
        // style={styles.textInput}
        placeholder="Your name"
        onBlur={Keyboard.dismiss}
        // value={this.state.name}
        // onChangeText={this.handleNameChange}
      />
      <View><Image /></View>
    </View>
  );
};

export default ErQuestionItemString;
