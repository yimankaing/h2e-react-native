import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import {Colors, Fonts} from "../../constants";

export default class extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.string
  };

  render() {
    const {text, style, type} = this.props;
    let color = Colors.primary
    switch (type) {
      case 'success':
        color = Colors.success;
        break;
      case 'danger':
        color = Colors.danger;
        break;
      case 'warning':
        color = Colors.warning;
        break;
      case 'info':
        color = Colors.info;
        break;
    }
    const val = text || "0";
    return (
      <View style={{
        ...style,
        zIndex: 1,
        borderRadius: 15,
        backgroundColor: color,
        width: val.length === 1 ? 27 : val.length === 2 ? 30 : 34,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{
          color: Colors.white(),
          fontSize: 15,
          fontWeight: 'bold'
        }}>{val}</Text>
      </View>
    )
  }
}