import Toast from 'react-native-toast-native';
import {ToastStyles} from "../constants";

export default (msg, type, background) => Toast.show(msg, Toast.SHORT, Toast.BOTTOM, ToastStyles(type, background));
