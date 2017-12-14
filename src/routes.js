import React from 'react';
import {Scene, Router, Stack} from 'react-native-router-flux';

import Home from './views/Home';
import Questions from './views/Questions';

const App = () => (
  <Router>
    <Stack key="root">
      <Scene key="home" component={Home} title="Home"/>
      <Scene key="playQuiz" component={Questions} title="Quiz"/>
    </Stack>
  </Router>
);

export default App;
