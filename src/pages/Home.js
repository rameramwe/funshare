'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  AsyncStorage
} from 'react-native';

import Button from '../components/button';
import Header from '../components/header';
import Login from './login';
import firebase from 'firebase';
import Routes from 'funshare/Routes';
import DataStore from 'funshare/DataStore';
import Actions from 'funshare/Actions';
import SharedStyles from 'funshare/SharedStyles';
import StyleVars from 'funshare/StyleVars';
import Tinder from 'funshare/Tinder';


const styles = StyleSheet.create({
  buttonContainer: {
    paddingTop: 96,
    alignItems: "center"
  },
  reloadText: {
    textAlign: "center",
    marginVertical: 20
  },
  button: { width: 256 }
});
export default class Home extends Component {
    constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      failed: false
    };
  }

  componentWillMount() {
    Actions.logout();
    Actions.auth();
  }

  componentDidMount() {
    Actions.loadUser.completed.listen(this._onLoadUserCompleted.bind(this));
    Actions.logout.listen(this._onLogout.bind(this));
  }
  
  

  render(){

    return (
      <View >
        <Text> hi </Text>
        <Button
      text="Login"
      onpress={this.logout.bind(this)}
      button_styles={styles.primary_button}
      button_text_styles={styles.primary_button_text} />

      <Tinder style={{flex: 1}} />

     
      </View>
    );
  }


  _onLoadUserCompleted(user) {
    let currentUser = DataStore.getCurrentUser();


    if (currentUser.onboarded) {
      this.setState({ loaded: true });
    } else {
      this.props.replaceRoute(Routes.Home1(currentUser));
    }
  }

  _onLogout() {
    this.props.replaceRoute(Routes.login());
  }
  logout(){

    Actions.logout();

  }


  }

