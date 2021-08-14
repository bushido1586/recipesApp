import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Share } from 'react-native';
import { Card, Icon } from 'react-native-elements';

export const PASTAS = [
    {
        pastaId: 0, 
        title: "Cajun Chicken Pasta",
        prep: 'Aprrox 20 mins, plus another 20 to cook.', 
        featured: false, 
        image: '',
        ingredients: "1 red bell pepper \n1 green bell pepper \n1 poblano pepper \ni medium red onion \n1 bunch of green onion \n1 pound of chicken breast, cubed \n1 cup heavy cream \n1/3 cup shredded parmesan cheese \n1 tablespoon olive oil \ncajun seasoning: enough to coat chicken \n8oz cooked linguini pasta \n1/4 teaspoon dried basil \n1/8 teaspoon garlic salt \n1/8 teaspoon celery salt \n 1/8 teaspoon garlic powder \n1/8 teaspoon black pepper", 
        instructions: "1.) Fully cook the pasta, drain and set aside \n2.) place the chicken cubes and cajun seasoning in a large bag and shake to coat fully. In a large skillet heat the oil over medium heat, then saute the chicken until almost tender(about 5-7 mins) \n3.) Add the veggies to the pan saute and stir for 2 to 3 minuets, then reduce the heat to medium-low \n4.) Add cream, basil, salts, pepper, and garlic powder, heat through stirring frequently to avoid burning the cream. Add shredded cheese and mix until it starts to melt. Add pasta and toss in sauce until heated. \n5.) Enjoy!",
        description:'A creamy and spicy pasta dish, perfect for date night!'
    }, 
    {
        pastaId: 1, 
        title: "Pesto Chicken Pasta",
        prep: "Approx 30 mins plus another 30 to cook",
        featured: true,
        image: '',
        ingredients: "1/2 pound cherry tomatoes, halved \n1/2 of a red onion, diced \n1 pound cooked pasta (I use Penne) \n8oz of homemade pesto sauce(see sauces page for instructions)",
        instructions:"1.) First heat a deep skillet or saucepan on medium-high heat, and lightly saute the onions until just before they're soft. \n2.) Next add the pesto and heat just long enough that it begins to thin out, then add the tomato halves. Cook until the tomatoes begin to wilt. \n3.) add pasta and heat through. Be sure to mix it enough hat the sauce coats all the pasta. Now its time to enjoy!",
        description:'A nice savory chicken and pasta dish with tomatoes, onion, and homemade pesto sauce.'

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
            onPress= {() => sharePasta(item.title, item.description)}
        />
    </Card>

);

const sharePasta =(title, message, url) =>{
    Share.share({
        title, 
        message: `${title}: ${message} ${url}`,
        url
    }, 
    {
        dialogTitle: 'Share ' +title
    })
};



class Pastas extends Component{

    static navigationOptions = {
        title: 'Pastas'
    }

    render(){
        return(
        <View style={styles.page}>
            <FlatList 
                data={PASTAS}
                renderItem={renderItem}
                 keyExtractor={item => item.pastaId}
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

export default Pastas;

