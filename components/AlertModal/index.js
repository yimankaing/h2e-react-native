import React from 'react';
import { View, Text, TouchableHighlight, Platform, Animated, Keyboard } from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal'
import { styles } from './styles';
import { Layout, Colors } from "../../constants";

const Touchable = Platform.OS === 'android' ? TouchableHighlight : TouchableHighlight;

const Title = (props) => <Text numberOfLines={1}
  style={[styles.titleText, { color: props.headerColor }]}>{props.title}</Text>;
const Message = (props) =>
  <Text style={styles.messageText}>{props.message}</Text>;

const Button = (props) => {
  const buttonsLength = props.buttons.length;
  const buttonsContainerStyle = buttonsLength === 1 ? styles.oneButtonContainer :
    buttonsLength === 2 ? styles.twoButtonsContainer :
      buttonsLength >= 3 ? styles.threeButtonsContainer : null;

  if (buttonsLength > 0) {
    const createButtonStyles = (i) => {
      if (buttonsLength === 1) {
        if (props.squared) {
          return [{ borderRadius: 0 }];
        } else {
          return [styles.borderBottomLeftRadius, styles.borderBottomRightRadius];
        }
      } else if (buttonsLength === 2) {
        if (props.squared) {
          return [{ borderRadius: 0, borderRightWidth: i === 0 ? 1 : 0 }]
        } else {
          return i === 0 ? [styles.borderBottomLeftRadius, { borderRightWidth: 1 }] : [styles.borderBottomRightRadius]
        }
      }
      if (buttonsLength >= 3) {
        if (props.squared) {
          return [{ borderRadius: 0 }]
        } else {
          return i === buttonsLength - 1 ? [styles.borderBottomLeftRadius, styles.borderBottomRightRadius] : []
        }
      }
    }

    return props.buttons.map((o, i) => {
      return (
        <Touchable
          key={i}
          underlayColor="#EFEFEF"
          style={[buttonsContainerStyle, ...createButtonStyles(i)]}
          onPress={() => o.onPress(() => props.dismiss())}
        >
          <View>
            <View pointerEvents="none" style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              {o.icon}
              <Text style={[styles.buttonText, { color: o.color || Colors.primary, paddingLeft: o.icon ? 12 : 0 }]}>{o.text}</Text>
            </View>
          </View>
        </Touchable>
      );
    });
  }
};

class AlertModal extends React.PureComponent {
  static propTypes = {
    squared: PropTypes.bool,
    titleAlignment: PropTypes.string,
    messageAlignment: PropTypes.string,
    animationIn: PropTypes.any,
    animationInTiming: PropTypes.number,
    animationOut: PropTypes.any,
    animationOutTiming: PropTypes.number
  };
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      headerColor: "#000",
      headerBackgroundColor: "transparent",
      message: '',
      buttons: [], //onPress-color-icon-text
      openAlertModal: false,
    };
    this.animatedY = new Animated.Value(0);
  }

  componentDidMount() {
    this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', () => this._showKeyboard());
    this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', () => this._dismissKeyboard());
  }

  componentWillUnmount() {
    this.keyboardWillShowListener.remove();
    this.keyboardWillHideListener.remove();
  }

  _showKeyboard = () => {
    this.animatedScrollY(100);
  };
  _dismissKeyboard = () => {
    Keyboard.dismiss();
    Animated.spring(this.animatedY, {
      toValue: 0
    }).start();
  };

  animatedScrollY = (y) => {
    Animated.spring(this.animatedY, {
      toValue: -y
    }).start();
  };

  render() {
    const { animationIn, animationInTiming, animationOut, animationOutTiming, squared, titleAlignment, messageAlignment } = this.props;
    const { headerColor, headerBackgroundColor, title, message, buttons, openAlertModal } = this.state;
    const buttonsLength = buttons.length;

    const animatedStyle = {
      scrollY: {
        transform: [
          { translateY: this.animatedY },
        ],
      }
    };

    const animIn = {
      0: {
        scale: 1.15,
      },
      0.1: {
        scale: 1.10
      },
      0.2: {
        scale: 1.09,
      },
      0.3: {
        scale: 1.08,
      },
      0.4: {
        scale: 1.07,
      },
      0.5: {
        scale: 1.06,
      },
      0.6: {
        scale: 1.05,
      },
      0.7: {
        scale: 1.04,
      },
      0.8: {
        scale: 1.03,
      },
      0.9: {
        scale: 1.02,
      },
      1: {
        scale: 1,
      },
    };
    const animOut = {
      0: {
        opacity: 1,
        scale: 1
      },
      0.2: {
        opacity: 0.3,
        scale: 0.9
      },
      0.8: {
        opacity: 0.1,
        scale: 0.9
      },
      1: {
        opacity: 0,
        scale: 0.9,
      },
    };

    return (
      <Modal
        isVisible={openAlertModal}
        // style={[styles.modal]}
        onBackButtonPress={this.dismiss}
        onBackdropPress={this.props.allowOutSideClick ? this.dismiss : null}
        backdropOpacity={0.4}
        animationIn={animationIn ? animationIn : animIn}
        animationInTiming={animationInTiming ? animationInTiming : 250}
        animationOut={animationOut ? animationOut : animOut}
        animationOutTiming={animationOutTiming ? animationOutTiming : 250}
        supportedOrientations={['portrait']}
      // onOrientationChange={}
      >
        <Animated.View style={[styles.mainContainer, animatedStyle.scrollY]}>
          {
            Platform.OS === 'ios' ?
              <View style={[styles.modalBackground, squared ? { borderRadius: 0 } : null]} /> :
              <View style={[styles.modalBackground, squared ? { borderRadius: 0 } : null]} />
          }

          <View style={[styles.modalContainer, { borderRadius: 0 }]}>
            {
              title ?
                <View style={[styles.titleContainer, {
                  alignItems: titleAlignment || 'center',
                  backgroundColor: headerBackgroundColor,
                  borderTopLeftRadius: squared ? 0 : 13,
                  borderTopRightRadius: squared ? 0 : 13
                }
                ]}>
                  <Title title={title}
                    headerColor={headerColor}
                  />
                </View>
                :
                null
            }
            <View style={[styles.messageContainer, { alignItems: messageAlignment || 'center', }]}>

              {this.props.children ? this.props.children : <Message message={message} />}
            </View>
            <View style={styles.buttonsContainer}>
              <View style={
                buttonsLength === 2 ? { flex: 0, flexDirection: 'row' } :
                  buttonsLength === 1 ? { flex: 0, flexDirection: 'row' } :
                    { flex: 0, flexDirection: 'column', width: '100%' }
              }>
                <Button buttons={buttons} dismiss={this.dismiss} squared={squared} />
              </View>
            </View>
          </View>
        </Animated.View>
      </Modal>
    );
  }

  alert = ({ headerColor = "#000", headerBackgroundColor = "transparent", title, message, buttons }) => {
    this.setState({
      headerColor: headerColor,
      headerBackgroundColor: headerBackgroundColor || this.state.headerBackgroundColor,
      title, message, buttons,
      openAlertModal: true,
    })
  };
  dismiss = () => this.setState({ openAlertModal: false });
}

export default AlertModal;
