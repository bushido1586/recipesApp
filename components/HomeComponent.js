import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';


function RenderItem(item){
    if(item){
        return(
            <Card
                featuredTitle={item.name}
            >
                <Text style={{margin: 15}}>{item.description}</Text>
            </Card>
        )
    }
}


class Home extends Component{
    constructor(props){
        super(props),
        this.state ={
            pastas:PASTAS
        }
    }

    static navigationOptions = {
        title: 'Home'
    }
    
    render(){
        return(
            <ScrollView>
                <Text>Welcome to my new Recipe App! Here are my favorites!Check out the menu for more!</Text>
                <RenderItem 
                    item={this.state.pastas.filter(pasta => pasta.favorite)[0]}
                />
            </ScrollView>
        );
    }
}

export default Home;