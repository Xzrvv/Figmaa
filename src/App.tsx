import React from 'react';
import HomeTask from './HomeTask';
import { SafeAreaView } from 'react-native';
import SecondPage from './SecondPage';

const App = () => {
  return (
    <SafeAreaView>
     <HomeTask/>
    <SecondPage/>
    </SafeAreaView>
  )
};
export default App;