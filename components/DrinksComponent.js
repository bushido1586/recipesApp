import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card } from 'react-native-elements';

export const DRINKS = [
    {
        id: 0, 
        title: "Rebellious Fish",
        prep: '15 mins of prep', 
        featured: true, 
        image: '',
        ingredients: "1.5 oz Russian Standard Vodka", 
        instructions: "",
        description:'A sweet and fruity cocktail best enjoyed by the pool!'
    }
];

const Item =({title}) =>(
    <View>
        <Card>
            <Text>{title}</Text>
        </Card>
    </View>
)

const renderItem = ({item})=>(
    <Item title={item.title} />
);

class Drinks extends Component{

    static navigationOptions = {
        title: 'Drinks'
    }
    
     Item =({title}) =>(
        <View>
            <Card>
                <Text>{title}</Text>
            </Card>
        </View>
    )
    
    renderItem = ({item})=>(
        <Item title={item.title} />
    );


    render(){
        return(
        <View>
            <FlatList 
                data={DRINKS}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <Text>This portion is under construction, check back soon for more fun recipes!</Text>
        </View>
        );
    }
}

export default Drinks;