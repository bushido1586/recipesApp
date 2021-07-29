import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component{

    static navigationOptions = {
        title: 'Contact'
    }
    
    render(){
        return(
            <ScrollView>
                <Card 
                title="Contact Information"
                wrapperStyle={{margin: 20}}>
                    <Text>Bradley Reed</Text>
                    <Text>South Windsor, CT</Text>
                    <Text style={{marginBottom: 10}}>U.S.A.</Text>
                        
                    <Text>Email: brad.reed114@att.net</Text>     
                </Card>
            </ScrollView>
        );
    }
}

export default Contact;