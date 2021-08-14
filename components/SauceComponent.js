import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Share } from 'react-native';
import { Card, Icon } from 'react-native-elements';


export const SAUCES = [
    {
        sauceId: 0, 
        title: "Basil Pesto",
        prep: 'total 15 mins', 
        featured: true, 
        image: '',
        ingredients: "2 cups of fresh basil leaves \n1/3 cup of pine nuts \n1/2 cup of extra virgin olive oil \n3 cloves of garlic, minced (about 1 tablespoon, more to taste) \n1/2 cup grated blend of asiago, parmesan, and romano cheese", 
        instructions: "Combine ingredients in a food processor or blender and mix to desired consistency",
        description:'A savory sauce that is perfect for pasta and pizzas. NOTE: if you plan on using it for pizza, use less olive oil.'
    }
]


const TitleItem =({title}) =>(
    <View>
        <Text style={styles.title}  >{title}</Text>
    </View>
)
const PrepItem=({prep}) =>(
    <View>
        <Text style={styles.content} >Prep time:{'\n'}{prep}</Text>
    </View>
)
const IngredientsItem =({ingredients}) =>(
    <View>
        <Text style={styles.content} >Ingredients:{'\n'}{ingredients}</Text>
    </View>
)
const InstructionsItem =({instructions}) =>(
    <View>
        <Text style={styles.content} >Instructions: {'\n'}{instructions}</Text>
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
            onPress= {() => shareSauce(item.title, item.description)}
        />
    </Card>

);

const shareSauce =(title, message, url) =>{
    Share.share({
        title, 
        message: `${title}: ${message} ${url}`,
        url
    }, 
    {
        dialogTitle: 'Share ' +title
    })
};



class Sauces extends Component{

    static navigationOptions = {
        title: 'Sauces'
    }

    render(){
        return(
        <View style={styles.page}>
            <FlatList 
                data={SAUCES}
                renderItem={renderItem}
                 keyExtractor={item => item.sauceId}
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

export default Sauces;

