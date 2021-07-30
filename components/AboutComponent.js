import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

class About extends Component{

    static navigationOptions = {
        title: 'About'
    }

    render(){
        return(
            <ScrollView style={styles.page}>
                <Me />
            </ScrollView>
        );
    }
}

function Me(){
    return(
        <Card style={styles.cardHeader} title="Who AM I?">
            <Text style={{margin:20}, {fontSize: 18}}>
                Hello! My name is Brad, I made this app as a way to get and eventually keep the best recipes around without all the extra stuff!
            </Text>
            <Text style={{margin:20}, {fontSize: 18}}>
                I am a web and mobile developer that used to work as a cook, so I know a thing or two. And My life story stays here, not in the recipes!!!
            </Text>
        </Card>
    )
}

const styles=StyleSheet.create({
    cardHeader:{
        backgroundColor: '#124086', 
        color:'#fff'
    },
    page :{
        backgroundColor: '#3372d2'
    }
});

export default About;