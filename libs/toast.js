import Toast from 'react-native-toast-native';
import {ToastStyles} from "../constants";

export default (msg, type) => Toast.show(msg, Toast.SHORT, Toast.BOTTOM, ToastStyles(type));
