import { Dimensions, Platform, StatusBar } from 'react-native';

const X_WIDTH = 375;
const X_HEIGHT = 812;
const { height: D_HEIGHT, width: D_WIDTH } = Dimensions.get('window');

const isIPhoneX = Platform.OS === 'ios' && (D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH);
const notchHeight = isIPhoneX ? 20 : 0;

const isSmallDevice = D_WIDTH < 357;

export const Layout = {
  window: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  notchHeight,
  statusbarHeight: Platform.OS === 'ios' ? 20 :
    Platform.OS === 'android' && Platform.Version >= 20 ? 24 : 0,
  orientation: (this.window.width > this.window.height) ? 'LANDSCAPE' : 'PORTRAIT',
  appBarHeight: Platform.OS === 'ios' ? 44 : 56,
};

export const Fonts = {
  bold: 'Battambang-Bold',
  regular: 'Battambang',
  battambang: 'Battambang',
  battambangBold: 'Battambang-Bold',
  khpreyveng: 'KhPreyVeng',
  moul: 'Moul',
  wbIcon: Platform.OS === 'android' ? 'WBIcon' : 'icomoon'
};

export const Colors = {
  primary: '#077eff',
  danger: '#e84118',
  success: '#05c46b',
  warning: '#ffd32a',
  info: '#0fbcf9',
  mintyGreen: '#0be881',
  sunFlower: '#f1c40f',
  darkPurple: '#3c40c6',
  purple: '#8e44ad',
  orange: '#f39c12',
  carrot: '#e67e22',
  emerald: '#2ecc71',
  cloud: '#d2dae2',
  silver: '#bdc3c7',
  grey: '#8e8e8e',
  skyBlue: "#00A4FF",
  cyan: '#0abde3',
  midNight: '#34495e',
  navy: "#3b6ea5",
  niceBlue: "rgba(11, 103, 176, 0.8)",
  background: '#cae7fc',
  listBackground: '#EFEFF4',
  clear: 'transparent',
  white: opacity => `rgba(255,255,255,${opacity || 1})`,
  black: opacity => `rgba(0,0,0,${opacity || 1})`,
};

export const FontSizes = {
  normal: Platform.OS === 'android' ? 15 : 17,
  title: Platform.OS === 'android' ? 16 : 18,
  subtitle: Platform.OS === 'android' ? 14 : 16,
};

export const ToastStyles = (type, background) => {
  let bg = background ? background : "#000000";
  switch (type) {
    case 'success':
      bg = Colors.success;
      break;
    case 'danger':
      bg = Colors.danger;
      break;
    case 'warning':
      bg = Colors.warning;
      break;
    case 'info':
      bg = Colors.info;
      break;
    default:
      break;
  }
  return {
    backgroundColor: bg,
    width: 350,
    height: Platform.OS === "ios" ? 50 : 130,
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 4,
    // lines: 4,
    borderRadius: Platform.OS === 'ios' ? 15 : 35,
    // fontWeight: "bold",
    yOffset: 70
  }
};
