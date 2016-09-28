  'use strict';
import React, { Component } from 'react';
import  {
  AppRegistry,
  Text,
  Slider,
  TextInput,
  View,
  StyleSheet,
  Image,
  MapView,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
 
import Panel from 'funshare/src/components/panel'; 
import Routes from 'funshare/Routes';
import IcotextButton from 'funshare/src/components/icotextButton';
 
import firebase from 'firebase';

//let app = new Firebase("https://funshare-c6017.firebaseio.com");

import InputButton from 'funshare/src/components/icotextButton';
 import IcoButton from 'funshare/src/components/icobutton';
import style from '../styles/common-styles.js';
var Accordion = require('react-native-accordion'); 
var Accordion1 = require('react-native-accordion'); 
 var styles = StyleSheet.create({
button:{
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  paddingVertical: 9,
  paddingHorizontal: 15,
  overflow: "hidden",
  backgroundColor:  '#00D77F',


},
buttontext:{
  color: "white",
  fontSize: 20,
  fontWeight: "500"
},
text:{
fontSize:15,
fontWeight:'bold'
},
  slider: {
    height: 10,
    margin: 10,
  },

});

   var header=
    (
  <View style={{flex:1 ,flexDirection:"row"}}>
 
       <Image
 resizeMode={Image.resizeMode.contain}
   source={require('funshare/src/img/category.jpg')}

 style = {{width:25, height:25, marginRight:15}}
 />
  <Text style={{fontSize:18, fontWeight:"bold"}}>KATEGORIE AUSWÄHLEN</Text>
  </View>
  );

   var header1=
    (
  <View style={{flex:1 ,flexDirection:"row"}}>
 
  <Image
 resizeMode={Image.resizeMode.contain}
   source={require('funshare/src/img/category.jpg')}
 style = {{width:25, height:25, marginRight:15}}
 />
  <Text style={{fontSize:18, fontWeight:"bold"}}>SCHLAGWORTSUCHE</Text>
  </View>
 
  );
export default class setting extends Component {


 
 constructor(props) {
    super(props);
    this.state = {
 
       falseSwitchIsOn:false,
       picPath1:null,
       open:false,
       open1:false,
       category: "Katagorie Auswahlen",
        slideCompletionValue: 0,
    slideCompletionCount: 0,

    }
  }
   _onInputButtonPressed(a,b) {
 
   this.setState({
    category:a,
    srcc:b,
    open:false
    
  });
}
goToSetting()
{
  this.props.replaceRoute(Routes.setting());
}
change(){
   
}
    finish(){
       if(this.state.Katagorie){
        

       }
        else alert("mother sharmootah go add a pic and a title and a description ot i'll come and fuck you");
      

     
    }

  render() {
    const TopNavigation = () => (
    <View style={{ padding: 8, flexDirection: 'row', backgroundColor: '#00D77F' }}>
    <View style={{ flex:0.4 , justifyContent:'center' , margin:5  }}>
    <TouchableOpacity
                onPress={this.goToSetting.bind(this)}
                style={styles.buttonStyle}
                >
                <Image 
                source={require('funshare/src/img/arrow.png')}
                style={{width:20, height:20}}
                />

                </TouchableOpacity>
                </View>

                <View style={{ flex:0.2 , alignItems:'center', justifyContent:'center' , margin:5  }}>
                <IcoButton
                source={require('funshare/src/img/box.png')}
                icostyle={{width:35, height:35}}
                />
                </View>

                <View style={{ flex:0.4 , alignItems:'flex-end', justifyContent:'center' , margin:5  }}>
                 <TouchableOpacity
             style={styles.buttonStyle}
              onPress={this.finish.bind(this)}
              >
             <View style= {{alignItems:'center' , justifyContent:'center', marginRight:5  }}>
              <Text style= {{fontSize:15, fontWeight:'bold' , color:'white'}} >
              Anwenden
              </Text>
              </View>
              </TouchableOpacity>

                </View>

                </View>
                );

    var issellected ={ 

        flex: 0.5 ,
        flexDirection: "row",
        backgroundColor: '#00D77F',

        margin:5 ,
        
    }  ;
    var category = (
   <View>
  <View style={{flexDirection:'row'}}>
  <InputButton
  value={"Hotswop"}
  container={this.state.category =="hotswop" ? issellected : null}
  source={require('funshare/src/img/categories/hotswop.png')}
  onPress={this._onInputButtonPressed.bind(this,"hotswop","funshare/src/img/categories/hotswop.png")}
  />
  <InputButton
  value={"Campus"}
  container={this.state.category =="campus" ? issellected : null}
  source={require('funshare/src/img/categories/campus.png')}
  onPress={this._onInputButtonPressed.bind(this, "campus","funshare/src/img/categories/campus.png")}
  />
  </View>
   <View style={{flexDirection:'row'}}>
  <InputButton
  value={"Design"}
  container={this.state.category =="design" ? issellected : null}
  source={require('funshare/src/img/categories/design.png')}
  onPress={this._onInputButtonPressed.bind(this,"design","funshare/src/img/categories/design.png")}
  />
  <InputButton
  value={"Family"}
  container={this.state.category =="family" ? issellected : null}
  source={require('funshare/src/img/categories/family.png')}
  onPress={this._onInputButtonPressed.bind(this, "family","funshare/src/img/categories/family.png")}
  />
  </View>
   <View style={{flexDirection:'row'}}>
  <InputButton
  value={"Events"}
  container={this.state.category =="events" ? issellected : null}
  source={require('funshare/src/img/categories/events.png')}
  onPress={this._onInputButtonPressed.bind(this,"events","funshare/src/img/categories/events.png")}
  />
  <InputButton
  value={"Fashion"}
  container={this.state.category =="fashion" ? issellected : null}
  source={require('funshare/src/img/categories/fashion.png')}
  onPress={this._onInputButtonPressed.bind(this, "fashion","funshare/src/img/categories/fashion.png")}
  />
  </View>
   <View style={{flexDirection:'row'}}>
  <InputButton
  value={"Green"}
  container={this.state.category =="green" ? issellected : null}
  source={require('funshare/src/img/categories/green.png')}
  onPress={this._onInputButtonPressed.bind(this,"green","funshare/src/img/categories/green.png")}
  />
  <InputButton
  value={"Food"}
  container={this.state.category =="food" ? issellected : null}
  source={require('funshare/src/img/categories/food.png')}
  onPress={this._onInputButtonPressed.bind(this, "food","funshare/src/img/categories/food.png")}
  />
  </View>
   <View style={{flexDirection:'row'}}>
  <InputButton
  value={"Mashine"}
  container={this.state.category =="mashine" ? issellected : null}
  source={require('funshare/src/img/categories/mashine.png')}
  onPress={this._onInputButtonPressed.bind(this,"mashine","funshare/src/img/categories/mashine.png")}
  />
  <InputButton
  value={"Musik"}
  container={this.state.category =="musik" ? issellected : null}
  source={require('funshare/src/img/categories/musik.png')}
  onPress={this._onInputButtonPressed.bind(this, "musik","funshare/src/img/categories/musik.png")}
  />
  </View>
   <View style={{flexDirection:'row'}}>
  <InputButton
  value={"Hipster"}
  container={this.state.category =="mustache" ? issellected : null}
  source={require('funshare/src/img/categories/mustache.png')}
  onPress={this._onInputButtonPressed.bind(this,"mustache","funshare/src/img/categories/mustache.png")}
  />
  <InputButton
  value={"Trödel"}
  source={require('funshare/src/img/categories/trodel.png')}
  container={this.state.category =="trödel" ? issellected : null}
  onPress={this._onInputButtonPressed.bind(this, "trödel","funshare/src/img/categories/trodel.png")}
  />
  </View>
   <View style={{flexDirection:'row'}}>
  <InputButton
  value={"Vintage"}
  container={this.state.category =="vintage" ? issellected : null}
  source={require('funshare/src/img/categories/vintage.png')}
  onPress={this._onInputButtonPressed.bind(this,"vintage","funshare/src/img/categories/vintage.png")}
  />
  <InputButton
  value={"Over18"}
  container={this.state.category =="over18" ? issellected : null}
  source={require('funshare/src/img/categories/over18.png')}
  onPress={this._onInputButtonPressed.bind(this, "over18","funshare/src/img/categories/over18.png")}
  />
  </View>
   <View style={{flexDirection:'row'}}>
  <InputButton
  value={"Sammler"}
   container={this.state.category =="sammler" ? issellected : null}
  source={require('funshare/src/img/categories/sammler.png')}
  onPress={this._onInputButtonPressed.bind(this,"sammler","funshare/src/img/categories/sammler.png")}
  />
  <InputButton
  value={"Sport"}
  container={this.state.category =="sport" ? issellected : null}
  source={require('funshare/src/img/categories/sport.png')}
  onPress={this._onInputButtonPressed.bind(this, "sport","funshare/src/img/categories/sport.png")}
  />
  </View>
   <View style={{flexDirection:'row'}}>
  <InputButton
  value={"TechniK"}
  container={this.state.category =="technic" ? issellected : null}
  source={require('funshare/src/img/categories/technic.png')}
  onPress={this._onInputButtonPressed.bind(this,"technic","funshare/src/img/categories/technic.png")}
  />
  <InputButton
  value={"Travel"}
  container={this.state.category =="travel" ? issellected : null}
  source={require('funshare/src/img/categories/travel.png')}
  onPress={this._onInputButtonPressed.bind(this, "travel","funshare/src/img/categories/travel.png")}
  />
  </View>
  </View>
  );
var schlagwort= (
  <View style={{margin:15}}>

  <Text style={{fontWeight:'bold', fontSize:10}}>Du weißt wonach du suchst, dann nutze die Schlagwortsuche.</Text>

<View style ={{    padding:0,
    marginTop:5,
    marginBottom:5,
    borderColor: 'green',
    borderRadius: 5,
    borderWidth: 0.5, }}  >  
  <TextInput
 
  placeholder="z.B. Canon Spiegelreflexkamera"
  placeholderTextColor= '#a9a9a9'
  selectionColor='#6495ed'
  autoCapitalize="none"
  autoCorrect={false}
   underlineColorAndroid="transparent"  
  />
  </View>
  </View>);
 
 return (

    

      <View
      style = {style.backgroundImage}
      >
      
      <TopNavigation/>
       <ScrollView style={{ flex:1 }}>
<View style={{marginTop:5}}>
  <Accordion
  header={header}
  onPress={this.change.bind(this)}
  content={category}
  activeOpacity= {0}
  />
</View>


 
  <Accordion
 
  header={header1}
  onPress={this.change.bind(this)}
  content={schlagwort}
  easing="easeOutCubic"
  />
          
      <View>
        <View style={{flex:1,margin:10 , flexDirection:'row'}}>
           <View style={{flex:0.5 ,flexDirection:'row', alignItems:'flex-start'}}>
            <Image source={require('../img/radius.png')}
       resizeMode={Image.resizeMode.contain}
       style={{width:25,height:25 , marginRight:10}}/>
        <Text style={styles.text} >
          RADIUS
        </Text>

        </View>
         <View style={{flex:0.5 , alignItems:'flex-end'}}>
          
            
        <Text style={styles.text} >
          {this.state.value && +this.state.value.toFixed(3) + " Km"}
        </Text>

      </View>

          </View>

           <View style={{flex:1, flexDirection:'row' , marginLeft:15 ,marginBottom:10 ,padding:10 ,borderBottomWidth:0.5 , borderBottomColor:'#dcdcdc'}}> 
          <View style={{flex:0.1}}> 
        <Image source={require('../img/house.png')}
       resizeMode={Image.resizeMode.contain}
       style={{width:25,height:25 , marginRight:10}}/>
      </View>
      <View style={{flex:0.8}}> 
        <Slider
           minimumValue={1}
          maximumValue={500}
          step={1}

          {...this.props}
          onValueChange={(value) => this.setState({value: value})} />
        </View>
                 <Image source={require('../img/world.png')}
       resizeMode={Image.resizeMode.contain}
       style={{width:25,height:25 , marginRight:10}}/>
         </View>
      </View>
       <View>
       <MapView style={{height: 200, margin: 40}} showsUserLocation={true} />
      </View>
     


     

                   </ScrollView>

  <TouchableOpacity
  style={styles.button}
  //onPress={this.finish.bind(this)}
  >
  <Text style={styles.buttontext}>Anwenden</Text>
  </TouchableOpacity>
      </View>
      );
  }
}

AppRegistry.registerComponent('setting', () => setting);
