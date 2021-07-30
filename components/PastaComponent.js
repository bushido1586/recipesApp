import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, Image } from 'react-native-elements';

class Pastas extends Component{

    static navigationOptions = {
        title: 'Pastas'
    }

    render(){
        return(
        <View>
            <Text>This portion is under construction, check back soon!</Text>
            <Image source={require('../shared/Images/PastaPlate.jpg')} />
        </View>
        );
    }
}


export default Pastas;