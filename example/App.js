import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { AlertModal, Button as MyButton, ActionSheetModal, Modal, Badge } from 'h2e-react-native/components';
import Icon from 'react-native-vector-icons/Feather';
import { Colors, Fonts } from 'h2e-react-native/constants';
import { Toast } from 'h2e-react-native/libs';

export default class App extends Component {
  showAlertModal = () => {
    const context = {
      message: "msg",
      title: "msg",
      headerColor: Colors.white(),
      headerBackgroundColor: Colors.primary,
      buttons: [
        // {
        //   text: "OK", onPress: fn => {
        //     return fn();
        //   }
        // },
        // {
        //   text: "OK", onPress: fn => {
        //     return fn();
        //   }
        // },
        {
          icon: <Icon name={"check"} size={23} color={"red"} />,
          text: "OK",
          color: 'red',
          onPress: fn => {
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
  showModal = () => {
    this.refs.modal.show();
  };

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Text style={{ color: Colors.danger, fontFamily: Fonts.regular }}>ភាសាខ្មែរ</Text>
        <Button onPress={this.showAlertModal} title={"Show modal"} />
        <Button onPress={this.showToastNative} title={"Toast Native"} />
        <Button onPress={this.showActionSheet} title={"Show action sheet"} />
        <Button onPress={this.showModal} title={"Show Modal"} />
        <Badge type={"success"} text={"40"} />
        <MyButton
          background={Colors.success}
          roundedSquare
          iconLeft
          title="ប៊ូតុង"
          color="#fff"
          iconComponent="Feather"
          onPress={() => null}
        />
        <AlertModal ref={"alertModal"} squared={true} titleAlignment={"flex-start"} messageAlignment={"flex-end"}/>
        <ActionSheetModal ref={"actionSheetModal"} cancelText={"បោះបង់"} />
        <Modal ref={"modal"} position={'center'}>
          <Text>This is modal content</Text>
        </Modal>
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
