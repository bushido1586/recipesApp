import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { Card, Image } from 'react-native-elements';

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
            <Image source={require('../shared/Images/me-crop.jpg')} style={styles.image} />
            <Text style={{margin:20}, {fontSize: 18}}>
                Hello! My name is Brad, I made this app as a way to get and eventually keep the best recipes around without all the extra stuff!
            </Text>
            <Text style={{margin:20}, {fontSize: 18}}>
                I am a web and mobile developer that used to work as a cook, so I know a thing or two. And My life story stays here, not in the recipes!!!
            </Text>
            <Text style={{margin:20}, {fontSize: 18}} >I am also available to hire for development of webpages, web apps and mobile apps. Please see the contact page for details.</Text>
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
    }, 
    image :{
        height: 200,
        width: 150, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
});

export default About;