import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Card, Icon } from 'react-native-elements';


export const DRINKS = [
    {
        drinksId: 0, 
        title: "Rebellious Fish",
        prep: '15 mins of prep', 
        favorite: false, 
        image: '',
        ingredients: "1.5 oz Russian Standard Vodka \n1.5 oz Passoa passion fruit Liquor \n6oz Orange Juice \n~3oz prosecco", 
        instructions: "In a shaker add vodka, Passoa, and orange juice over ice \n shake until mixed \n Strain into glass over ice \n top with prosecco.",
        description:'A sweet and fruity cocktail best enjoyed by the pool!'
    }
];

const TitleItem =({title}) =>(
    <View>
        <Text>{title}</Text>
    </View>
)
const PrepItem=({prep}) =>(
    <View>
        <Text>{prep}</Text>
    </View>
)
const IngredientsItem =({ingredients}) =>(
    <View>
        <Text>{ingredients}</Text>
    </View>
)
const InstructionsItem =({instructions}) =>(
    <View>
        <Text>{instructions}</Text>
    </View>
)


const renderItem = ({item})=>(
    <Card>
        <TitleItem title={item.title} />
        <PrepItem prep={item.prep}/>
        <IngredientsItem ingredients={item.ingredients} />
        <InstructionsItem instructions={item.instructions} />
        <Icon 
            name='heart-o'
            type='font-awesome'
            raised
        />
    </Card>
);

class Drinks extends Component{

    static navigationOptions = {
        title: 'Drinks'
    }

    markFavorite(drinksId) {
        this.props.postFavorite(drinksId);
    }

    render(){
        return(
        <View>
            <FlatList 
                data={DRINKS}
                renderItem={renderItem}
                keyExtractor={item => item.drinksId}
            />
            <Text>This portion is under construction, check back soon for more fun recipes!</Text>
        </View>
        );
    }
}

const styles =StyleSheet.create({
    container:{
        flex:1
    },
    title :{

    }
})

export default Drinks;

