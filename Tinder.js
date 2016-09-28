'use strict';
import React, { Component } from 'react';

import  {StyleSheet, Text, View, Image} from 'react-native';
  import IcoButton from 'funshare/src/components/icobutton';
import SwipeCards from 'react-native-swipe-cards';
import firebase from 'firebase';
 import Routes from 'funshare/Routes';

var Cards = [



]

let Card = React.createClass({
  render() {

    return (
      <View>
      <View style={styles.card}>
        <Image style={styles.thumbnail} source={{uri: this.props.image}} />
        <View  style={{margin:10 ,flex:1, flexDirection:'row' ,  borderBottomWidth:0.5 , borderBottomColor:'#dcdcdc'}}>
        <View style={{flex:0.8 , alignItems:'flex-start'}}>
        <Text style={styles.text}>Antika Komode </Text>
          </View>
          <View style={{flex:0.2 , alignItems:'flex-end'}}>
   <Image 
    source={require('funshare/src/img/tools.png')} 
    style={{width:15,height:16}}  
    />
        </View>
         </View>
      </View>
    
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
      <View style={{flex:3}}>
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
    padding:10,
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})