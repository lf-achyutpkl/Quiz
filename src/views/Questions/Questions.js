import React, {Component} from 'react';
import {
  Text,
  View
} from 'react-native';
import _shuffle from 'lodash/shuffle';
import moment from 'moment';

import styles from './styles';
import {url} from '../../config/urls';
import {get} from '../../utils/httpUtils';
import GameOver from '../../views/GameOver';
import Question from '../../components/Question';


class Questions extends Component{

  constructor(){
    super();

    this.state = {
      startTime: 0,
      questions: [],
      isLoading: true,
      totalTimeTaken: 0,
      wrongAnswer: false,
      currentQuestionIndex: 0
    };
  }

  componentDidMount(){
    this._fetchAllQuestions();
  }

  render(){
    if(this.state.isLoading){
      return (
        <View style={styles.container}>
          <Text>Fetching questions</Text>
        </View>
      )
    }

    if(this.state.wrongAnswer || (this.state.currentQuestionIndex === 10)){
      return (
        <GameOver finalScore={this.state.currentQuestionIndex} totalTime={this._calculateTimeTaken()}/>
      )
    }

    return(
     <View style={styles.container}>
        <Text style={{marginBottom: 20}}>Current Score is: {this.state.currentQuestionIndex}</Text>
        <Question 
            checkAnswer={this._checkAnswer}
            options={this._shuffleOptions()}
            question={this.state.questions[this.state.currentQuestionIndex]}
          />
     </View>
    );
  }

  _fetchAllQuestions = () => {
    this.setState({isLoading: true});
    get(url.QUESTION).then(response => this.setState({questions: response.results, isLoading: false, startTime: moment()}));
    
  }

  _checkAnswer = (selectedAnswer) => {
    if(selectedAnswer === this.state.questions[this.state.currentQuestionIndex].correct_answer){
      this.setState({currentQuestionIndex: this.state.currentQuestionIndex + 1})
    } else {
      this.setState({wrongAnswer: true, totalTimeTaken: this._calculateTimeTaken()})
    }
  }

  _shuffleOptions = () => {
    let options = this.state.questions[this.state.currentQuestionIndex].incorrect_answers;
    options.push(this.state.questions[this.state.currentQuestionIndex].correct_answer);
    return _shuffle(options);
  }

  _calculateTimeTaken = () => {
    let endTime = moment();
    return `${endTime.diff(this.state.startTime, 'minutes')} minute(s) : ${endTime.diff(this.state.startTime, 'seconds')} second(s)`;
  }

}

export default Questions;
