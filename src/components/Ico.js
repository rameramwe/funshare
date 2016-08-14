'use strict';
import React from 'react'; 
import{
  StyleSheet,
  PropTypes,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';

import StyleVars from 'funshare/StyleVars';

const styles = StyleSheet.create({

});

class Ico extends React.Component {
  render() {
    let style = {height:30 , width: 30, marginRight:15 , marginTop:13};
    return (
      <TouchableOpacity
        style={this.props.style}
        activeOpacity={0.5}
      >
        <Image style={style}
        resizeMode={Image.resizeMode.contain}
        source={require('funshare/src/img/Logo.png')}
         />
      </TouchableOpacity>
     );
  }
}

export default Ico;
