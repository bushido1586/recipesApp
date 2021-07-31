import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

function RenderFavorites(props){
    const {favorite}=props

    if(favorite){
        return(
            <Card>
                <Text>This will have an item to display</Text>
            </Card>
        )
    }
    return <View />
}


class Home extends Component{
   
    static navigationOptions = {
        title: 'Home'
    }
    
    render(){
        return(
            <View>
                <Text>Welcome to my new Recipe App! Here are my favorites!Check out the menu for more!</Text>
                <RenderFavorites />
            </View>
        );
    }
}

export default Home;