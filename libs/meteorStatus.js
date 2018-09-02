import Meteor from 'react-native-meteor';

export default meteorStatus = () => Meteor.status().status === 'connected';