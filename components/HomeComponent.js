import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import {PASTAS } from './PastaComponent';
import {SAUCES} from './SauceComponent';
import {DRINKS} from './DrinksComponent';




class Home extends Component{

    constructor(props){
        super(props)
        this.state={
            pastas: PASTAS, 
            drinks: DRINKS, 
            sauces: SAUCES
        }
    }
   
    static navigationOptions = {
        title: 'Home'
    }
    
    render(){
        return(
            <View>
                <Text style={{margin: 10, fontSize:16, color:'#0d3850'}}>Below are some of my favorites. Be sure to check them out often, they may change!</Text>
            </View>
        );
    }
}

export default Home;