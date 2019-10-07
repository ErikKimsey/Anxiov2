import React, { useContext } from 'react';
import { View, Text, TextInput, Image } from 'react-native';

const QuestionItemString = (props) => {
  console.log('props in STRING componet');
  console.log(props);
  return (
    <View>
      <Text>STRING</Text>
      {/* <TextInput
        // style={styles.textInput}
        placeholder="Your name"
        onBlur={Keyboard.dismiss}
        // value={this.state.name}
        // onChangeText={this.handleNameChange}
      /> */}
      <View>
        {/* <Image /> */}
      </View>
    </View>
  );
};

export default QuestionItemString;
