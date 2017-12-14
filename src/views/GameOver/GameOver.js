import React, {Component} from 'react';
import {
  Text,
  View
} from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';

import Button from '../../components/Button';

const GameOver = (props) => {
  
      return(
        <View>
          <Text>Game Over</Text>
          <Text>Your final score is: {props.finalScore}</Text>
          <Text>Total time taken is: {props.totalTime}</Text>
          <Button label='Play Again' onPress={() => Actions.home({type: ActionConst.RESET})}/>
        </View>
      );
  }

  export default GameOver;
