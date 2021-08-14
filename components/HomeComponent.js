import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';

const HomeRender = ()=>{
    return(
    <View>
        <Text style={styles.title}>Welcome to My Recipe Wrangler</Text>
        <Text style={styles.textContent}>This is where to go when you just want a recipe, nothing else!</Text>
    </View>
    )
}

class Home extends Component{

    static navigationOptions = {
        title: 'Home'
    }
    
    render(){
        return(
            <View style={styles.container}>
                <ImageBackground source={require('../shared/Images/PastaPlate.jpg')} style={styles.image}>
                    <HomeRender />
                </ImageBackground>
            </View>  
        );
    }
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    },
    image:{
        flex:1, 
        resizeMode:'cover',
        justifyContent: 'center'
    },
    title:{
        fontSize: 32, 
        color: '#fff',
        fontWeight: 'bold', 
        textAlign: 'center',
        backgroundColor:'#000000c0'
    }, 
    textContent:{
        fontSize: 18, 
        color: '#fff',
        fontWeight: 'bold', 
        textAlign: 'center',
        backgroundColor:'#000000c0'
    }
})

export default Home;