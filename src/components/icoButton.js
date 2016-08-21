
'use strict';

import React, { Component } from 'react';
import {
    TouchableHighlight,
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';



export default class InputButton extends Component {

    render() {
    var container = (
      <View style={this.props.containerStyle || styles.container}>
        <Image
          resizeMode={Image.resizeMode.contain}
          style={this.props.checkboxStyle || styles.checkbox}
          source={this.props.source}/>
        <View style={styles.labelContainer}>
        <Text style={styles.inputButtonText}>{this.props.value}</Text>
        </View>
      </View>
    );
        return (
        <TouchableHighlight style={this.props.input || styles.inputButton}
                            underlayColor="green"
                            onPress={this.props.onPress}>
               {container}
            </TouchableHighlight>
        )
    }

}
var styles = StyleSheet.create({
   container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 5,
  },
  checkbox: {
    width: 25,
    height: 25
  },
  labelContainer: {
    marginLeft: 10,
    marginRight: 10
  },
  label: {
    fontSize: 15,
    color: 'grey'
  },
    rootContainer: {
        flex: 1
    },

    displayContainer: {
        flex: 2,
        backgroundColor: '#193441',
        justifyContent: 'center'
    },

    displayText: {
        color: 'black',
        fontSize: 30,
        textAlign: 'right',
        padding: 20
    },

    inputContainer: {
        flex: 8,
        backgroundColor: '#3E606F'
    },

    inputButton: {
        flex: 0.5,
        flexDirection: "row",
        borderWidth: 0.5,
        borderColor: '#91AA9D'
    },

    inputButtonHighlighted: {
        backgroundColor: 'red'
    },

    inputButtonText: {
        fontSize: 22,
    
        color: 'black'
    },

    inputRow: {
        flex: 1,
        flexDirection: 'row'
    }
});
