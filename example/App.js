import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, ScrollView} from 'react-native';
import {AlertModal, Button as MyButton, ActionSheetModal} from 'h2e-react-native/components';
import {Colors, Fonts} from 'h2e-react-native/constants';
import {Toast} from 'h2e-react-native/libs';

export default class App extends Component {
  showAlertModal = () => {
    const context = {
      message: "msg",
      title: "msg",
      // headerColor: Colors.white(),
      // headerBackgroundColor: Colors.primary,
      buttons: [
        {
          text: "OK", onPress: fn => {
            return fn();
          }
        }
      ]
    };
    this.refs.alertModal.alert(context);
  };
  showToastNative = () => {
    Toast('This is toast native', 'success');
  };
  showActionSheet = () => {
    const context = {
      message: "msg",
      title: "msg",
      // headerColor: Colors.white(),
      // headerBackgroundColor: Colors.primary,
      buttons: [
        {
          text: "OK", onPress: fn => {
            return fn();
          }
        }
      ]
    };
    this.refs.actionSheetModal.show(context);
  };

  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <Text style={{color: Colors.danger, fontFamily: Fonts.regular}}>ភាសាខ្មែរ</Text>
        <Button onPress={this.showAlertModal} title={"Show modal"}/>
        <Button onPress={this.showToastNative} title={"Toast Native"}/>
        <Button onPress={this.showActionSheet} title={"Show action sheet"}/>
        <MyButton
          background={Colors.success}
          roundedSquare
          iconLeft
          title="ប៊ូតុង"
          color="#fff"
          iconComponent="Feather"
          onPress={() => null}
        />
        <AlertModal ref={"alertModal"}/>
        <ActionSheetModal ref={"actionSheetModal"} cancelText={"បោះបង់"}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
