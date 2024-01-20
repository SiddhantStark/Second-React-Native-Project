/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import FlatCards from './components/FlatCards';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import FancyCards2 from './components/FancyCards2';
import ActionCard from './components/ActionCard';


function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards/>
        <ElevatedCards/>
        <FancyCards/>
        <FancyCards2></FancyCards2>
        <ActionCard/>
      </ScrollView>
    </SafeAreaView>
  );
}



export default App;
