/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, ScrollView, View, Text, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import LandingScreen from './src/screens/landing';
import MohallaLandingScreen from './src/screens/mohallaLanding';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <React.Fragment>
      <StatusBar
        translucent={false}
        animated={true}
        hidden={false}
        backgroundColor="purple"
        barStyle="default"
      />
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            style: {backgroundColor: 'purple', height: hp('10%')},
            activeTintColor: 'yellow',
            inactiveTintColor: 'white',
            tabStyle: {
              paddingVertical: hp('1%'),
            },
          }}>
          <Tab.Screen
            name="Search"
            component={LandingScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon name="search" size={20} color="white" />
              ),
            }}
          />
          <Tab.Screen
            name="Appointments"
            component={MohallaLandingScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon name="clock-o" size={20} color="white" />
              ),
            }}
          />
          <Tab.Screen
            name="Doctors"
            component={LandingScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon name="group" size={20} color="white" />
              ),
            }}
          />
          <Tab.Screen
            name="Medicine"
            component={LandingScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon name="medkit" size={20} color="white" />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={LandingScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon name="user" size={20} color="white" />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
};

export default App;
