import React from 'react'
import { createIconSet } from 'react-native-vector-icons';
import glyphMap from '../../assets/fonts/glyphmaps/H2Eicon.json';
import { Platform, View } from "react-native";

const Icon = createIconSet(glyphMap, Platform.OS === 'android' ? 'H2Eicon' : 'icomoon');

export default class extends React.Component {
  render() {
    const { name, size, color,style } = this.props;
    return (
      <View style={style}>
        <Icon name={name} size={size ? size : 20} color={color ? color : '#fff'} />
      </View>
    );
  }
}