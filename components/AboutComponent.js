import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';

class About extends Component{

    static navigationOptions = {
        title: 'About'
    }

    render(){
        return(
            <ScrollView>
                <Card title="About the Author" >

                </Card>
            </ScrollView>
        );
    }
}

export default About;