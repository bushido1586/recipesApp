import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import * as MailComposer from 'expo-mail-composer';

class Contact extends Component{

    static navigationOptions = {
        title: 'Contact'
    }

    sendMail() {
        MailComposer.composeAsync({
            recipients: ['brad.reed114@att.net'],
            subject: 'App Inquiry',
            body: "Dear Mr. Reed"
        })
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
                    <Text>Please send any inquires to my email.</Text>
                    <Button 
                        title="Send Email"
                        buttonStyle={{backgroundColor: '#3372d2', margin:40, color:'#fff'}}
                        icon={<Icon 
                                name='envelope'
                                type='font-awesome'
                                color='#fff'
                                iconStyle={{marginRight:10}}
                            />}
                        onPress ={() => this.sendMail()}
                    />
                </Card>
            </ScrollView>
        );
    }
}

export default Contact;