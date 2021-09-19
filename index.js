import React from 'react';
import {
  AppRegistry,
  View,
  Image,
  asset,
} from 'react-360';

export default class React360Tut extends React.Component {
  render() {
    return (
      <View>
      <Image source={asset('nature.jpg')}
      style={{
        width: 1000,
        height: 600,
        marginLeft: 500,
      }}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('React360Tut', () => React360Tut);
