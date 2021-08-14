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
                <Mission />
                <Me />
            </ScrollView>
        );
    }
}

function Mission(){
    return(
        <Card title="My Mission">
            <Text style={{margin:20}, {fontSize:18}}>This app's entire purpose is to pull out recipes into nothing more than a card that lets you see what you need and need to do. No "life stories" no extra fluff.</Text>
            <Text style={{margin:20}, {fontSize:18}}>Here is all about just food, and isn't that what we all really want.</Text>
        </Card>
    )
}

function Me(){
    return(
        <Card title="About the Creator!">
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
        color: '#4a0e73', 
        fontWeight: 'bold'
    },
    page :{
        backgroundColor: '#9bc6d2'
    }, 
    image :{
        height: 200,
        width: 150, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
});

export default About;