import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';


function RenderItem(item){
    if(item){
        return(
            <Card
                
            >
                <Text style={{margin: 15}}>BUILDING</Text>
            </Card>
        )
    }
}


class Home extends Component{
   
    static navigationOptions = {
        title: 'Home'
    }
    
    render(){
        return(
            <ScrollView>
                <Text>Welcome to my new Recipe App! Here are my favorites!Check out the menu for more!</Text>
                
            </ScrollView>
        );
    }
}

export default Home;