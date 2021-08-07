import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

class Favorite extends Component {

    static navigationOptions = {
        title: 'My Favorites'
    }
    render(){
        return (
            <ScrollView>
                <Text>In here you will find your saved items.</Text>
            </ScrollView>
        )
    }
}

export default Favorite;