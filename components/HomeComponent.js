import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';


class Home extends Component{
   
    static navigationOptions = {
        title: 'Home'
    }
    
    render(){
        return(
            <View>
                <Text>Welcome to my new Recipe App! Here are my favorites!Check out the menu for more!</Text>
                
            </View>
        );
    }
}

export default Home;