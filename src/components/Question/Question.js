import React, {Component} from 'react';
import {
  Text,
  View
} from 'react-native';

import styles from './style';
import Button from '../Button';

const Question = (props) => {

    return(
      <View>
        <Text style={styles.question}>{props.question.question}</Text>
        {
          props.options &&
            props.options.map((option, index) => <Button key={index} label={option} onPress={() => props.checkAnswer(option)}/>)
        }
      </View>
    );
}

export default Question;
