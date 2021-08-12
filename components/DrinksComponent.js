import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Share } from 'react-native';
import { Card, Icon } from 'react-native-elements';


export const DRINKS = [
    {
        drinksId: 0, 
        title: "Rebellious Fish",
        prep: ' About 5 minuets', 
        favorite: false, 
        ingredients: "1.5 oz Russian Standard Vodka \n1.5 oz Passoa passion fruit Liquor \n6oz Orange Juice \n~3oz prosecco", 
        instructions: "In a shaker: add vodka, Passoa, and orange juice over ice shake until mixed then Strain into glass over ice, top with prosecco.",
        description:'A sweet and fruity cocktail best enjoyed by the pool!'
    }, 
    {
        drinksId: 1, 
        title: "Passion Fruit Margarita",
        prep: ' About 5 minuets', 
        favorite: false, 
        ingredients: "3 oz Avion Plata(silver) Tequila \n1.5 oz Passoa passion fruit Liquor \n1.5oz Triple Sec(or other orange liquor) \n5oz sour mix \n1/2 fresh squeezed lime", 
        instructions: "In a shaker: add ice and combine all ingredients. Shake vigorously for 1 minuet. Then strain over ice in a salt-rimmed glass",
        description:'A strong yet sweet take on a classic margarita, perfect for parties!'
    }
];

const TitleItem =({title}) =>(
    <View>
        <Text style={styles.title}  >{title}</Text>
    </View>
)
const PrepItem=({prep}) =>(
    <View>
        <Text style={styles.content} >Prep time:{prep}</Text>
    </View>
)
const IngredientsItem =({ingredients}) =>(
    <View>
        <Text style={styles.content} >{ingredients}</Text>
    </View>
)
const InstructionsItem =({instructions}) =>(
    <View>
        <Text style={styles.content} >{instructions}</Text>
    </View>
)


const renderItem = ({item})=>(
    <Card style={styles.page}>
        <TitleItem title={item.title}  />
        <PrepItem prep={item.prep}  />
        <IngredientsItem ingredients={item.ingredients} />
        <InstructionsItem instructions={item.instructions} />
        <Icon 
            name={'share'}
            type='font-awesome'
            color='#4a0e73'
            raised
            reverse
            onPress= {() => shareDrink(item.title, item.description)}
        />
    </Card>

);

const shareDrink =(title, message, url) =>{
    Share.share({
        title, 
        message: `${title}: ${message} ${url}`,
        url
    }, 
    {
        dialogTitle: 'Share ' +title
    })
};



class Drinks extends Component{

    static navigationOptions = {
        title: 'Drinks'
    }

    render(){
        return(
        <View style={styles.page}>
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
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4a0e73', 
        margin: 25
    },
    content:{
        marginBottom: 10,
        fontSize: 16
    }, 
    page :{
        backgroundColor: '#9bc6d2'
    }
})

export default Drinks;

