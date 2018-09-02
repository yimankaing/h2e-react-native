import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {Colors, Fonts} from "../../constants";

export class List extends React.Component {
  render() {
    return (
      <View style={[styles.listContainer, this.props.style]}>
        {this.props.children}
      </View>
    );
  }
}

export class ListItem extends React.Component {
  static propTypes = {
    itemHeight: PropTypes.number.isRequired,
    onPress: PropTypes.any,
    children: PropTypes.any.isRequired,
    style: PropTypes.any,
    disabled: PropTypes.bool,
    backgroundColor: PropTypes.string
  };

  render() {
    return (
      <TouchableHighlight
        underlayColor={Colors.black(0.4)}
        activeOpacity={this.props.onPress ? 0.85 : 1}
        disabled={this.props.disabled}
        style={[this.props.style, {
          height: this.props.itemHeight,
          // borderTopWidth: StyleSheet.hairlineWidth,
          // borderTopColor: type.noOutline ? 'transparent' : '#CAC9CE',
          // borderTopColor: '#CAC9CE',
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: '#CAC9CE',
          backgroundColor: Colors.white()
        }]}
        onPress={this.props.onPress}>
        <View style={{
          flex: 1,
          height: this.props.itemHeight,
          flexDirection: 'row',
          backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : '#fff'
        }}>
          {this.props.children}
        </View>
      </TouchableHighlight>
    );
  }
}

export class Body extends React.Component {
  static propTypes = {
    hasIcon: PropTypes.bool,
    children: PropTypes.any.isRequired,
    style: PropTypes.object
  };

  render() {
    return (
      <View style={[this.props.style, {
        flex: 1,
        flexDirection: 'row',
      }]}>
        <View style={{
          paddingHorizontal: this.props.hasIcon ? 0 : 13,
          flex: 4,
          justifyContent: 'center',
          paddingVertical: 10
        }}>
          {this.props.children}
        </View>
      </View>
    );
  }
}

export class Left extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    style: PropTypes.object
  };

  render() {
    return (
      <View style={[this.props.style, {
        width: 60,
        alignSelf: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 13,
        paddingVertical: 6,
      }]}>
        {this.props.children}
      </View>
    );
  }
}

export class Right extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    style: PropTypes.object
  };

  render() {
    return (
      <View style={[this.props.style, {
        flex: 0,
        flexDirection: 'row',
      }]}>
        <View style={{
          width: 60,
          alignSelf: 'center',
          alignItems: 'flex-end',
          paddingHorizontal: 13,
          paddingVertical: 6,
        }}>
          {this.props.children}
        </View>
      </View>
    );
  }
}

export class Divider extends React.Component {
  render() {
    return (
      <View style={[{
        // flex: 1,
        // height: 40,
        backgroundColor: Colors.listBackground,
        padding: 3,
        alignItems: 'flex-start',
        justifyContent: 'center'
      }, this.props.style]}>
        <Text
          style={[{fontFamily: Fonts.bold, fontSize: 15, color: Colors.grey}, this.props.titleStyle]}>
          {this.props.title}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#CAC9CE',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CAC9CE'
  },
  listItemContainer: {backgroundColor: '#fff'},
});

/*example and usage

<ListItem itemHeight={itemHeight - 0.5} onPress={() => null}>
        <Left>
          <IconButton
            background={"#007AFF"}
            roundedSquare
            iconComponent="Feather"
            iconName="user"
            color={"#fff"}
            size={31}
          />
        </Left>

        <Body hasIcon={true}>
        <Text>{data.name}</Text>
        <Text>{data.position}</Text>
        </Body>

        <Right>
          <Feather name="chevron-right" size={21} color="#C7C7CC"/>
        </Right>

</ListItem>
*/
