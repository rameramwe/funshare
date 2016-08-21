'use strict';
import React, { Component } from 'react';

import  {StyleSheet, Text, View, Image} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';
import firebase from 'firebase';
 import Routes from 'funshare/Routes';

var Cards = [



]

let Card = React.createClass({
  render() {
    return (
      <View style={styles.card}>
        <Image style={styles.thumbnail} source={{uri: this.props.image}} />
        <Text style={styles.text}>This is card {this.props.name}</Text>
      </View>
    )
  }
})

let NoMoreCards = React.createClass({
  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more cards</Text>
      </View>
    )
  }
})




//setTimeout(alert(cards[1]),12000);


const Cards2 = [

]

export default React.createClass({
  componentWillMount() {
     
     this.rami().then((rm) => {
      this.setState({
          
          outOfCards: false
        })
   });
    },
    rami(){
      return new Promise((next, error) => {
       var i = 0;
       var num=0;

       
       firebase.database()
       .ref('categories')
       .child('sport')
       .once('value')
       .then(function(snapshot) {
         num =snapshot.numChildren();
        // alert(num);
         snapshot.forEach(function(childSnapshot) {
           
          firebase.database()
       .ref('categories')
       .child('sport').child(childSnapshot.key).once('value').then(function(snapshot) {
            var piclink = snapshot.val().itemPic;
            var aa = {image:piclink }
            Cards.push(aa);
            i++;
            if (i==num){
              var rm = "i fucked my self";
              next(rm);
            }

          });
          
        })
  });

   }); 

    },

  getInitialState() {
    return {
      cards: Cards,
      outOfCards: false
    }
  },
  handleYup (card) {
    console.log("yup")
  },
  handleNope (card) {
    console.log("nope")
  },
  cardRemoved (index) {
    console.log(`The index is ${index}`);

    let CARD_REFRESH_LIMIT = 3

    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);

      if (!this.state.outOfCards) {
        console.log(`Adding ${Cards2.length} more cards`)

        this.setState({
          cards: this.state.cards.concat(Cards2),
          outOfCards: true
        })
      }

    }

  },
  render() {


    return (
      <View style={{flex:1}}>
          <SwipeCards
        cards={this.state.cards}
        loop={false}

        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        showYup={true}
        showNope={true}

        handleYup={this.handleYup}
        handleNope={this.handleNope}
        cardRemoved={this.cardRemoved}
      />


      </View>
    )
  }
})

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
  },
  thumbnail: {
    flex: 1,
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})