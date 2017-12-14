import React, {Component} from 'react';
import {
  Text,
  View
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import styles from './style';
import Button from '../../components/Button';

class Home extends Component{

  render(){
    return(
      <View style={styles.container}>
        <Text>Welcome To Trivia Quiz</Text>

        <Button label='Start Quiz' onPress={() => Actions.playQuiz()}/>
        <Button label='About'/>
      </View>
    );
  }
}

export default Home;
